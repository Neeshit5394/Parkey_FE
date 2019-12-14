import * as actionTypes from "../actions/actionTypes";

import { updatedObject } from "../utility";

let initialState = {
  userListings: null,
  allListings: null,
  error:null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_LISTIINGS:
      return updatedObject(state, {
        userListings: action.payload
      });
    case actionTypes.UPDATE_LISTINGS:
      return updatedObject(state, {
        userListings: action.payload
      });
    case actionTypes.GET_ALL_LISTINGS_ERROR:
      return updatedObject(state, {
        allListings: [],
        error:action.payload
      });
    case actionTypes.GET_ALL_LISTINGS:
      return updatedObject(state, {
        allListings: action.payload,
        error:null,
      });
    case actionTypes.DELETE_LISTING:
      return updatedObject(state, {
        userListings: state.userListings.filter((item)=>{
            return item._id!==action.payload
          }),
        error:null,
      });
    case actionTypes.DELETE_LISTING_ERROR:
      return updatedObject(state, {
        error: action.payload,
        error:null,
      });
    default:
      return state;
  }
};
