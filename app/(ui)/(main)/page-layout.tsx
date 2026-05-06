
import React from 'react'
import HeroPage from '../_components/hero-page'
import PricingPage from '../_components/pricing-page'
import FotterPage from '../../_components/fotter'

const PageLayout = () => {
  return (
    <main className='mx-auto space-y-5 bg-red-50'>
        <HeroPage />
        <PricingPage />
        <FotterPage />
    </main>
  )
}

export default PageLayout
