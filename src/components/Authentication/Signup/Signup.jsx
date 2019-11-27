import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Styled from "./styled";
import { connect } from "react-redux";
import { signUp } from "./../../../store/actions";
class Signup extends Component {
  state = {
    hasError: false
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    var email, password;
    return (
      <Styled.AuthenticationForm>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e => (email = e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => (password = e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Styled.FormText>
            At least 8 Characters and alphanumeric
          </Styled.FormText>
          <Button
            variant="primary"
            size="md"
            type="submit"
            onClick={e => {
              e.preventDefault();
              this.props.signUp()
            }}
            block
          >
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

const mapStateToProps = state => {
  return { state: state.authState };
};
export default connect(mapStateToProps, { signUp })(Signup);
