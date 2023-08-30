'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import burger from '../Images/burger.png';
import close from '../Images/close.png';


//Mobile view
function MobileNav({open, setOpen}) {
  return(
    <div className={`absolute top-0 left-0 w-screen bg-gray-950 transform ${open ? "-translate-y-0": "-translate-y-full" } transition-transform duration-300 ease-in-out filter`} >
      <div className='flex flex-col  items-center pt-24 text-white min-h-screen text-2xl'>
        <Link href={ "#1" } className='hover:text-yellow-200 hover:bg-gray-800 w-screen py-4 text-center !font-sans'>Home</Link>  
        <Link href={ "#2" } className='hover:text-yellow-200 hover:bg-gray-800 w-screen py-4 text-center !font-sans'>History</Link>
        <Link href={ "#3" } className='hover:text-yellow-200 hover:bg-gray-800 w-screen py-4 text-center !font-sans'>Contact Us</Link>
        <Link href={ "#4" } className='hover:text-yellow-200 hover:bg-gray-800 w-screen py-4 text-center !font-sans'>Menu</Link>
        <Link href={ "#5" } className='hover:text-yellow-200 hover:bg-gray-800 w-screen py-4 text-center !font-sans'>Chef</Link>
        <Link href={ "#6" } className='hover:text-yellow-200 hover:bg-gray-800 w-screen py-4 text-center !font-sans'>Gallery</Link>
        <Link href={ "#7" } className='hover:text-yellow-200 hover:bg-gray-800 w-screen py-4 text-center !font-sans'>Book Table</Link>
      </div>

    </div>
  )
}


const Navbar = () => {
  const[open, setOpen] = useState(false);
  return (
    <div className='h-32 bg-gray-950 flex justify-between items-center px-28 fixed top-0 z-50 w-screen'>
        <div className='lg:hidden' onClick={() => setOpen(!open)}>
          <MobileNav open={open} setOpen={setOpen}/>
        </div>
        <div className='text-white text-4xl font-bold relative'>
            GERÍCHT
        </div>
        {/* Hamburger button for smaller screens */}
        <div className='lg:hidden h-7 relative'>
          <button onClick={() => setOpen(!open)} >

            {open ? (
              <>
                <Image alt="" src={close} width={30} height={30}/>
              </>
            ) : (
              <Image alt="" 
                src={burger}
                width={30}
                height={30}
              />
            )
            }
            
          </button>
        </div>

        <div className='text-white space-x-9 text-sm font-semibold pl-20 hidden lg:flex xl:text-base'>
            <Link href={ "#1" } className='hover:text-yellow-200 !font-sans'>Home</Link>  
            <Link href={ "#2" } className='hover:text-yellow-200 !font-sans'>History</Link>
            <Link href={ "#3" } className='hover:text-yellow-200 !font-sans'>Contact Us</Link>
            <Link href={ "#4" } className='hover:text-yellow-200 !font-sans'>Menu</Link>
            <Link href={ "#5" } className='hover:text-yellow-200 !font-sans'>Chef</Link>
        </div>

        <div className='text-white hidden space-x-3 text-base items-center font-sans font-semibold pl-24 lg:flex'>
            <Link href={ "#6" } className='hover:text-yellow-200'>Gallery</Link>
            <span className='text-lg px-3'>|</span>
            <Link href={ "#7" } className='hover:text-yellow-200'>Book Table</Link>
        </div>
    </div>
  )
}

export default Navbar