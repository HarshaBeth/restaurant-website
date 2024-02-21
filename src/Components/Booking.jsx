'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { addReservation, fetchAvailableHours } from '@/services/dbServices';


export const getNextFourDays = () => {
    const today = new Date();
    const nextFourDays = [];

    for (let i = 0; i < 4; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();


        const formattedDate = `${day}/${month}/${year}`;
        nextFourDays.push(formattedDate);
    }

    return nextFourDays;
}


const Booking = () => {

    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const [availableHours, setAvailableHours] = useState([]);
    const onSubmit = (data) => {
        console.log('Form Submitted', data)
        addReservation(data)

    }
    useEffect(async () => {
        const bookedHours = await fetchAvailableHours();
        const getAvailableHours = () => {
            for (let i = 6; i <= 10; i++) {
                setAvailableHours((prev) => [...prev, i])
            }
        }
        getAvailableHours();
        console.log("DATA>>>>",bookedHours)
        console.log(availableHours.filter((item) => bookedHours.includes(`${item}:00 PM`)))
    }, []);

    
    const days = getNextFourDays();

    return (

        <div className='h-screen bg-gray-950' id='7'>

            <div className='relative flex flex-row justify-end pr-48 -top-3 max-lg:top-4 max-lg:justify-center max-lg:pr-0 max-sm:top-2'>
                <Image alt="" src={'/Images/Symbol.svg'} width={130} height={130} className='max-sm:w-20' />
            </div>

            <div className='w-[100%] h-[70%] flex flex-row items-center justify-center'>
                {/* Book Table Box */}
                <div className='w-[60%] bg-gray-900 border-solid border border-gray-500 h-fit flex flex-col justify-center items-center py-6'>

                    <div className='flex flex-col items-center text-lg text-white'>
                        Reservations
                        <Image alt="" src={'/Images/Vector.png'} width={32} height={10} className='pt-2' />
                    </div>

                    <div className='py-6 text-5xl font-medium text-yellow-200 max-sm:text-3xl'>Book  A Table</div>


                    <form className=' w-full flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className=' flex flex-row space-x-7 pt-0 max-xl:flex max-xl:flex-col justify-center items-center max-xl:space-x-0 max-xl:space-y-3 max-xl:pt-0 max-xl:w-[100%]'>

                            <div className='w-full flex flex-col justify-center items-center'>
                                <p className={`text-red-600 pb-2 !font-mono text-xs ${!errors.people?.message && "hidden"}`}>{errors.people?.message}</p>

                                <select id="people" {...register("people", {
                                    validate: (fieldValue) => {
                                        return fieldValue !== "Choose Persons : -" || "Input required"
                                    }
                                })}
                                    className=' bg-gray-950 text-white w-56 max-2xl:w-56 h-10 border border-solid border-gray-500 px-3 text-sm max-xl:w-[80%]'>
                                    <option selected="selected"  disabled="disabled" className='hidden' >Choose Persons : -</option>
                                    <option className='text-yellow-200 '>1 Person</option>
                                    <option className='text-yellow-200'>2 Persons</option>
                                    <option className='text-yellow-200'>4 Persons</option>
                                    <option className='text-yellow-200'>6 Persons</option>
                                </select>
                            </div>

                            <div className='w-full flex flex-col justify-center items-center'>

                                <p className='text-red-600 pb-2 !font-mono text-xs'>{errors.date?.message}</p>
                                <select id="date" {...register("date", {
                                    validate: (fieldValue) => {
                                        return fieldValue !== "Choose Date : -" || "Input required"
                                    }
                                })}
                                    className='bg-gray-950 text-white w-56 max-2xl:w-56 h-10 border border-solid border-gray-500 px-3 text-sm font-semibold max-xl:w-[80%]'>
                                    <option selected="selected" disabled="disabled" className='hidden' >Choose Date : -</option>

                                    {days.map((day) => (<option className='text-yellow-200'>{day}</option>))}

                                </select>
                            </div>

                            <div className='w-full flex flex-col justify-center items-center'>

                                <p className='text-red-600 pb-2 !font-mono text-xs'>{errors.time?.message}</p>
                                <select id="time" {...register("time", {
                                    validate: (fieldValue) => {
                                        return fieldValue !== 'Choose Time : -' || 'Input required'
                                    }
                                })}
                                    className='bg-gray-950 text-white w-56 max-2xl:w-56 shrink h-10 border border-solid border-gray-500 px-3 text-sm font-semibold max-xl:w-[80%]'>
                                    <option selected="selected" disabled="disabled" className='hidden' >Choose Time : -</option>
                                    {availableHours.map((hour) => (<option className='text-yellow-200'>{hour}:00 PM</option>))}
                                </select>
                            </div>

                        </div>

                        <div className='pt-10 max-xl:pt-5'>
                            <div className='flex font-medium text-black bg-yellow-200 w-min'>
                                <button className='py-2 text-lg text-center w-28'>Book Now</button>
                            </div>
                        </div>

                    </form>
                    <DevTool control={control} />

                </div>
            </div>

        </div>
    )
}

export default Booking