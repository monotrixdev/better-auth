'use client';
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { Check, SignalHigh } from 'lucide-react';
import { features } from 'process';
import React from 'react'

const FreeCardPage = ({ item}: any) => (
<div className={`w-full flex items-center justify-center p-[1px] ${item.feature ? 'bg-gradient-to-br from-purple-600 via-purple-600 to-purple-500 rounded-xl' : ''}`}>
    <div className='w-full max-w-[400px]'>
        <Card>
        <CardHeader>
            <div>
                <h3 className='font-semibold text-lg'>
                    {item.name}
                </h3>
                <p className='text-muted-foreground'>
                    {item.description}
                </p>
                <h1 className='font-bold text-3xl mt-5'>
                    {item.price}{item.period}
                </h1>
                <Button size="lg" className="mt-5 w-full bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-900">
                    {item.buttonText}
                </Button>
            </div>
        </CardHeader>
        <CardDescription>
            <div className='px-4'>
                <h3>
                    MORE FEATURE
                </h3>
                <ul className='space-y-3 mb-8 flex-1 mt-4'>
                    {item.features.map((f: any) => (
                        <li key={f} className='flex gap-2 items-center text-zinc-900'>
                            <Check className='w-4 h-4'/>
                            {f}
                        </li>
                    ))}
                </ul>
            </div>
        </CardDescription>
    </Card>
    </div>
</div>
)

export default FreeCardPage
