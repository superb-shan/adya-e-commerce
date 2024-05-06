
import './App.css';
import React from "react";
import {
  Link,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import About from './components/pages/About';
import Home from './components/pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
