import React from 'react'
import background from '../Images/BG.svg';
import Image from 'next/image';
import LSpoon from '../Images/spoon_left.svg';
import RSpoon from '../Images/Vector.png';
import bigKnife from '../Images/knife.svg';
import Link from 'next/link';

const About_Us = () => {
  return (
    <div id='2'>
        <div className='absolute'>
            <Image src={background} />
        </div>
        
        <div className='relative top-0 z-40 h-screen flex flex-row justify-center items-center'>

            {/* Left side */}
            <div className='flex flex-col items-end'>
                <div className='text-5xl flex flex-col items-end font-semibold text-yellow-200'>
                    About Us
                    <Image src={LSpoon} className='pt-3'/>

                </div>
                
                <div className='w-96 text-right text-white py-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                </div>

                <div className='text-black font-serif font-medium text-xs bg-yellow-200 w-min flex'>
                    <Link href={"/"} className=' py-2 w-28 text-center text-base'>Know more</Link>
                </div>
            </div>

            {/* Knife */}
            <div className='px-16'>
                <Image src={bigKnife} height={540} />
            </div>

            {/* Right side */}
            <div>
                <div className='text-5xl flex flex-col items-start font-semibold text-yellow-200'>
                    Our History
                    <Image src={RSpoon} width={40} className='pt-3'/>
                </div>

                <div className='w-96 text-left text-white py-6'>
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