import { createSlice } from '@reduxjs/toolkit';

// Create a slice
export const exploreSlice = createSlice({
  name: 'explore',
  initialState: {
    productsData: [],
  },
  reducers: {
    setInitialData: (state, action) => {
      state.productsData = action.payload;
    },
  },
});

export const { setInitialData } = exploreSlice.actions;

export default exploreSlice.reducer;
