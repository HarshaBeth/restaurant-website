import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='h-32 bg-gray-950 flex space-x-44 items-center px-28 fixed top-0 z-50 w-screen'>

        <div className='text-white text-4xl font-bold'>
            GERICHT
        </div>

        <div className='text-white flex space-x-9 text-base font-semibold pl-28'>
            <Link to={ "#1" } className='hover:text-yellow-200 !font-sans'>Home</Link>  
            <Link to={ "#2" } className='hover:text-yellow-200 !font-sans'>History</Link>
            <Link to={ "/" } className='hover:text-yellow-200 !font-sans'>Contact Us</Link>
            <Link to={ "#4" } className='hover:text-yellow-200 !font-sans'>Menu</Link>
            <Link to={ "/" } className='hover:text-yellow-200 !font-sans'>Landing</Link>
        </div>

        <div className='text-white flex space-x-3 text-base items-center font-sans font-semibold'>
            <Link to={ "/" } className='hover:text-yellow-200'>Log In/Registration</Link>
            <span className='text-lg px-3'>|</span>
            <Link to={ "#7" } className='hover:text-yellow-200'>Book Table</Link>
        </div>
    </div>
  )
}

export default Navbar