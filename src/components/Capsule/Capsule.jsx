import React, { Component } from "react";
import NavBar from "../NavBar/index";
import { connect } from "react-redux";
import { signIn } from "./../../store/actions";
import axios from "axios";

class Capsule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      beStatus: false
    };
  }
  componentDidMount = async () => {
    try {
      let { data } = await axios.get(`${process.env.REACT_APP_BE_URL}/ping/`);
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, beStatus: true });
    }
  };

  render() {
    console.log(this.state);
    if (this.state.beStatus) {
      return (
        <div>
          <h1>Backend Server not detected! Please check connection.</h1>
        </div>
      );
    }
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
