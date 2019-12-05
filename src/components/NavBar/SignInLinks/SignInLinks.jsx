import React, { Component } from 'react';
import Styled from "./styled";
import { Link } from "react-router-dom";
import { toggleAuthModal } from "../../../store/actions";
import { connect } from "react-redux";

class SignInLinks extends Component {
  state = {
    hasError: false,
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Styled.navlink
              className="nav-link"
              onClick={() => this.props.toggleAuthModal()}
            >
              Sign in or Join
        </Styled.navlink>
          </li>
          <li className="nav-item">
            <Link to="/">
              <Styled.navlink className="nav-link">Help</Styled.navlink>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAuthModal: () => dispatch(toggleAuthModal())
  };
}

const mapStateToProps = state => {
  return {
    showAuthModal: state.uiState.showAuthModal,
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks);