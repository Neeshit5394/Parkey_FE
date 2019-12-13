import React, { Component } from "react";
import Styled from "./styled";
import {
  toggleReserveSpot,
  toggleAuthModal
} from "../../../store/actions/UIActions";
import { connect } from "react-redux";
import moment from "moment";

class ParkingSpot extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    hasError: false
  };

  componentDidMount = () => {
    console.log("ParkingSpot mounted");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.ParkingSpot className="jumbotron">
        <div className="title">
          <h4>{this.props.parkingSpot.locationName}</h4>
        </div>
        <div className="body">
          <p>{this.props.parkingSpot.details}</p>
          <p>
            Start Time:{" "}
            {moment
              .unix(this.props.parkingSpot.startTime / 1000)
              .format("M/D/YYYY hh:mm")}
          </p>
          <p>
            End Time:{" "}
            {moment
              .unix(this.props.parkingSpot.endTime / 1000)
              .format("M/D/YYYY hh:mm")}
          </p>
        </div>
        <div className="footer">
          <button
            type="button"
            className="btn btn-primary btn-md"
            onClick={() => {
              if (this.propscurrentUser) {
                this.props.toggleReserveSpot(this.props.parkingSpot);
              } else this.props.toggleAuthModal();
            }}
          >
            Reserve Spot
          </button>
        </div>
      </Styled.ParkingSpot>
    );
  }
}
const mapActionsToProps = {
  toggleReserveSpot,
  toggleAuthModal
};
const mapStateToProps = state => {
  return { currentUser: state.authState.currentUser };
};
export default connect(mapStateToProps, mapActionsToProps)(ParkingSpot);
