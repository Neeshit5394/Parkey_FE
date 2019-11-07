import React, { Component } from 'react';
import Styled from "./styled";
import AuthenticationModal from "../Authentication";
import LocationSearchInput from "../LocationSearchBar";


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInModalShow: false,
      hadError: false
    };
  }

  signInToggle() {
    this.setState({
      signInModalShow: !this.state.signInModalShow,
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <>
        <Styled.headbanner className="jumbotron" >
          <Styled.centerblock>
            <h2 className="display-3">Now Parking is Stress Free</h2>
            <h3 className="display-3">We will help you finding parking spot.</h3>
          </Styled.centerblock>
          <Styled.searchbar className="mx-auto">
            <LocationSearchInput />
          </Styled.searchbar>
        </Styled.headbanner>
        <Styled.servicecontainer className="container">
          <div className="mx-auto operation-line">
            <p>Now never waste time searching for Parking Space </p>
            <p>Get <Styled.logo>Parkey</Styled.logo></p>
            <hr/>
          </div>
          <div className="row">
            <Styled.servicecapsule className="col-sm-12 col-md-12 col-lg-6 ">
              <div className="row-content">
                <Styled.service>
                  <div>
                    <img alt="rent" id="rent" src={require('../images/flyer1.jpg')} />
                  </div>
                  <div className="service-heading">Rent Parking Space </div>
                  <p className="service-description" >Now Earn money with Parkey by renting your parking spot for hours, days and month. Parkey will provide a smooth way to interact with people and help you to Earn </p>
                  <Styled.center>
                    <button type="button" onClick={() => this.signInToggle()} className="btn btn-primary btn-lg service-btn">Start Renting</button>
                  </Styled.center>
                </Styled.service>
              </div>
            </Styled.servicecapsule>
            <Styled.servicecapsule className="col-sm-12 col-md-12 col-lg-6">
              <div className="row-content">
                <Styled.service>
                  <div>
                    <img alt="buy" id="buy" src={require('../images/flyer2.jpg')} />
                  </div>
                  <div className="service-heading">Get Parking Space </div>
                  <p className="service-description" >Now with Parkey forget about the stress for finding the parking spot near your current location. Now find parking spot anywhere and anytime using Parkey </p>
                  <Styled.center>
                    <button type="button" onClick={() => this.signInToggle()} className="btn btn-primary btn-lg service-btn ">Find Parking Spot</button>
                  </Styled.center>
                </Styled.service>
              </div>
            </Styled.servicecapsule>
          </div>
        </Styled.servicecontainer>
        <Styled.midnav className="jumbotron">
          <div className="row">
            <span className="col-sm-12 col-lg-3 col-md-3">About Us</span>
            <span className="col-sm-12 col-lg-3 col-md-3">Advertise</span>
            <span className="col-sm-12 col-lg-3 col-md-3">Blog</span>
            <span className="col-sm-12 col-lg-3 col-md-3">How Parkey works?</span>
          </div>
        </Styled.midnav>
        <Styled.footer className="container">
          <div className="footer-desc">
            <p>Parkey is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please contact us.</p>
            <p>Copyright 2019 Parkey. All Rights Reserved.</p>
          </div>
          <img alt="footer-flyer" className="footer-image" src={require('../images/fotter2.jpg')} />
        </Styled.footer>
        <AuthenticationModal show={this.state.signInModalShow} onHide={() => this.signInToggle()} />
      </>
    );
  }
}

export default Landing;