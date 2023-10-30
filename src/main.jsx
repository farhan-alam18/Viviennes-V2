import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'

// Page Imports 
import Layout from "./Layout"
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Collections from './pages/Collections/Collections'
import Contact from './pages/Contact/Contact'
import Account from './pages/Account/Account'
import Cart from './pages/Cart/Cart'

// Creating Router -> Routing Paths 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="shop" element={<Shop/>} />
      <Route path="collections" element={<Collections/>} />
      <Route path="about" element={<Contact/>} />
      <Route path="account" element={<Account/>} />
      <Route path="cart" element={<Cart/>} />
    </Route>

  )

)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
