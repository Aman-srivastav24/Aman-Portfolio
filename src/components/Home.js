import React from 'react'
import {Link} from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'
function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Aman Srivastav</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0'>I'm Full Stack Web Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a full-stack developer specializing in building (and occassionally designing) exceptional digital experiences. Currently I'm focused on building responsive full-stack web applications.
        </p>
        <button className='text-white w-[180px] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
      <Link to='project' smooth={true} duration={500}>
        View Projects
        </Link>
        <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3'/>
        </span>
      </button>

      </div>
      
    </div>
  )
}

export default Home