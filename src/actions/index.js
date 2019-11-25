import firebase from "./../Firebase";
export const signIn = (email, password) => async dispatch => {
  try {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    dispatch({ type: "SIGN_IN", payload: user });
  } catch (e) {
    console.log(e);
  }
};
