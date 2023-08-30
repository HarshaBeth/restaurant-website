import Image from 'next/image'
import React from 'react'
import symbol from '../Images/Symbol.svg';
import RSpoon from '../Images/Vector.png';
import Link from 'next/link';

const Booking = () => {
  return (
    <div className='h-screen bg-gray-950' id='7'>
        
            <div className='relative -top-3 max-lg:top-4 flex flex-row justify-end pr-48 max-lg:justify-center max-lg:pr-0'>
                <Image src={symbol} width={130} />
            </div>

            <div className='w-[100%] h-[70%]  flex flex-row items-center justify-center'>
                {/* Book Table Box */}
                <div className='w-[60%] bg-gray-900 border-solid border border-gray-500 h-96 flex flex-col justify-center items-center'>
                    
                    <div className='text-white text-lg flex flex-col items-center'>
                        Reservations
                        <Image src={RSpoon} width={32} className='pt-2'/>
                    </div>

                    <div className='text-5xl text-yellow-200 font-medium py-6'>Book  A Table</div>

                    <div className='space-x-7 pt-8 max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:space-x-0 max-xl:space-y-3 max-xl:pt-0 max-xl:w-[100%]'>
                        <select name="people" id="" className='bg-gray-950 text-white w-64 max-2xl:w-56 h-10 border border-solid border-gray-500 px-3 text-sm
                        max-xl:w-[80%] 
                        '>
                            <option className=' text-yellow-200'>1 Person</option>
                            <option className='text-yellow-200'>2 Persons</option>
                            <option className='text-yellow-200'>4 Persons</option>
                            <option className='text-yellow-200'>6 Persons</option>
                        </select>

                        <select name="date" id="" className='bg-gray-950 text-white w-64 max-2xl:w-56 h-10 border border-solid border-gray-500 px-3 text-sm font-semibold
                        max-xl:w-[80%]
                        '>
                            <option className='text-yellow-200'>23 / 07 / 2023</option>
                            <option className='text-yellow-200'>24 / 07 / 2023</option>
                            <option className='text-yellow-200'>25 / 07 / 2023</option>
                            <option className='text-yellow-200'>26 / 07 / 2023</option>
                        </select>

                        <select name="time" id="" className='bg-gray-950 text-white w-64 max-2xl:w-56 shrink h-10 border border-solid border-gray-500 px-3 text-sm font-semibold
                        max-xl:w-[80%]
                        '>
                            <option className='text-yellow-200'>11:00 AM</option>
                            <option className='text-yellow-200'>1:00 PM</option>
                            <option className='text-yellow-200'>3:00 PM</option>
                            <option className='text-yellow-200'>5:00 PM</option>
                        </select>
                    </div>

                    <div className='pt-10 max-xl:pt-5'>
                        <div className='text-black font-serif font-medium text-xs bg-yellow-200 w-min flex'>
                            <Link href={"/"} className='py-2 w-28 text-center text-base'>Book Now</Link>
                        </div>
                    </div>

                </div>
            </div>
        
    </div>
  )
}

export default Booking