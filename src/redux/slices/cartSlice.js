// Import necessary module(s)
import { createSlice } from "@reduxjs/toolkit";

// Create a slice for managing the cart state
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Reducer for adding a product to the cart
    addProductToCart: (state, action) => {
      const newItem = action.payload;
      // Generate a unique cart item ID using product ID, name, and size
      const cartItemId = `${newItem.id}-${newItem.name}-${newItem.size}`;
      const cartItem = { ...newItem, id: cartItemId };
      const existingItem = state.items.find((item) => item.id === cartItemId);

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // If it's a new item, add it to the cart
        state.items.push(cartItem);
      }
    },
    // Reducer for removing a product from the cart
    removeProductFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      // Filter out the item with the specified ID
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    // Reducer for decreasing the quantity of a product in the cart
    decreaseQuantity: (state, action) => {
      const itemIdToDecrease = action.payload;
      const itemToDecrease = state.items.find(
        (item) => item.id === itemIdToDecrease
      );

      if (itemToDecrease) {
        if (itemToDecrease.quantity > 1) {
          // Decrease the quantity if it's greater than 1
          itemToDecrease.quantity -= 1;
        } else {
          // Remove the item from the cart if the quantity is 1
          state.items = state.items.filter(
            (item) => item.id !== itemIdToDecrease.id
          );
        }
      }
    },
    // Reducer for increasing the quantity of a product in the cart
    increaseQuantity: (state, action) => {
      const itemIdToIncrease = action.payload;
      const itemToIncrease = state.items.find(
        (item) => item.id === itemIdToIncrease
      );

      if (itemToIncrease) {
        // Increase the quantity of the item
        itemToIncrease.quantity += 1;
      }
    },
  },
});

// Export the action creators and reducer from the slice
export const {
  addProductToCart,
  removeProductFromCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
