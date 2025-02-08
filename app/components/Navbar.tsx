"use client";
import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import md5 from 'md5'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';

import { Button } from '../../components/ui/button';
import { Separator } from '@/components/ui/separator';
import { supabaseBrowserClient } from '../utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { cn } from '@/lib/utils';

const Navbar = () => {

  const [user, setUser] = useState<User | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session }, } = await supabaseBrowserClient.auth.getSession();
      if (session) {
        setUser(session.user);
      }
    };

    getUser();
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  console.log(user);

  const gravatarUrl = user? `https://www.gravatar.com/avatar/${md5(user.email || '')}?d=identicon` : '';

  return (
    <>
      <nav
        className={cn(
          user ? `bg-black text-white` : `bg-white text-black`,
          `flex justify-center items-center h-[40px] md:h-[90px]`
        )}
      >
        <div className="flex justify-between items-center w-full max-w-7xl">
          <div className="logo flex justify-start items-center">
            <Link href="/">
              <h1 className="text-3xl flex justify-center items-center font-bold">
                <Briefcase size={38} className="inline m-2" />
                JobNest
              </h1>
            </Link>
          </div>
          <div className="flex justify-center font-light items-center gap-10 text-sm md:text-lg">
            <Link
              href="/find_job"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Find job
            </Link>
            <Link
              href="/institutions"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Institute
            </Link>
            <Link
              href="/"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Hiring
            </Link>
            <Link
              href="/"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Community
            </Link>
            <Link
              href="/"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              FAQ
            </Link>
          </div>
          <div className="profile">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex gap-2 items-center outline-none">
                  <Image
                    src={gravatarUrl}
                    className="rounded-full border-2 border-gray-200"
                    alt="Profile"
                    width={34}
                    height={34}
                  />
                  <span className="text-lg font-semibold">
                    Hi, {user.email}
                  </span>
                  <ChevronDown className="flex justify-center" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href={`/profile/{user.id}`}>Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>About</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={async () => {
                      await supabaseBrowserClient.auth.signOut();
                      setUser(null);
                    }}
                  >
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex gap-2">
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/register">
                  <Button>Create an Account</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Separator />
    </>
  );
}

export default Navbar;
