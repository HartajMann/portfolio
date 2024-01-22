import React from 'react'
import Image from 'next/image'
import html from '../public/assets/skills/html.png'

const skills = () => {
    return (
        <div id='skills' className='w-full lg;h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Do</h2>
                <div className='grid md:grid-cols-2 lg:grids-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={html} width='64' height='64' alt='programming' />
                            </div>
                        </div>
                        <div className='flex-col items-center justify-center'>
                            <h3>HTml</h3>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/html.png' width='64' height='64' alt='programming' />
                            </div>
                        </div>
                        <div className='flex-col items-center justify-center'>
                            <h3>HTml</h3>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/html.png' width='64' height='64' alt='programming' />
                            </div>
                        </div>
                        <div className='flex-col items-center justify-center'>
                            <h3>HTml</h3>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/html.png' width='64' height='64' alt='programming' />
                            </div>
                        </div>
                        <div className='flex-col items-center justify-center'>
                            <h3>HTml</h3>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/html.png' width='64' height='64' alt='programming' />
                            </div>
                        </div>
                        <div className='flex-col items-center justify-center'>
                            <h3>HTml</h3>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/html.png' width='64' height='64' alt='programming' />
                            </div>
                        </div>
                        <div className='flex-col items-center justify-center'>
                            <h3>HTml</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default skills