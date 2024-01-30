import React from 'react';
import Amazon from '../assets/am.jpg';
import Tesla from '../assets/T.jpg';

const Project = () => {
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Amazon})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
         
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-black tracking-wider  '>
               Amazon clone React Js
              </span>
              <div className='pt-8 text-center'>
                <a href='https://aman-srivastav24.github.io/AmazonClone/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
             
              </div>
            </div>
          </div>
                <div
            style={{ backgroundImage: `url(${Amazon})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
         
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-black tracking-wider  '>
               Amazon clone React Js
              </span>
              <div className='pt-8 text-center'>
                <a href='https://aman-srivastav24.github.io/AmazonClone/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
             
              </div>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${Tesla})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                Tesla Clone React Js
              </span>
              <div className='pt-8 text-center'>
                <a href='https://aman-srivastav24.github.io/tesla-react-app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              
              </div>
            </div>
          </div>
            {/* Grid Item */}
          
            </div>
          </div>
        </div>
    
  );
};

export default Project;
