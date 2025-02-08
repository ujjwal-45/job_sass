import React from 'react'
import CollegeProfileCard from '../components/CollegeProfileCard'
import { colleges } from '../data/college'

const page = () => {
    return (
      <div className=" h-screen max-w-full">
        <div className="grid grid-cols-3 gap-10 m-5 ">
          {colleges.map((college, index) => (
            <CollegeProfileCard key={index} college={college} />
          ))}
        </div>
      </div>
    );
}

export default page