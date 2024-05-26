import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex flex-row justify-center gap-5  sm:gap-10 flex-wrap'>
      <Link to="/" className='text-sm sm:text-lg'>Home</Link>
      <Link to="/" className='text-sm sm:text-lg'>About Us</Link>
      <Link to="/" className='text-sm sm:text-lg'>Contact</Link>
    </div>
  )
}

export default Nav
