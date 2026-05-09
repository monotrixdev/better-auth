'use client';
import { cn } from '@/lib/utils';
import { CircleUserRound, LayoutDashboard, PanelLeftClose, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface SideBarProps {
    open: boolean;
    setOpen: (open : boolean) => void;  
    resize: boolean;
    setResize: (resize: boolean) => void;
}

const Sidebar = ({ open, setOpen, resize, setResize }: SideBarProps) => {
  const pathname = usePathname();
 
  return (
    <>
    <div onClick={() => setOpen(!open)} className={cn('fixed inset-0 z-50 bg-black/50 backdrop-blur-2xl md:hidden',
    open ? 'block' : 'hidden'
    )}>
    </div>
    <aside className={cn(
        'group md:relative fixed top-0 left-0 z-50 h-screen w-64 border-r bg-white transition-all duration-300 ease-in-out',
        open ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
        resize ? 'w-20' : 'w-64'
    )}>
      <div className='absolute right-3 top-3 group group-hover:flex hidden rounded-md p-1 bg-muted/50 hover:bg-muted cursor-pointer' onClick={() => setResize(!resize)}>
      <PanelLeftClose
  className={cn(
    'w-6 h-6 text-zinc-700 transition-transform',
    resize && 'rotate-180'
  )}
/>
      </div>
    <div className="flex space-x-2 items-center px-4 py-2">
        <div className="px-3 py-1 flex items-center justify-center font-medium text-lg text-center text-white rounded-lg bg-zinc-900">
          M
        </div>
        {!resize && (
            <h3 className="font-heading flex text-sm sm:text-md md:text-lg font-semibold bg-gradient-to-br from-zinc-500 via-zinc-600 to-zinc-100 bg-transparent bg-clip-text">
          Mono<p className="font-normal text-zinc-700">Trix</p>
        </h3>
          )}
      </div>
      <hr />
      {!resize && (
          <div className='px-4 mt-5'>
        <h3 className='text-xs font-semibold text-muted-foreground'>OVERVIEW</h3>
      </div>
      )}
      <div className='px-4 py-1 space-y-1 h-full'>
        <NavItems resize={resize} label='Dashboard' icon={LayoutDashboard} to="/" active={pathname === '/dashboard'}/>
        <NavItems resize={resize} label='Profile' icon={CircleUserRound} to='/dashboard/profile' active={pathname === '/dashboard/profile'}/>
        {!resize && (
            <div className='mt-5'>
          <h3 className='text-xs text-muted-foreground font-semibold' >SETTINGS</h3>
        </div>
        )}
        <NavItems resize={resize} label='Settings' icon={Settings} to='/dashboard/settings' active={pathname === '/dashboard/settings'}/>
      </div>
      <hr />
      <div>

      </div>
    </aside>
    </>
  )
}


const NavItems = ({ resize, label, icon, to, alert, active }: { resize: boolean; label: string; icon: React.ElementType, to: string, alert?: boolean, active?: boolean }) => {
  const Icon = icon;
  return (
    <Link href={to}>
      <div className={cn(
  'flex items-center hover:bg-muted rounded-md px-3 py-2',
  resize ? 'justify-center' : 'space-x-2',
  active && 'bg-muted'
)}>
      <Icon size={18} />

      {!resize && (
        <span className='text-sm font-medium'>{label}</span>
      )}
      {alert && (
        <span className='ml-auto flex h-2 w-2 rounded-full bg-red-500' />
      )}
      
    </div>
    </Link>
  )
}

export default Sidebar
