import * as actionTypes from "./actionTypes";

export const toggleAuthModal = () => dispatch => {
  dispatch({
    type: actionTypes.TOGGLE_AUTH_MODEL,
  });

};