import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Check } from 'lucide-react';
import React from 'react'

const pricingPlans = [
  {
    "name": "Free",
    "price": "$0",
    "period": "/month",
    "description": "Perfect to try out and explore all the basics.",
    "featured": false,
    "buttonText": "Get started for free",
    "featuresHeader": "Whats's Includes",
    "features": [
      "1 Project",
      "Basic analytics",
      "Community support",
      "Infinite freedom canvas",
      "Responsive editing",
      "35+ customizer controls",
      "Basic interactions",
      "Staging mode",
      "Form builder",
      "Full site export / import"
    ]
  },
  {
    "name": "Pro",
    "price": "$29",
    "period": "/month",
    "description": "Everything you need to build and launch fast.",
    "featured": true,
    "buttonText": "Get started with Pro",
    "featuredLabel": "MOST POPULAR",
    "featuresHeader": "Everything in Free, plus",
    "features": [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Custom domain",
      "Password protection",
      "Advanced interactions",
      "Team collaboration",
      "Version history",
      "CMS integration",
      "API access"
    ]
  }
];

const PricigPage = () => {
  return (
    <section className='w-screen flex flex-col py-10 gap-4 justify-center items-center bg-red-50'>
      <div className='w-fit px-4 py-1 text-sm rounded-full bg-white border-2 border-purple-600/30 font-semibold text-purple-600'>
        Pricing
      </div>
      <div className='flex w-full items-center justify-center flex-col text-center'>
        <h1 className='font-bold text-zinc-900 text-4xl'>
          SImple, honest pricing
        </h1>
        <p className='text-md font-normal text-zinc-700 '>
          Start free. Scale when you're ready. No surprise.
        </p>
      </div>
      <div className=''>
        <div className='grid gris-cols-1 sm:grid-cols-2 flex gap-4'>
          {pricingPlans.map((item, key: any) => (
            <div key={key} className={cn(
              'p-[1px] relative max-w-[400px]',
              item.featured && "bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-2xl"
            )}>
            <div className='rounded-2xl px-4 py-4 w-full border border-zinc-300 bg-white'>
            {item.featured && (
              <div className='w-full flex items-center justify-center absolute -top-3 right-0'>
                <div className='font-semibold text-purple-50 px-4 py-1 text-sm  flex items-center justify-center bg-purple-600 rounded-full text-xs'>
                {item.featuredLabel}
              </div>
              </div>
            )}
              <h3 className='font-semibold text-xl'>{item.name}</h3>
              <div className='mt-5 flex space-x-1 text-center items-center'>
                <h3 className='text-4xl font-semibold text-zinc-700'>{item.price}</h3>
                <p className='text-sm'>{item.period}</p>
              </div>
              <p className='mt-2 text-zinc-600 text-sm'>{item.description}</p>
              <hr className='py-2 mt-2'/>
              <div>
                <h3 className='text-md font-semibold text-zinc-600'>{item.featuresHeader}</h3>
                <ul className='space-y-2 mt-5'>
                  {item.features.map((f, key: any) => (
                    <li key={key} className='flex space-x-2 text-center items-center'>
                      {item.featured && <Check className='w-4 h-4 rounded-full border border-purple-300 text-purple-500 bg-purple-500/10 p-[1px]'/>}
                      {!item.featured && <Check className='w-4 h-4 rounded-full border p-[1px]'/>}
                      <p className='text-dsm text-zinc-600'>{f}</p>
                    </li>
                  ))}

                </ul>
              </div>
              <div className={cn('mt-5 p-[1px]',
              item.featured && 'bg-gradient-to-br from-purple-200 via-purple-300 to-purple-200 rounded-lg')}>
                <Button size='lg' variant="default" className={cn(
                  'w-full px-4 py-5',
                  item.featured && "bg-gradient-to-br from-purple-300 via-purple-600 to-purple-700 text-white",
                  !item.featured && "bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800"
                )}>
                  {item.buttonText} {item.featured && <ArrowRight className='w-4 h-4 -rotate-20'/>}
                </Button>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default PricigPage
