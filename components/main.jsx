"use client"
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { Icon } from '@iconify/react'

const Main = () => {
    return (
        <div id='home' className='flex w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center h-full' >
                <div >
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-end items-center space-x-4 ml-auto'>
                        <Icon icon="material-symbols-light:mail" color="#666" className='text-2xl'/>
                        <Icon icon="mdi:github" color="#666" className='text-2xl' />
                        <Icon icon="mdi:linkedin" color="#666" className='text-2xl' />
                        </div>
                    </div>
                    <h1 className='pt-8 pb-2 text-9xl font-bold text-[#393632] font-[GeneralSans-Variable] md: text-5xl'>HI THERE, I&apos;M <span className='text-[#8C8C73]'>HARTAJ MANN.</span></h1>
                    <p className='py-2 text-xl font-medium font-[CabinetGrotesk-Variable]'>An aspiring software developer with a keen eye for web technologies, I&apos;m equipped to bring innovative solutions and robust programming skills to a vibrant tech role</p>
                </div>
            </div>
        </div>
    )
}

export default Main
