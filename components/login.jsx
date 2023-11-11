"use client"

import React, { useState } from 'react'
import LoginSvg from '../assets/LoginSvg.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter} from 'next/navigation'
import Cookies from "js-cookie";
import { ColorRing } from 'react-loader-spinner'


const Login = () => {
    const router = useRouter()
    const userId = Cookies.get('userId')
    if (userId !== undefined) {
        router.push('/user')
        
    }
    const [email, setemail] = useState("")
    const [error, seterror] = useState("")
    const [password, setpassword] = useState("")
    const [status, setstatus] = useState(false)

    const handleLogin = async () => {
        setstatus(true)

        const res = await fetch('/api/login', {
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                email,password
            })
        })
        const data = await res.json()
        if (data.result === "Success") {
            Cookies.set('userId', data.userId,{expires:10})
            router.push('/user')
        }
        else {
            seterror(data.message)
        }
        setstatus(false)

    }
  return (
      <div className='h-screen flex '>
          <div className='h-full w-1/2  items-center justify-center flex bg-yellow-300 '>
            <Image src={LoginSvg} height={650} width={650}/>
          </div>
          <div className='grow  flex justify-center items-center '>
              <div className=' shadow-2xl rounded-lg px-4 py-8 flex flex-col gap-2 bg-white'>
                  <input className=' bg-slate-100 focus:outline-none py-1 px-4' placeholder='Email' onChange={(e)=>{setemail(e.target.value)}} value={email}/>
                  <input className=' bg-slate-100 focus:outline-none py-1 px-4' placeholder='Password' type='password' onChange={(e) => { setpassword(e.target.value) }} value={password} />
                  <button className='flex justify-center bg-green-500 text-white font-bold py-1' onClick={handleLogin}>{
                      status ? <ColorRing
                          visible={true}
                          height="24"
                          width="24"
                          ariaLabel="blocks-loading"
                          wrapperStyle={{}}
                          wrapperClass="blocks-wrapper"
                          colors={['white', 'white', 'white', 'white', 'white', 'white',]}
                      /> : "Login"
                  }</button>
                  {
                      error && <p className=' bg-red-400 text-white font-medium px-2 w-fit rounded-md text-xs'>{error}</p>
                  }
                  <Link href={'/register'}>
                      <p className='text-xs text-right'>Dont have an account? <span className=' underline'>SignUp</span></p>
                  </Link>
              </div>
          </div>

      </div>
  )
}

export default Login
