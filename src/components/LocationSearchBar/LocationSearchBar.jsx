import React from 'react';
import Styled from "./styled";
import { withRouter } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {setLatLang } from "../../store/actions";
import { connect } from "react-redux";
// const sampleLocationData = require('../sampleLocation.json');
// const sampleLocationLatLang = {
//   "SoHo, Manhattan, New York, NY, USA":{
//     "lat": 40.723301,
//     "lng": -74.00298829999997
//   },

//   "Secaucus, NJ, USA":{
//         "lat": 40.7895453,
//         "lng": -74.05652980000002
//   },

//   "Staten Island, NY, USA":{
//     "lat": 40.5795317,
//     "lng": -74.15020070000003
//   },
//   "St. Patrick's Cathedral, 5th Avenue, New York, NY, USA":{
//     "lat": 40.7584653,
//     "lng": -73.9759927
//   },

//   "Stamford, CT, USA":{
//     "lat": 41.0534302,
//     "lng": -73.5387341
//   }
// }

class LocationSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      placeholder: 'Enter an address, neighborhood, city or ZIP code',
      suggestionsBox:false,
      selectedAddress:undefined,
    };
  }

  handleChange = address => {
    this.handleChange.bind(this);
    if(address === ""||address === undefined){
          this.setState({
            //suggestionDemo:[],
            suggestionsBox:false,
          })
        }
        else{
          this.setState({
           // suggestionDemo:address.predictions,
            suggestionsBox:true,
          })
        }
    this.setState({ address });
  };
  handleSelect = address => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) =>{
      
        this.setState({
          suggestionsBox:false,
          selectedAddress:address
        })
        this.props.setLatLang(latLng)
        this.props.history.push({
          pathname:"/parkings/"+address,
          state:{
            latlang:latLng
          }
        })
      } )
      .catch(error => console.error('Error', error));

     
  };
  // constructor(props) {
  //   super(props);
  //   this.state = { address: '' ,
  //                 suggestionDemo: [], // demo purpose change in code
  //                 placeholder: 'Enter an address, neighborhood, city or ZIP code',
  //                 suggestionsBox:false,
  //                 selectedAddress:undefined,
  //                 };
  // }

  // handleChange = address => {
  //   // // for demo purpose -- code change;

  //   if(address === ""||address === undefined){
  //     this.setState({
  //       suggestionDemo:[],
  //       suggestionsBox:false,
  //     })
  //   }
  //   else{
  //     this.setState({
  //       suggestionDemo:address.predictions,
  //       suggestionsBox:true,
  //     })
  //   }
  //   // upto here 
  //   this.setState({ address });

  // };
  // // async abc(){
  // //   return sampleLocationData;
  // // }
  // // async getdemoLatLng(address){
  // //   return sampleLocationLatLang[address]
  // // }
  // handleSelect =  address => {
  //   geocodeByAddress(address) // original
  //     .then(results => (results[0]))
  //     .then(async latLng => {
  //       let lataLng= (await this.getdemoLatLng(address))

  //       this.setState({
  //         suggestionDemo:[],
  //         suggestionsBox:false,
  //         selectedAddress:address
  //       })
  //       this.props.history.push({
  //         pathname:"/parkings/"+address,
  //         state:{
  //           latlang:lataLng
  //         }
  //       })

  //       console.log('Success',getLatLng(latLng))
  //     })
  //     .catch(error => console.error('Error', error));
  // };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, demo = this.state.suggestionDemo, getSuggestionItemProps, loading }) => (
          <div>

            <Styled.SearchBar
              {...getInputProps({
                placeholder: this.state.placeholder,
                className: 'location-search-input search-bar-input',
              })}
             
              suggestionBox={this.state.suggestionsBox}
            />

            <Styled.suggestionContainer className="autocomplete-dropdown-container ">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {  // changed for demo purpose
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', color: "black", padding: "10px", cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', color: "black", padding: "10px", cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </Styled.suggestionContainer>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLatLang: (latLng) => dispatch(setLatLang(latLng))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(LocationSearchBar));