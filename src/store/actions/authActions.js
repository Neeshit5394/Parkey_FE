import firebase from "../../Firebase";
import * as actionTypes from "./actionTypes";
export const signIn = (email, password) => async dispatch => {
  try {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const payload = {
      email: user.email,
      id: user.uid
    };
    dispatch({ type: actionTypes.SIGN_IN, payload: payload });
  } catch (e) {
    console.log(e);
  }
};
export const signUp = (email, password) => async dispatch => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    // const payload = {
    //   email: user.email,
    //   id:user.id
    // }
    dispatch({ type: actionTypes.SIGN_UP, payload: user });
  } catch (e) {
    console.log(e);
  }
};
