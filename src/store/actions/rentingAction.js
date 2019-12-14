import * as actionTypes from "./actionTypes";
import axios from "axios";

export const endReservation = reservation_Object => dispatch => {
  reservation_Object.user_rent_end_date = new Date().toDateString();
  dispatch({
    type: actionTypes.END_RESERVATION,
    payload: reservation_Object
  });
};

export const reserveSpot = (
  listingId,
  renterId,
  rentingStartTime
) => async dispatch => {
  let { data } = await axios.patch(
    `${process.env.REACT_APP_BE_URL}/listings/${listingId}/${renterId}/${rentingStartTime}`
  );
  if (data) dispatch({ type: actionTypes.RESERVE_SPOT, payload: false });
};

export const getUserRentings = id => async dispatch => {
  let { data } = await axios.get(
    `${process.env.REACT_APP_BE_URL}/rentings/${id}`
  );
  if (data) dispatch({ type: actionTypes.GET_USER_RENTINGS, payload: data });
};

export const updateRentings = (oldList, removeId) => {
  let newList = oldList.filter(item => item._id != removeId);
  return {
    type: actionTypes.UPDATE_RENTINGS,
    payload: newList
  };
};
