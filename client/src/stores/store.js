import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import exploreReducer from '../slices/exploreSlice'
import userReducer from '../slices/userSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    explore: exploreReducer,
    user: userReducer,
  }
})