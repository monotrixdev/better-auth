import { Angry } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const Dashboard = () => {
  return (
    <section className='w-screen h-screen bg-zinc-50 flex flex-col justify-center items-center'>
        <Image src='/empty.svg' className='w-50' width={20} height={20} alt='Emoty shellboxes'/>
      <p className='text-gray-400'>No content here</p>
    </section>
  )
}

export default Dashboard
