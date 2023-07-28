import Image from 'next/image'
import React from 'react'
import Testimonialbg from '../Images/Testimonial_BG.svg';

const Testimonials = () => {
  return (
    <div>
        
        <Image src={Testimonialbg} className='w-screen mt-64 absolute'/>
        

        <div className='relative top-0'>
            Testimonials
        </div>
    </div>
  )
}

export default Testimonials