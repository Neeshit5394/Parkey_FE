import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import SignInJoinNowModal from "./SigIn-JoinNow-Tabs";
import LocationSearchInput from "./locationSearchInput";
import "../App.css";


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInModalShow:false,
        };
    }
    componentDidMount() {
        
    }

    componentWillUnmount() {
       
    }
    signInToggle() {
        this.setState({
         signInModalShow:!this.state.signInModalShow,
     })
    }
    render() {
        return(
        <div>
        <div className="jumbotron" id="title-banner">
          <div className="center-block">
            <h2 className="display-3">Now Parking is Stress Free</h2>
            <h3 className="display-3">We will help you finding parking spot.</h3>
          </div>
          <div className="search-bar mx-auto">
            <LocationSearchInput/>
          </div>
        </div>
        <div className="container flyers">
          <div className="mx-auto flyer-title">
            <p className="flyer-title-content" >Now never waste time searching for Parking Space </p>
            <p className="flyer-title-content">Get <span className="parkey-logo">Parkey</span></p>
            <hr/>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="row-content">
                <div className="rent_buy_tab">
                  <div>
                    <img alt="get-flyer1" className="flyers_image" src={require('./images/flyer1.jpg')}/>
                  </div>
                  <div className="flyer-head">Rent Parking Space </div>
                  <p className="flyer-desc" >Now Earn money with Parkey by renting your parking spot for hours, days and month. Parkey will provide a smooth way to interact with people and help you to Earn </p>
                  <button type="button" onClick={()=>this.signInToggle()}  className="btn btn-primary btn-lg flyer-btn">Start Renting</button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="row-content">
              <div className="rent_buy_tab">
                <div><img alt="rent-flyer" className="flyers_image1" src={require('./images/flyer2.jpg')}/></div>
                <div className="flyer-head">Get Parking Space </div>
                <p className="flyer-desc" >Now with Parkey forget about the stress for finding the parking spot near your current location. Now find parking spot anywhere and anytime using Parkey </p>
                <button type="button" onClick={()=>this.signInToggle()} className="btn btn-primary btn-lg flyer-btn">Find Parking Spot</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mid-link jumbotron">
          <div className="row">
            <span className="col-sm-12 col-lg-3 col-md-3">About Us</span>
            <span className="col-sm-12 col-lg-3 col-md-3">Advertise</span>
            <span className="col-sm-12 col-lg-3 col-md-3">Blog</span>
            <span className="col-sm-12 col-lg-3 col-md-3">How Parkey works?</span>
          </div>
        </div>
        <div className="container  ">
        <div className="footer-desc">
          <p>Parkey is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please contact us.</p>
          <p>Copyright 2019 Parkey. All Rights Reserved.</p>
        </div>
        <img alt="footer-flyer" className="footer-image" src={require('./images/fotter2.jpg')}/>
      
        </div>
        <SignInJoinNowModal show={this.state.signInModalShow} onHide={()=>this.signInToggle()}/>
      </div> 
      
        )        
    }
        
}

export default withRouter(Homepage);