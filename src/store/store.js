import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";
import fetchProductReducer from "./productSlice"
const store = configureStore({
  reducer: {
    cart: cardReducer,
    fetchProduct: fetchProductReducer,
  },
});

export default store;
