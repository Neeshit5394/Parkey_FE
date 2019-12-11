import * as actionTypes from "../actions/actionTypes";

import { updatedObject } from "../utility";

let initialState = {
  listings: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LISTIINGS:
      return updatedObject(state, {
        listings: action.payload
      });
    default:
      return state;
  }
};
