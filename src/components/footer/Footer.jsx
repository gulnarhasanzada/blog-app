import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white p-10'>
        <div className='flex flex-row flex-wrap gap-5 justify-center'>
          <div className='bg-white rounded-full p-2 text-gray-900 cursor-pointer'>
            <FaFacebook />
          </div>
          <div className='bg-white rounded-full p-2 text-gray-900 cursor-pointer'>
            <FaInstagram />
          </div>
          <div className='bg-white rounded-full p-2 text-gray-900 cursor-pointer'>
            <FaTwitter />
          </div>
          <div className='bg-white rounded-full p-2 text-gray-900 cursor-pointer'>
            <FaYoutube />
          </div>
        </div>
        <div className='flex flex-row justify-center mt-5'>
          &copy; 2024
        </div>
    </footer>
  )
}

export default Footer
