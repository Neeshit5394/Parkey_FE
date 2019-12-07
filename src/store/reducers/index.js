import { combineReducers } from "redux";
import authReducer from "./authReducer";
import UIReducer from "./UIReducer";
import mapReducers from "./mapReducers";

export default combineReducers({ 
    authState: authReducer,
    uiState:UIReducer,
    mapState:mapReducers
});
