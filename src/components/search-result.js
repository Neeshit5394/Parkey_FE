import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import "../App.css";


class SearchResult extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("Coming here")
    }

    componentWillUnmount() {
       
    }

    render() {
        return(
            <div className="search-result-container jumbotron">
                <div clasName="result-title">
                    <h4>{this.props.title}</h4>
                </div>
                <div clasName="result-body">
                    <p>{this.props.description}</p>
                </div>
                <div clasName="result-footer">
                <button type="button"  className="btn btn-primary btn-md ">Reserve Spot</button>
                </div>
            </div>
        )        
    }
        
}

export default withRouter(SearchResult);