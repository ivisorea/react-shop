import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const Layout = ({ children }) => {
  return (
    <div className='Layout'>
        <Header/>
        <Outlet/>
    </div>
  )
}
