import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import SignInJoinNowModal from "./SigIn-JoinNow-Tabs";
import SimpleMap from "./SimpleMap";
import SearchResult  from "./search-result";
import "../App.css";


class SearchParking extends Component {
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
            <div className="searchParking-container jumbotron">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-8 map-container">
                            <SimpleMap/>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 parking-search-result-container fixed-content">
                            <SearchResult title="Gurdwara Temple Parking" description="Parking hours between 2 AM to 8 PM " />
                            <SearchResult title="DMart Parking" description="Parking hours between 2 PM to 3 PM" />
                            <SearchResult title="Apna Bazar Parking" description="Parking hours between 1 PM to 6 PM" />
                            <SearchResult title="Shop Rite Parking" description="Parking hours between 2 PM to 4 PM" />
                        </div> 

                    </div>
            </div>
        )        
    }
        
}

export default withRouter(SearchParking);