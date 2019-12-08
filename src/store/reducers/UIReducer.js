import * as actionTypes from "../actions/actionTypes"

import {
    updatedObject
} from "../utility";

const intialState = {
    showAuthModal: false,
    showReserveSpotModal:false,
    reserveSpotModalData:null,
};

export default (state = intialState, action) => {
    switch (action.type) {

        case actionTypes.TOGGLE_AUTH_MODEL:
            return updatedObject(state, {
                showAuthModal: !state.showAuthModal,
            })
        
        case actionTypes.TOGGLE_RESERVE_SPOT_MODAL:
            return updatedObject(state, {
                showReserveSpotModal:!state.showReserveSpotModal,
                reserveSpotModalData:action.payload,
            })

        default:
            return state;
    }
};
