
'use client'

import { Angry, BracesIcon, ChartNoAxesColumnIncreasing, MessageCircle, MessageSquareText, Phone, RectangleEllipsis, Search, Send, Target, Timer, TimerIcon, User2, UsersRound } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'
import { authClient } from '@/lib/auth-client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Spinner from '@/app/_components/spinner'
import { toast } from 'sonner'
import { set } from 'mongoose'
import { Look } from '@/lib/lookup'
import DashboardList from '../_components/dashboard-list'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from '@base-ui/react'

const Dashboard = () => {
  const {data: session, isPending} = authClient.useSession();
  const [trueLoading, setTrueLoading] = useState(false)
  const [lookuoNumber, setLookupNumber] = useState(""); 
const [lookup, setLookup] = useState<any>({status: false, name: "", number: "", carrier: "", location: "", type: ""});
const [smsLiading, setSmsLoading] = useState(false);

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

const items = [
  { label: "Garameenphone", value: "garameenphone" },
  { label: "Banglalink", value: "banglalink" },
  { label: "Airtel", value: "airtel" },
  { label: 'Robi', value: 'robi'},
  { label: 'TeliTalk', value: 'telitalk'}
];
  return (
    <>

      {isPending && (
            <div className='bg-zinc-50 w-full h-full flex items-center justify-center'>
      <Spinner />
    </div>
      )}

    {!isPending && (
    <section className='w-full bg-zinc-50 px-4 py-10'>
      <div className='container mx-auto h-full'>
        <div>
          <h1 className='text-lg font-medium'>Wellcome to dashboard {session?.user?.name?.slice(0,6).toLocaleLowerCase()},</h1>
          <p className='text-muted-foreground text-sm mt-1'>
            Here is your dashboard where you can see all the analytics about your account and usage. You can also manage your account settings and preferences from here.
          </p>
        </div>
       <div className='mt-5'>
         <DashboardList />
       </div>
        <div className='grid grid-cols-1 sm:grid-cols-2  mt-5 flex gap-3'>
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
          <div className='border rounded-md bg-white'>
            <div className='flex px-4 py-3 items-center space-x-2'>
              <MessageCircle className='w-8 h-8 p-2 rounded-md bg-green-100 text-green-500 border border-green-200' />
              <div className=''>
                 <h4 className='text-sm text-zinc-800 font-semibold'>SMS Managment</h4>
                 <p className='text-xs text-muted-foreground'>This is form where you can send SMS by adding target any phone number.</p>
              </div>
            </div>
            <hr />
            <div className='w-full px-4 py-3'>
              <div>
                <label className='font-semibold text-zinc-700 text-xs flex gap-1 items-center'><Target className='w-3 h-4'/> Target Number</label>
                <div className="flex items-center w-full rounded-md border border-zinc-200 bg-white mt-1">
              <div className="flex items-center justify-center w-10 h-10 bg-zinc-100 rounded-l-md">
                <Phone className="w-5 h-5 text-zinc-600" />
              </div>
              <input
                type="tel"
                className="flex-1 px-3 py-2 text-sm text-zinc-800 placeholder-zinc-400 outline-none"
                placeholder="Recipient: +8801306995635"
              />
            </div>

                
              </div>
              <div className='mt-2'>
                <label className='text-xs text-zinc-700 font-semibold flex gap-1 items-center mt-1'><RectangleEllipsis className='w-4 h-4'/>Select Telecom Brans</label>
                <div className='mt-1'>
                  <Select items={items}>
                  <SelectTrigger className='w-full py-5'>
                    <SelectValue placeholder="Theme"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                </div>
              </div>
            </div>
            <hr />
            <div className='px-4 py-3 bg-zinc-100'>
              <Button disabled={smsLiading} className='w-full py-5'>
               {smsLiading ? <Spinner /> :  <Send className='w-4 h-4'/>}
               {smsLiading ? 'Atacking...' : 'Attack Now'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    )}
    </>
  )
}

export default Dashboard
