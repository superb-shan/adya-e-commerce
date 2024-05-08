import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import exploreReducer from '../slices/exploreSlice'
import userReducer from '../slices/userSlice'
import cartReducer from '../slices/cartSlice'
import billingReducer from '../slices/billingSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    explore: exploreReducer,
    user: userReducer,
    cart: cartReducer,
    billing: billingReducer,
  }
})