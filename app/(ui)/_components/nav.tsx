'use client';
import { cn } from '@/lib/utils';
import { CircleUserRound, LayoutDashboard, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface SideBarProps {
    open: boolean;
    setOpen: (open : boolean) => void;  
}

const Sidebar = ({ open, setOpen }: SideBarProps) => {
  const pathname = usePathname();
 
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
    <div className="flex space-x-2 items-center px-4 py-2">
        <div className="px-3 py-1 flex items-center justify-center font-medium text-lg text-center text-white rounded-lg bg-zinc-900">
          M
        </div>
        <h3 className="font-heading flex text-sm sm:text-md md:text-lg font-semibold bg-gradient-to-br from-zinc-500 via-zinc-600 to-zinc-100 bg-transparent bg-clip-text">
          Mono<p className="font-normal text-zinc-700">Trix</p>
        </h3>
      </div>
      <hr />
      <div className='px-4 py-1 mt-5 space-y-1 h-full'>
        <NavItems label='Dashboard' icon={LayoutDashboard} to="/" active={pathname === '/dashboard'}/>
        <NavItems label='Profile' icon={CircleUserRound} to='/dashboard/profile' active={pathname === '/dashboard/profile'}/>
        <NavItems label='Settings' icon={Settings} to='/dashboard/settings' active={pathname === '/dashboard/settings'}/>
      </div>
      <hr />
      <div>
        
      </div>
    </aside>
    </>
  )
}


const NavItems = ({ label, icon, to, alert, active }: { label: string; icon: React.ComponentType, to: string, alert?: boolean, active?: boolean }) => {
  const Icon = icon;
  return (
    <Link href={to}>
        <div className={cn('flex items-center space-x-2 hover:bg-muted rounded-md px-3 py-2 cursor-pointer', active && 'bg-muted')}>
      <Icon size={18} />
      <span className='text-sm font-medium'>{label}</span>
      {alert && (
        <span className='ml-auto flex h-2 w-2 rounded-full bg-red-500' />
      )}
    </div>
    </Link>
  )
}

export default Sidebar
