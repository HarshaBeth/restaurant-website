import Image from 'next/image'
import React from 'react'
// import RSpoon from '@/Images/Vector.png';
import Link from 'next/link';
// import fb from '@/Images/facebook.svg';
// import twitter from '@/Images/twitter.svg';
// import insta from '@/Images/Instagram.svg';

const Contact_Us = () => {
  return (
    <div id='3' className='h-96 w-full bg-cover bg-center bg-[url("/BG.png")] max-md:h-[32rem]'>
        <div className='flex flex-col justify-center items-center h-full space-y-8'>
            <div className='text-white flex flex-row space-x-36 max-xl:space-x-24 max-lg:space-x-3  max-md:space-x-0 max-md:grid max-md:grid-cols-2 max-md:gap-y-5 max-sm:gap-y-8'>
                <div className='flex flex-col items-center'>
                    <span className='text-2xl pb-5'>Contact Us</span>
                    <span className='!font-sans text-gray-400 text-xs pb-3'>9 W 53rd St, New York, NY 10019, USA</span>
                    
                    <span className='!font-sans text-gray-400 text-xs pb-1'>+1 212-344-1230</span>
                    <span className='!font-sans text-gray-400 text-xs'>+1 212-555-1230</span>
                   
                </div>


                <div className='flex flex-col items-center pr-16 max-md:pr-0 max-md:col-start-1 max-md:row-start-1 max-sm:col-start-1 max-sm:col-end-3 max-sm:row-start-2'>
                    <span className='text-5xl text-yellow-200 pb-5'>GERÍCHT</span>

                    <span className='w-80 text-center !font-sans text-xs leading-5 flex flex-col items-center'>
                    &quot;The best way to find yourself is to lose yourself in the service of others.&quot;
                        <Image alt="" src={'/Images/Vector.png'} width={37} height={10} className='pt-3'/>
                    </span>

                    <div className='pt-3 flex flex-row space-x-4 items-center'>
                        <Link href={"https://www.facebook.com/"} target='_blank'>
                            <Image alt="" src={'/Images/facebook.svg'} width={20} height={20} className='hover:scale-150 transition-all ease-in-out'/>
                        </Link>
                        <Link href={"https://twitter.com/"} target='_blank'>
                            <Image alt="" src={'/Images/twitter.svg'} width={20} height={20} className='hover:scale-150 transition-all ease-in-out'/>
                        </Link>
                        <Link href={"https://www.instagram.com/"} target='_blank'>
                            <Image alt="" src={'/Images/Instagram.svg'} width={20} height={20} className='hover:scale-150 transition-all ease-in-out'/>
                        </Link>
                    </div>
                </div>

                {/* Working hours */}
                <div className='flex flex-col items-center max-md:col-start-2'>
                    <span className='text-2xl pb-5'>Working Hours</span>
                    <span className='!font-sans text-gray-400 text-xs pb-2 w-28 text-center leading-5'>Monday-Friday: 08:00 am -12:00 am</span>
                    <span className='!font-sans text-gray-400 text-xs w-28 text-center leading-5'>Saturday-Sunday: 07:00am -11:00 pm</span>
                </div>
            </div>

            <div className='text-gray-400 !font-sans text-xs pt-5 max-sm:pt-0'>2023 Gerícht. All Rights reserved.</div>
        </div>
    </div>
  )
}

export default Contact_Us