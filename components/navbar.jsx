'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from 'react';
import { useEffect } from 'react';
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const [navBg,setNavBg] = useState('#ecf0f3')
    const[linkColor,setLinkColor] = useState('#1f2937')

    const navHandler = () => {
        setNav(!nav)
    }
    const [shadow,setShadow] = useState(false)
    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90){
                setShadow(true)
            }else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll',handleShadow);
    }, [])
  return (
    <div style={{backgroundColor:'#fafaf9'}}className={shadow?'fixed w-full h-20 shadow-xl z-[100]':'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src="/assets/Untitled.svg" width={100} height={90} alt="Navigation Logo"/>
        <div>
            <ul className='hidden md:flex font-[CabinetGrotesk-Variable] items-center'>
                <Link href='/'>
                    <li className='ml-10 text-lg font-medium hover:border-b'>home</li>
                </Link>
                <Link href='/#About'>
                    <li className='ml-10 text-lg font-medium  hover:border-b'>about</li>
                </Link>
                <Link href='/#skills'>
                    <li className='ml-10 text-lg font-medium  hover:border-b'>skills</li>
                </Link>
                <Link href='/#project'>
                    <li className='ml-10 text-lg font-medium  hover:border-b'>projects</li>
                </Link>
                <Link href='/#contact'>
                <li className='ml-10 text-lg font-medium bg-black text-white py-2 px-4 rounded-full cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out'>Let&apos;s Talk.</li>
                </Link>
            </ul>
            <div onClick={navHandler} className='md:hidden'>
                <AiOutlineMenu className='text-2xl'/>
            </div>
        </div>    
        </div>

        <div className={nav?' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
            <div className={nav?' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500':'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'><Image src="/assets/Untitled.svg" width='87' height='35' alt="Navigation Logo"/>
                    <div onClick={navHandler} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose  className='text-2xl'/>
                    </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build Something </p>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col font-[CabinetGrotesk-Variable]'>
                        <Link href='/'>
                            <li onClick={()=>setNav(false)} className='py-4 text-base  hover:border-b'>home</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={()=>setNav(false)} className=' py-4 text-base   hover:border-b'>about</li>
                        </Link>
                        <Link href='/'>
                            <li  onClick={()=>setNav(false)} className='text-base  py-4  hover:border-b'>skills</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={()=>setNav(false)} className='text-base py-4  hover:border-b'>projects</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={()=>setNav(false)} className='text-base py-4  hover:border-b'>contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40 '>
                        <p className='uppercase tracking-widest text-slate-500'>Let's Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                            <FaLinkedin/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                            <FaGithub/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                            <AiOutlineMail/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                            <BsFillPersonLinesFill/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Navbar