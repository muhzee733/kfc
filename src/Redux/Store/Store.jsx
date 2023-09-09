import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Slices/UserSlice";
import cartReducer from "../Slices/Cart";
import CheckoutForm from "../Slices/CheckoutSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    cart: cartReducer,
    checkout: CheckoutForm,
  },
});
