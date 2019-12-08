import { Card, Accordion, Button } from "react-bootstrap"
import React, { Component } from 'react';
import Styled from "./styled";
import { connect } from "react-redux";


class AccordianCard extends Component {
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
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" className="header-toggle" eventKey={this.props.detail.id}>
              {this.props.detail.location_name} {this.props.detail.date}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={this.props.detail.id}>
            <Card.Body>
            <Styled.Listing>
              <div className="heading">
                Description
              </div>
              <hr/>
              <p>
              {this.props.detail.description}
              </p>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="heading">
               Location
              </div>
              <p>
              {this.props.detail.location_name}
              </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="heading">
               Time Remaining
              </div>
            
              <p>
              2:30
              </p>
                </div>
              </div>
            
            
            </Styled.Listing>
              
             
              
              

              <footer className="pull-right">
                <Button className="secondary" variant="danger">Delete</Button>
              </footer>
            </Card.Body>

          </Accordion.Collapse>

        </Card>
      </Styled.Container>
    );
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {

//     deleteCalorie:(mealId) => dispatch(deleteCalorie(mealId))
//   };
// }
// connect(null , mapDispatchToProps)
export default AccordianCard