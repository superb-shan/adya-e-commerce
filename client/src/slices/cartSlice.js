import { createSlice } from '@reduxjs/toolkit';

// Create a slice
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    addMultipleToCart: (state, action) => {
        console.log("action.payload",action.payload);
      state.cartItems = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, addMultipleToCart } = cartSlice.actions;

export default cartSlice.reducer;