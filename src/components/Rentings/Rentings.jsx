import React, { Component } from "react";
import Styled from "./styled";
import Cards from "./Cards"
import PreviousRentingCard from './PreviousRentingCard/PreviousRentingCard';
import { connect } from "react-redux";
import { endReservation} from "./../../store/actions";

class Rentings extends Component {
  state = {
    hasError: false
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    let activeRentings = this.props.activeRentings.map((item,idx)=>{
     return <Cards key={idx} rentingDetail={item} />
    })
    let inActiveRentings = this.props.recentRentings.map((item,idx)=>{
      return <PreviousRentingCard key={idx} rentingDetail={item} />
    })
    return (
      <Styled.Container>
        <div className="rentings">
          <h2>Active Rentings</h2>
          <hr width="70%" align="left" />
         {activeRentings.length==0?<p>No Active Rentings</p>:activeRentings}
        </div>
        <div className="rentings">
          <h2>Recent Rentings</h2>
          <hr width="80%" align="left" />
          {inActiveRentings.length==0?<p>No recent Rentings</p>:inActiveRentings}
        </div>
      </Styled.Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    activeRentings:state.rentingState.activeRentings,
    recentRentings:state.rentingState.recentRentings
  };
};

// const mapActionstoProps = {
//   endReservation
// };

export default connect(mapStateToProps)(Rentings);
