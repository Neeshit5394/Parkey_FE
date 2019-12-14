import * as actionTypes from "../actions/actionTypes";

import { updatedObject } from "../utility";

let initialState = {
  userListings: null,
  allListings: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_LISTIINGS:
      return updatedObject(state, {
        userListings: action.payload
      });
    case actionTypes.UPDATE_LISTINGS:
      return updatedObject(state, {
        userListings: action.payload
      });
    case actionTypes.GET_ALL_LISTINGS:
      return updatedObject(state, {
        allListings: action.payload
      });

    default:
      return state;
  }
};
