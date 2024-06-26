import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import logger from "redux-logger";

const Store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;
