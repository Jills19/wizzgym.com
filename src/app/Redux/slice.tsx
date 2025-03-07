"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Type definition for the state
interface CartState {
  items: any[];
}

const longString =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Function to generate a random string from a given string
function getRandomString(longString: string, length: any) {
  const start = Math.floor(Math.random() * (longString.length - length));
  const randomString = longString.substring(start, start + length);
  return randomString;
}

// Safely get cart data from localStorage (ensure it's on the client side)
const initialState: CartState = { items: [] };

// Create a slice for the cart state
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addState: (state, action: PayloadAction<any>) => {
      state.items = action.payload;
    },
    addToCart: (state, action: PayloadAction<any>) => {
      const newItem = {
        ...action.payload,
        id: action.payload.name + getRandomString(longString, 20),
      };
      state.items.push(newItem);

      localStorage.setItem("cart", JSON.stringify(state.items)); // Update localStorage
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove item by ID

      localStorage.setItem("cart", JSON.stringify(state.items)); // Update localStorage
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart"); // Remove cart from localStorage
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, clearCart, addState } =
  cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
