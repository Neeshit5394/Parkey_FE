import React, { Component } from 'react';
import Styled from "./styled";
import { Nav, Form, Row, Col } from "react-bootstrap"
import Profile from "./Profile"

class UserProfile extends Component {
  state = {
    hasError: false,
    account: true,
    activeKey:"account"
  }
  clearState= {
   account:false,
   user:false,
  }

  handleSelect = eventKey => {
    console.log(eventKey)
    this.setState(this.clearState)
    this.setState({
      [eventKey]: true,
      activeKey:eventKey
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <>
        <Styled.Nav>
          <Nav className="justify-content-center" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
            <Nav.Item >
              <Nav.Link eventKey="account">Account</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="user">User</Nav.Link>
            </Nav.Item>
          </Nav>
        </Styled.Nav>
       <Profile account={this.state.account} user={this.state.user}/>
      </>
    );
  }
}
export default UserProfile;