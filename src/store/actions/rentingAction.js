import * as actionTypes from "./actionTypes";
import axios from "axios";

export const endReservation = reservation_Object => dispatch => {
  reservation_Object.user_rent_end_date = new Date().toDateString();
  dispatch({
    type: actionTypes.END_RESERVATION,
    payload: reservation_Object
  });
};

export const reserveSpot = (listingId, renterId) => async dispatch => {
  let { data } = await axios.patch(
    `http://localhost:8080/listings/${listingId}/${renterId}`
  );
  if (data) dispatch({ type: actionTypes.RESERVE_SPOT, payload: false });
};

export const getUserRentings = id => async dispatch => {
  let { data } = await axios.get(`http://localhost:8080/rentings/${id}`);
  if (data) dispatch({ type: actionTypes.GET_USER_RENTINGS, payload: data });
};
