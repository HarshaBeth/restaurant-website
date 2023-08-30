'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import close from '../Images/close.png';
import drinksIcon from '../Images/beer.png';

//Mobile view
function MobileNav({open, setOpen}) {
    return(
      <div className={`absolute top-0 left-0 w-screen bg-black transform ${open ? "-translate-y-0": "-translate-y-full" } transition-transform duration-300 ease-in-out filter`} >
        <div className='flex flex-col  items-center pt-24 text-white min-h-screen text-2xl'>
            <Link href={ "/" } className='hover:text-yellow-200 hover:bg-gray-800 w-screen py-4 text-center !font-sans'>Home</Link>       
            <Link href={ "#3" } className='hover:text-yellow-200 hover:bg-gray-800 w-screen py-4 text-center !font-sans'>Contact Us</Link>
            <Link href={ "/#7" } className='hover:text-yellow-200 hover:bg-gray-800 w-screen py-4 text-center !font-sans'>Book Table</Link>
        </div>
  
      </div>
    )
  }

const FoodNavbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <div>

        
        {/* Navbar */}
        <div className='bg-black h-28 flex justify-between  items-center fixed top-0 px-28 z-50 w-screen'>
                
                <div className='lg:hidden' onClick={() => setOpen(!open)}>
                    <MobileNav open={open} setOpen={setOpen}/>
                </div>


                <div className='text-white text-4xl font-bold'>
                    GERÍCHT
                </div>

                {/* Hamburger button for smaller screens */}
                <div className='lg:hidden h-8 relative'>
                    <button onClick={() => setOpen(!open)} >

                        {open ? (
                        <>
                            <Image src={close} width={30} height={30}/>
                        </>
                        ) : (
                        <Image 
                            src={drinksIcon}
                            width={35}
                            height={35}
                        />
                        )
                        }
                        
                    </button>
                </div>

                <div className='text-white space-x-9  hidden lg:flex px-24 font-medium pl-20 pr-32'>
                    <Link href={ "/" } className='hover:text-yellow-200 !font-serif text-xl'>Home</Link>       
                    <Link href={ "#3" } className='hover:text-yellow-200 !font-serif text-xl'>Contact Us</Link>       
                </div>

                <div className='text-white  hidden lg:flex space-x-3 text-base items-center font-sans font-semibold'>   
                    <Link href={ "/#7" } className='hover:text-yellow-200 text-2xl'>Book Table</Link>
                </div>
            </div>
    </div>
  )
}

export default FoodNavbar