
import React from "react";
import {
  Link,
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
        path: "*",
        element: <Explore />,
    },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
