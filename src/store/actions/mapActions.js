import * as actionTypes from "./actionTypes";

export const setLatLang = latLng => dispatch => {
  dispatch({
    type: actionTypes.SET_LAT_LANG,
    payload: latLng
  });
};
export const getListing = (latLng, radius = 5) => dispatch => {
  // axios
  //   .get(
  //     `http://192.168.216.1:8080/listings/${latLng.lat}/${latLng.lng}/${radius}`
  //   )
  //   .then(res => {
  //     // dispatch({
  //     //   type: actionTypes.GET_LISTIING,
  //     //   payload:{"latLng":latLng, "radius": radius}
  //     // });
  //   });
};

export const selectAddress = (selectedAddress, latLng) => {
  return {
    type: actionTypes.GET_SELECTED_ADDRESS,
    payload: { locationName: selectedAddress, latLng: latLng }
  };
};
