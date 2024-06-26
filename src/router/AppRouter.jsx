import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../components/layout/Layout'
import Home from '../pages/home/Home'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
        </Route>
    </Routes>
  )
}

export default AppRouter
