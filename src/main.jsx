import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ProductPage from './pages/ProductPage.jsx'
import CartPage from './pages/CartPage.jsx'
import CheckOut from './pages/Checkout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path: '/CartPage',
    element: <CartPage/>
  },
  {
    path:'/Checkout',
    element: <CheckOut/>
  },
  {
    path: '*',
    element: () => <h1>Page Not Found</h1>
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
