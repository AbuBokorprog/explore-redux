export const logger = (state) => (next) => (action) => {
  console.log("currentState =>", state.getState());
  console.log("action =>", action);
  next(action);
  console.log("updated =>", state.getState());
};
