import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


const Team = () => {

  return (
    <div className='flex flex-column gap-20 mx-8'>
      <div className="bg-white dark:bg-gray-900  rounded-lg p-6 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Enhanced Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
            Our hands-on, minds-on workshops deepen students’ understanding of space exploration, fostering a passion for STEM subjects.
            </p>
           
          </div>
          <div className="bg-white dark:bg-gray-900  rounded-lg p-6 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Engagement
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
            Students actively participate in interactive activities, igniting their curiosity and enthusiasm for Space.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900  rounded-lg p-6 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Skill Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
            Workshops are designed to develop critical thinking, problem-solving, and teamwork skills essential for future success.
            </p>
          </div>
    </div>
  )
}
export default Team;