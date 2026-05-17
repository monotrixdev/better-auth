"use client";

import { Button } from '@/components/ui/button'
import { authClient, useSession } from '@/lib/auth-client';
import { ArrowBigLeft, ArrowBigRight, ArrowUpRight, Bell, BellCheck, PanelLeft } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import AvaterMenu from './avater-menu';
import { kAPIErrorHeaderSymbol } from 'better-auth';
import { Belanosima } from 'next/font/google';
import Spinner from './spinner';
import Image from 'next/image';

interface HeaderProps {
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

 const HeaderPage =  ({ open, setOpen} : HeaderProps) => {
  const {data: session, isPending} = useSession();


    const path = usePathname();
    const active = path === '/register'
  return (
    <header className="flex items-center justify-between bg-white border-b px-2 py-2">
      {!session?.user && (
      <div className="flex space-x-2 items-center">
        <Image width={40} height={40} alt="Logo Monotrixdev" src="/logo.png" />
      </div>
      )}
      {session?.user && (
        <PanelLeft onClick={() => setOpen && setOpen(!open)} className='w-6 h-6 text-zinc-900'/>
      )}
      {isPending && <Spinner />}
      {!isPending && (
      <div className="flex items-center justify-end">
        {session?.user && (
          <>
          <div className='space-x-2 w-full flex items-center'>
                <ItemsShow
          label="Dashboard"
          href="/dashboard"
          active={path === "/dashboard"}
        />
        <div className='p-2 relative rounded-full bg-indigo-600/10 hover:bg-purple-600/20'>
        <div className='absolute w-4 h-4 text-center top-1 right-0 rounded-full bg-purple-700 text-xs text-white'>2</div>
          
          <Bell className='text-purple-800 w-5 h-5' />
        </div>
        <AvaterMenu />
        </div>
        </>
        )}
        {!session?.user && (<>
        <ItemsShow
          label="Sign Up"
          href="/register"
          active={path === "/register"}
        />
        <Link href="/login" className="group ml-2 p-[1px] bg-gradient-to-br from-purple-800 via-purple-500 to-purple-600 rounded-full">
          <Button className="rounded-full px-4 bg-gradient-to-br from-purple-400 via-purple-800 to-purple-900">
            Sign In 
            <ArrowUpRight />
          </Button>
        </Link>
        </>)}
      </div>
      )}
    </header>
  );
}

export const ItemsShow = ({ label = '', href = '', active}: {
    label: string,
    href: string,
    active?: boolean
}) => {
  return(
  <Link href={href}>
    <Button variant="link" className={`${active ? 'bg-gradient-to-br from-zinc-400 via-zinc-500 to-zinc-700' : ''}`}>
        { label }
    </Button>
    </Link>
  )
}


export default HeaderPage
