import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push({
        ...action.payload,
        total_price: action.payload.prod_price * action.payload.qty,
      });
    },
    increaseQuantity: (state, action) => {
      let product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.qty += 1;
        product.total_price = product.prod_price * product.qty;
      }
    },
    decreaseQuantity: (state, action) => {
      let product = state.items.find((item) => item.id === action.payload.id);
      if (product && product.qty > 1) {
        product.qty -= 1;
        product.total_price = product.prod_price * product.qty;
      }
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addToCart, increaseQuantity, decreaseQuantity, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
