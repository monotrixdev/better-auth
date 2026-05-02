import { Button } from '@/components/ui/button'
import { Goal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import HeaderPage from './_components/header'
import FotterPage from './_components/fotter'


const mail = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            box-sizing: border-box;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
        }
        body {
            width: 100%;
            background-color: aliceblue;
            display: flex;
            justify-content: center;
            gap: 10px;
            padding: 10px;
        }
        .box {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        h1 {
            font-size: 20px;

        }
        .box .description {
            font-size: 12px;
            color: gray;
        }
        .account-data {
            width: 100%;
            display: flex;
            gap: 10px;
            margin-top: 15px;
            border: 1px dashed rgb(223, 223, 223);
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            font-size: 14px;
            flex-direction: column;
        }
        .account-data .data-set {
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }
        .account-data .data-set p {
            font-size: 12px;

        }
        .account-data .data-set span {
            font-size: 12px;
            color: gray;
        }
        .btn {
            width: 100%;
            margin-top: 10px;
            padding: 11px;
            outline: none;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 300;
            cursor: pointer;
            color: white;
            border: none;
            background: rgb(0, 119, 255);
        }

    </style>
</head>
<body>
    <div class="box">
        <h1>Monotrixdev</h1>
        <p class="description">Verify your account to continue</p>
        <div class="account-data">
            <div class="data-set">
                <span>Email</span>
                <p>sabbirahemx999@gmail.com</p>
            </div>
              <div class="data-set">
                <span>Username</span>
                <p>sabbirahmed.dh</p>
            </div>
        </div>
        <button class="btn">

            Verify Account
        </button>
        <p>If you dont have any account ten create an a cccount</p>
    </div>
</body>
</html>`
}

const NorFoundPage = () => {
  return (
    <>
    <HeaderPage />
    <mail />
    <div className='w-screen py-10 bg-slate-50'>
        <div className='container w-full h-full flex flex-col items-center justify-center'>
            <h1 className='text-9xl font-bold font-serif bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800 text-transparent bg-clip-text'>
                404
            </h1>
            <p className='mt-4 font-medium text-xl'>
                Sorry, this page is currently not found.
            </p>
            <div className='mt-5'>
            <Link href='/' className='w-full'>
                <Button className="bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-900">
                    
                    <Goal className=''/>
                    Go to Home
                
                </Button>
            </Link>

            </div>
        </div>
    </div>
    <FotterPage />
    </>
  )
}

export default NorFoundPage
