import { Button, Form, Alert } from "react-bootstrap";
import React, { Component } from "react";

import Styled from "./styled";
import { signIn, resetErrorFlag } from "../../../store/actions/authActions";
import { connect } from "react-redux";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    hasError: false,
    error: "",
    visible: false,
    authState: this.props.authState
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
        error: "Please enter Email"
      });
      this.onShowAlert();
      return false;
    }
    if (
      !this.state.password ||
      this.state.password == null ||
      this.state.password == undefined
    ) {
      this.setState({
        error: "Please enter password"
      });
      this.onShowAlert();
      return false;
    } else {
      this.props.signIn({
        email: this.state.email,
        password: this.state.password
      });
      this.setState({
        email: "",
        password: ""
      });
    }
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.SigninForm className="jumbotron">
        <Alert key="danger-alert" show={this.state.visible} variant="danger">
          {this.state.error}
        </Alert>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.handleOnChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.handleOnChange}
            />
          </Form.Group>
          <Button variant="primary" size="md" type="submit" block>
            Submit
          </Button>
        </Form>
        <Styled.FormNote>Forget your Password?</Styled.FormNote>
      </Styled.SigninForm>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
    resetErrorFlag: () => dispatch(resetErrorFlag())
  };
};

const mapStateToProps = state => {
  return {
    authError: state.authState.authError,
    authStatus: state.authStatus
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
