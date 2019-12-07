import React, { Component } from "react";
import Styled from "./styled";
import { Modal, Tabs, Tab } from "react-bootstrap";
import { toggleReserveSpot } from "../../store/actions/UIActions";
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
          onHide={()=>this.props.toggleReserveSpot()}
          animation={true}
        >
          <Styled.ModalHeader closeButton>
            <Modal.Title>
              <h1 className="display-4  heading-1">Reserve Spot</h1>
              <h2 className="display-4 heading-2">129 South Street, NJ, USA</h2>
            </Modal.Title>
          </Styled.ModalHeader>
          <Styled.ModalBody>
            <Modal.Body>
            <h3 className="display-4 heading-3">Description</h3>
            <p>Automatic Data Processing FCU Branch Location at 1 ADP Blvd, Roseland, NJ 07068 - Hours of Operation, Phone Number, Services, Routing Numbers</p>
            <h3 className="display-4 heading-3">Availability</h3>
            <p> To check if the service is available in your area (or an area you might be traveling), use the city checker tool on the Uber website. You can also download the Uber app and setup an account. The app itself will notify you whether or not the service is available.</p>
            <p><span className="spot-available-time-box">4 hrs</span></p>
            </Modal.Body>
          
          </Styled.ModalBody>
          <Modal.Footer>
            <Styled.Footer>
            <button type="button" className="btn btn-primary btn-md ">Reserve Now</button>
            </Styled.Footer>
          </Modal.Footer>
        </Modal>
      </Styled.AuthenticationModal>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleReserveSpot: () => dispatch(toggleReserveSpot())
  };
}
export default connect(null, mapDispatchToProps)(ReserveSpotModal);


// export default ReserveSpotModal;

