import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ title, backgroundImage, technologies, description, githubUrl, projectUrl }) => {
  return (
    <div className='group relative overflow-hidden rounded-xl mb-28'>
      <div className='transition duration-300 ease-in-out transform group-hover:scale-110 duration-500'>
        <Image src={backgroundImage} alt={title}  objectFit='cover' className='rounded-xl' />
      </div>
      <div className='absolute inset-0 bg-[#212127] bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-xl'>
        <div className='flex h-full items-center justify-start p-4 '>
          <div>
            <h3 className='text-2xl text-white'>{title}</h3>
            <h4 className='text-md text-gray-300'>{technologies}</h4>
            <p className='text-sm text-gray-200'>{description}</p>
            <div className='mt-4 flex space-x-4'>
              {githubUrl && (
                <Link href={githubUrl} passHref>
                  <span className='text-white' target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Github
                  </span>
                </Link>
              )}
              {projectUrl && (
                <Link href={projectUrl} passHref>
                  <span className='text-white'>
                    <i className="fas fa-external-link-alt"></i> View Project
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
