import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";

import Styled from "./styled";
import { signIn } from "../../../store/actions/authActions";
import { connect } from "react-redux";

class Signin extends Component {
  state = {
    email: null,
    password: null,
    hasError: false,
    authState: this.props.authState
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Styled.SigninForm className="jumbotron">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </Form.Group>
          <Button
            variant="primary"
            size="md"
            type="submit"
            onClick={e => {
              e.preventDefault();
              this.props.signIn(this.state.email, this.state.password);
            }}
            block
          >
            Submit
          </Button>
        </Form>
        <Styled.FormNote>Forget your Password?</Styled.FormNote>
      </Styled.SigninForm>
    );
  }
}
const mapStateToProps = state => {
  return { authState: state.authState };
};
export default connect(mapStateToProps, { signIn })(Signin);
