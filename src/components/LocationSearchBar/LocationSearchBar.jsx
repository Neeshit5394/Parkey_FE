import React from 'react';
import Styled from "./styled";
import { withRouter } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {setLatLang, getListing } from "../../store/actions";
import { connect } from "react-redux";

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
            suggestionsBox:false,
          })
        }
        else{
          this.setState({
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
        this.props.getListing(latLng)
        this.props.history.push({
          pathname:"/parkings/"+address,
          state:{
            latlang:latLng
          }
        })
      } )
      .catch(error => console.error('Error', error));

     
  };
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
    setLatLang: (latLng) => dispatch(setLatLang(latLng)),
    getListing: (latLng,radius) => dispatch(getListing(latLng,radius))
 
  };
}

export default withRouter(connect(null, mapDispatchToProps)(LocationSearchBar));