import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";

import Styled from "./styled";
import { authState } from "./../../../actions";
import { connect } from "react-redux";

class Signin extends Component {
  state = {
    hasError: false
  };
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
          <Button
            variant="primary"
            size="md"
            type="submit"
            onClick={e => {
              e.preventDefault();
              this.props.authState(true);
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
  console.log(state);
  return { auth: state.isAuth };
};
export default connect(mapStateToProps, { authState })(Signin);
