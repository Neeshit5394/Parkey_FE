

import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap'
import Styled from "./styled";

class Signin extends Component {
  state = {
    hasError: false,
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.SigninForm className="jumbotron">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
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

export default Signin;