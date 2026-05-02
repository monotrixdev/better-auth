import { Button } from '@/components/ui/button'
import { Airplay, GitGraph, LinkIcon, Mail, MailCheck, Subscript } from 'lucide-react'
import { Kaisei_HarunoUmi } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const quickLinks = [
    {
        name: "Home",
        link: "/home"
    },
    {
        name: "Cetegory",
        link: "/cetegory"
    },
    {
        name: "Login",
        link: "/login"
    },
    {
        name: "Registration",
        link: "/register"
    },
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Contact",
        link: "/contact"
    }
]

const FotterPage = () => {
  return (
    <section className='w-screen px-4 flex flex-col justify-center items-center bg-zinc-950'>
    <div className='flex w-full flex-col px-4 py-10 border-t'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-10'>
        <div className='flex flex-col px-2 space-y-2 justify-start'>
            <h3 className='font-bold text-2xl text-background'>
                Better Auth
            </h3>
            <p className='text-sm text-muted-foreground text-left'>
                This is a Better Auth for testing login with social like example Google, Github to help us to make create login and sign in auth easy and easy to get started.
            </p>
            <div className='flex items-center space-x-4 text-chart-1'>
                <GitGraph className='w-4 h-4 transform hover:scale-105 hover:text-chart-3'/>
                <LinkIcon className='w-4 h-5 hover:scale-105 hover:text-chart-3'/>
                <Airplay className='w-4 h-4 hover:scale-105 hover:text-chart-3'/>
            </div>
        </div>
        <div className='flex px-2 flex-col justify-start space-y-2'>
            <h3 className='font-bold font-heading text-background'>
                Quick Links
            </h3>
            <ul className='flex flex-col space-y-2'>
                {
                    quickLinks.map((item, key) => (
                      <Link className='text-sm hover:underline text-chart-1' href={item.link} key={key}>
                        {item.name}
                      </Link>
                    ))
                }
            </ul>
        </div>
        <div className='flex px-2 flex-col justify-start space-y-2'>
            <h3 className='font-bold font-heading text-background'>
                Stay Updated
            </h3>
            <p className='text-sm text-muted-foreground'>
                Subscribe to get our latest post delivered very soon to your inbox.
            </p>
           <div className='w-full flex items-center justify-center p-[2px] bg-gradient-to-br from-purple-300 via-purple-400 to-purple-300 rounded-lg'>
             <div className="w-full rounded-md bg-zinc-800 border-purple-200 flex">
                <div className='h-full px-2 py-2 w-fit rounded-l-md bg-purple-600/10'>
                    <Mail className='w-4 h-4 text-purple-700'/>
                </div>
                <input className='px-2 w-full ring-none outline-0 text-purple-600' type='email' placeholder='Your e-mail'/>
            </div>
           </div>
        <div className='w-full p-[1px] bg-gradient-to-br from-purple-500 via-purple-400 to-purple-500 rounded-lg'>
            <Button size="lg" className="w-full bg-gradient-to-br from-purple-300 via-purple-700 to-purple-900 font-semibold">
            <MailCheck />
            Subscribe
           </Button>
        </div>
        </div>
      </div>
    </div>
    <div className='w-full flex items-center justify-center'>
    <div className='flex text-muted-foreground text-sm mb-5'>
        <p className='text-center tracking-tight'> 2026-2022 All rights are reserved - Build with <Link href='https://github.com/monotrixdev/' className='text-sm text-background font-semibold hover:underline'>Sabbir Ahmed (Monotrixdev)</Link></p>
    </div>
    </div>
    </section>
  )
}

export default FotterPage
