import React from 'react'
import Image from 'next/image'
import Spoon from '../Images/Vector.png';
import Heroimg from '../Images/Hero_img.svg';
import Scrollimg from '../Images/Scroll_img.png';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div className='h-screen bg-gray-950' id='1'>
      <div className=' text-white bg-gray-950 relative top-28 px-28 flex flex-row'>
        {/* Left Side */}
        <div className='pr-24 pt-24'>
          <div className='font-sans font-medium text-2xl flex flex-col space-y-3'>
            <span>Chase The New Flavor</span>
            <Image src={Spoon} width={45}/>
          </div>

          <div className='font-serif font-semibold text-6xl w-96 pt-4 text-yellow-200'>The Key To Fine Dining</div>

          <div className='w-80 text-sm py-7'>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
          </div>
          <div className='text-black font-serif font-medium text-xs bg-yellow-200 w-min flex'>
            <Link href={"/"} className=' py-2 w-28 text-center text-base'>Explore Menu</Link>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <Image src={Heroimg} width={470} className='pt-5'/>

          <div className='relative left-96 bottom-3 pl-56 flex flex-col space-y-5'>
            <Image src={Scrollimg} className='w-px h-10'/>
            <span className='font-serif font-light text-yellow-200 text-xs relative right-6'>SCROLL</span>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Homepage