import firebase from "../../Firebase";
import axios from "axios";
import * as actionTypes from "./actionTypes";

export const signIn = cred => async dispatch => {
  try {
    const {
      user
    } = await firebase
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
    const {
      user
    } = await firebase
      .auth()
      .createUserWithEmailAndPassword(cred.email, cred.password);
    if (user) {
      let {
        data
      } = await axios.post(`${process.env.REACT_APP_BE_URL}/users`, {
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
  let {
    data
  } = await axios.get(`${process.env.REACT_APP_BE_URL}/users/${id}`);
  if (data) {
    dispatch({
      type: actionTypes.GET_USER_DATA,
      payload: data
    });
  }
};

export const updatePassword = (oldPassword, newPassword, email) => async dispatch => {
  let reauthenticate = async (oldPassword) => {

    let user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      email, oldPassword)
    return user.reauthenticateAndRetrieveDataWithCredential(cred)

  }
  try {
    let reauthentic = await reauthenticate(oldPassword);
    let user = firebase.auth().currentUser;
    user.updatePassword(newPassword).then(() => {
      dispatch({
        type: actionTypes.UPDATE_PASSWORD
      })
    }).catch((err) => {
      dispatch({
        type: actionTypes.UPDATE_PASSWORD_ERROR,
        payload: err
      })
    })
  } catch (err) {
    dispatch({
      type: actionTypes.UPDATE_PASSWORD_ERROR,
      payload: err
    })
  }
}
export const resetUpdatePasswordFlag = () => {
  return {
      type: actionTypes.RESET_UPDATE_PASSWORD_FLAG
  }
}