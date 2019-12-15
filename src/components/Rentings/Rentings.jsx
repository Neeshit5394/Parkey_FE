import React, { Component } from "react";
import Styled from "./styled";
import Cards from "./Cards";
import PreviousRentingCard from "./PreviousRentingCard/PreviousRentingCard";
import { connect } from "react-redux";
import { endReservation, getUserRentings } from "./../../store/actions";

class Rentings extends Component {
  state = {
    hasError: false
  };
  componentDidMount() {
    this.props.getUserRentings(this.props.currentUser);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    if (this.props.activeRentings && this.props.activeRentings.length === 0) {
      return (
        <div className="not-found">
          <h1>You have no current reserved rentings!</h1>
        </div>
      );
    }
    let rentings =
      this.props.activeRentings &&
      this.props.activeRentings.map((item, idx) => {
        return <Cards key={idx} rentingDetail={item} />;
      });
    return (
      <Styled.Container>
        <div className="rentings">
          <h2>Your Rentings</h2>
          <hr width="70%" align="left" />
          {rentings}
        </div>
      </Styled.Container>
    );
  }
}
const mapActionsToProps = {
  getUserRentings
};

const mapStateToProps = state => {
  return {
    activeRentings: state.rentingState.userRentings,
    currentUser: state.authState.currentUser
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Rentings);
