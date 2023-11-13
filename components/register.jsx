'use client'

import React, { useState } from 'react'
import LoginImg from '../assets/LoginImg.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie";
import { ColorRing } from 'react-loader-spinner'


const RegisterForm = () => {
    const router = useRouter()
    const userId = Cookies.get('userId')
    if (userId !== undefined) {
        router.push('/user')

    }
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')
    const [status, setstatus] = useState(false)
    const handleSignUp = async () => {
        setstatus(true)
        const res = await fetch('/api/register', {
            method: "POST",
            headers: {
                "Content-type":'application/json'
            },
            body: JSON.stringify({
                name,email,password
            })
        })
        const data = await res.json()
        if (data.result === "Success") {
            router.push('/')
        }
        else {
            seterror(data.message)
        }
        setstatus(false)

    }
    return (
        <div className='h-screen flex '>
            <div className='h-full w-1/2 hidden md:flex  items-center justify-center '>
                <Image src={LoginImg} height={500} width={500} />
            </div>
            <div className='grow  flex justify-center items-center '>
                <div className=' shadow-2xl rounded-lg px-4 py-8 flex flex-col gap-2 bg-white'>
                    <input className=' bg-slate-100 focus:outline-none py-1 px-4' placeholder='Name' onChange={(e) => { setname(e.target.value) }} value={name} />
                    <input className=' bg-slate-100 focus:outline-none py-1 px-4' placeholder='Email' onChange={(e) => { setemail(e.target.value) }} value={email} />
                    <input className=' bg-slate-100 focus:outline-none py-1 px-4' placeholder='Password' type='password' onChange={(e) => { setpassword(e.target.value) }} value={password} />
                    <button className='flex justify-center bg-[#214E34] text-white font-medium py-1' onClick={handleSignUp}>{
                        status ? <ColorRing
                            visible={true}
                            height="24"
                            width="24"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['white', 'white', 'white', 'white', 'white', 'white',]}
                        /> : "Signup"
                    }</button>
                    {
                        error && <p className=' bg-red-400 text-white font-medium px-2 w-fit rounded-md text-xs'>{error}</p>

                    }
                    <Link href={'/'}>
                        <p className='text-xs text-right'>Already have an account?<span className=' underline'>Login</span></p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default RegisterForm
