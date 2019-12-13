import * as actionTypes from "../actions/actionTypes";

import { updatedObject } from "../utility";

const intialState = {
  // latLng: { lat: 40.7813241, lng: -73.97398820000001 },
  // The below allRentings should be an empty. For testing I have added some data
  allRentings: [
    {
      lat: 42.7813241,
      lon: -73.97398820000001,
      locationName: "129 South Street",
      details:
        " kjdsa sajdasl ajaskldjasl  jlasdlsa ljsldbas jads jasljsad asj sajdja jdaskj h asjdas sahdjsasa ssjad",
      startTime: new Date().getTime(),
      endTime: new Date().getTime(),
      price: 20,
      owner: "AsdgdnjbkUFBdbJHBR"
    },
    {
      lat: 45.7813241,
      lon: -73.97398820000001,
      locationName: "135 Cambridge Avenue",
      details:
        " kjdsa sajdasl ajaskldjasl  jlasdlsa ljsldbas jads jasljsad asj sajdja jdaskj h asjdas sahdjsasa ssjad",
      startTime: new Date().getTime(),
      endTime: new Date().getTime(),
      price: 20,
      owner: "AsdgdnjbkUFBdbJHBR"
    }
  ]
};

export default (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LAT_LANG:
      return updatedObject(state, {
        latLng: action.payload
      });
    // case actionTypes.GET_LISTIING:
    //   return updatedObject(state, {
    //     allRentings: action.payload
    //   });
    case actionTypes.GET_SELECTED_ADDRESS: {
      return updatedObject(state, {
        selectedAddress: action.payload
      });
    }
    default:
      return state;
  }
};
