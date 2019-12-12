import React from "react";
import Styled from "./styled";
import { withRouter } from "react-router-dom";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { setLatLang, selectAddress } from "../../store/actions";
import { connect } from "react-redux";

class ListingSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      placeholder: "Enter an address, neighborhood, city or ZIP code",
      suggestionsBox: false,
      selectedAddress: ""
    };
  }

  handleChange = address => {
    if (address === "" || address === undefined) {
      this.setState({
        suggestionsBox: false
      });
    } else {
      this.setState({
        suggestionsBox: true,
        selectedAddress: ""
      });
    }
    this.setState({ address: address });
  };
  handleSelect = async address => {
    try {
      this.setState({
        suggestionsBox: false,
        selectedAddress: address
      });
      let results = await geocodeByAddress(address);
      let latLng = await getLatLng(results[0]);
      this.props.selectAddress(address, latLng);
      this.props.setLatLang(latLng);
      this.props.history.push({
        pathname: `/parkings/${address}`,
        state: { latlang: latLng }
      });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <PlacesAutocomplete
        value={
          this.state.selectedAddress
            ? this.state.selectedAddress
            : this.state.address
        }
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({
          getInputProps,
          suggestions,
          demo = this.state.suggestionDemo,
          getSuggestionItemProps,
          loading
        }) => (
          <div>
            <Styled.SearchBar
              {...getInputProps({
                placeholder: this.state.placeholder,
                className: "location-search-input search-bar-input"
              })}
              suggestionBox={this.state.suggestionsBox}
            />

            <Styled.suggestionContainer className="autocomplete-dropdown-container ">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                // changed for demo purpose
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? {
                      backgroundColor: "#fafafa",
                      color: "black",
                      padding: "10px",
                      cursor: "pointer"
                    }
                  : {
                      backgroundColor: "#ffffff",
                      color: "black",
                      padding: "10px",
                      cursor: "pointer"
                    };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
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

const mapActionsToProps = {
  setLatLang,
  selectAddress
};

export default withRouter(connect(null, mapActionsToProps)(ListingSearchBar));
