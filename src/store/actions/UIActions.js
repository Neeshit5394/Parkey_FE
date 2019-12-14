import * as actionTypes from "./actionTypes";

export const toggleAuthModal = () => dispatch => {
  dispatch({
    type: actionTypes.TOGGLE_AUTH_MODEL,
  });
};
export const toggleReserveSpot = (parkingSpot) => dispatch => {
  dispatch({
    type: actionTypes.TOGGLE_RESERVE_SPOT_MODAL,
    payload:parkingSpot
  });
};