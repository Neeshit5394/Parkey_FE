import React, { Component } from "react";
import Styled from "./styled";

import { BrowserRouter as Router, Link } from "react-router-dom";
import Authentication from "../Authentication";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInModalShow: false,
      hasError: false
    };
  }
  signInToggle() {
    this.setState({
      signInModalShow: !this.state.signInModalShow
    });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
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
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Styled.navlink
                    className="nav-link"
                    onClick={() => this.signInToggle()}
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
          </nav>
        </Router>
        <Authentication
          show={this.state.signInModalShow}
          onHide={() => this.signInToggle()}
        />
      </div>
    );
  }
}

export default NavBar;
