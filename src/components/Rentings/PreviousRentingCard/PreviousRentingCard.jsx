
import React, { Component } from 'react';
import Styled from "./styled";
import { Card, Button } from "react-bootstrap";
import Countdown from 'react-countdown-now';


class PreviousRentingCard extends Component {
  state = {
    hasError: false,
  }


  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Styled.Container>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.rentingDetail.location}</Card.Title>
           
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8">
                {this.props.rentingDetail.description}
          <div className="row">

                    <div className="col-sm-12 col-md-3 col-lg-3">
                      <div className="sub-title">
                        Location
                  </div>
                      <p>{this.props.rentingDetail.location}</p>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-3">
                      <div className="sub-title">
                        Listing Start Date
                  </div>
                      <p>
                      {this.props.rentingDetail.rent_start_date}
                  </p>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                      <div className="sub-title">
                        Price
                  </div>
                      <p>
                      {this.props.rentingDetail.price}$
                  </p>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                      <div className="sub-title">
                        Listing End Date
                  </div>
                      <p>
                      {this.props.rentingDetail.rent_end_date}
                  </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="count-down-div">
              <div className="count-down-text">Parking Ended at</div>
              <div className="count-down"> {this.props.rentingDetail.user_rent_end_date}</div>
              <div className="count-down-text">Billed Amount</div>
              <div className="count-down">{this.props.rentingDetail.billed_amount} $</div>
             
            </div>
                </div>
              </div>
           
          </Card.Body>
        </Card>
      </Styled.Container>
    );
  }
}

export default PreviousRentingCard;