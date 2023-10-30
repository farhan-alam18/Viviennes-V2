import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'

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
