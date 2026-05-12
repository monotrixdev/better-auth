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
    const [resize, setResize] = React.useState(false);
  return (
<div className="flex h-screen w-screen overflow-hidden">
  <Sidebar
    open={open}
    setOpen={setOpen}
    resize={resize}
    setResize={setResize}
  />

  <main className="flex-1 min-w-0 overflow-y-auto">
    <HeaderPage open={open} setOpen={setOpen} />
    {children}
  </main>
</div>
  )
}

export default DashboardShell
