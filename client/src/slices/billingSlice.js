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
            state.total = state.subtotal + state.shipping;
        },
        setShipping: (state, action) => {
            state.shipping = action.payload;
        },
        setBilling: (state, action) => {
            state.subtotal = action.payload.subPrice;
            state.shipping = action.payload.shippingPrice;
            state.total = action.payload.totalPrice;
        }
    },
});

// Export actions
export const { setSubtotal, setShipping, setBilling } = billingSlice.actions;

// Export the reducer
export default billingSlice.reducer;
