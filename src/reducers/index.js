import { combineReducers } from "redux";
const authReducer = (isAuth = null, action) => {
  if (action.type === "SELECTED") {
    return action.payload;
  }
  return isAuth;
};

export default combineReducers({ auth: authReducer });
