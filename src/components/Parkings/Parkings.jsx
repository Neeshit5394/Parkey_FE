import React, { Component } from "react";
import LocationSearchBar from "../LocationSearchBar";
import Map from "../Map";
import ParkingSpots from "./ParkingSpot";
import Styled from "./styled";
import ReserveSpotModal from "../ReserveSpotModal";
import { connect } from "react-redux";
import { getAllListings } from "./../../store/actions";
import { Redirect } from "react-router-dom";

class Parkings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      show: false,
      hide: true
    };
  }

  componentDidMount() {
    this.props.getAllListings(this.props.latLng);
  }

  render() {
    console.log(this.props);
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    let rentings = null;

    if (
      this.props.allListings != null &&
      typeof this.props.allListings != "string"
    ) {
      rentings = this.props.allListings.map((item, idx) => (
        <ParkingSpots key={idx} parkingSpot={item} />
      ));
    }

    return (
      <Styled.Wrapper>
        <Styled.MenuWrapper>
          <div className="row">
            <Styled.LocationSearchBar className="col-sm-11 col-md-11 col-lg-4">
              <LocationSearchBar />
            </Styled.LocationSearchBar>
          </div>
        </Styled.MenuWrapper>

        <div className="row">
          <Styled.MapContainer className="col-sm-12 col-md-8 col-lg-8">
            <div className="map">
              <Map
                latLng={
                  this.props.location.state
                    ? this.props.location.state.latLng
                    : this.props.latLng
                }
              />
            </div>
          </Styled.MapContainer>

          <Styled.Parkings className="col-sm-12 col-md-4 col-lg-4 fixed-content">
            {this.props.listingError != null ? (
              <div> {this.props.listingError}</div>
            ) : (
              rentings
            )}
          </Styled.Parkings>
        </div>
        {this.props.reserveSpotModalData != null ? (
          <ReserveSpotModal
            spot={this.props.reserveSpotModalData}
            show={this.props.showReserveSpotModal}
            hide={this.props.showReserveSpotModal}
          />
        ) : null}
      </Styled.Wrapper>
    );
  }
}

const mapActionsToProps = {
  getAllListings
};
const mapStateToProps = state => {
  return {
    showReserveSpotModal: state.uiState.showReserveSpotModal,
    allListings: state.listingState.allListings,
    listingError: state.listingState.error,
    reserveSpotModalData: state.uiState.reserveSpotModalData,
    latLng: state.mapState.latLng
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Parkings);
