import React, { Component } from "react";
import LocationSearchBar from "../LocationSearchBar";
import Map from "../Map";
import ParkingSpots from "./ParkingSpot";
import Styled from "./styled";
import ReserveSpotModal from "../ReserveSpotModal";
import { connect } from "react-redux";
import { getAllListings } from "./../../store/actions";

class Parkings extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    hasError: false,
    show: false,
    hide: true,
    latLng: this.props.location.state.latLng
  };

  componentDidMount() {
    this.props.getAllListings();
  }

  render() {
    console.log(this.props);
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    const rentings =
      this.props.allListings &&
      this.props.allListings.map((item, idx) => (
        <ParkingSpots key={idx} parkingSpot={item} />
      ));

    return (
      <Styled.Wrapper className="jumbotron">
        <Styled.MenuWrapper>
          <div className="row">
            <Styled.LocationSearchBar className="col-sm-11 col-md-11 col-lg-4">
              <LocationSearchBar />
            </Styled.LocationSearchBar>
            <Styled.MenuBtn className="col-sm-11 col-md-11 col-lg-1">
              <button type="button" className="btn btn-primary">
                Rent
              </button>
            </Styled.MenuBtn>
            <Styled.MenuBtn className="col-sm-11 col-md-11 col-lg-1">
              <button type="button" className="btn btn-primary">
                Filter
              </button>
            </Styled.MenuBtn>
          </div>
        </Styled.MenuWrapper>

        <div className="row">
          <Styled.MapContainer className="col-sm-12 col-md-8 col-lg-8">
            <div className="map">
              <Map latLng={this.state.latLng} />
            </div>
          </Styled.MapContainer>

          <Styled.Parkings className="col-sm-12 col-md-4 col-lg-4 fixed-content">
            {/* <ParkingSpots title="Gurdwara Temple Parking" description="Parking hours between 2 AM to 8 PM " />
            <ParkingSpots title="DMart Parking" description="Parking hours between 2 PM to 3 PM" />
            <ParkingSpots title="Apna Bazar Parking" description="Parking hours between 1 PM to 6 PM" />
            <ParkingSpots title="Shop Rite Parking" description="Parking hours between 2 PM to 4 PM" /> */}
            {rentings}
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
    reserveSpotModalData: state.uiState.reserveSpotModalData
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Parkings);
