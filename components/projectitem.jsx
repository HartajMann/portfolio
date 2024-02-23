"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react'

const ProjectItem = ({ title, backgroundImage, technologies, description, githubUrl, projectUrl }) => {
  return (
    <div className='group relative overflow-hidden rounded-xl mb-28'>
      <div className='transition duration-300 ease-in-out transform group-hover:scale-110 duration-500'>
        <Image src={backgroundImage} alt={title} objectFit='cover' className='rounded-xl' />
      </div>
      <div className='absolute inset-0 bg-[#212127] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-xl'>
        <div className='flex h-full items-center justify-start p-4 '>
          <div>
            <h3 className='text-4xl text-white pb-4 font-[GeneralSans-Variable]'>{title}</h3>
            <h4 className='text-xl text-gray-300 pb-2 font-[CabinetGrotesk-Variable]'>{technologies}</h4>
            <p className='text-lg text-gray-200 font-[CabinetGrotesk-Variable]'>{description}</p>
            <div className='mt-4 flex space-x-4'>
              {githubUrl && (
                <Link href={githubUrl} passHref>
                  <span className='text-white' target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:github" className=' hover:scale-110 ease-in duration-200 text-gray-300' fontSize={30} />
                  </span>
                </Link>
              )}
              {projectUrl && (
                <Link href={projectUrl} passHref>
                  <span className='text-white'>
                    <Icon icon="ph:link-bold" className=' hover:scale-110 ease-in duration-200 text-gray-300' fontSize={30} />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
