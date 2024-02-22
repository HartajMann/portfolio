"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { HiOutlineChevronDoubleUp, HiOutlineChevronLeft, HiAcademicCap } from 'react-icons/hi'


const Contact = () => {
  
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    });
    const [state, handleSubmit] = useForm("mgegyeao");
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <div className='flex items-center text-center justify-center pb-7 ' >
                    <Image src="/assets/Vector.svg" width={40} height={40} alt="Vector Image" />
                    <p className='uppercase text-7xl  font-semibold font-[GeneralSans-Variable] p-3 text-[#8C8C73]'>Contact</p>
                    <Image src="/assets/Vector.svg" width={40} height={40} alt="Vector Image" />
                </div>
                <div className='flex content-center pt-5'>
                    <div className='mr-20'>
                        <h3 className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-6xl font-semibold  font-[GeneralSans-Variable] text-black ">
                            Have an awesome idea? Let&apos;s bring it to life.
                        </h3>
                        <form
                            name="contact"
                            action="/contact"
                            autoComplete="off"
                            // eslint-disable-next-line react/no-unknown-property
                            className="mt-10 font-[CabinetGrotesk-Variable] mt-20" 
                            method="POST"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 ">
                                <div className="relative z-0">
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="peer block w-full appearance-none border-0 border-b border-black bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute top-3 -z-10 text-2xl text-[#8C8C73] font-medium origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                                    >
                                        Your name
                                    </label>
                                </div>
                                <div className="relative z-0">
                                    <input
                                        required
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="peer block w-full appearance-none border-0 border-b border-black bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute top-3 -z-10 origin-[0] -translate-y-6  text-2xl text-[#8C8C73] font-medium scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                                    >
                                        Your email
                                    </label>
                                </div>
                                <div className="relative z-0 sm:col-span-2">
                                    <textarea
                                        required
                                        id="message"
                                        name="message"
                                        rows="5"
                                        className="peer block w-full appearance-none border-0 border-b border-black bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                    ></textarea>
                                    <label
                                        htmlFor="message"
                                        className="absolute top-3 -z-10 origin-[0] -translate-y-6  text-2xl text-[#8C8C73] font-medium scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                                    >
                                        Your message
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"  disabled={state.submitting}
                                className="mt-10  bg-black p-5 text-white rounded-full  duration-300 hover:bg-[#8C8C73] hover:text-black text-xl font-medium"
                            >
                                    <span className="">
                                        Send Message
                                    </span>
                            </button>
                        </form>
                    </div>

                    <div className='md:w-1/3'>
                        <p className='text-4xl font-semibold font-[GeneralSans-Variable]'>Contact Details</p>
                        <a href='mailto:hatajmann459@gmail.com' target="_blank"
                            rel="noreferrer" className="group relative w-fit cursor-pointer">
                            <p className='mt-4 text-2xl text-[#666666] font-medium font-[CabinetGrotesk-Variable]'>
                                HartajMann459@Gmail.com
                            </p>
                        </a>
                        <p className='text-4xl mt-16 font-semibold font-[GeneralSans-Variable]'>My Digital Spaces</p>
                        <div className='mt-4'>
                            <a href='https://github.com/HartajMann'>
                                <div className='flex content-center pb-4 text-2xl'>

                                    <Icon icon="mdi:github" color="#666" fontSize={30} />
                                    <p className='pl-2 text-[#666666] font-medium font-[CabinetGrotesk-Variable]'>Github</p>

                                </div>
                            </a>
                            <a href='https://www.linkedin.com/in/hartajsinghmann/'>
                                <div className='flex content-center  pb-4 text-2xl'>

                                    <Icon icon="mdi:linkedin" color="#666" fontSize={30} />
                                    <p className='pl-2 text-[#666666] font-medium font-[CabinetGrotesk-Variable]'>linkedin</p>

                                </div>
                            </a>
                            <a href='https://www.instagram.com/hartaj.mannn/'>
                                <div className='flex content-center text-2xl'>

                                    <Icon icon="mdi:instagram" color="#666" fontSize={30} />
                                    <p className='pl-2 text-[#666666] font-medium font-[CabinetGrotesk-Variable]'>Instagram</p>

                                </div>
                            </a>
                        </div>
                        <div className="space-y-3 ">
                            <h4 className="text-body-1 font-semibold 2xl:text-4xl mt-16 font-[GeneralSans-Variable]">Location</h4>
                            <div className="space-y-2 text-body-2 2xl:text-3xl font-[CabinetGrotesk-Variable]  text-[#666666]">
                                <p>
                                    Calgary, Canada <br></br>
                                    {time}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/#home'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 bg-[#8C8C73] cursor-pointer  hover:scale-110 ease-in duration-200 hover:text-white'>
                        <HiOutlineChevronDoubleUp className='text-4xl cursor-pointer ' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Contact