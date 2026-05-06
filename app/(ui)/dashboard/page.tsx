import { Angry } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
  return (
    <section className='w-screen h-screen bg-zinc-50 flex flex-col justify-center items-center'>
        <Angry className='w-10 h-10 text-zinc-700'/>
      <p className='text-sm text-gray-400'>No content here</p>
    </section>
  )
}

export default Dashboard
