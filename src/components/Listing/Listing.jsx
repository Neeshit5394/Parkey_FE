import React, { Component } from 'react';
import Styled from "./styled";
import { Form, Alert, Accordion, Button } from "react-bootstrap"
import AccordianCard from "./AccordianCard"
import moment from "moment"

import ListingSearchBar from '../ListingSearchBar/ListingSearchBar';

class Listing extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    hasError: false,
    visible: false,
    erro: "",
    dangerVisibility: false,
    address:null,
    latLng:null
  }

  handleChange = (location) => {
    this.setState({
      address:null,
      latLng:null
     })
   if(location.latLng){
     console.log(location.latLng)
     this.setState({
      address:location.latLng,
      latLng:location.latLng
     })
   }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.latLng)
    if(!this.state.latLng){
      this.setState({
        ...this.state,
        error:"Please select the address from the list"
      })
      return false;
    }
    if(!this.state.address){
      this.setState({
        ...this.state,
        error:"Please Select the address from the list"
      })
      return false;
    }
    else{
      
    }
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    let listing = [{ "id": 123, "description":"dsfdsln sdkfhkdsj dsfdshfjv dsjfds dsfhvjfds dsjfv sd fhdsgfhvds sdhgfhds hvdsjfvs jhhjds jfvjhvds hsgdshf  kjhjf dskfbkj dskjfkdsjk dsfkjdsbk dsjkfhdsk sdjkfkjdsk kjdshfds kjhdsfjj", "location_name": "Jurassic Park", "date": "12 January 2019", "price": "10 $", "time-remaining": "2 hours", "renter-name": "Amit", "email": "avadnere@stevens.edu", "phone-number": 2018503791 },
    { "id": 13, "location_name": "Jurassic Park","description":"dsfdsln sdkfhkdsj kjhjf dskfbkj dskjfkdsjk dsfkjdsbk dsjkfhdsk sdjkfkjdsk kjdshfds kjhdsfjj", "price": "10 $", "date": "12 January 2019", "time-remaining": "2 hours", "renter-name": "Amit", "email": "avadnere@stevens.edu", "phone-number": 2018503791 },
    { "id": 12, "location_name": "Jurassic Park", "description":"dsfdsln sdkfhkdsj kjhjf dskfbkj dskjfkdsjk dsfkjdsbk dsjkfhdsk sdjkfkjdsk kjdshfds kjhdsfjj","price": "10 $", "date": "12 January 2019", "time-remaining": "2 hours", "renter-name": "Amit", "email": "avadnere@stevens.edu", "phone-number": 2018503791 }
    ]
    let activeListings;
    if (listing !== undefined) {
      activeListings = listing.map((item, idx) => {
        return <AccordianCard key={idx} detail={item} />
      })
    }
    let previousListings;
    if (listing !== undefined) {
      previousListings = listing.map((item, idx) => {
        return <AccordianCard key={idx} detail={item} />
      })
    }
    return (
      <Styled.Container>
        <div className="row">
          <div className="col-sm-12 col-lg-7 col-md-7 listing-part">
            <div  className="listing-part" >
            <h3 className="display-5">Active Listings</h3><hr />
            <Accordion defaultActiveKey="0">
              {activeListings}
            </Accordion>

            </div>
            <div>
            <h3 className="display-5">Previous Listings</h3><hr />
            <Accordion defaultActiveKey="0">
              {previousListings}
            </Accordion>
            </div>
          </div>
          <div className="col-sm-12 col-lg-5 col-md-5">
            <h2 className="display-4">Post Parking</h2><hr />
            <Alert show={this.state.visible} key="success" variant="success">
              Parking Posted Successfully
            </Alert>
            <Alert show={this.state.dangerVisibility} key="danger" variant="danger">
              {this.state.error}
            </Alert>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="Location">
                <Form.Label>Location</Form.Label>
                <ListingSearchBar getLocation={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control  required type="number" min={0} placeholder="Price" onChange={this.handleChange} />
              </Form.Group>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Form.Group controlId="startDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control  required type="date" min={moment().format("YYYY-MM-DD")} placeholder="Date" onChange={this.handleChange} />
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Form.Group controlId="startTime">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control  required type="time" min={moment().toDate().getTime()} placeholder="Start Time" onChange={this.handleChange} />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Form.Group controlId="endDate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control  required type="date" max={(moment().add(3, 'days')).format("YYYY-MM-DD")} placeholder="End Date" onChange={this.handleChange} />
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <Form.Group controlId="endTime">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control  required type="time" placeholder="End Time" onChange={this.handleChange} />
                  </Form.Group>
                </div>
              </div>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control  required as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary custom-primary-btn" size="md" type="submit">
                Post Parking
            </Button>
            </Form>
          </div>
        </div>
      </Styled.Container>
    );
  }
}

export default Listing;

// max={moment().format("YYYY-MM-DD")}