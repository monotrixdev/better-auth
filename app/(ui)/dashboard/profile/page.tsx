import { User2 } from 'lucide-react'
import React from 'react'

const ProfilePage = () => {
  return (
    <section className='w-full h-full bg-zinc-50'>
      <div className='w-full h-full mx-auto py-3 px-4'>
        <div className='border rounded-xl bg-white px-4 py-3 flex items-center space-x-2'>
          <User2 className='w-8 h-8 rounded-md border border-green-300 bg-green-100 p-2 text-green-500'/>
          <div className=''>
            <h4 className='font-semibold text-sm'>
              Profile Setup
            </h4>
            <p className='text-xs text-muted-foreground'>Here your profile page, where you can edit & update your profile data. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
