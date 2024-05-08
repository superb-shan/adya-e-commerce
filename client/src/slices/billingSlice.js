import { createSlice } from '@reduxjs/toolkit';

// Create a slice for billing with subtotal, shipping and total prices
export const billingSlice = createSlice({
  name: 'billing',
  initialState: {
    subtotal: 0,
    shipping: 0,
    total: 0,
  },
  reducers: {
    setSubtotal: (state, action) => {
      state.subtotal = action.payload;
    },
    setShipping: (state, action) => {
      state.shipping = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

// Export actions
export const { setSubtotal, setShipping, setTotal } = billingSlice.actions;

// Export the reducer
export default billingSlice.reducer;
