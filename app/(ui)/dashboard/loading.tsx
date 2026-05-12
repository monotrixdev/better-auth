import Spinner from '@/app/_components/spinner'
import React from 'react'

const Loading = () => {
  return (
    <div className='bg-zinc-50 w-full h-full flex items-center justify-center'>
      <Spinner />
    </div>
  )
}

export default Loading
