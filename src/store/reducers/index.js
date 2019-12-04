import { combineReducers } from "redux";
import authReducer from "./authReducer";
import UIReducer from "./UIReducer";

export default combineReducers({ 
    authState: authReducer ,
    uiState:UIReducer
});
