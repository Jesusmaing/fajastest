import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from "./api/Api";
import FYFFooter from "./components/FYFFooter";
import Header from "./components/Header";
import Product from "./components/Product";
import Home from "./Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Success  from "./pages/Sucess";
import Cancel from "./pages/Cancel";



// import Custom Css
import "./assets/css/style.css"
import "./assets/css/color.css"
import "./assets/css/responsive.css"
import "./assets/css/animate.min.css"

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <FYFFooter />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/success",
        element: <Success/>,
      },
      {
        path: "/cancel",
        element: <Cancel/>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
