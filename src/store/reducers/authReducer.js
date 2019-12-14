import * as actionTypes from "../actions/actionTypes";

import {
  updatedObject
} from "../utility";

const intialState = {
  authError: null,
  currentUser: null,
  userData: null,
  isAuth: null,
  password_update_status: null,
  update_password_err: null
};

export default (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_ERROR:
      return updatedObject(state, {
        authError: action.payload
      });

    case actionTypes.RESET_AUTH_FLAG:
      return updatedObject(state, {
        authError: null
      });

    case actionTypes.SIGNOUT_SUCCESS:
      return updatedObject(state, {
        currentUser: null
      });

    case actionTypes.SIGNOUT_ERROR:
      return updatedObject(state, {
        authError: action.payload
      });

    case actionTypes.CURRENT_USER:
      return updatedObject(state, {
        currentUser: action.payload
      });

    case actionTypes.GET_USER_DATA:
      return updatedObject(state, {
        userData: action.payload
      });

    case actionTypes.UPDATE_PASSWORD:
      return updatedObject(state, {
        password_update_status: true
      })

    case actionTypes.UPDATE_PASSWORD_ERROR:
      return updatedObject(state, {
        password_update_status: false,
        update_password_err: action.payload
      })
      
    case actionTypes.RESET_UPDATE_PASSWORD_FLAG:
      return updatedObject(state, {
        password_update_status: null,
        update_password_err: null
      })

    default:
      return state;
  }
};
