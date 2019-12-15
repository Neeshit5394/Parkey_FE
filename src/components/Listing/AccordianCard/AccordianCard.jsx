import { Card, Accordion, Button } from "react-bootstrap";
import React, { Component } from "react";
import Styled from "./styled";
import { deleteListing } from "../../../store/actions";
import { connect } from "react-redux";
import moment from "moment";

class AccordianCard extends Component {
  state = {
    hasError: false
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.Container>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              className="header-toggle"
              eventKey={this.props.detail._id}
            >
              {this.props.detail.locationName}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={this.props.detail._id}>
            <Card.Body>
              <Styled.Listing>
                <div className="heading">Description</div>
                <hr />
                <p>{this.props.detail.details}</p>
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="heading">Location</div>
                    <p>{this.props.detail && this.props.detail.locationName}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="heading">Start Time</div>
                    {moment
                      .unix(this.props.detail.startTime / 1000)
                      .format("M/D/YYYY hh:mm a")}
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="heading">End Time</div>
                    {moment
                      .unix(this.props.detail.endTime / 1000)
                      .format("M/D/YYYY hh:mm a")}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="heading">Status</div>{" "}
                    {moment().valueOf() > this.props.detail.startTime
                      ? moment().valueOf() < this.props.detail.endTime
                        ? "Active"
                        : "Expired"
                      : "Yet To Start"}
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="heading">Price</div>
                    <p>$ {this.props.detail && this.props.detail.price}</p>
                  </div>
                </div>
              </Styled.Listing>

              <footer className="pull-right">
                <Button
                  onClick={() =>
                    this.props.deleteListing(this.props.detail._id)
                  }
                  className="btn btn-danger"
                >
                  Delete
                </Button>
              </footer>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Styled.Container>
    );
  }
}
const mapActionsToProps = {
  deleteListing
};

export default connect(null, mapActionsToProps)(AccordianCard);
