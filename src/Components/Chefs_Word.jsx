import Image from 'next/image'
import React from 'react'
import chefBG from '../Images/Chef_BG.svg';
import chefImg from '../Images/chef_img.svg';

const Chefs_Word = () => {
  return (
    <div className='mt-16 bg-[url("/BG_small.svg")]'>
        
        <div>
            <div className=''>
                <Image src={chefImg} width={400}/> 
            </div>

            <div></div>
        </div>
    </div>
  )
}

export default Chefs_Word