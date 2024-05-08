import { createSlice } from '@reduxjs/toolkit';

// Create a slice
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    auth: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

// Export actions
export const { setAuth } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;