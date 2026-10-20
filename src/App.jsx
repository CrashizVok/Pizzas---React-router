import { Component } from "react";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Pizzas from "./pages/Pizzas.jsx";
import PizzaDetail from "./pages/PizzaDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "pizzas", element: <Pizzas /> },
      { path: "pizzas/:id", element: <PizzaDetail /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "Checkout", element: <Checkout /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}
