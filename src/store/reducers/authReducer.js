import * as actionTypes from "../actions/actionTypes";

import { updatedObject } from "../utility";

const intialState = {
  authError: null,
  profile: null
};

export default (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      let newState = updatedObject(state, {
        profile: action.payload
      });
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;

    case actionTypes.SIGN_UP:
      return updatedObject(state, {
        profile: action.payload
      });
    case actionTypes.AUTH_ERROR:
      return updatedObject(state, {
        authError: action.payload
      });

    case actionTypes.RESET_AUTH_FLAG:
      return updatedObject(state, {
        authError: null
      });

    case actionTypes.SIGNOUT_SUCCESS:
      return updatedObject(state, {
        profile: null
      });
    case actionTypes.SIGNOUT_ERROR:
      return updatedObject(state, {
        authError: action.payload
      });

    default:
      return state;
  }
};
