import React, { Component } from "react";
import Styled from "./styled";
import Parkings from "../Parkings";
import LandingPage from "../Landing";
import ProfileSection from "../ProfileSection";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Authentication from "../Authentication";
import { connect } from "react-redux";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { toggleAuthModal, getCurrentUser } from "./../../store/actions";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    let authLink = this.props.currentUser ? <SignOutLinks /> : <SignInLinks />;
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
                  <Link to="/parkings/home">
                    <Styled.navlink className="nav-link">Rent</Styled.navlink>
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
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/user">
              {this.props.currentUser ? (
                <ProfileSection />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/Parkings/:id" component={Parkings} />
            <Route
              path="*"
              component={() => (
                <div className="not-found">
                  <h1>Not Found!</h1>
                </div>
              )}
            />
          </Switch>
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
    currentUser: state.authState.currentUser
  };
};

const mapActionstoProps = {
  toggleAuthModal,
  getCurrentUser
};

export default connect(mapStateToProps, mapActionstoProps)(NavBar);
