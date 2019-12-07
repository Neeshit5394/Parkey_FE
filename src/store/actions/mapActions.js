import * as actionTypes from "./actionTypes";

export const setLatLang = (latLng) => dispatch => {
    dispatch({
      type: actionTypes.SET_LAT_LANG,
      payload:latLng
    });
  
  };