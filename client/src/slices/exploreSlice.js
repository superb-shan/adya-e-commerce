import { createSlice } from '@reduxjs/toolkit';
import getRandomSubset from '../lib/array-randomizer';

// Create a slice
export const exploreSlice = createSlice({
  name: 'explore',
  initialState: {
    heroSliderProducts: [],
    featuredProducts: [],
    products: [],
    loading: true,
  },
  reducers: {
    setInitialData: (state, action) => {
      state.heroSliderProducts = getRandomSubset(action.payload.data, 5);
      state.featuredProducts = getRandomSubset(action.payload.data, 3);
      state.products = getRandomSubset(action.payload.data, 4);
      state.loading = false;
    },
  },
});

export const { setInitialData } = exploreSlice.actions;

export default exploreSlice.reducer;
