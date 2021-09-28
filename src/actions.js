export const setName = (name) => ({
  type: "SET_NAME",
  payload: { name }
});

export const setNameWithDelay = (name, delayDuration) => (dispatch) => {
  setTimeout(() => {
    dispatch(setName(name));
  }, delayDuration);
};
