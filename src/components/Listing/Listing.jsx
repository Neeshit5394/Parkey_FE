import React, { Component } from 'react';
// import Styled from "./styled";

class Listing extends Component { 
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    console.log('Listing mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('Listing getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('Listing getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('Listing did update');
  }

  componentWillUnmount = () => {
    console.log('Listing will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
       <React.Fragment>
         Test content
       </React.Fragment>
    );
  }
}

export default Listing;