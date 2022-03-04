import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Login } from '../pages/Login'
// import { Layout } from './containers/Layout'
// import { Login } from './containers/Login'
import { RecoveryPassword } from '../pages/RecoveryPassword'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import '../styles/global.css'
import { SendEmail } from '../pages/SendEmail'
import { NewPassword } from '../pages/NewPassword'
import { MyAccount } from '../pages/MyAccount'
import { CreateAccount } from '../pages/CreateAccount'
import { Checkout } from '../pages/Checkout'
import { Orders } from '../pages/Orders'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="recovery-password" element={<RecoveryPassword />} />
          <Route path='send-email' element={<SendEmail/>} />
          <Route path='new-password' element={<NewPassword/>} />
          <Route path="account" element={<MyAccount/>} />
          <Route path='signup' element={<CreateAccount/>} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="orders" element={<Orders/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
    
  )
}
