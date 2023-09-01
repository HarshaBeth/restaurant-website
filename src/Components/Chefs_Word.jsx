import Image from 'next/image'
import React from 'react'
// import chefBG from '@/Images/Chef_BG.svg';
// import chefImg from '@/Images/chef_img.svg';
// import RSpoon from '@/Images/Vector.png';
// import Sign from '@/Images/Signature.svg';

const Chefs_Word = () => {
  return (
    <div id='5' className='h-screen w-full bg-cover bg-center bg-[url("/BG.png")]'>
        
        <div className='flex flex-row justify-center pt-40 h-full space-x-20 max-lg:space-x-10 max-lg:items-center max-md:space-x-3'>
          
            <div className=''>
                <Image alt="" src={'/Images/chefPic.png'} width={400} height={300} className='max-lg:w-80 max-md:w-56 max-sm:hidden'/> 
            </div>

            <div className='max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'>


              <div className='space-y-2 max-sm:flex max-sm:flex-col max-sm:items-center'>
                <span className='text-white text-lg'>Chef&apos;s Word</span>
                <Image alt="" src={'/Images/Vector.png'} width={37} height={10}/>
              </div>

              <div className='pt-5 pb-8 max-lg:pb-4'>
                <span className='text-5xl text-yellow-200 max-lg:text-4xl'>What We Believe In</span>
              </div>

              <div className='text-gray-400 flex flex-row w-96 max-sm:w-72 sm:absolute text-justify'>
                <span className='text-6xl text-white'>&quot;</span>
                <span className='pt-2.5 pl-1.5 !font-sans text-xs italic '>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. 
                  <span className='sm:hidden text-gray-400 !font-sans text-xs italic '>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</span>
                </span>
                
              </div>

              <span className='text-gray-400 flex flex-row w-96 !font-sans text-xs sm:relative sm:top-7 max-sm:hidden italic'>
                auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
              </span>

              <div className='flex flex-col text-white mt-7 pt-8 max-sm:pt-2'>
                <span className='text-3xl text-yellow-200'>Kevin Luo</span>
                <span className='text-gray-400 !font-sans text-xs'>Chef & Management</span>
              </div>

              <div className='pt-12 max-sm:pt-6'>
                <Image alt="" src={'/Images/Signature.svg'} width={200} height={150} className='max-sm:w-60'/>
              </div>

              
            </div>
        </div>
    </div>
  )
}

export default Chefs_Word