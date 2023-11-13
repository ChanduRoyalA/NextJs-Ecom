'use client'

import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import levisLogo from '../../assets/levisLogo.png'
import nikePNG from '../../assets/nikePNG.png'
import Image from 'next/image'


const Userdashboard = () => {
  const router = useRouter()
  const userId = Cookies.get('userId')
  if (userId === undefined) {
    useEffect(() => {
      return router.push('/')
    },[])
  }
  return (
    <div className='py-10 h-auto '>
      <div className='grid grid-flow-col md:grid-flow-row md:grid-cols-5 place-items-center  h-1/2 mt-10'>
        <div className=' h-auto col-span-3 flex flex-col gap-4'>
          <h1 className='text-4xl text-start w-full'>Clothes That Get YOU Noticed</h1>
          <p className=''>Fashion is part of the daily air and it does not quite help that it changes all the time.<br className='hidden md:flex' /> Clothes have always been a marker of the era and we are in a revolution.<br className='hidden md:flex' /> Your fashion makes you been seen and heard that way you are.<br className='hidden md:flex' /> So, celebrate the seasons new and exciting fashion in your own way.</p>
          <button className='w-fit bg-[#214E34] text-white font-semibold px-4 py-1'>Shop Now</button>
        </div>
        <div className='hidden md:flex md:col-span-2'>
          <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" width={900} height={900} />
        </div>
      </div>
      <div className='h-screen mt-14'>
        {/* <h1 className='text-2xl'>Shop by Brand</h1> */}
        <div className='hidden h-full mt-10 md:grid grid-flow-col grid-cols-5 gap-2'>
          <div className='flex flex-col h-full gap-2 col-span-2'>
            <div className='h-1/2 flex flex-col justify-end  p-10' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <Image src={levisLogo} width={100} height={100} />
            </div>
            <div className='h-1/2 ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
          </div>
          <div className=' col-span-3 flex flex-col justify-start items-end p-10' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <Image src={nikePNG} width={100} height={100} />
          </div>
        </div>
        <div className='grid grid-flow-row grid-rows-5 md:hidden gap-2 h-screen mt-10'>
          <div className='bg-green-100' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
          </div>
          <div className='bg-green-100 row-span-3' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')", backgroundSize: "cover", backgroundPosition: "bottom" }}>

          </div>
          <div className='bg-green-100' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>

          </div>
  

        </div>
      </div>

    </div>
  )
}

export default Userdashboard
