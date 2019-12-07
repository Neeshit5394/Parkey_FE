import * as actionTypes from "./actionTypes";

export const toogleAuthModal = () => dispatch => {
  dispatch({
    type: actionTypes.TOGGLE_AUTH_MODEL,
  });
};
export const toggleReserveSpot = () => dispatch => {
  dispatch({
    type: actionTypes.TOGGLE_RESERVE_SPOT_MODAL,
  });
};