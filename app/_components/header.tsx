"use client";

import { Button } from '@/components/ui/button'
import { authClient, useSession } from '@/lib/auth-client';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import AvaterMenu from './avater-menu';

const  HeaderPage =  () => {
  const {data: session, isPending} = useSession();


    const path = usePathname();
    const active = path === '/register'
  return (
    <header className="flex items-center justify-between bg-white border-b px-2 py-2">
      <div className="flex space-x-2 items-center">
        <div className="px-3 py-1 flex items-center justify-center font-medium text-lg text-center text-white rounded-lg bg-zinc-900">
          M
        </div>
        <h3 className="font-heading flex text-sm sm:text-md md:text-lg font-semibold bg-gradient-to-br from-zinc-500 via-zinc-600 to-zinc-100 bg-transparent bg-clip-text">
          Mono<p className="font-normal text-zinc-700">Trix</p>
        </h3>
      </div>
      <div className="flex items-center justify-end">
        {session?.user && (
          <>
          <div className='space-x-2'>
                <ItemsShow
          label="Dashboard"
          href="/dashboard"
          active={path === "/dashboard"}
        />
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
        <Link href="/login" className="group">
          <Button className="rounded-full px-4 py-5 bg-gradient-to-br from-purple-400 to-purple-700 to-purple-800">
            Sign IN
            <ArrowBigRight className="w-4 h-4 -rotate-30 group-hover:scale-105 rounded-full bg-white text-purple-600" />
          </Button>
        </Link>
        </>)}
      </div>
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

export  default HeaderPage
