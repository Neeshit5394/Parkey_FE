import axios from "axios";
import * as actionTypes from "./actionTypes";
export const getUserListings = id => async dispatch => {
  try {
    let {
      data
    } = await axios.get(`${process.env.REACT_APP_BE_URL}/listings/${id}`);
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
  let {
    data
  } = await axios.get(`${process.env.REACT_APP_BE_URL}/listings/${latLng.lat}/${latLng.lng}/5`);

  try {
    if (data != null) {
      dispatch({
        type: actionTypes.GET_ALL_LISTINGS,
        payload: data
      });
    } else {
      throw "No Parking in this area"
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: actionTypes.GET_ALL_LISTINGS_ERROR,
      payload: e
    });
  }
};
export const deleteListing = (listing_id) => async dispatch => {
  try {
    let data = await axios.delete(`${process.env.REACT_APP_BE_URL}/listings/${listing_id}`);
    if (!data.error) {
      dispatch({
        type: actionTypes.DELETE_LISTING,
        payload: listing_id
      });
    } else {
      throw data.error
    }
  } catch (e) {
    dispatch({
      type: actionTypes.DELETE_LISTING_ERROR,
      payload: e
    });
  }
};