import React, { Component } from "react";
import { ProfileView } from "../views";
import * as emailjs from "emailjs-com";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { happyFaceIcon } from "../images";

class ProfileContainer extends Component {
  state = {
    name: "",
    email: "",
    description: "",
    messageSent: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, description } = this.state;

    let templateParams = {
      name: name,
      from_name: email,
      to_name: "chingwlau@gmail.com",
      message_html: description,
    };

    emailjs.send(
      // service id
      "smtp_gmail",
      // template id
      "smtp_gmail",
      // params
      templateParams,
      `${process.env.REACT_APP_EMAIL_USER}`
    );

    this.resetForm();
    this.setState(this.setState({ messageSent: true }));
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      description: "",
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div>
        <ProfileView />
        {this.state.messageSent ? (
          <div className="card">
            <div className="myMessage">
              Your message has been sent!! I'll get back to you as soon as
              possible, Thank you for your patience{" "}
              <img alt="happyFace" src={happyFaceIcon} />
            </div>
          </div>
        ) : (
          <div className="myForm">
            Contact Me by Filling the Form Below:
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup controlId="formBasicEmail">
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, "email")}
                  placeholder="Enter Your Email Address..."
                />
              </FormGroup>
              <FormGroup controlId="formBasicName">
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, "name")}
                  placeholder="Your Name..."
                />
              </FormGroup>
              <FormGroup controlId="formBasicMessage">
                <Input
                  type="textarea"
                  name="message"
                  className="text-primary"
                  style={{ height: "100px" }}
                  value={this.state.description}
                  onChange={this.handleChange.bind(this, "description")}
                  placeholder="and Your Message..."
                />
              </FormGroup>
              <Button className="formButton" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileContainer;
