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
        <div>
          
        </div>

      </Styled.Container>
    );
  }
}

export default Rentings;