import { cn } from '@/lib/utils'
import { Loader } from 'lucide-react'
import React from 'react'

const Spinner = ({ size, color }: any) => {
  return (
    <>
    <Loader  className={cn(
        size && `w-${size} h-${size}`,
        color && `text-${color}-600`,
        "animate-spin"
    )}/>
    </>
  )
}

export default Spinner
