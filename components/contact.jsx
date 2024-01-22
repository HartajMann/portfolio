import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp, HiOutlineChevronLeft ,HiAcademicCap} from 'react-icons/hi'


const contact = () => {
  return (
    <div id='contact'className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>conatcu</p>
            <h2>Get in toucj</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div>
                        <img src='/assets/icons/phone.svg' alt='phone' className='rounded-xl hover:scale-105 ease-in duration-150' />

                    </div>
                    <div>
                        <h2 className='py-2'>
                            name here
                        </h2>
                        <p className='py-4'>blah </p>
                    </div>
                    <div>
                    <p className='uppercase pt-8'>connect with me</p>
                    <div className='flex items-center justify-between py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-75'>
                        <FaLinkedin/>

                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-75'>
                        <FaGithubSquare/>

                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-75'>
                        <AiOutlineMail/>

                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-75'>
                        <BsFillPersonFill/>

                    </div>
                    </div>
                </div>
                </div>
                

                </div>
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>
                    <form>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                           <div className='flex flex-col'>
                            <label className='uppercase py-2 text-sm'>Name</label>
                            <input type='text' className='rounded-lg border-2 p-3 border-gray-300 shadow-lg shadow-gray-400'/>
                           </div>
                           <div className='flex flex-col'>
                            <label className='uppercase py-2 text-sm'>Phone</label>
                            <input type='text' className='rounded-lg border-2 p-3 border-gray-300 shadow-lg shadow-gray-400'/>
                           </div>
                        </div>
                        <div className='flex flex-col py-2'>
                            
                            <label className='uppercase py-2 text-sm'>Email</label>
                            <input type='email' className='rounded-lg border-2 p-3 border-gray-300 shadow-lg shadow-gray-400'/>
                            
                        </div>
                        <div className='flex flex-col py-2'>
                            
                            <label className='uppercase py-2 text-sm'>Subject</label>
                            <input type='text' className='rounded-lg border-2 p-3 border-gray-300 shadow-lg shadow-gray-400'/>
                            
                        </div>
                        <div className='flex flex-col py-2'>
                            
                            <label className='uppercase py-2 text-sm'>Message</label>
                            <textarea type='text' className='rounded-lg border-2 p-3 border-gray-300 shadow-lg shadow-gray-400' rows='10'/>
                            
                        </div>
                        <button className='w-full p-4 text-gray-100 mt-4'> Send Message</button>
                    </form>
                </div>
            </div>
            </div>
            <div className='flex justify-center py-12 '>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-75'>
                    <HiOutlineChevronDoubleUp className='text-4xl cursor-pointer'/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default contact