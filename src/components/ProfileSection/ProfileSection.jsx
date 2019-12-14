import React, { Component } from "react";
import Styled from "./styled";
import { Nav } from "react-bootstrap";
import Rentings from "../Rentings";
import UserProfile from "../UserProfile";
import Listing from "../Listing";

class ProfileSection extends Component {
  state = {
    activeKey: "userProfile",
    userProfile: true
  };
  clearState = {
    renting: false,
    listing: false,
    userProfile: false
  };

  handleSelect = eventKey => {
    this.setState(this.clearState);
    this.setState({
      [eventKey]: true,
      activeKey: eventKey
    });
  };
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    const rentings = this.state.renting ? <Rentings /> : null;
    const listing = this.state.listing ? <Listing /> : null;
    const userProfile = this.state.userProfile ? <UserProfile /> : null;
    return (
      <>
        <Styled.SubNav>
          <Nav
            className="justify-content-center"
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
          >
            <Nav.Item>
              <Nav.Link eventKey="userProfile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="renting">Rentings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="listing">Listing</Nav.Link>
            </Nav.Item>
          </Nav>
        </Styled.SubNav>
        {rentings}
        {listing}
        {userProfile}
        <hr />
        <Styled.footer className="container">
          <div className="footer-desc">
            <p>
              Parkey is committed to ensuring digital accessibility for
              individuals with disabilities. We are continuously working to
              improve the accessibility of our web experience for everyone, and
              we welcome feedback and accommodation requests. If you wish to
              report an issue or seek an accommodation, please contact us.
            </p>
            <p>Copyright 2019 Parkey. All Rights Reserved.</p>
          </div>
          <img
            alt="footer-flyer"
            className="footer-image"
            src={require("../../images/fotter2.jpg")}
          />
        </Styled.footer>
      </>
    );
  }
}
export default ProfileSection;
