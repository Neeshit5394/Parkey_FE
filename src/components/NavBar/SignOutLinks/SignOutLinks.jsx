import React, { Component } from "react";
import Styled from "./styled";
import { Link } from "react-router-dom";
import { signOut, getUserData } from "../../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class SignOutLinks extends Component {
  state = {
    hasError: false
  };
  componentDidMount() {
    if (this.props.currentUser) {
      window.setTimeout(
        () => this.props.getUserData(this.props.currentUser),
        1000
      );
    }
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/user">
              <Styled.navlink className="nav-link">{`Hi ${
                this.props.userData ? this.props.userData.firstName : ""
              }`}</Styled.navlink>
            </Link>
          </li>
          <li className="nav-item">
            <Styled.navlink
              className="nav-link"
              onClick={() => this.props.signOut()}
            >
              Sign out
            </Styled.navlink>
          </li>
        </ul>
      </div>
    );
  }
}

const mapActionsToProps = {
  getUserData,
  signOut
};

const mapStateToProps = state => {
  return {
    showAuthModal: state.uiState.showAuthModal,
    currentUser: state.authState.currentUser,
    userData: state.authState.userData,
    isAuth: state.authState.isAuth
  };
};

export default withRouter(
  connect(mapStateToProps, mapActionsToProps)(SignOutLinks)
);
