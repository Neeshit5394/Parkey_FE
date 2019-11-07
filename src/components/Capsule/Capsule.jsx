import React, { Component } from 'react';
import NavBar from "../NavBar/index"

class Capsule extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        hasError:false,
    };
}
render() {
    if (this.state.hasError){
      return(
        <div>Something went Wrong</div>
      )
    }
    else{
      return(
        <NavBar/>
      )
    }
    
  }
}

export default Capsule;
