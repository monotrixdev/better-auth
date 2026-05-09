'use client';
import React, { ReactNode } from 'react'
import Sidebar from '../(ui)/_components/nav';
import HeaderPage from './header';

const DashboardShell = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [open, setOpen] = React.useState(false);
  return (
            <div className="flex h-screen overflow-hidden">
            <Sidebar open={open} setOpen={setOpen} />
            <main className='flex-1 min-w-0 overflow-x-hidden'>
                <HeaderPage open={open} setOpen={setOpen} />
                {children}
            </main>
        </div>
  )
}

export default DashboardShell
