import React, { Component } from "react";
import Styled from "./styled";
import { Modal, Tabs, Tab } from "react-bootstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import SignIn from "./Signin";
import SignUp from "./Signup";

class AuthenticationModal extends Component {
  state = {
    hasError: false
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.AuthenticationModal>
        <Modal
          dialogClassName="custom-modal"
          show={this.props.show}
          onHide={this.props.onHide}
          animation={true}
        >
          <Styled.ModalHeader closeButton>
            <Modal.Title className="title">
              Welcome to <Styled.Logo>Parkey</Styled.Logo>
            </Modal.Title>
          </Styled.ModalHeader>
          <Styled.ModalBody>
            <Tabs id="signIn-Tab">
              <Tab eventKey="signIn" title="Sign In">
                <SignIn />
              </Tab>
              <Tab eventKey="signUp" title="New Account">
                <SignUp />
              </Tab>
            </Tabs>
          </Styled.ModalBody>
          <Modal.Footer>
            <Styled.Footer>
              <p>Connect with using: </p>
              <FacebookLoginButton align="center" iconSize="15px" size="35px">
                <span className="social-media-btn">Continue with Facebook</span>
              </FacebookLoginButton>
              <GoogleLoginButton align="center" iconSize="15px" size="40px">
                <span className="social-media-btn">Continue with Google</span>
              </GoogleLoginButton>
            </Styled.Footer>
          </Modal.Footer>
        </Modal>
      </Styled.AuthenticationModal>
    );
  }
}

export default AuthenticationModal;
