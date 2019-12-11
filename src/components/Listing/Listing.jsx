import React, { Component } from "react";
import Styled from "./styled";
import { Form, Alert, Accordion, Button, Spinner } from "react-bootstrap";
import AccordianCard from "./AccordianCard";
import moment from "moment";
import { connect } from "react-redux";
import axios from "axios";
import { getAllListings } from "./../../store/actions";
import ListingSearchBar from "../ListingSearchBar/ListingSearchBar";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      visible: false,
      error: "",
      dangerVisibility: false,
      address: null,
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
      details: null,
      price: null,
      loading: false
    };
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getAllListings(this.props.currentUser);
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      dangerVisibility: false
    });
    if (!this.props.coordinates) {
      this.setState({
        ...this.state,
        error: "Please select the address from the list",
        dangerVisibility: true
      });
      return false;
    }
    if (!this.props.locationName) {
      this.setState({
        ...this.state,
        error: "Please Select the address from the list"
      });
      return false;
    } else {
      this.setState({ ...this.state, loading: true });
      let { data } = await axios.post(
        `http://localhost:8080/listings/${this.props.currentUser}`,
        {
          lat: this.props.coordinates.lat,
          lng: this.props.coordinates.lng,
          locationName: this.props.locationName,
          price: Number(this.state.price) ? Number(this.state.price) : 0,
          details: this.state.details,
          startTime: moment(
            `${this.state.startDate} ${this.state.startTime}`,
            "YYYY-MM-DD hh:mm"
          ).valueOf(),
          endTime: moment(
            `${this.state.endDate} ${this.state.endTime}`,
            "YYYY-MM-DD hh:mm"
          ).valueOf()
        }
      );
      if (data) {
        this.setState({ ...this.state, loading: false });
      }
    }
  };
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    if (this.state.loading) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
    console.log(this.props);
    let listing = [
      {
        id: 123,
        description:
          "dsfdsln sdkfhkdsj dsfdshfjv dsjfds dsfhvjfds dsjfv sd fhdsgfhvds sdhgfhds hvdsjfvs jhhjds jfvjhvds hsgdshf  kjhjf dskfbkj dskjfkdsjk dsfkjdsbk dsjkfhdsk sdjkfkjdsk kjdshfds kjhdsfjj",
        location_name: "Jurassic Park",
        date: "12 January 2019",
        price: "10 $",
        "time-remaining": "2 hours",
        "renter-name": "Amit",
        email: "avadnere@stevens.edu",
        "phone-number": 2018503791
      },
      {
        id: 13,
        location_name: "Jurassic Park",
        description:
          "dsfdsln sdkfhkdsj kjhjf dskfbkj dskjfkdsjk dsfkjdsbk dsjkfhdsk sdjkfkjdsk kjdshfds kjhdsfjj",
        price: "10 $",
        date: "12 January 2019",
        "time-remaining": "2 hours",
        "renter-name": "Amit",
        email: "avadnere@stevens.edu",
        "phone-number": 2018503791
      },
      {
        id: 12,
        location_name: "Jurassic Park",
        description:
          "dsfdsln sdkfhkdsj kjhjf dskfbkj dskjfkdsjk dsfkjdsbk dsjkfhdsk sdjkfkjdsk kjdshfds kjhdsfjj",
        price: "10 $",
        date: "12 January 2019",
        "time-remaining": "2 hours",
        "renter-name": "Amit",
        email: "avadnere@stevens.edu",
        "phone-number": 2018503791
      }
    ];
    let activeListings;
    if (listing !== undefined) {
      activeListings = listing.map((item, idx) => {
        return <AccordianCard key={idx} detail={item} />;
      });
    }

    return (
      <Styled.Container>
        <div className="row">
          <div className="col-sm-12 col-lg-7 col-md-7 listing-part">
            <div className="listing-part">
              <h3 className="display-5">Active Listings</h3>
              <hr />
              <Accordion defaultActiveKey="0">{activeListings}</Accordion>
            </div>
            
          </div>
          <div className="col-sm-12 col-lg-5 col-md-5">
            <h2 className="display-4">Post Parking</h2>
            <hr />
            <Alert show={this.state.visible} key="success" variant="success">
              Parking Posted Successfully
            </Alert>
            <Alert
              show={this.state.dangerVisibility}
              key="danger"
              variant="danger"
            >
              {this.state.error}
            </Alert>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="Location">
                <Form.Label>Location</Form.Label>
                <ListingSearchBar getLocation={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="number"
                  min={0}
                  placeholder="Price"
                  onChange={e => {
                    e.preventDefault();
                    this.setState({
                      ...this.state,
                      price: e.target.value
                    });
                  }}
                />
              </Form.Group>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Form.Group controlId="startDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      min={moment().format("YYYY-MM-DD")}
                      placeholder="Date"
                      onChange={e => {
                        e.preventDefault();
                        this.setState({
                          ...this.state,
                          startDate: e.target.value
                        });
                      }}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Form.Group controlId="startTime">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control
                      required
                      type="time"
                      min={moment()
                        .toDate()
                        .getTime()}
                      placeholder="Start Time"
                      onChange={e => {
                        e.preventDefault();
                        this.setState({
                          ...this.state,
                          startTime: e.target.value
                        });
                      }}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Form.Group controlId="endDate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      min={moment()
                        .toDate()
                        .getTime()}
                      max={moment()
                        .add(7, "days")
                        .format("YYYY-MM-DD")}
                      placeholder="End Date"
                      onChange={e => {
                        e.preventDefault();
                        this.setState({
                          ...this.state,
                          endDate: e.target.value
                        });
                      }}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Form.Group controlId="endTime">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control
                      required
                      type="time"
                      placeholder="End Time"
                      onChange={e => {
                        e.preventDefault();
                        this.setState({
                          ...this.state,
                          endTime: e.target.value
                        });
                      }}
                    />
                  </Form.Group>
                </div>
              </div>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows="3"
                  onChange={e => {
                    e.preventDefault();
                    this.setState({
                      ...this.state,
                      details: e.target.value
                    });
                  }}
                />
              </Form.Group>
              <Button
                variant="primary custom-primary-btn"
                size="md"
                type="submit"
              >
                Post Parking
              </Button>
            </Form>
          </div>
        </div>
      </Styled.Container>
    );
  }
}
const mapActionsToProps = {
  getAllListings
};

const mapStateToProps = state => {
  return {
    locationName:
      state.mapState.selectedAddress &&
      state.mapState.selectedAddress.locationName,
    coordinates:
      state.mapState.selectedAddress && state.mapState.selectedAddress.latLng,
    currentUser: state.authState.currentUser,
    listings: state.listingState.listings
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Listing);
