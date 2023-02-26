import { configureStore } from "@reduxjs/toolkit";
import actionsRX from "./actionsRX";

const store = configureStore({
  reducer: {
    lib: actionsRX,
  },
});

export default store;