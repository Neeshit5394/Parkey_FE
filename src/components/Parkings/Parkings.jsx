import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import LocationSearchInput from "../LocationSearchBar";
import Map from "../Map";
import ParkingSpots  from "./ParkingSpot";
import Styled from "./styled";
import ReserveSpotModal from "../ReserveSpotModal";
import { connect } from "react-redux";

class Parkings extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    hasError: false,
    show:false,
    hide:true,
  }
  
  componentDidMount = () => {
    console.log('Parkings mounted');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.Wrapper className="jumbotron">
        <Styled.MenuWrapper>
          <div className="row">
            <Styled.LocationSearchBar className="col-sm-11 col-md-11 col-lg-4">
              <LocationSearchInput />
            </Styled.LocationSearchBar>
            <Styled.MenuBtn className="col-sm-11 col-md-11 col-lg-1">
              <button type="button" className="btn btn-primary">Rent</button>
            </Styled.MenuBtn>
            <Styled.MenuBtn className="col-sm-11 col-md-11 col-lg-1">
              <button type="button" className="btn btn-primary">Filter</button>
            </Styled.MenuBtn>
          </div>
        </Styled.MenuWrapper>

        <div className="row">
         
            <Styled.MapContainer className="col-sm-12 col-md-8 col-lg-8">
            <div className="map">
              <Map latLng={this.props.location.state.latlang} />
              </div>
            </Styled.MapContainer>
          
          <Styled.Parkings className="col-sm-12 col-md-4 col-lg-4 fixed-content">
            <ParkingSpots title="Gurdwara Temple Parking" description="Parking hours between 2 AM to 8 PM " />
            <ParkingSpots title="DMart Parking" description="Parking hours between 2 PM to 3 PM" />
            <ParkingSpots title="Apna Bazar Parking" description="Parking hours between 1 PM to 6 PM" />
            <ParkingSpots title="Shop Rite Parking" description="Parking hours between 2 PM to 4 PM" />
          </Styled.Parkings>

        </div>
        <ReserveSpotModal spot={{"description":"description sajdasj"}}
          show={this.props.showReserveSpotModal} hide={this.props.showReserveSpotModal}
        />
      </Styled.Wrapper>
    )
  }
}
const mapStateToProps = state => {
  return {
    showReserveSpotModal: state.uiState.showReserveSpotModal,
  };
};

export default withRouter(connect(mapStateToProps)(Parkings));