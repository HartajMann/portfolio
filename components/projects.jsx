import React from 'react'
import Image from 'next/image'
import scenecyclopedia from '../public/assets/projects/scene.png'
import mobile from '../public/assets/projects/mobile.png'
import wanderpal from '../public/assets/projects/wanderpal.png'
import Link from 'next/link'
import ProjectItem from './projectitem'

const projectsData = [
    {
      title: "SceneCyclopedia",
      backgroundImage:  scenecyclopedia ,
      technologies: "Next.js, Tailwind CSS, Vercel, The Movie Database (TMDb) API",
      description: "SceneCyclopedia is your go-to movie database app, offering cinema enthusiasts ratings, cast details, and trailers at their fingertips. From upcoming releases to trending and top-rated films, users can explore a vast array of cinematic content with ease.",
      githubUrl: "https://github.com/HartajMann/scenecyclopedia",
      projectUrl: "https://scenecyclopedia.vercel.app/",
    },
    // ... Add more projects here\
    {
        title: "Weather Sphere",
        backgroundImage:  mobile ,
        technologies: "React Native, AsyncStorage, Geocode API, Meteo API",
        description: "Weather Sphere is a comprehensive weather app built with React Native. It offers real-time weather updates, hourly temperature forecasts, a 7-day weather outlook, wind speed details, rain probability, and sunrise times. Users can search for weather information by city and save their favorite locations for easy access.",
        githubUrl: "https://github.com/HartajMann/Weathersphere",
        projectUrl: "#",
      },
      {
        title: "WanderPal",
        backgroundImage:  wanderpal ,
        technologies: "React JS, Axios, REST API, and Google Maps API",
        description: "This real-time web app, powered by React JS and REST API, integrates Google Maps to aid users in discovering nearby restaurants, hotels, and attractions. With a sleek interface, users can easily input or auto-detect their location, accessing detailed information and ratings for each destination. A convenient tool for seamless exploration and discovery.",
        githubUrl: "https://github.com/HartajMann/wander_pal",
        projectUrl: "https://wanderpal.netlify.app/",
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