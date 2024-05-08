
import React, { useEffect } from "react";
import {
  Link,
  Navigate,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import About from './components/pages/About';
import RootLayout from './layouts/RootLayout';
import Explore from "./components/pages/Explore";
import Product from "./components/pages/Product";
import ProductDetail from "./components/pages/ProductDetail";
import Cart from "./components/pages/Cart";
import Payment from "./components/pages/Payment";
import axios from 'axios';
import LoginSignup from "./components/pages/LoginSignup";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./slices/userSlice";

axios.defaults.baseURL = 'https://adya-e-commerce.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:8080/api';

function App() {
    const user = useSelector((state) => state.user.auth);
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    path: "/",
                    element: <Explore />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path:"product",
                    element: <Product />,
                },
                {
                    path: "product/:id",
                    element: <ProductDetail />,
                },
                {
                    path: "cart",
                    element: <Cart />,
                },
                {
                    path: "payment",
                    element: <Payment />,
                }
            ],
        },
        {
            path: "login-signup",
            element: <LoginSignup />,
        },
        {
            path: "*",
            element: <Navigate to="/" />,
        },
    ]);

    const dispatch = useDispatch();

    useEffect(() => {
        const userFromLS = JSON.parse(localStorage.getItem('user'));
        console.log("from App",userFromLS);
        if (userFromLS && !user) {
            dispatch(setAuth(userFromLS));
        }
    },[dispatch, user]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
