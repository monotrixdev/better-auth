
import React from 'react'
import HeroPage from '../_components/hero-page'
import PricingPage from '../_components/pricing-page'
import FotterPage from '../../_components/fotter'
import HeaderPage from '@/app/_components/header'

const PageLayout = () => {
  return (
    <main className='mx-auto bg-red-50'>
        <HeroPage />
        <PricingPage />
        <FotterPage />
    </main>
  )
}

export default PageLayout
