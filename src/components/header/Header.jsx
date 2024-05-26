import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='flex flex-col py-4'>
            <div className='text-center'>
                <h3 className='sedan-sc-regular'>THE</h3>
                <h1 className='sedan-sc-regular text-4xl'>BLOG</h1>
            </div>
        </div>
        <hr className='text-gray-200 mb-2'/>
        <hr className='text-gray-200 mb-4'/>
    </header>
  )
}

export default Header
