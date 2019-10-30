import React, { Component } from "react";
import {Modal, Tabs, Tab } from 'react-bootstrap';
import { FacebookLoginButton,GoogleLoginButton} from "react-social-login-buttons";
import SignIn from "./signIn"
import SignUp from "./signup"
import "../App.css";


class SignInJoinNowModal extends Component {
    componentDidMount() {
      console.log(this.props.show)
    }

    componentWillUnmount() {
       
    }
    render() {
 
        return(
            <Modal dialogClassName="custom-modal" show={this.props.show} onHide={this.props.onHide} animation={true}>
            <Modal.Header className="custom-model-head" closeButton>
              <Modal.Title className="custom-modal-title">Welcome to <span className="parkey-logo">Parkey</span></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs id="signIn-Tab" >
                    <Tab eventKey="signIn" title="Sign In">
                        <SignIn/>
                    </Tab>
                    <Tab eventKey="signUp" title="New Account">
                        <SignUp/>
                    </Tab>
                </Tabs>
            </Modal.Body>
            <Modal.Footer>
              <div className="common-modal-login-footer">
                <p className="common-modal-login-footer-text" >Connect with using: </p>
                <FacebookLoginButton align="center" iconSize="15px" size="35px" >
                  <span className="social-media-btn">Continue with Facebook</span>
                </FacebookLoginButton >
                <GoogleLoginButton align="center" iconSize="15px" size="40px">
                  <span className="social-media-btn">Continue with Google</span>
                </GoogleLoginButton>
              </div>
             
            </Modal.Footer>
          </Modal>
        )        
    }
        
}

export default SignInJoinNowModal;