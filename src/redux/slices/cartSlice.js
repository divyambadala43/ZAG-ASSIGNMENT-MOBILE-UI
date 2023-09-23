// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      const newItem = action.payload;
      const cartItemId = `${newItem.id}-${newItem.name}-${newItem.size}`;
      const cartItem = { ...newItem, id: cartItemId };
      const existingItem = state.items.find(
        (item) =>
          // item.id === newItem.id &&
          // item.size === newItem.size &&
          item.id === cartItemId
      );
      console.log(state);
      console.log(existingItem);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(cartItem);
      }
      console.log(newItem);
    },
    removeProductFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    decreaseQuantity: (state, action) => {
      const itemIdToDecrease = action.payload;
      const itemToDecrease = state.items.find(
        (item) => item.id === itemIdToDecrease
      );

      if (itemToDecrease) {
        if (itemToDecrease.quantity > 1) {
          itemToDecrease.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== itemIdToDecrease.id
          );
        }
      }
    },
    increaseQuantity: (state, action) => {
      const itemIdToIncrease = action.payload;
      const itemToIncrease = state.items.find(
        (item) => item.id === itemIdToIncrease
      );

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
