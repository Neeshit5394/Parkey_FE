import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap'
import Styled from "./styled";

class Signup extends Component {
  state = {
    hasError: false,
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Styled.AuthenticationForm>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Styled.FormText>
            At least 8 Characters and alphanumeric
          </Styled.FormText>
          <Button variant="primary" size="md" type="submit" block>
            Submit
          </Button>
        </Form>
        <Styled.ConfirmationText>By submitting. I accept Parkey's term of use</Styled.ConfirmationText>
      </Styled.AuthenticationForm>
    );
  }
}

export default Signup;