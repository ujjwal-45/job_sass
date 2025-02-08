"use client";
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import {  ArrowDownIcon, ArrowDownWideNarrowIcon, BriefcaseBusiness, Handshake, MapPin, Search } from 'lucide-react'
import React from 'react'
import { useSession } from 'next-auth/react';
import  JobListingPage  from '../components/Joblisting';
import Navbar from '../components/Navbar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const page = () => {


  return (
      
        <>
        <Navbar/>
        <div className='flex w-full justify-evenly py-6 items-center bg-black h-[70px] text-white'>
          <div className='flex justify-center items-center gap-2'>
            <Search className=' border rounded-full p-2' size={34}/>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <p className='text-lg'>Search</p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Designer</DropdownMenuItem>
                <DropdownMenuItem>Full Stack Engineer</DropdownMenuItem>
                <DropdownMenuItem>Devops Engineer</DropdownMenuItem>
                <DropdownMenuItem >Software Engineer</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Separator orientation='vertical'/>


          <div className='flex justify-center items-center gap-2'>
            <MapPin className=' border rounded-full p-2' size={34}/>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <p className='text-lg'>Location</p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Designer</DropdownMenuItem>
                <DropdownMenuItem>Full Stack Engineer</DropdownMenuItem>
                <DropdownMenuItem>Devops Engineer</DropdownMenuItem>
                <DropdownMenuItem >Software Engineer</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Separator orientation='vertical'/>
          <div className='flex justify-center items-center gap-2'>
            <Search className=' border rounded-full p-2' size={34}/>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <p className='text-lg'>Experience</p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Designer</DropdownMenuItem>
                <DropdownMenuItem>Full Stack Engineer</DropdownMenuItem>
                <DropdownMenuItem>Devops Engineer</DropdownMenuItem>
                <DropdownMenuItem >Software Engineer</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Separator orientation='vertical'/>
          <div className='flex justify-center items-center gap-2'>
            <Search className=' border rounded-full p-2' size={34}/>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <p className='text-lg'>Job Type</p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Designer</DropdownMenuItem>
                <DropdownMenuItem>Full Stack Engineer</DropdownMenuItem>
                <DropdownMenuItem>Devops Engineer</DropdownMenuItem>
                <DropdownMenuItem >Software Engineer</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Separator orientation='vertical'/>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-lg'>Salary Range</h1>
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>

        </div>
        
        <JobListingPage/>
        
        </>
     
  )
}

export default page
