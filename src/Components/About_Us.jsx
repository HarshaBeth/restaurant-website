import React from 'react'
import Image from 'next/image';
// import LSpoon from '@/Images/spoon_left.svg';
// import RSpoon from '@/Images/Vector.png';
// import bigKnife from '@/Images/knife.svg';
import Link from 'next/link';

const About_Us = () => {
  return (
    <div id='2' className='h-screen w-full bg-cover bg-center bg-[url("/BG.png")]'>
        
        
        <div className=' h-screen flex flex-row justify-center items-center max-md:flex-col max-md:-space-y-20'>

            {/* Left side */}
            <div className='flex flex-col items-end max-md:items-center'>
                <div className='text-3xl md:text-4xl flex flex-col items-end max-md:items-center font-semibold text-yellow-200 lg:text-5xl'>
                    About Us
                    <Image alt="" src={'/Images/spoon_left.svg'} width={40} height={40} className='pt-3'/>

                </div>
                
                <div className='max-sm:w-60 sm:w-72 lg:w-96 text-right text-white py-6 max-md:py-3 max-md:text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                </div>

                <div className='text-black font-serif font-medium text-xs bg-yellow-200 w-min flex'>
                    <Link href={"/"} className=' py-2 w-28 text-center text-base'>Know more</Link>
                </div>
            </div>

            {/* Knife */}
            <div className='px-8 lg:px-16'>
                <Image alt="" src={'/Images/knifePic.png'} height={540} width={60} className='h-80 max-md:w-10 max-sm:h-72 max-sm:w-9 max-md:-rotate-90 duration-500 ease-in-out md:h-auto'/>
            </div>

            {/* Right side */}
            <div className='flex flex-col max-md:items-center'>
                <div className='text-3xl md:text-4xl lg:text-5xl flex flex-col items-start max-md:items-center font-semibold text-yellow-200'>
                    Our History
                    <Image alt="" src={'/Images/Vector.png'} width={40} height={10} className='pt-3'/>
                </div>

                <div className='max-sm:w-60 sm:w-72 lg:w-96 text-left max-md:text-center text-white py-6 max-md:py-3'>
                Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
                </div>

                <div className='text-black font-serif font-medium text-xs bg-yellow-200 w-min flex'>
                    <Link href={"/"} className='py-2 w-28 text-center text-base'>Know more</Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About_Us