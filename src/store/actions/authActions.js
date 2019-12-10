import firebase from "../../Firebase";
import axios from "axios";
import * as actionTypes from "./actionTypes";

export const signIn = cred => async dispatch => {
  try {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(cred.email, cred.password);
    // To do :write an Api calling for fetching user database in MongoDB
    const payload = {
      email: user.email,
      uid: user.uid
    };
    dispatch({
      type: actionTypes.SIGN_IN,
      payload: payload
    });
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
    // To do :write an Api calling for updating user database in MongoDb
    // console.log(firebase.auth().currentUser.getIdToken());
    if (user) {
      // console.log(cred);
      await axios.post("http://localhost:8080/users", {
        firstName: cred.firstName,
        lastName: cred.lastName,
        email: user.email,
        phnumber: Number(cred.phnumber),
        id: user.uid
      });
    } else {
      console.log("error");
    }
    dispatch({
      type: actionTypes.SIGN_UP,
      payload: user
    });
    dispatch({
      type: actionTypes.TOGGLE_AUTH_MODEL
    });
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

export const getAuthStatus = () => dispatch => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: actionTypes.AUTH_STATUS,
        payload: true
      });
      dispatch({
        type: actionTypes.SIGN_IN,
        payload: user
      });
    } else {
      dispatch({
        type: actionTypes.AUTH_STATUS,
        payload: false
      });
    }
  });
};
export const updatePhoneNumber = async (id, newNumber) => {
  console.log(id);
  console.log(newNumber);
  try {
    await axios.patch(`http://localhost:8080/users/${id}`, {
      phnumber: newNumber
    });
  } catch {
    console.log("an error ocurred");
  }
};
