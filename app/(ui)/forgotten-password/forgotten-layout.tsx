"use client";
import { Button } from '@/components/ui/button'
import { Info, Mail, MailCheck, MailSearch, Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Spinner from '../../_components/spinner';
import { ERROR_CODES } from 'better-auth/plugins';

const ForgottenLayout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState({ email: ''});

    const isValid = error.email == '';

    const checkValidation = () => {
        const newError = { email: ''};
        if (!email) {
            newError.email = 'E-mail are required';
        }
        if (!email.includes("@")) {
            newError.email = "E-mail must be includes @gmail.com without this @ email will not count a valid email.";
        }
        setError(newError); 
        if (isValid) return;
    }


    const handleOnSubmit = async (e: any) => {
        e.preventDefault();
        checkValidation();
    }

    useEffect(() => {
        checkValidation();
    }, [email])
  return (
    <section className='w-screen h-screen flex items-center justify-center bg-slate-50 px-4'>
        <form onSubmit={handleOnSubmit} className='w-full mx-auto flex items-center justify-center'>
        <div className='container w-full max-w-[500px] flex flex-col space-y-2 items-center justify-center'>
            <div className='w-full text-center'>
                <h1 className='font-bold font-sans text-2xl'>Forgotten Password?</h1>
                <p className='text-md text-zinc-700'>
                    You can forget password using your email
                </p>
            </div>
            <div className='w-full flex flex-col justify-center max-w-[500px]'>
                <div>
                    <label className='font-semibold text-sm'>Enter E-mail</label>
                    <div className='group'>
                    <div className={`border rounded-md flex ${error.email ? 'border-destructive/20 bg-destructive/5 group-hover:ring-2 group-hover:ring-destructive/10 group-hover:border-destructive/30 text-destructive' : 'group-hover:ring-2 group-hover:ring-zinc-600/20 group-hover:border-zinc-700 border-zinc-200 bg-slate-500/5'}`}>
                        <div className={`px-2 py-2 h-full w-fit rounded-l-md ${error.email ? 'bg-destructive/10 text-destructive border border-r-destructive/20' : 'bg-zinc-600/10 border border-r-zinc-500/10 text-zinc-700'}`}>
                            <Mail className='w-4 h-4'/>
                        </div>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className={`px-2 w-full border-none outline-0 group ${error.email ? 'text-destructive' : 'text-zinc-700'}`} type='email' placeholder='Enter your e-mail' />
                    </div>
                    </div>
                </div>
                {error.email && (
                                  <div className='w-full flex items-center mt-5 rounded-xl px-2 py-4 border border-destructive/10 text-destructive bg-destructive/10'>
                <Info className='w-6 h-6 mr-2'/>
                <div className='flex flex-col px-2 py-0'>
                    <h3 className='text-sm font-semibold'>
                        Error Detected
                    </h3>
                    <p className='text-xs text-red-500'>
                        {error.email}

                    </p>
                </div>
                </div>
                )}
            </div>
            <div className='mt-2 w-full'>
                <Button type='submit' disabled={isLoading} className="w-full px-4 bg-gradient-to-br from-green-800 via-green-700 to-green-800">
                {!isLoading && <MailCheck />}
                {isLoading && <Spinner />}
                {isLoading ? 'Mail Sending...': 'Send reset mail'}
                </Button>
            </div>
        </div>
        </form>
    </section>
  )
}

export default ForgottenLayout
