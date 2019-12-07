import * as actionTypes from "../actions/actionTypes"

import {
    updatedObject
} from "../utility";

const intialState = {
    latLng: {lat:40.7813241, lng:-73.97398820000001},
    
};

export default (state = intialState, action) => {
    switch (action.type) {

        case actionTypes.SET_LAT_LANG:
            return updatedObject(state, {
                latLng: action.payload,
            })

        default:
            return state;
    }
};
