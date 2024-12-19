import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/Home";
import "./App.css";
import ProductsPage, { loader as productsLoader } from "./pages/Products";
import ProductDetailPage, {
  loader as productDetailLoader,
} from "./pages/ProductDetail";
import RootLayout from "./pages/Root";
import ProductsRootLayout from "./pages/ProductsRoot";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsRootLayout />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
            loader: productsLoader,
          },
          {
            path: ":productId",
            element: <ProductDetailPage />,
            loader: productDetailLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
