
import React, { Component } from 'react';
import Styled from "./styled";
import { Card, Button } from "react-bootstrap";
import Countdown from 'react-countdown-now';


class Cards extends Component {
  state = {
    hasError: false,
  }


  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    const Completionist = () => {
      return (<>
        <div className="count-down-div">

          <div className="count-down">Parking Expired</div>
          <Button variant="primary custom-primary-btn" size="md" type="button">
            End Reservation
    </Button>
          <div className="extra-charge-text">You will be charged extra if you don't end Reservation</div>
        </div>
      </>
      )
    };

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a complete state
        return <Completionist />;
      } else {
        // Render a countdown
        return (
          <>
            <div className="count-down-div">
              <div className="count-down-text">Parking Will End in</div>
              <div className="count-down"><span>{hours} Hours : {minutes} Min : {seconds} Sec </span></div>
              <Button variant="primary custom-primary-btn" size="md" type="button">
                End Reservation
            </Button>
            </div>
          </>
        );
      }
    };
    return (
      <Styled.Container>
        <Card>
          <Card.Body>
            <Card.Title>129 South Street</Card.Title>
           
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8">
                  {this.props.rentingDetail.description}
                  <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                      <div className="sub-title">
                        Location
                        </div>
                      <p>{this.props.rentingDetail.location}</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                      <div className="sub-title">
                        Listing Start Date
                        </div>
                      <p>
                        {this.props.rentingDetail.rn}
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                      <div className="sub-title">
                        Listing End Date
                        </div>
                      <p>
                        25 Jan 2019
                        </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <Countdown
                    date={Date.now() + 5000}
                    renderer={renderer}
                  />
                </div>
              </div>
     
          </Card.Body>
        </Card>
      </Styled.Container>
    );
  }
}

export default Cards;