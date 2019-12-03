export default (state = {
    user: null
  }, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return {...state, user : action.payload};
      default:
        return state;
    }
  };