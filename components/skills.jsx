import React from 'react';
import Image from 'next/image';
import html from '../public/assets/skills/html.png';

const Skills = () => {
    return (
        <div id='About' className='w-full md:h-screen p-2 flex items-center py-16 bg-black rounded-b-3xl'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <div className='flex items-center justify-center'>
                        <Image src="/assets/Vector.svg" width={40} height={40} alt="Vector Image" />
                        <p className='uppercase text-7xl font-semibold font-[GeneralSans-Variable] p-3 text-[#8C8C73]'>Skills</p>
                        <Image src="/assets/Vector.svg" width={40} height={40} alt="Vector Image" />
                    </div>
                    <h2 className='py-4 text-4xl text-[#8C8C73] font-semibold'>What I Can Do</h2>
                </div>
            </div>
        </div>
    )
}

export default Skills;
