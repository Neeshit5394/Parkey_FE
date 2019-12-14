import * as actionTypes from "../actions/actionTypes";

import { updatedObject } from "../utility";

const intialState = {
  available: null,
  userRentings: null
};

export default (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.RESERVE_SPOT:
      return updatedObject(state, {
        available: action.payload
      });
    case actionTypes.GET_USER_RENTINGS:
      return updatedObject(state, {
        userRentings: action.payload
      });
    case actionTypes.UPDATE_RENTINGS:
      return updatedObject(state, {
        userRentings: action.payload
      });
    default:
      return state;
  }
};
