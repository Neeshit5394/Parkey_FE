import axios from "axios";
import * as actionTypes from "./actionTypes";
export const getAllListings = id => async dispatch => {
  try {
    let { data } = await axios.get(`http://localhost:8080/listings/${id}`);
    if (data) {
      dispatch({
        type: actionTypes.GET_LISTIINGS,
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
