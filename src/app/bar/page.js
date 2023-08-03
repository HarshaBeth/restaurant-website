import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pic from '../../Images/onTheRocks.svg';
import scrollImg from '../../Images/Scroll_img.png';
import RSpoon from '../../Images/Vector.png';
import BottleImg from '../../Images/Cocktail.svg';
import Contact_Us from '@/Components/Contact_Us';

const page = () => {
  return (
    <div>
        

        <div className='h-screen w-full bg-cover bg-center bg-[url("/BG_small.svg")] '>

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
            <div className='h-fit flex justify-center mt-7'>
                <Image  src={pic} width={650}/>
            </div>

            {/* Scroll */}
            <div className=' flex flex-col space-y-4 justify-center items-center pl-96 ml-80'>
                <Image src={scrollImg} className='w-px h-10'/>
                <span className='font-serif font-light text-yellow-200 text-xs'>SCROLL</span>
            </div>
      
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
                        <span className='text-5xl text-yellow-200'>Bar Menu</span>
                    </div>

                    {/* Menu */}
                    <div className='pt-10 flex flex-row items-center space-x-7'>
                        {/* Left */}
                        <div className='text-white flex flex-col items-center'>
                            <span className='text-3xl'>Wine & Beer</span>

                            <div className='pt-8 space-y-6'>
                                {/* Each menu item */}
                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-4 text-yellow-200'>Chapel Hill Shiraz</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$56</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>AU</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Bottle</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-9 text-yellow-200'>Catena Malbec</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$59</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>AU</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Bottle</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-9 text-yellow-200'>La Vieille Rosé</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$44</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>FR</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>750 ml</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-9 text-yellow-200'>Rhino Pale Ale</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$31</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>CA</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>750 ml</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-10 text-yellow-200'>Irish Guinness</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$26</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>IR</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>750 ml</span>
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
                            <span className='text-3xl'>Cocktails</span>

                            <div className='pt-8 space-y-6'>
                                {/* Each menu item */}
                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-16 text-yellow-200'>Aperol Spritz</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$20</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>Aperol</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Villa Marchesi prosecco</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>soda</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>30 ml</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-4'>
                                        <span className='pr-12 text-yellow-200'>Dark 'N' Stormy</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif pl-1'>$16</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>Dark rum</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Ginger beer</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Slice of lime</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-4'>
                                        <span className='pr-24 text-yellow-200'>Daiquiri</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif pl-1'>$10</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>Rum</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Citrus juice</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Sugar</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-14 text-yellow-200'>Old Fashioned</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$31</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>Bourbon</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Brown sugar</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Angostura Bitters</span>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center space-x-5'>
                                        <span className='pr-24 text-yellow-200'>Negroni</span>
                                        <hr className='h-px bg-white border-0 w-20'/>
                                        <span className='!font-serif'>$26</span>
                                    </div>
                                    {/* Bottle Size */}
                                    <div className=' text-gray-400 text-xs font-normal space-x-2 pt-1'>
                                        <span className='!font-sans '>Gin</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Sweet Vermouth</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Campari</span>
                                        <span className='!font-sans '>|</span>
                                        <span className='!font-sans '>Orange garnish</span>
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