import Image from 'next/image'
import React from 'react'
import chefBG from '../Images/Chef_BG.svg';
import chefImg from '../Images/chef_img.svg';
import RSpoon from '../Images/Vector.png';
import Sign from '../Images/Signature.svg';

const Chefs_Word = () => {
  return (
    <div id='5' className='h-screen bg-[url("/BG_small.svg")]'>
        
        <div className='flex flex-row justify-center pt-40 h-full space-x-20'>
            <div>
                <Image src={chefImg} width={400}/> 
            </div>

            <div>


              <div className='space-y-2'>
                <span className='text-white text-lg'>Chef's Word</span>
                <Image src={RSpoon} width={37}/>
              </div>

              <div className='pt-5 pb-8'>
                <span className='text-5xl text-yellow-200'>What We Believe In</span>
              </div>

              <div className='text-gray-400 flex flex-row w-96 absolute'>
                <span className='text-6xl text-white'>"</span>
                <span className='pt-2.5 pl-1.5 !font-sans text-xs italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</span>
                
              </div>

              <span className='text-gray-400 flex flex-row w-96 !font-sans text-xs relative top-7 italic'>
                  auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
                </span>

              <div className='flex flex-col text-white mt-7 pt-8'>
                <span className='text-3xl text-yellow-200'>Kevin Luo</span>
                <span className='text-gray-400 !font-sans text-xs'>Chef & Management</span>
              </div>

              <div className='pt-12'>
                <Image src={Sign} width={200}/>
              </div>

              
            </div>
        </div>
    </div>
  )
}

export default Chefs_Word