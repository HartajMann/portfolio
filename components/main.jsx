import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const main = () => {
  return (
    <div id='home' className='flex w-full h-screen text-center'>
        <div className='flex max-w-[1240px] h-full w-full mx-auto p-2 justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <p className='uppercase text-sm tracking-widest text-gary-600'>Lets build together</p>
                <h1 className='py-4 text-5xl font-bold text-slate-500'>I am <span className='text-[#5651e5]'>Hartaj</span></h1>
                <h1 className='py-4 text-5xl font-bold text-slate-500'>A Software Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    blah balh 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
  )
}

export default main
