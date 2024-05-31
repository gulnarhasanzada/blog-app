import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex flex-row justify-center gap-5  sm:gap-10 flex-wrap'>
      <Link to="/" className='text-sm sm:text-md'>Home</Link>
      <Link to="/" className='text-sm sm:text-md'>About Us</Link>
      <Link to="/" className='text-sm sm:text-md'>Contact</Link>
    </div>
  )
}

export default Nav
