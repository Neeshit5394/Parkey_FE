import React, { Component } from 'react';
import Styled from "./styled";
import { toggleReserveSpot, toggleAuthModal } from "../../../store/actions";
import { connect } from "react-redux";

class ParkingSpot extends Component {
  constructor(props) {
    super(props);
  };
  
  state = {
    hasError: false,
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.ParkingSpot >
        <div className="title">
          <h4>{this.props.parkingSpot.locationName}</h4>
        </div>
        <div className="body">
          <p>{this.props.parkingSpot.details}</p>

          <p>Start Time: {new Date(this.props.parkingSpot.startTime).toDateString()}</p>

          <p>End Time: {new Date(this.props.parkingSpot.endTime).toDateString()}</p>

        </div>
        <div className="footer">
          <button type="button" className="btn btn-primary btn-md" onClick={() => this.props.currentUser != null ?this.props.toggleReserveSpot(this.props.parkingSpot):this.props.toggleAuthModal()}>Reserve Spot</button>
        </div>
      </Styled.ParkingSpot>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentUser: state.authState.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleReserveSpot: (parkingSpot) => dispatch(toggleReserveSpot(parkingSpot)),
    toggleAuthModal: () => dispatch(toggleAuthModal())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ParkingSpot);
