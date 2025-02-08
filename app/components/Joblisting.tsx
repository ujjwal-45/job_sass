import React from 'react';
import JobCard from './JobCard';
import job  from '../data/job';

const JobListingPage = () => {
  return (
    <div className="flex justify-center py-10 bg-gray-50">
      <div className="flex w-full max-w-7xl">
        {/* Filter Section */}
        <aside className="w-1/4 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Working Schedule</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Full time
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Part time
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Internship
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Project work
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Volunteering
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Employment Type</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Full day
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Flexible schedule
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Shift work
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Distant work
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Shift method
              </label>
            </div>
          </div>
        </aside>

        {/* Cards Section */}
        <section className="w-3/4 ml-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Recommended Jobs</h2>
            <div className="text-gray-500">Sort by: Last updated</div>
          </div>
            
            {/* Job Card */}

            <JobCard  job={job}/>
        </section>
      </div>
    </div>  
  );
}

export default JobListingPage;