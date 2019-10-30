import React, { Component } from "react";
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import homepage from './homepage';
import "../App.css";
import SignInJoinNowModal from "./SigIn-JoinNow-Tabs";


class NavBar extends Component {
    
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
            <Router>
            <nav className="navbar navbar-expand-md navbar-light bg-white">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/">
                          <span className="nav-link" >Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">
                          <span className="nav-link">Rent</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">
                          <span className="nav-link">Find</span>
                        </Link>
                    </li>
       
                </ul>
            </div>
            <div className="mx-auto order-0">
                <Link to="/">
                <span className="navbar-brand mx-auto" >
                    <h1 className="display-4"> Parkey </h1>
                </span>
                </Link>
  
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                       <span className="nav-link" onClick={() => this.signInToggle()} >Sign in or Join</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/">
                          <span className="nav-link" >Help</span>
                        </Link>
                    </li>
                </ul>
            </div>
          </nav>
          <div>
              <Switch>
                  <Route path="/" exact component={homepage} />
              </Switch>
          </div>
          
     </Router>
      <SignInJoinNowModal show={this.state.signInModalShow} onHide={()=>this.signInToggle()}/>
     </div>
        )        
    }
        
}

export default NavBar;