import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import Shop from "./shop/Shop";
import SingleProduct from "./shop/SingleProduct";
import CartPage from "./shop/CartPage";
import SingleBlog from "./blog/SingleBlog";
import About from "./about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog></SingleBlog>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "shop/:id",
        element: <SingleProduct></SingleProduct>,
      },
      {
        path: "/cart-page",
        element: <CartPage></CartPage>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
