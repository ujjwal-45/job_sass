"use client";

import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JobCard = ({ job }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {job.map((job: any) => (
        <div key={job.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{job.date}</span>
            <Briefcase className="text-gray-400" size={20} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
          <p className="text-gray-600 mb-4">{job.company}</p>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="mr-2" size={18} />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <Calendar className="mr-2" size={18} />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-800">{job.salary}</span>
            <Button variant={'default'}>Details</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
