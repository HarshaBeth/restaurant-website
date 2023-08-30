import React from 'react'
import Link from 'next/link';

const Menu = () => {
  return (
    <div id='4' className='h-screen w-full bg-cover bg-center bg-[url("/menu_bg.jpg")] bg-neutral-600 bg-blend-multiply'>
       
        <div className='h-full text-gray-400 justify-center flex flex-col text-7xl max-sm:items-center sm:pl-20 md:pl-32 lg:pl-40 space-y-12'>
            
            <Link href={"/bar"} className='w-80 !font-serif hover:text-gray-950 bg-left-bottom bg-gradient-to-r from-gray-950 to-gray-950 bg-[length:0%_7px] bg-no-repeat hover:bg-[length:99%_7px] transition-all duration-300 ease-in-out'>
                Bar Menu
            </Link>
            
            <Link href={"/food"} className='w-96 !font-serif hover:text-gray-950 bg-left-bottom bg-gradient-to-r from-gray-950 to-gray-950 bg-[length:0px_7px] bg-no-repeat hover:bg-[length:95%_7px] transition-all duration-300 ease-in-out'>
                Food Menu
            </Link>
            
        </div>

    </div>
  )
}

export default Menu