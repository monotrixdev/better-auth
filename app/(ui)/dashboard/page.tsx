import { Angry, Timer, TimerIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const Dashboard = () => {
  return (
    <section className='w-screen h-screen bg-zinc-50 px-4 py-10'>
      <div className='container mx-auto h-full'>
        <div className='rounded-md border border-zinc-300 bg-white flex itemx-center justify-center flex-col'>
          <div className='flex px-4 py-3 space-x-2 items-center rounded-tl-md rounded-tr-md bg-white'>
            <span className='rounded-full p-1 bg-indigo-600'></span>
            <Timer className='w-6 h-6 p-1 rounded-md bg-gray-100 border border-gray-300 text-muted-foreground text-center'/>
            <h3 className='text-sm font-semibold text-zinc-800'>My Task</h3>
          </div>
          <hr/>
          <div className='px-4 py-5 flex items-center justify-center flex-col'>
            <TimerIcon className='w-7 h-7 mb-2 text-muted-foreground rounded-full  bg-gray-50' />
            <p className='text-xs text-muted-foreground'>No in recent task</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
