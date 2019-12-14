import firebase from "../../Firebase";
import axios from "axios";
import * as actionTypes from "./actionTypes";

export const signIn = cred => async dispatch => {
  try {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(cred.email, cred.password);
    dispatch({
      type: actionTypes.TOGGLE_AUTH_MODEL
    });
  } catch (error) {
    dispatch({
      type: actionTypes.AUTH_ERROR,
      payload: error.code
    });
  }
};
export const signUp = cred => async dispatch => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(cred.email, cred.password);
    if (user) {
      console.log("posting");
      let { data } = await axios.post("http://localhost:8080/users", {
        firstName: cred.firstName,
        lastName: cred.lastName,
        email: user.email,
        phnumber: cred.phnumber,
        id: user.uid
      });
      if (data) {
        dispatch({
          type: actionTypes.TOGGLE_AUTH_MODEL
        });
      }
    } else {
      console.log("An error occurred while creating account!");
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: actionTypes.AUTH_ERROR,
      payload: e.code
    });
  }
};

export const signOut = () => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({
        type: actionTypes.SIGNOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.SIGNOUT_ERROR,
        payload: err
      });
    });
};

export const resetErrorFlag = () => dispatch => {
  dispatch({
    type: actionTypes.RESET_AUTH_FLAG
  });
};

export const getCurrentUser = () => dispatch => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: actionTypes.CURRENT_USER,
        payload: user.uid
      });
    } else {
      dispatch({
        type: actionTypes.CURRENT_USER,
        payload: null
      });
    }
  });
};

export const getUserData = id => async dispatch => {
  console.log("getting");
  let { data } = await axios.get(`http://localhost:8080/users/${id}`);
  if (data) {
    dispatch({
      type: actionTypes.GET_USER_DATA,
      payload: data
    });
  }
};
export const updatePhoneNumber = async (id, newNumber) => {
  try {
    await axios.patch(`http://localhost:8080/users/${id}`, {
      phnumber: newNumber
    });
  } catch {
    console.log("an error ocurred");
  }
};
