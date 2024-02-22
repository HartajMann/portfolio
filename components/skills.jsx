import React from 'react';
import Image from 'next/image';

// Skill data
const skillData = [
  { src: '/assets/skills/csharp_original_logo_icon_146578.svg', title: 'C#' },
  { src: '/assets/skills/java_original_logo_icon_146458.svg', title: 'Java' },
  { src: '/assets/skills/javascript_original_logo_icon_146455.svg', title: 'JavaScript' },
  { src: '/assets/skills/dot_net_original_logo_icon_146546.svg', title: '.NET' },
  { src: '/assets/skills/file_type_sql_icon_130152.svg', title: 'SQL' },
  { src: '/assets/skills/nodejs_original_logo_icon_146411.svg', title: 'Node.js' },
  { src: '/assets/skills/react_original_logo_icon_146374.svg', title: 'React' },
  { src: '/assets/skills/file-type-tailwind.svg', title: 'Tailwind' },
  { src: '/assets/skills/git_original_logo_icon_146509.svg', title: 'Git' },
];

const Skills = () => {
  return (
    <div id='Skills' className='w-full md:h-screen p-2 flex items-center py-16 bg-black '>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center pb-7'>
            <Image src="/assets/Vector.svg" width={40} height={40} alt="Vector Image" />
            <p className='uppercase text-7xl font-semibold font-[GeneralSans-Variable] p-3 text-[#8C8C73]'>Skills</p>
            <Image src="/assets/Vector.svg" width={40} height={40} alt="Vector Image" />
          </div>
        </div>
        <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center'>
          {skillData.map((skill, index) => (
            <div key={index} className='flex flex-col items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <Image src={skill.src} width={70} height={70} alt={skill.title} />
              <span className='pt-4 text-4xl pb-4 text-[#AEAE9D] font-semibold font-[CabinetGrotesk-Variable]'>{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
