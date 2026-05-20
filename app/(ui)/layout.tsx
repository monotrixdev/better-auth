import React, { ReactNode } from 'react'
import FotterPage from '../_components/fotter'         
import HeaderPage from '../_components/header'

const layout = ({ children} : {
    children: ReactNode
}) => {
  return (
    <>
    <HeaderPage />
    <main className='min-h-screen w-full mx-auto'>
        {children}
    </main>
    </>
  )
}

export default layout
