import React, { Component } from "react";
import Styled from "./styled";
import { Modal, Tabs, Tab } from "react-bootstrap";
import {
  toggleReserveSpot,
  toggleAuthModal
} from "../../store/actions/UIActions";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

class ReserveSpotModal extends Component {
  state = {
    hasError: false
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.AuthenticationModal>
        <Modal
          dialogClassName="custom-modal"
          show={this.props.show}
          onHide={() => this.props.toggleReserveSpot()}
          animation={true}
        >
          <Styled.ModalHeader closeButton>
            <Modal.Title>
              <h1 className="display-4  heading-1">Reserve Spot</h1>
              <h2 className="display-4 heading-2">
                {this.props.spot.locationName}
              </h2>
            </Modal.Title>
          </Styled.ModalHeader>
          <Styled.ModalBody>
            <Modal.Body>
              <h3 className="display-4 heading-3">Description</h3>
              <p>{this.props.spot.details}</p>
              <div className="row">
                <div className="col-sm-12 col-lg-4 col-md-4">
                  <h3 className="display-4 heading-3">Start Time</h3>
                  <p>{new Date(this.props.spot.startTime).toDateString()}</p>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4">
                  <h3 className="display-4 heading-3">End Time</h3>
                  <p>{new Date(this.props.spot.endTime).toDateString()}</p>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4">
                  <h3 className="display-4 heading-3">Price</h3>
                  <p>{this.props.spot.price} $</p>
                </div>
              </div>
              <p className="termsCondition">
                *By clicking on the Reserve Spot you will be charged according
                to the above rates
              </p>
              {/* <p><span className="spot-available-time-box">4 hrs</span></p> */}
            </Modal.Body>
          </Styled.ModalBody>
          <Modal.Footer>
            <Styled.Footer>
              <button type="button" className="btn btn-primary btn-md ">
                Reserve Now
              </button>
            </Styled.Footer>
          </Modal.Footer>
        </Modal>
      </Styled.AuthenticationModal>
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

export default connect(mapStateToProps, mapActionsToProps)(ReserveSpotModal);
