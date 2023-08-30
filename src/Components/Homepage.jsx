import React from 'react'
import Image from 'next/image'
import Spoon from '../Images/Vector.png';
import Heroimg from '../Images/Hero_img.svg';
import Scrollimg from '../Images/Scroll_img.png';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div className='h-screen bg-gray-950 max-lg:justify-center max-lg:flex' id='1'>
      <div className=' text-white bg-gray-950 relative top-28 max-lg:top-0 px-28 max-sm:px-0 flex flex-row items-center max-lg:relative max-md:relative'>
        {/* Left Side */}
        <div className='pr-24 pt-24 max-lg:pr-0  max-lg:pt-0 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
          <div className='font-sans font-medium text-2xl flex flex-col space-y-3 max-lg:items-center'>
            <span>Chase The New Flavor</span>
            <Image src={Spoon} width={45}/>
          </div>

          <div className='font-serif font-semibold text-6xl w-96 pt-4 text-yellow-200 max-lg:text-center '>The Key To Fine Dining</div>

          <div className='w-80 text-sm py-7 max-lg:text-center'>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
          </div>
          <div className='text-black font-serif font-medium text-xs bg-yellow-200 w-min flex'>
            <Link href={"#4"} className=' py-2 w-28 text-center text-base'>Explore Menu</Link>
          </div>
        </div>

        {/* Right Side */}
        <div className='relative max-lg:absolute max-lg:bottom-20 max-lg:right-32 max-md:right-48 max-sm:right-32'>
          <Image src={Heroimg} width={470} className='pt-5 max-lg:hidden'/>

          <div className='absolute -right-32 -bottom-8 max-xl:-right-20  flex flex-col justify-center items-center space-y-5'>
            <Image src={Scrollimg} className='w-px h-10'/>
            <span className='font-serif font-light text-yellow-200 text-xs right-6'>SCROLL</span>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Homepage