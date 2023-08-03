import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import foodPic from '../../Images/food_img.svg';
import scrollImg from '../../Images/Scroll_img.png';
import RSpoon from '../../Images/Vector.png';
import BottleImg from '../../Images/Cocktail.svg';
import Contact_Us from '@/Components/Contact_Us';

const page = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center bg-[url("/BG_small.svg")]'>
        
        {/* Navbar */}
        <div className='h-28 flex justify-center space-x-80 items-center px-28 z-50 w-full'>

            <div className='text-white text-4xl font-bold'>
                GERÍCHT
            </div>

            <div className='text-white space-x-9 flex px-24 font-medium pl-20 pr-32'>
                <Link href={ "/" } className='hover:text-yellow-200 !font-serif text-xl'>Home</Link>       
                <Link href={ "#3" } className='hover:text-yellow-200 !font-serif text-xl'>Contact Us</Link>       
            </div>

            <div className='text-white flex space-x-3 text-base items-center font-sans font-semibold'>   
                <Link href={ "/#7" } className='hover:text-yellow-200 text-2xl'>Book Table</Link>
            </div>
        </div>


        {/* Image */}
        <div className='h-fit flex justify-center pr-12 pt-4'>
            <Image  src={foodPic} width={425}/>
        </div>

        {/* Scroll */}
        <div className=' flex flex-col space-y-4 justify-center items-center pl-96 ml-80 mb-2.5'>
            <Image src={scrollImg} className='w-px h-10'/>
            <span className='font-serif font-light text-yellow-200 text-xs'>SCROLL</span>
        </div>


        {/* Menu page */}
        <div className='h-screen bg-gray-950'>
            {/* whole thing */}
            <div className='h-screen flex flex-col items-center justify-center'>

                {/* Inner box frame */}
                <div className='flex flex-col justify-center'>

                    {/* Heading */}
                    <div className='text-white flex flex-col items-center'>
                        Menu That Fits Your Palatte
                        <Image src={RSpoon} width={37} className='pt-2 pb-3'/>
                        <span className='text-5xl text-yellow-200'>Food Menu</span>
                    </div>

                    {/* Menu */}
                    <div className='pt-10 flex flex-row items-center space-x-7'>
                        {/* Left */}
                        <div className='text-white flex flex-col items-center'>
                            <span className='text-3xl'>Indian Cuisine</span>

                            <div className='pt-8 space-y-6'>
                                {/* Each menu item */}
                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-14 text-yellow-200'>Chicken Biryani</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$6</span>
                                    </div>
                                    {/* Item Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>1 plate</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>2 persons</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-16 text-yellow-200'>Butter Chicken</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$10</span>
                                    </div>
                                    {/* Item Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>1 pot</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>3 - 4 persons</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-12 text-yellow-200'>Tandoori Chicken</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$7</span>
                                    </div>
                                    {/* Item Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>1 plate</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>4 pieces</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-9 text-yellow-200'>Naan Bread Combo</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$12</span>
                                    </div>
                                    {/* Item Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>Garlic Naan</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Butter Naan</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Kulcha Naan</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-20 mr-2.5 text-yellow-200'>Fish Curry</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$9</span>
                                    </div>
                                    {/* Item Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>1 pot</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>3 - 4 persons</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Middle */}
                        <div>
                            <Image src={BottleImg} width={275}/>
                        </div>

                        {/* Right */}
                        <div className='text-white flex flex-col items-center'>
                            <span className='text-3xl'>Chinese Cuisine</span>

                            <div className='pt-8 space-y-6'>
                                {/* Each menu item */}
                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-10 text-yellow-200'>Chicken Fried Rice</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$5</span>
                                    </div>
                                    {/* Item Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>1 plate</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>2 persons</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-4'>
                                        <span className='pr-20 mr-3 text-yellow-200'>Dumplings </span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif pl-1'>$10</span>
                                    </div>
                                    {/* Item Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>Chicken</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Shrimp</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Fish</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-4'>
                                        <span className='pr-20 mr-1 text-yellow-200'>Spring Rolls</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif pl-1'>$5</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>1 cup</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>6 pieces</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-8 text-yellow-200'>Chow Mein Noodles</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$12</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>Veg</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Chicken</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-16 mr-2 text-yellow-200'>Wonton Soup</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$4</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>Fried</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Steamed</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


        </div>

        {/* Contact Us */}
        <Contact_Us />

    </div>
  )
}

export default page