'use client'
import Spinner from '@/app/_components/spinner'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { authClient } from '@/lib/auth-client'
import { file } from 'better-auth'
import { CheckCircle2, LayoutDashboardIcon, PlusCircle, SaveAll, Upload, UploadCloud } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { toast } from 'sonner'

const page = () => {
  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')
  const [loading, setLoading] = useState(false)
  const addFile = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleAddFile = () => {
    addFile?.current?.click()
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectFile = e.target.files?.[0];
    if (selectFile) {
      setFile(selectFile)
      setPreview(URL.createObjectURL(selectFile));
    }
  }

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await uploadRes.json();
      if (data.error) {
        toast.error(data.error || 'Failed tp upload images.')
        return;
      }
      const url = data.url;

      await authClient.updateUser({
        image: url,
        isOnboarded: true
      })

      router.push('/dashboard');
      router.refresh();

      toast.success("Succesfully uploaded file.")


    } catch (err) {
      console.log(`Onboadinf Err`, err);
    } finally {
      setLoading(false);
    }
  }


  return (
    <section className='container mx-auto min-h-screen bg-zinc-50 px-4 py-15 flex items-center justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 flex items-center justify-center'>

        <div className='w-full max-2-[400px] flex flex-col gap-2'>
                  <div className='w-fit flex items-center space-x-2 px-4 py-1 rounded-full bg-zinc-900'>
          <CheckCircle2 className='w-4 h-4 text-white'/>
          <span className='text-white text-sm'>
            Step 1 of 1
          </span>
        </div> 
           <h1 className='text-2xl font-bold'>
            Wellcome to Onboard
           </h1>
           <p className='text-left text-muted-foreground'>
            You'll see your avater everywhere when you add you personal avater any one can see it.
           </p>

        </div>
        <div className='hidden'>
          <input onChange={handleFileChange} ref={addFile} accept='image/*' type='file' multiple/>
        </div>
        <div className='w-full max-w-[500px] mt-5'>
          <p className='text-zinc-700'>Take a picture or upload an image.</p>
          <div className='w-full mt-5 border border-zinc-300 rounded-md bg-white'>
            <p className='font-semibold text-zinc-700 text-sm px-4 py-2'>Profile Picture</p>
            {file.length == 0 && (
              <>
              <div className='relative'>
              <div className='mt-5 w-full flex items-center space-x-2 px-4'>

              <div className='w-15 h-15 rounded-full bg-muted-foreground/5 p-5 border-2 border-dashed border-muted-foreground/20 text-center flex items-center'>
            
              <Upload className='w-6 h-6 text-muted-foreground'/>
              </div>
              <Button onClick={handleAddFile} variant="outline">Upload Photo</Button>
            </div>
            <div className='mt-2 px-4'>
              <h4 className='text-sm text-zinc-600'>PNG, JPG, WEBP</h4>
              <p className='text-xs text-muted-foreground'>Max up to 5MB</p>
            </div>
            </div>
              </>
            )}
            {file.length !== 0 && (
              <div className='px-4 space-y-2 relative'>
                <div className='p-5 bg-zinc-50 rounded-md flex flex-col '>
                  <div className='w-full items-center justify-center flex space-x-2'>
                    <Image className='rounded-full border border-zinc-50 bg-white bg-cover w-20 h-20'  width={20} height={20} alt='Profile Images' src={preview}/>
                    <Image className='rounded-lg border border-zinc-50 bg-white bg-cover w-15 h-15'  width={15} height={15} alt='Profile Images' src={preview}/>
                    <Image className='rounded-full border border-zinc-50 bg-white bg-cover w-6 h-6'  width={5} height={5} alt='Profile Images' src={preview}/>
                  </div>
                </div>
                <div className='relative w-full flex items-center justify-center space-x-2'>
                   <Button disabled={loading} onClick={handleAddFile} variant="outline" className=''>
                    <PlusCircle />
                    Replace
                   </Button>
                   <Button onClick={handleSubmit} disabled={loading} className="px-4 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
                    {loading && <Spinner />}
                    {loading && (
                      'Saving...'
                    )}
                    

                    {!loading && (
                      <UploadCloud />
                    )}
                    
                    {!loading && (
                      'Save'
                    )}
                   </Button>
                </div>
              </div>
            )}
          <div className='h-[1px] bg-muted-foreground/20 mt-2'></div>
          <div className='py-4 px-4 rounded-b-md bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 flex flex-col space-y-2'>
            <Button disabled={!file || loading} size='lg' className='w-full py-5 bg-gradient-to-br from-zinc-700 to-zinc-800 to-zinc-900'>
              <LayoutDashboardIcon className='w-6 h-5 '/>
              Continue Dashboard
            </Button>
            <Button variant='link' className='text-zinc-700 w-full'>Skip for now</Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
