import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeProductFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addProductToCart, removeProductFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
