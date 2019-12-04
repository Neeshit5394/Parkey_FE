import * as actionTypes from "../actions/actionTypes"

import {
    updatedObject
} from "../utility";

const intialState = {
    showAuthModal: false,
};

export default (state = intialState, action) => {
    switch (action.type) {

        case actionTypes.TOGGLE_AUTH_MODEL:
            return updatedObject(state, {
                showAuthModal: !state.showAuthModal,
            })

        default:
            return state;
    }
};
