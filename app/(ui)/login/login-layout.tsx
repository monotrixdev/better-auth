'use client';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeClosed, Lock, Mail } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Spinner from '../../_components/spinner';
import Link from 'next/link';
import { setLazyProp } from 'next/dist/server/api-utils';
import { signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const LoginLayout = () => {
    const [passwordHidden, setPasswordHidden] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ email: '', password: ''});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasError, setHasError] = useState(false);

    const checkValid = () => {
        const newError = { email: '', password: ''}
        setHasError(false);
        if (!email) {
            newError.email = 'E-mail are required.'
            setHasError(true);
         
        }
        if (!email.includes("@")) {
            newError.email = "E-mail must be include @gmail.com"
            setHasError(true);
        }
        if (!password) {
            newError.password = "Password are required."
            setHasError(true);
        }
        if (password.length < 6) {
            newError.password = "Password must be at least six characters";
            setHasError(true)
        }
        setError(newError);
        if (error.email === '' || error.password === '') return;
        setHasError(false);
    }

    const router = useRouter();


    const handleSubmitForm = async (e: any) => {
        e.preventDefault();
        checkValid();
        setIsLoading(true);
        try {
           
            const res = await signIn.email({
                email,
                password
            });
            if (res.error) {
                toast.error(res.error.message || "Sign in failed");
            } else {
                router.push("/dashboard");
            }

            
        } catch (error) {
            console.log(error);
            toast.error("Unaspacted error detected")
        } finally {
            setIsLoading(false);
      }
    }

    useEffect(() => {
        checkValid();
    }, [email, password])
  
  return (
    <section className='w-screen h-screen bg-slate-50'>
        <form onSubmit={handleSubmitForm}>
        <div className='container mx-auto mt-10 space-y-4 max-w-[400px] flex flex-col items-center'>
            <div className='w-full flex flex-col items-center justify-center -space-y-0'>
                <h3 className='font-semibold text-xl sm:text-2xl'>
                    Wellcome back
                </h3>
                <p className='text-sm sm:text-md text-zinc-700 font-medium'>
                    Sign in your account to continue
                </p>
            </div>
            <div className='w-full max-w-[300px] flex flex-col items-center justify-center space-y-2'>
                <Button variant="outline" className="px-4 w-full">
                    
                    Continue with Google
                </Button>
                <Button className="w-full">
                    Continue with Github
                </Button>
            </div>
            <div className='w-full flex items-center justify-center space-x-2 text-center text-sm text-muted-foreground'>
                <span className='w-full h-[1px] bg-zinc-200'></span>
                <span className='flex w-full'>or continue with</span>
                <span className='w-full h-[1px] bg-zinc-200'></span>
            </div>
            <div className='w-full max-w-[300px]'>
                <div className='group'>
                   <div className='w-full flex rounded-md border border-zinc-200 group-hover:border-zinc-600 group-hover:ring-2 group-hover:ring-zinc-600/20'>
                    <div className='w-fit h-full px-2 py-2 bg-muted-foreground/20 rounded-l-md'>
                        <Mail className='w-4 h-4 text-zinc-500'/>
                    </div>
                    <input onChange={(e) => {
                        setEmail(e.target.value);
                        checkValid();
                    }} value={email} className='w-full px-2 outline-0' type='email' placeholder='john.example@gmail.com'/>
                </div>
                </div>
                {error.email && <p className='text-sm text-destructive mt-1'>{error.email}</p>}
                <div>
                    <label className='text-sm font-medium'>Password</label>
                    <div className='group'>
                    <div className='rounded-md border border-zinc-200 group-hover:border-zinc-600 flex items-center group-hover:ring-2 group-hover:ring-zinc-900/10'>
                       <div className='h-full py-2 px-2 w-fit bg-muted-foreground/20 rounded-l-md'>
                         <Lock className='w-4 h-4 text-muted-foreground'/>
                       </div>
                       <div className='w-full h-full relative flex items-center'>
                        <input onChange={(e) => {
                            setPassword(e.target.value);
                            checkValid();
                        }} value={password} className='w-full h-full py-1 px-2 outline-0 ' type={passwordHidden ? "password" : "text"} placeholder='Password'/>
                        <div className='absolute right-2'>
                            {
                                passwordHidden ? <Eye onClick={() => setPasswordHidden(!passwordHidden)} className='w-4 h-4'/> : <EyeClosed onClick={() => setPasswordHidden(!passwordHidden)} className='w-4 h-4'/>
                            }
                        </div>
                       </div>
                    </div>
                    </div>
                    {error.password && <p className='text-sm text-destructive'>{error.password}</p>}
                </div>
                <div className='w-full flex items-center justify-end mt-2'>
                    <Link className='text-sm hover:underline' href="/forgotten-password">
                    Forgotten Password?
                    </Link>
                </div>
                <div className='w-full mt-2'>
                    <Button type='submit' disabled={isLoading || hasError} className="w-full font-semibold bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800">
                        { isLoading && <Spinner /> }
                        { isLoading ? 'Signing...' : "Sign in"}
                    </Button>
                </div>
                <div className='w-full flex space-x-2 items-center justify-center mt-2'>
                    <span className='text-sm '>
                        Don&apos;t have any account?
                    </span>
                    <Link href="/register" className='underline hover:text-zinc-600'>
                    Sign Up
                    </Link>
                </div>
            </div>
        </div>
        </form>
    </section>
  )
}

export default LoginLayout
