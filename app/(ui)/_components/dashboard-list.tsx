import { Timer, ChartNoAxesColumnIncreasing, UsersRound, Search, Send } from 'lucide-react'
import React from 'react'

const DashboardList = () => {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex items-center gap-3'>
             <div className='border border-zinc-200 rounded-md p-4 flex flex-col px-4 bg-white'>
                        <Send className='p-2 w-8 h-8 rounded-md text-green-500 bg-green-50 '/>
                        <h3 className='text-sm text-muted-foreground mt-2'>SMS Sent</h3>
                        <h3 className='font-semibold text-xl text-zinc-900'>403</h3>
                        <div className='flex items-center space-x-1 mt-1'>
                          <ChartNoAxesColumnIncreasing  className='w-4 h-4 text-green-500'/>
                          <span className='text-xs text-green-500'>+12% from Last Week</span>
                        </div>
                      </div>
              <div className='border border-zinc-200 rounded-md p-4 px-4 bg-white'>
                <Timer className='w-8 h-8 p-2 rounded-md bg-yellow-50 text-yellow-500'/>
                <h3 className='text-sm text-muted-foreground mt-2'>Sheduled</h3>
                <h3 className='text-xl text-zinc-900 font-semibold'>198</h3>
                <div className='flex items-center space-x-2 mt-1'>
                  <ChartNoAxesColumnIncreasing className='w-4 h-4 text-green-500'/>
                  <p className='text-xs text-green-500 '>7 pending</p>
                </div>
              </div>
                <div className='border border-zinc-200 rounded-md p-4 px-4 bg-white'>
                <UsersRound className='w-8 h-8 p-2 rounded-md bg-indigo-50 text-indigo-500'/>
                <h3 className='text-sm text-muted-foreground mt-2'>Sunmitted Numbers</h3>
                <h3 className='text-xl text-zinc-900 font-semibold'>190</h3>
                <div className='flex items-center space-x-2 mt-1'>
                  <ChartNoAxesColumnIncreasing className='w-4 h-4 text-green-500'/>
                  <p className='text-xs text-green-500 '>5+ today</p>
                </div>
              </div>
                <div className='border border-zinc-200 rounded-md p-4 px-4 bg-white'>
                <Search className='w-8 h-8 p-2 rounded-md bg-red-50 text-destructive'/>
                <h3 className='text-sm text-muted-foreground mt-2'>Lookups Done</h3>
                <h3 className='text-xl text-zinc-900 font-semibold'>41</h3>
                <div className='flex items-center space-x-2 mt-1'>
                  <ChartNoAxesColumnIncreasing className='w-4 h-4 text-destructive'/>
                  <p className='text-xs text-destructive '>31+ yesterday</p>
                </div>
              </div>
            </div>
    </>
  )
}

export default DashboardList
