import React, { Component } from 'react';
import Styled from "./styled";
import { toggleReserveSpot } from "../../../store/actions/UIActions";
import { connect } from "react-redux";

class ParkingSpot extends Component {
  constructor(props) {
    super(props);
  };
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    console.log('ParkingSpot mounted');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.ParkingSpot className="jumbotron">
        <div className="title">
          <h4>{this.props.title}</h4>
        </div>
        <div className="body">
          <p>{this.props.description}</p>
        </div>
        <div className="footer">
          <button type="button" className="btn btn-primary btn-md" onClick={()=>this.props.toggleReserveSpot()}>Reserve Spot</button>
        </div>
      </Styled.ParkingSpot>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleReserveSpot: () => dispatch(toggleReserveSpot())
  };
}
export default connect(null, mapDispatchToProps)(ParkingSpot);
