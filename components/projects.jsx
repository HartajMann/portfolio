import React from 'react'
import Image from 'next/image'
import propertyImg from '../public/assets/projects/property.jpg'
import Link from 'next/link'
import ProjectItem from './projectitem'
const projects = () => {
    return (
        <div id='project' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What i have built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title='propert' backgroundImage={propertyImg} projectUrl='/property' />
                    <ProjectItem title='propert' backgroundImage={propertyImg} projectUrl='/property' />
                    <ProjectItem title='propert' backgroundImage={propertyImg} projectUrl='/property' />
                    <ProjectItem title='propert' backgroundImage={propertyImg} projectUrl='/property' />

                </div>
            </div>
        </div>
    )
}

export default projects