import Image from 'next/image'
import React from 'react'
import Menu_BG from '../Images/menu_bg3.jpg';
import Link from 'next/link';

const Menu = () => {
  return (
    <div id='4'>
       
        <Image src={Menu_BG} className=' absolute w-[100%]'/>
        

        <div className='text-gray-400 pt-64 relative top-0 flex flex-col text-7xl pl-48 space-y-12'>
            
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