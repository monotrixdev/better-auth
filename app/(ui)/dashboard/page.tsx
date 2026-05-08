
'use client'

import { Angry, ChartNoAxesColumnIncreasing, MessageSquareText, Search, Send, Timer, TimerIcon, User2, UsersRound } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'
import { authClient } from '@/lib/auth-client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Spinner from '@/app/_components/spinner'
import { toast } from 'sonner'
import { set } from 'mongoose'

const Dashboard = () => {
  const {data: session} = authClient.useSession();
  const [trueLoading, setTrueLoading] = useState(false)
  const [lookuoNumber, setLookupNumber] = useState(""); 
const [lookup, setLookup] = useState<any>({status: false, name: "", number: "", carrier: "", location: "", type: ""});

const handleSearch = async () => {
  if (!lookuoNumber || lookuoNumber.length !== 11) {
    toast.error("Please enter a valid 11-digit BD number.")
    return;
  }
  setTrueLoading(true);
  try {
    const res = await fetch(`/api/truecaller?number=${lookuoNumber}`);
    const data = await res.json();
    if (data.status) {
      toast.success("Number lookup successful!")
      setLookup(data);
    } else {
      toast.error(data.message || "Failed to lookup number. Please try again.")
      setLookup({status: false, name: "", number: "", carrier: "", location: "", type: ""});
    }
  } catch (err) {
    toast.error("Failed to lookup number. Please try again.")
  } finally {
    setTrueLoading(false);
    setLookupNumber("");
  }
}
  return (
    <section className='w-screen bg-zinc-50 px-4 py-10'>
      <div className='container mx-auto h-full'>
        <div>
          <h1 className='text-lg font-medium'>Wellcome to dashboard {session?.user?.name?.slice(0,6).toLocaleLowerCase()},</h1>
          <p className='text-muted-foreground text-sm mt-1'>
            Here is your dashboard where you can see all the analytics about your account and usage. You can also manage your account settings and preferences from here.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex gap-4 mt-10'>
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
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-5'>
          <div className='rounded-md border border-zinc-200 bg-white p-4 px-4'>
            <div className='flex items-center space-x-2'>
              <Search className='w-8 h-8 p-2 rounded-md text-green-600 bg-green-100 border border-green-200'/>
              <h3 className='font-semibold text-zinc-900 text-sm'>NUMBER LOOKUP</h3>
            </div>
            <div className='mt-2 flex items-center space-x-2'>
              <Input onChange={(e) => setLookupNumber(e.target.value)} value={lookuoNumber} className='py-5 w-full' maxLength={11} minLength={11} datatype='number' type='number' placeholder='ENTER LOOKUP NUMBER' required/>
              <Button onClick={handleSearch} disabled={trueLoading} size='lg' className="py-5 px-4 font-semibold" variant="outline">
                {trueLoading && <Spinner/>}
                {!trueLoading && <Search className='w-4 h-4 text-zinc-800'/>}
                {trueLoading ? "Looking up..." : "Lookup"}
              </Button>
            </div>
            {lookup?.status && (
              <div className='rounded-md border border-zinc-200 bg-muted-foreground/5 p-4 px-4 mt-5'>
                <div className='flex items-center space-x-2'>
                  {lookup.image && (
                    <Image width={20} height={20} className='2-10 h-10 rounded-full' src={lookup.image} alt={lookup.name}/>
                  )}
                  {
                    !lookup.image && (
                      <div className='p-3 rounded-full flex text-center font-bold bg-indigo-50 w-fit border border-zinc-200 text-indigo-500 text-xl'>
                        {lookup?.name?.slice(0, 2).toUpperCase()}
                      </div>
                    )
                  }
                  <div>
                    <h3 className='font-bold'>{lookup?.name}</h3>
                    <p className='text-sm text-muted-foreground'>{lookup?.number}</p>
                  </div>
                </div>
                <div className='flex mx-auto space-x-2 items-center justify-between mt-5'>
                  <span className='px-2 py-[1px] rounded-full bg-green-100 border-green-200 text-green-700 text-sm tracking-tight'>{lookup?.carrier}</span>
                  <span className='px-2 py-[1px] rounded-full bg-blue-100 border-blue-200 text-blue-700 text-sm tracking-tight'>{lookup?.location}</span>
                  <span className='px-2 py-[1px] rounded-full bg-purple-100 border-purple-200 text-purple-700 text-sm tracking-tight'>{lookup?.type || "Unknown"}</span>
                </div>
                <hr className='mt-4'/>
                <div className='mt-5 grid grid-cols-2 flex items-center justify-between gap-2 space-x-2'>
                  <Button variant='outline' className='w-full py-5'>
                    <MessageSquareText className='w-5 h-5 text-zinc-800'/>
                    Send SMS
                  </Button>
                  <Button variant='outline' className='w-full py-5 '>
                    <User2 className='w-5 h-5 text-zinc-800'/>
                    Submit
                  </Button>
                </div>
              </div>
            )}
            {!lookup.status && (
              <div className='w-full h-[120px] flex items-center justify-center p-4'>
                <p className='text-sm text-muted-foreground'>Enter a BD number to look up caller info.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
