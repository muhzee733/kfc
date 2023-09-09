import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutData: {},
  paymentMethod: null,
};

const formSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    saveFormData: (state, action) => {
      state.formData = action.payload;
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { saveFormData, savePaymentMethod } = formSlice.actions;

export default formSlice.reducer;
