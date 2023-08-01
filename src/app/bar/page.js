import Image from 'next/image'
import React from 'react'
import bg from '../../Images/BG_small.svg';

const page = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center' style={{backgroundImage: `url(${bg})`}}>
        
    </div>
  )
}

export default page