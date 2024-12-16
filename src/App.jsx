import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import icon from "/icon.png";
// import viteLogo from "/vite.svg";
import HomePage from "./pages/Home";
import "./App.css";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
