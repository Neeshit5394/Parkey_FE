export default (state = [], action) => {
  switch (action.type) {
    case "SIGN_IN":
      return state.concat([action.payload]);
    default:
      return state;
  }
};
