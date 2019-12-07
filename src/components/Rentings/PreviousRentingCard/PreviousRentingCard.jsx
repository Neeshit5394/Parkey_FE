
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
            <Card.Title>129 South Street</Card.Title>
           
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8">
                  Some quick example text to build on the card title and make up the bulk of
                the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf
                sdfhdskjh sdkjhfkds kjhdsk dsjkfd jkhdsf fjhjdsk jkhk dskjbkfjds sdkjhfkds.
                Some quick example text to build on the card title and make up the bulk of
                the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf
          <div className="row">

                    <div className="col-sm-12 col-md-4 col-lg-4">
                      <div className="sub-title">
                        Location
                  </div>
                      <p>129 South Street</p>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4">
                      <div className="sub-title">
                        Listing Start Date
                  </div>
                      <p>
                        12 Jan 2019
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
                <div className="count-down-div">
              <div className="count-down-text">Parking Ended at</div>
              <div className="count-down">12 Jan 2019 02:00 PM</div>
              <div className="count-down-text">Billed Amount</div>
              <div className="count-down">200 $</div>
             
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