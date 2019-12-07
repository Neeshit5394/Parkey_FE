import React, { Component } from 'react';
import Styled from "./styled";
import Cards from "./Cards"
import { Card } from "react-bootstrap";
import PreviousRentingCard from './PreviousRentingCard/PreviousRentingCard';

class Rentings extends Component {

  state = {
    hasError: false,
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    const dummyActiveRenting = [
      {
        "description":"Some quick example text to build on the card title and make up the bulk of the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf sdfhdskjh sdkjhfkds kjhdsk dsjkfd jkhdsf fjhjdsk jkhk dskjbkfjds sdkjhfkds. Some quick example text to build on the card title and make up the bulk of the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf",
        "price":2,
        "rent_start_date":"12 Jan 2019",
        "rent_end_date":"15 Jan 2019",
        "location":"129 South Street"
      },
    ]
    const dummyInActiveRenting = [
      {
        "description":"Some quick example text to build on the card title and make up the bulk of the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf sdfhdskjh sdkjhfkds kjhdsk dsjkfd jkhdsf fjhjdsk jkhk dskjbkfjds sdkjhfkds. Some quick example text to build on the card title and make up the bulk of the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf",
        "price":2,
        "rent_start_date":"12 Jan 2019",
        "rent_end_date":"15 Jan 2019",
        "billed_amount":200,
        "location":"129 South Street"
      },
      {
        "description":"Somedafsdfjdsfdsjbjkdsfkjds jdfhjds kdjfdsj he bulk of the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf sdfhdskjh sdkjhfkds kjhdsk dsjkfd jkhdsf fjhjdsk jkhk dskjbkfjds sdkjhfkds. Some quick example text to build on the card title and make up the bulk of the card's content. dsjdsk jksdfhkds sjdhfkds dsjkhk ds dshfjdsk dsjhdsbf",
        "price":5,
        "rent_start_date":"12 Jan 2019",
        "rent_end_date":"15 Jan 2019",
        "billed_amount":500,
        "location":"135 Cambridge Avenue"

      },
    ]
    let activeRentings = dummyActiveRenting.map((item,idx)=>{
     return <Cards key={idx} rentingDetail={item} />
    })
    let inActiveRentings = dummyInActiveRenting.map((item,idx)=>{
      return <PreviousRentingCard key={idx} rentingDetail={item} />
    })
    return (
      <Styled.Container>
        <div className="rentings">
          <h2>Active Rentings</h2>
          <hr width="70%" align="left" />
         {activeRentings}
        </div>
        <div className="rentings">
          <h2>Recent Rentings</h2>
          <hr width="80%" align="left" />
          {inActiveRentings}
        </div>
      </Styled.Container>
    );
  }
}

export default Rentings;