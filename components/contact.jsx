"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
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
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <div className='flex items-center text-center justify-center pb-7 ' >
                    <Image src="/assets/Vector.svg" width={40} height={40} alt="Vector Image" />
                    <p className='uppercase text-7xl  font-semibold font-[GeneralSans-Variable] p-3 text-[#8C8C73]'>Contact</p>
                    <Image src="/assets/Vector.svg" width={40} height={40} alt="Vector Image" />
                </div>
                <div className='flex content-center pt-5'>
                    <div>
                        <h3 className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-6xl font-semibold  font-[GeneralSans-Variable] text-black ">
                            Have an awesome idea? Let&apos;s bring it to life.
                        </h3>
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
                                <div className='flex content-center  pb-4 text-2xl'>

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
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 bg-[#8C8C73] cursor-pointer  hover:scale-110 ease-in duration-200'>
                        <HiOutlineChevronDoubleUp className='text-4xl cursor-pointer ' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Contact