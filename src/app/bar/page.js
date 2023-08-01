import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center bg-[url("/BG_small.svg")]'>
        
        <div className='h-32 bg-gray-950 flex space-x-44 items-center px-28 fixed top-0 z-50 w-screen'>

            <div className='text-white text-4xl font-bold'>
                GERICHT
            </div>

            <div className='text-white flex space-x-9 text-base font-semibold pl-28'>
                <Link href={ "#1" } className='hover:text-yellow-200 !font-sans'>Home</Link>       
            </div>

            <div className='text-white flex space-x-3 text-base items-center font-sans font-semibold'>   
                <Link href={ "#7" } className='hover:text-yellow-200'>Book Table</Link>
            </div>
        </div>

    </div>
  )
}

export default page