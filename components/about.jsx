import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='About' className='w-full md:h-screen p-2 flex items-center py-16 bg-black rounded-t-3xl'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 '>
          <div className='flex items-center text-center justify-center pb-7 ' >
            <Image src="/assets/Vector.svg" width={40} height={40} alt="Vector Image" />
            <p className='uppercase text-7xl  font-semibold font-[GeneralSans-Variable] p-3 text-[#8C8C73]'>About Me</p>
            <Image src="/assets/Vector.svg" width={40} height={40} alt="Vector Image" />
          </div>
          <h2 className='py-4 text-4xl text-[#8C8C73] font-semibold'>Who Am I?</h2>
          <p className='py-2 text-2xl text-[#AEAE9D] font-semibold font-[CabinetGrotesk-Variable]'>
            I&apos;m Hartaj Mann, a passionate Software Development student at the Southern Alberta Institute of Technology (SAIT), actively enhancing my skills in a range of technologies. My focus is on coding and creating impactful tech solutions.
          </p>
          <p className='py-2 text-2xl text-[#AEAE9D] font-semibold font-[CabinetGrotesk-Variable]'>
            My expertise spans various programming languages and frameworks, including React, Java, Python, and .NET, making me versatile in different tech environments. As a Full Stack Developer, I am adept in both front-end and back-end development, striving for efficient, user-centric web applications. My interest in UI/UX design drives me to create applications that are not only functional but also intuitive and visually engaging.
          </p>
          <p className='py-2 text-2xl text-[#AEAE9D] font-semibold font-[CabinetGrotesk-Variable]' >
            Committed to continuous learning, I keep pace with evolving tech trends. My goal at SAIT is to merge technical know-how with creativity, contributing to meaningful software development. I look forward to opportunities for collaboration and innovation in this vibrant field.
          </p>
        </div>
        <div className='col-span-1 flex items-center justify-center'>
          <div className='w-full h-auto max-w-xs overflow-hidden rounded-lg'>
            <Image src="/assets/profile.webp" width={500} height={500} alt="Profile Image" className='rounded-lg'/>
          </div>
        </div>
        </div>
      </div>
      )
}

      export default About
