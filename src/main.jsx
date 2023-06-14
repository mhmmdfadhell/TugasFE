import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import ProductPage from "./pages/product"
import DetailProduct from './pages/detailproduct';
import DetailProductPages from './pages/detailproduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    // errorElement:<ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <ProductPage/>,
  },
  {
    path: "/detailproduct",
    element: <DetailProductPages/>,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)