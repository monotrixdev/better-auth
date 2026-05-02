"use client";
import { Button } from '@/components/ui/button'
import { Airplay, ArrowRight, ArrowRightCircle, ArrowRightCircleIcon, Rocket, Sidebar, X } from 'lucide-react'
import React from 'react'
import Counter from './counter';

const HeroPage = () => {
  return (
   <section className='w-full py-10 bg-slate-50 px-4'>
    <div className='container flex flex-col space-y-7 items-center justify-center'>
      <div className='w-full underline mt-15 flex space-x-2 items-center justify-center text-center'>
        
        <p className='text-md  font-sans'>AI-powerd communities are live </p>
        <ArrowRightCircleIcon className='w-4 h-4 -rotate-30 text-zinc-700' />
      </div>
        <div className='w-full flex flex-col items-center justify-center'>
            <h1 className='block sm:flex font-sans gap-2 text-5xl font-bold text-center px-2'>Empower Your <p>Learning</p><p className='bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-transparent bg-clip-text '>AI Communities</p></h1>
            <p className='text-md mt-2 text-muted-foreground text-center'>
                Join AI-powerd course communities that help ypu study faster, collabrate with peers, and excel in your classes.
            </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 flex gap-4'>
                    <div className='group bg-gradient-to-br from-purple-600 via-purple-700 to-purple-950 rounded-lg bg-clip-border relative'>
            <div className='absolute -inset-0.5 bg-gradient-to-br from-purple-200 via-purple-300 to-purple-700 blur '></div>
            <Button size="lg" className="px-4 relative py-5 bg-gradient-to-br from-purple-300 via-purple-600 to-purple-800 font-semibold">
                Get Started Free
                <div className='w-8 h-8 rounded-full bg-white text-center flex items-center justify-center rotate-44 group-hover:rotate-0 focus:rotate-0 transform duration-300'>
                    <Rocket className='text-purple-600 w-4 h-4'/>
                </div>
            </Button>
        </div>
        <div>
            <Button variant="outline" size="lg" className="px-4 py-5 font-semibold ">
                Explore Communities
            </Button>
        </div>
        </div>
        <div className='w-full px-10 flex space-x-3 mt-5 items-center justify-center px-2'>
            <div className='flex flex-col items-center justify-center px-4'>
                <h3 className='font-semibold text-2xl text-zinc-800'>
                    <Counter end={100} duration={1000} sufix='K'/>
                </h3>
                <p className='text-xs text-zinc-500 font-medium text-center'>
                    Active Student
                </p>
            </div>
            <div  className='stat-divider'></div>
                        <div className='flex flex-col items-center justify-center px-4'>
                <h3 className='font-semibold text-2xl text-zinc-800'>
                    <Counter end={120000} duration={1500} sufix='+'/>
                </h3>
                <p className='text-xs text-zinc-500 font-medium text-center'>
                    Communities
                </p>
            </div>
            <div className='stat-divider'></div>
                        <div className='flex flex-col items-center justify-center px-4'>
                <h3 className='font-semibold text-2xl text-zinc-800'>
                    <Counter end={98} duration={2000} sufix='%'/>
                </h3>
                <p className='text-xs text-zinc-500 font-medium text-center'>
                    Satisfaction Rate
                </p>
            </div>
        </div>
    </div>
   </section>
  )
}

export default HeroPage
