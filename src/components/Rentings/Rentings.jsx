import React, { Component } from 'react';
import Styled from "./styled";
import { Card, Button, Table } from "react-bootstrap";


class Rentings extends Component {

  state = {
    hasError: false,
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.Container>
        <div className="row">

          <div className="col-sm-8 col-lg-8 col-md-8">


            <div className="row">
              <div className="col-sm-6 col-lg-6 col-md-6 card-view">
                <Card className="breakfast-card card-body">
                  <Card.Body>
                    <Card.Title>Breakfast</Card.Title>
                    <Card.Text>
                      Breakfast kick-starts your metabolism, helping you burn calories throughout the day.
                    </Card.Text>
                    <Button variant="primary" className="service-btn" >Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-6 col-lg-6 col-md-6 card-view">
                <Card className="lunch-card card-body">

                  <Card.Body>
                    <Card.Title>Lunch</Card.Title>
                    <Card.Text>
                      Lunch re-energizes and can raise blood sugar levels when concentration are flagging.
        </Card.Text>
                    <Button variant="primary" className="service-btn" >Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-sm-6 col-lg-6 col-md-6 card-view">
                <Card className="dinner-card card-body">
                  <Card.Body>
                    <Card.Title>Dinner</Card.Title>
                    <Card.Text>
                      Dinner is important for our body to recover strength late in day
        </Card.Text>
                    <Button variant="primary" className="service-btn" >Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-6 col-lg-6 col-md-6 card-view">
                <Card className="week-meal card-body">

                  <Card.Body>
                    <Card.Title>Week Meal</Card.Title>
                    <Card.Text>
                      Your this week meal plan detailing about the targeted calories.
        </Card.Text>
                    <Button variant="primary" className="service-btn" >Go somewhere</Button>
                  </Card.Body>
                </Card>

              </div>

            </div>
          </div>



          <div className="col-sm-4 col-lg-4 col-md-4">
            <Table>
              <thead>
                <tr>
                  <th> Targeted Nutrients</th>
                  <th>   Energy in Kcal</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td> Carbohydrates</td>
                  <td>200 cal</td>
                </tr>
                <tr>
                  <td> Fats</td>
                  <td>200 cal</td>
                </tr>
                <tr>
                  <td> Protiens</td>
                  <td>200 cal</td>
                </tr>
                <tr>
                  <td> Vitamins A</td>
                  <td>200 cal</td>
                </tr>
             
                <tr>
                  <td>Calcium</td>
                  <td>200 cal</td>
                </tr>
              </tbody>
            </Table>
            <div className="cal-disp">
            <div className="cal-val">
                <span className="metric-val">600</span> <span className="metric-unit">kcal</span>
              </div>
            <div className=" cal-desc">
                 Daily Calories Targeted
              </div>
            
          
            </div>
          </div>
        </div>

      </Styled.Container>
    );
  }
}

export default Rentings;