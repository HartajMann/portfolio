import React from 'react'
import Image from 'next/image'
import propertyImg from '../public/assets/projects/property.jpg'
import Link from 'next/link'
import ProjectItem from './projectitem'

const projectsData = [
    {
      title: "Traveler App",
      backgroundImage:  propertyImg ,
      technologies: "Java, Kotlin",
      description: "A multiple-screen mobile application for a traveler...",
      githubUrl: "https://github.com/JasneetSingh1/TravelerApp",
      projectUrl: "#",
    },
    // ... Add more projects here\
    {
        title: "Traveler App",
        backgroundImage:  propertyImg ,
        technologies: "Java, Kotlin",
        description: "A multiple-screen mobile application for a traveler...",
        githubUrl: "https://github.com/JasneetSingh1/TravelerApp",
        projectUrl: "#",
      },
  ];
const projects = () => {
    return (
        <div id='project' className='w-full bg-black rounded-b-3xl'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <div className='flex items-center justify-center pb-7'>
                    <Image src="/assets/Vector.svg" width={40} height={40} alt="Vector Image" />
                    <p className='uppercase text-7xl font-semibold font-[GeneralSans-Variable] p-3 text-[#8C8C73]'>Projects</p>
                    <Image src="/assets/Vector.svg" width={40} height={40} alt="Vector Image" />
                </div>
                <div className='w-[900px] mx-auto'>
                {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              backgroundImage={project.backgroundImage}
              projectUrl={project.projectUrl}
              technologies={project.technologies}
              description={project.description}
              githubUrl={project.githubUrl}
            />
          ))}
                </div>

            </div>
        </div>
    )
}

export default projects