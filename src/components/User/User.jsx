import React, { Component } from 'react';
import Styled from "./styled";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";

class User extends Component { 
  state = {
    hasError: false,
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    if(!this.props.profile){
      return <Redirect to="/"/>
    }
    return (
       <>
       <h1>Hi Amit !</h1> 
       <p> WRAPPER CONTENT FOR ALL SECURE ROUTES </p>
       </>
    );
  }
}
const mapStateToProps = state => {
  return {
    showAuthModal: state.uiState.showAuthModal,
    profile: state.authState.profile
  };
};


export default connect(mapStateToProps)(User);
