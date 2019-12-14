import * as actionTypes from "./actionTypes";

export const endReservation = reservation_Object => dispatch => {
  reservation_Object.user_rent_end_date = new Date().toDateString();
  dispatch({
    type: actionTypes.END_RESERVATION,
    payload: reservation_Object
  });
};

export const reserveSpot = (listing_id, renter_id) => dispatch => {
  


  dispatch({
    type: actionTypes.END_RESERVATION,
  //  payload: {reservation_Object}
  });
};
