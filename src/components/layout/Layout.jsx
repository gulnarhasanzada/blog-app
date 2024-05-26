import React from 'react'
import Header from '../header/Header'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <Nav/>
      <hr className='mt-4'/>
      <main className='flex-1'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
