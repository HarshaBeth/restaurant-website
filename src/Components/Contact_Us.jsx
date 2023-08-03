import Image from 'next/image'
import React from 'react'
import RSpoon from '../Images/Vector.png';
import Link from 'next/link';
import fb from '../Images/facebook.svg';
import twitter from '../Images/twitter.svg';
import insta from '../Images/instagram.svg';

const Contact_Us = () => {
  return (
    <div id='3' className='h-96 w-full bg-cover bg-center bg-[url("/BG_small.svg")]'>
        <div className='flex flex-col justify-center items-center h-full space-y-8'>
            <div className='text-white flex flex-row space-x-36'>
                <div className='flex flex-col items-center'>
                    <span className='text-2xl pb-5'>Contact Us</span>
                    <span className='!font-sans text-gray-400 text-xs pb-3'>9 W 53rd St, New York, NY 10019, USA</span>
                    
                    <span className='!font-sans text-gray-400 text-xs pb-1'>+1 212-344-1230</span>
                    <span className='!font-sans text-gray-400 text-xs'>+1 212-555-1230</span>
                   
                </div>


                <div className='flex flex-col items-center pr-16'>
                    <span className='text-5xl text-yellow-200 pb-5'>GERÍCHT</span>

                    <span className='w-80 text-center !font-sans text-xs leading-5 flex flex-col items-center'>
                        "The best way to find yourself is to lose yourself in the service of others.”
                        <Image src={RSpoon} width={37} className='pt-3'/>
                    </span>

                    <div className='pt-3 flex flex-row space-x-4 items-center'>
                        <Link href={"https://www.facebook.com/"} target='_blank'>
                            <Image src={fb} width={20} className='hover:scale-150 transition-all ease-in-out'/>
                        </Link>
                        <Link href={"https://twitter.com/"} target='_blank'>
                            <Image src={twitter} width={20} className='hover:scale-150 transition-all ease-in-out'/>
                        </Link>
                        <Link href={"https://www.instagram.com/"} target='_blank'>
                            <Image src={insta} width={20} className='hover:scale-150 transition-all ease-in-out'/>
                        </Link>
                    </div>
                </div>

                {/* Working hours */}
                <div className='flex flex-col items-center'>
                    <span className='text-2xl pb-5'>Working Hours</span>
                    <span className='!font-sans text-gray-400 text-xs pb-2 w-28 text-center leading-5'>Monday-Friday: 08:00 am -12:00 am</span>
                    <span className='!font-sans text-gray-400 text-xs w-28 text-center leading-5'>Saturday-Sunday: 07:00am -11:00 pm</span>
                </div>
            </div>

            <div className='text-gray-400 !font-sans text-xs'>2021 Gerícht. All Rights reserved.</div>
        </div>
    </div>
  )
}

export default Contact_Us