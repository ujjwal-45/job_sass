import React from 'react'
import { College } from '../data/college'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type CollegeCardProps = {
    college : College,
}

const CollegeProfileCard :React.FC<CollegeCardProps>=({college}) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white m-5">
      <div className="relative">
        <Image
          className="w-full object-cover h-64"
          src={college.bgImage}
          alt={college.name}
          width={100}
          height={100}
        />
        <div className="absolute inset-0 flex items-center justify-center -bottom-60 hover:scale-110 transition-all ease-in-out">
          <div className="bg-white p-1 rounded-full shadow-lg">
            <Image
              className="w-full rounded-full"
              src={college.image}
              alt={college.name}
              width={100}
              height={100}
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="px-6 py-4 pt-16">
        <div className="font-bold text-xl mb-2">{college.name}</div>
        <p className="text-gray-700 text-base">
          <strong>Location:</strong> {college.location}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Placement Rate:</strong> {college.placementRate}%
        </p>
        <p className="text-gray-700 text-base">{college.description}</p>

        <Link href={`${college.href}${college.name}`} className='flex justify-center items-center mt-2'>
            <Button >View More</Button>
        </Link>
      </div>
      <div className="px-6 pt-4 pb-2">
        {college.keyPoints.map((point, index) => (
          <span
            key={index}
            className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{point}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CollegeProfileCard