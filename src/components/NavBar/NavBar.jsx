import React, { Component } from "react";
import Styled from "./styled";
import firebase from "./../../Firebase";

import { BrowserRouter as Router, Link } from "react-router-dom";
import Authentication from "../Authentication";
import { connect } from "react-redux";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { toggleAuthModal, getAuthStatus } from "./../../store/actions";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidMount() {
    this.props.getAuthStatus();
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    let authLink = this.props.authStatus ? <SignOutLinks /> : <SignInLinks />;
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-md navbar-light bg-white">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/">
                    <Styled.navlink className="nav-link">Home</Styled.navlink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/">
                    <Styled.navlink className="nav-link">Rent</Styled.navlink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/">
                    <Styled.navlink className="nav-link">Find</Styled.navlink>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto order-0">
              <Link to="/">
                <span className="navbar-brand mx-auto">
                  <Styled.navbarheading className="display-4">
                    {" "}
                    Parkey{" "}
                  </Styled.navbarheading>
                </span>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target=".dual-collapse2"
              >
                <Styled.navlink className="navbar-toggler-icon"></Styled.navlink>
              </button>
            </div>
            {authLink}
          </nav>
        </Router>
        <Authentication
          show={this.props.showAuthModal}
          onHide={() => {
            this.props.toggleAuthModal();
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    showAuthModal: state.uiState.showAuthModal,
    profile: state.authState.profile,
    authStatus: state.authState.authStatus
  };
};

export default connect(mapStateToProps, { toggleAuthModal, getAuthStatus })(
  NavBar
);
