import firebase from "../../Firebase";
import * as actionTypes from "./actionTypes";


export const signIn = (cred) => async dispatch => {
  try {
    const {
      user
    } = await firebase.auth().signInWithEmailAndPassword(cred.email, cred.password);
    // To do :write an Api calling for fetching user database in MongoDb

    const payload = {
      email: user.email,
      uid: user.uid
    };

    dispatch({
      type: actionTypes.SIGN_IN,
      payload: payload
    });
    dispatch({
      type: actionTypes.TOGGLE_AUTH_MODEL,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.AUTH_ERROR,
      payload: error.code
    })
  }
};
export const signUp = (cred) => async dispatch => {
  try {
    const {
      user
    } = await firebase.auth().createUserWithEmailAndPassword(cred.email, cred.password);
    // To do :write an Api calling for updating user database in MongoDb

    dispatch({
      type: actionTypes.SIGN_UP,
      payload: user
    });
    dispatch({
      type: actionTypes.TOGGLE_AUTH_MODEL,
    })
  } catch (e) {
    dispatch({
      type: actionTypes.AUTH_ERROR,
      payload: e.code
    })
  }
};

export const signOut = () => async dispatch => {
  firebase.auth().signOut().then(() => {
    dispatch({
      type: actionTypes.SIGNOUT_SUCCESS
    })
  }).catch((err) => {
    dispatch({
      type: actionTypes.SIGNOUT_ERROR,
      payload:err
    })
  })
};

export const resetErrorFlag = () => dispatch => {
  dispatch({
    type: actionTypes.RESET_AUTH_FLAG,
  });

};