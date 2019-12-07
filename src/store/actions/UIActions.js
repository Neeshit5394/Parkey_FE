import * as actionTypes from "./actionTypes";

export const toggleAuthModal = () => dispatch => {
  dispatch({
    type: actionTypes.TOGGLE_AUTH_MODEL,
  });
};
export const toggleReserveSpot = () => dispatch => {
  dispatch({
    type: actionTypes.TOGGLE_RESERVE_SPOT_MODAL,
  });
};