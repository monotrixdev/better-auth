import React, { ReactNode } from 'react'
import FotterPage from '../_components/fotter'         
import HeaderPage from '../_components/header'

const layout = ({ children} : {
    children: ReactNode
}) => {
  return (
    <>
    <main className='min-h-screen mx-auto'>
        {children}
    </main>
    </>
  )
}

export default layout
