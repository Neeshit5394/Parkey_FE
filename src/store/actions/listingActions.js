import axios from "axios";
import * as actionTypes from "./actionTypes";
export const getUserListings = id => async dispatch => {
  try {
    let { data } = await axios.get(`http://localhost:8080/listings/${id}`);
    if (data) {
      dispatch({
        type: actionTypes.GET_USER_LISTIINGS,
        payload: data
      });
    }
  } catch (e) {
    console.log(e);
  }
};
export const updateListings = (oldList, newData) => {
  let newList = oldList.concat(newData);
  return {
    type: actionTypes.UPDATE_LISTINGS,
    payload: newList
  };
};
export const getAllListings = (latLng) => async dispatch => {
  // 
  let { data } = await axios.get(`http://localhost:8080/listings/${latLng.lat}/${latLng.lng}/100`);

  try {
    if (data) {
      dispatch({ type: actionTypes.GET_ALL_LISTINGS, payload: data });
    }
  } catch (e) {
    console.log(e);
  }
};
