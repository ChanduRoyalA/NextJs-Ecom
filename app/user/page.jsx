'use client'

import React from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const Userdashboard = () => {
  const router=useRouter()
  const userId = Cookies.get('userId')
  if (userId === undefined) {
    router.push('/')
  }
  return (
    <div className='py-10 h-auto '>
      <div className='grid grid-flow-row grid-cols-5 place-items-center  h-1/2 '>
        <div className=' h-auto col-span-3 flex flex-col gap-4'>
          <h1 className='text-4xl text-start w-full'>Clothes That Get YOU Noticed</h1>
          <p className=''>Fashion is part of the daily air and it does not quite help that it changes all the time.<br /> Clothes have always been a marker of the era and we are in a revolution.<br /> Your fashion makes you been seen and heard that way you are.<br /> So, celebrate the seasons new and exciting fashion in your own way.</p>
          <button className='w-fit bg-[#214E34] text-white font-semibold px-4 py-1'>Shop Now</button>
        </div>
        <div className=' col-span-2'>
          <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" width={900} height={900} />
        </div>
      </div> 
      <div className='h-screen mt-10'>
        <h1>Shop by Category</h1>
      </div>

    </div>
  )
}

export default Userdashboard
