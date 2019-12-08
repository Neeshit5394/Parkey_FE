import React, { Component } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import Styled from "./styled";
import { connect } from "react-redux";
import { signUp, resetErrorFlag } from "./../../../store/actions";

class Signup extends Component {
  state = {
    hasError: false,
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    visible: false,
    firstName: "",
    lastName: "",
    phnumber: ""
  };
  onShowAlert = () => {
    this.setState({ ...this.state, visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ ...this.state, visible: false });
      }, 5000);
    });
  };

  componentDidUpdate() {
    if (this.props.authError != null) {
      this.onShowAlert();
      this.setState({
        error: this.props.authError
      });
      this.props.resetErrorFlag();
    }
  }

  handleOnChange = e => {
    this.handleOnChange.bind(this);
    this.setState({
      [e.target.id]: e.target.value,
      error: ""
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    if (
      !this.state.email ||
      this.state.email == null ||
      this.state.email == undefined
    ) {
      this.setState({
        ...this.state,
        error: "Please enter Email"
      });
      this.onShowAlert();
      return this.state.error;
    }
    if (
      !this.state.password ||
      this.state.password == null ||
      this.state.password == undefined
    ) {
      this.setState({
        ...this.state,
        error: "Please enter password"
      });
      this.onShowAlert();
      return this.state.error;
    }
    if (
      !this.state.confirmPassword ||
      this.state.confirmPassword == null ||
      this.state.confirmPassword == undefined
    ) {
      this.setState({
        ...this.state,
        error: "Please enter confirm password"
      });
      this.onShowAlert();
      return this.state.error;
    }
    if (
      !this.state.lastName ||
      this.state.lastName == null ||
      this.state.lastName == undefined
    ) {
      this.setState({
        ...this.state,
        error: "Please enter Last Name"
      });
      this.onShowAlert();
      return this.state.error;
    }
    if (
      !this.state.firstName ||
      this.state.firstName == null ||
      this.state.firstName == undefined
    ) {
      this.setState({
        ...this.state,
        error: "Please enter first name"
      });
      this.onShowAlert();
      return this.state.error;
    }
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        ...this.state,
        error: "Password and confirm Password does not match"
      });
      this.onShowAlert();
      return this.state.error;
    } else {
      this.props.signUp({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phnumber: this.state.phnumber
      });
      this.setState({
        email: "",
        password: "",
        confirmPassword: ""
      });
    }
    if (
      !this.state.phnumber ||
      this.state.phnumber == null ||
      this.state.phnumber == undefined
    ) {
      this.setState({
        ...this.state,
        error: "Please enter phone number"
      });
      this.onShowAlert();
      return this.state.error;
    }
  };
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.AuthenticationForm>
        <Alert key="danger-alert" show={this.state.visible} variant="danger">
          {this.state.error}
        </Alert>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
          </Form.Group>
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-md-6">
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleOnChange}
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
              <Form.Group controlId="confirmPassword">
                <Form.Control
                  type="password"
                  value={this.state.confirmPassword}
                  placeholder="Confirm Password"
                  onChange={this.handleOnChange}
                />
              </Form.Group>
            </div>
          </div>
          {/* <div>
            <Styled.FormText>
              At least 8 Characters and alphanumeric
            </Styled.FormText>
          </div> */}
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-md-6">
              <Form.Group controlId="firstName">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleOnChange}
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
              <Form.Group controlId="lastName">
                <Form.Control
                  type="text"
                  value={this.state.lastName}
                  placeholder="Last Name"
                  onChange={this.handleOnChange}
                />
              </Form.Group>
            </div>
          </div>
          <Form.Group controlId="phnumber">
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              value={this.state.phnumber}
              onChange={this.handleOnChange}
            />
          </Form.Group>
          <Button variant="primary" size="md" type="submit" block>
            Submit
          </Button>
        </Form>
        <Styled.ConfirmationText>
          By submitting. I accept Parkey's term of use
        </Styled.ConfirmationText>
      </Styled.AuthenticationForm>
    );
  }
}

const mapActionsToProps = {
  signUp,
  resetErrorFlag
};

const mapStateToProps = state => {
  return {
    authError: state.authState.authError
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Signup);
