import React, { ReactNode } from 'react'
import HeaderPage from '../_components/header'
import FotterPage from '../_components/fotter'

const layout = ({ children} : {
    children: ReactNode
}) => {
  return (
    <>
    <HeaderPage />
    <main className='min-h-screen'>
        {children}
    </main>
    </>
  )
}

export default layout
