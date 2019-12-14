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
        </Modal>
      </Styled.AuthenticationModal>
    );
  }
}

export default AuthenticationModal;
