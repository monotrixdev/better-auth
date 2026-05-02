"use client";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import Spinner from '../../_components/spinner'
import Link from 'next/link';
import { setLazyProp } from 'next/dist/server/api-utils';
import { mainModule } from 'process';
import { ipv4, kAPIErrorHeaderSymbol, nanoid } from 'better-auth';
import { format, join } from 'path';
import { BhuTuka_Expanded_One, Hina_Mincho, Jim_Nightshade, Konkhmer_Sleokchher, Kosugi_Maru, Zalando_Sans_Expanded } from 'next/font/google';
import { workAsyncStorageInstance } from 'next/dist/server/app-render/work-async-storage-instance';
import { createOpaqueFallbackRouteParams } from 'next/dist/server/request/fallback-params';
import { OutletBoundary } from 'next/dist/lib/framework/boundary-components';
import { Eye, EyeClosed, ListChevronsDownUp, LockKeyhole, Omega } from 'lucide-react';
import { WEBPACK_RESOURCE_QUERIES } from 'next/dist/lib/constants';
import { ActionDidRevalidateStaticAndDynamic } from 'next/dist/shared/lib/action-revalidation-kind';
import { isHTTPMethod } from 'next/dist/server/web/http';
import { generateExportedKeyPair, oAuthDiscoveryMetadata } from 'better-auth/plugins';
import { signInEmail } from 'better-auth/api';
import { ifError } from 'assert';
import { edgeServerPages } from 'next/dist/build/webpack/plugins/pages-manifest-plugin';
import { keepMount } from 'better-auth/client';
import { inherits } from 'util';
import { signUp } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const RegisterLayout = () => {
    const [passwordHidden, setPasswordHidden] = useState(false);
    const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState({
        name: '',
        email: "",
        password: '',
        confirmPassword: ""
    })

    const router = useRouter();

    const trimPassword = password.toString().trim();
    const confirmTrimPassword = confirmPassword.toString().trim();

    const isError = error.name || error.email || error.password || error.confirmPassword;
    const checkInputs = () => {
        const newError = {
        name: '',
        email: "",
        password: '',
        confirmPassword: ""
        }
        setHasError(false);
        if (!name) {
            newError.name = 'Name are required.'
            setHasError(true);
        }
        if(!email) {
            newError.email = "E-mail are required."
            setHasError(true);
        }
        if (!email.includes("@")) {
            newError.email = "E-mail must be use valid email includes @.gmail.com"
            setHasError(true);
        }
        if (!trimPassword) {
            newError.password = "Password are rquired."
            setHasError(true);
        }
        if (trimPassword.length < 6) {
            newError.password = "Password length must be six characters"
            setHasError(true);
        }
        if (!confirmTrimPassword) {
            newError.confirmPassword = 'Confirm Password are required.';
            setHasError(true);
        }
        if (trimPassword !== confirmTrimPassword) {
            newError.confirmPassword = 'Password and confirm pasword are not matching.'
            setHasError(true);
        }

        setError(newError);
        if (isError) return;
        setHasError(false);
        
    }



    const handleSignInButton = async (e: any) => {
        e.preventDefault();
        checkInputs();
        setIsLoading(true);
        try {
           const res = await signUp.email({
                name,
                email,
                password
            });
            if (res.error) {
                alert(res.error.message);
            } else {
                router.push("/dashboard");
            }
        } catch (err) {
            console.log(`Error detected: ${err}`)
        } finally {
            setIsLoading(false);
        }
      

    }

   useEffect(() => {
    checkInputs();
   }, [name, email, password, confirmPassword])
  return (
    <section className='w-screen flex items-center justify-center bg-slate-50 px-4 sm:mb-10'>
        <form onSubmit={handleSignInButton}>
        <div className='container w-full mt-10 max-w-[400px] h-screen flex flex-col items-center mt-10'>
            <div className='w-full text-center'>
                <h3 className='font-bold font-heading text-xl'>
                    Create your account
                </h3>
                <p className='text-sm text-zinc-700 font-medium'>
                    Wellcome, please filll up the detailse to get started.
                </p>
            </div>
            <div className='w-full mt-4 max-w-[300px] grid grid-cols-2 sm:grid-cols-2 space-x-2'>
                <Button variant="outline">
                    Google
                </Button>
                <Button>
                    Github
                </Button>
            </div>
            <div className='w-full flex items-center justify-between space-x-2 text-center text-sm text-muted-foregroun mt-4'>
                <span className='w-full h-[1px] bg-zinc-200'></span>
                <span className='flex w-full text-center'>or continue with</span>
                <span className='w-full h-[1px] bg-zinc-200'></span>
            </div>
            <div className='w-full space-y-4'>
                <div>
                    <label className='font-semibold text-sm '>Name</label>
                    <Input value={name} onChange={(e) => {
                        setName(e.target.value);
                        checkInputs();
                    }} type='text' placeholder='John Week'/>
                    {error.name && <p className='text-left text-sm text-destructive mt-1'>{error.name}</p>}
                </div>
                 <div>
                    <label className='font-semibold text-sm '>E-mail</label>
                    <Input value={email} onChange={(e) => {
                        setEmail(e.target.value); checkInputs();
                    }} type='email' placeholder='john.example@gmail.com'/>
                    {error.email && <p className='text-left text-sm text-destructive mt-1'>{error.email}</p>}
                </div>
                <div className='relative'>
                    <label className='font-semibold text-sm '>Password</label>
                    <Input value={password} onChange={(e) => {
                        setPassword(e.target.value);
                        checkInputs();
                    }}  type={passwordHidden ? 'text' : "password"} placeholder='Enter Password'/>
                    <div className='absolute right-2 top-8'>
                        {passwordHidden && <EyeClosed onClick={() => setPasswordHidden(!passwordHidden)} className='w-5 h-4'/>}
                        {!passwordHidden && <Eye onClick={() => setPasswordHidden(!passwordHidden)} className='w-4 h-4'/>}
                    </div>
                    {error.password && <p className='text-left text-sm text-destructive mt-1'>{error.password}</p>}
                </div>
                 <div className='relative'>
                    <label className='font-semibold text-sm '>Confirm Password</label>
                    <Input value={confirmPassword} onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        checkInputs();

                    }} type={confirmPasswordHidden ? "text" : "password"} placeholder='Confirm Password'/>
                    <div className='absolute right-2 top-8'>
                        {confirmPasswordHidden && <EyeClosed onClick={() => setConfirmPasswordHidden(!confirmPasswordHidden)} className='w-4 h-4'/>}
                        {!confirmPasswordHidden && <Eye onClick={() => setConfirmPasswordHidden(!confirmPasswordHidden)} className='w-4 h-4'/>}
                    </div>
                    {error.confirmPassword && <p className='text-left text-sm text-destructive my-1'>{error.confirmPassword}</p>}
                </div>
            </div>
            <div className='w-full mt-5'>
                <Button disabled={isLoading || hasError} type='submit' className="w-full bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-900 font-semibold">
                    {isLoading && <Spinner />}
                    {isLoading ? 'Creating account...' : 'Sign In'}
                </Button>
            </div>
            <div className='space-x-2'>
                <span className='text-sm'>Alreday have an account?</span>
                <Link href='/login' className='underline hover:text-zinc-600'>
                Sign in
                </Link><dl></dl>
            </div>
        </div>
        </form>
    </section>
  )
}

export default RegisterLayout
