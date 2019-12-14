import React, { Component } from "react";
import NavBar from "../NavBar/index";
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
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { signIn })(Capsule);
