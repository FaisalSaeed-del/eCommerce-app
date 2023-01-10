import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  // create reducers

  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
