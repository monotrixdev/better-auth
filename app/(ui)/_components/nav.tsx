'use client';
import { cn } from '@/lib/utils';
import React from 'react'

interface SideBarProps {
    open: boolean;
    setOpen: (open : boolean) => void;  
}

const Sidebar = ({ open, setOpen }: SideBarProps) => {
 
  return (
    <>
    <div onClick={() => setOpen(!open)} className={cn('fixed inset-0 z-50 bg-black/50 backdrop-blur-2xl md:hidden',
    open ? 'block' : 'hidden'
    )}>
    </div>
    <aside className={cn(
        'fixed md:static top-0 left-0 z-50 h-screen w-64 border-r bg-white transition-transform duration-300 ease-in-out',
        open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
    )}>
    <div className="flex space-x-2 items-center px-4 py-3">
        <div className="px-3 py-1 flex items-center justify-center font-medium text-lg text-center text-white rounded-lg bg-zinc-900">
          M
        </div>
        <h3 className="font-heading flex text-sm sm:text-md md:text-lg font-semibold bg-gradient-to-br from-zinc-500 via-zinc-600 to-zinc-100 bg-transparent bg-clip-text">
          Mono<p className="font-normal text-zinc-700">Trix</p>
        </h3>
      </div>
    </aside>
    </>
  )
}

export default Sidebar
