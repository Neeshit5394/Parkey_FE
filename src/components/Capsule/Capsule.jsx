import React, { Component } from "react";
import NavBar from "../NavBar/index";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Parkings from "../Parkings";
import LandingPage from "../Landing";
import User from "../User";
import { connect } from "react-redux";
import { signIn } from "./../../store/actions";

class Capsule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went Wrong</div>;
    } else {
      return (
        <div>
          <NavBar />
          <Router>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/user" component={User} />
              <Route path="/Parkings/:id" component={Parkings} />
            </Switch>
          </Router>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { signIn })(Capsule);
