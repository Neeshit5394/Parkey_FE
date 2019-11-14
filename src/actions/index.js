export const authState = isAuth => {
  return {
    type: "SELECTED",
    payload: isAuth
  };
};
