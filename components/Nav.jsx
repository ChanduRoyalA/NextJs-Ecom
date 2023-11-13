"use client"
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { AiOutlineUser } from 'react-icons/ai'
import { motion } from 'framer-motion'


const Nav = () => {
  const [mbView, setmbView] = useState(false)
  const router=useRouter()
  const handleLogout = () => {
    Cookies.remove('userId')
    router.replace('/')
  }
  return (
      <nav className=' flex justify-between items-center'>
          <Link href={'/user'}><Image src={Logo} width={90} /></Link>
          <div className='hidden md:flex gap-4 font-medium'>
              <p className='hover:border-b-2 hover:border-b-[#214E34] border-2 border-white rounded-none'>profile</p>
              <p className='hover:border-b-2 hover:border-b-[#214E34] border-2 border-white rounded-none'>cart</p>
              <p className='hover:border-b-2 hover:border-b-[#214E34] border-2 border-white rounded-none'>liked</p>
          </div>
      <button className='hidden md:flex bg-[#214E34] text-white font-semibold px-4 py-2' onClick={handleLogout}>Logout</button>
      <button className='md:hidden' onClick={() => { setmbView(!mbView) }} ><RiMenu3Line style={{ fontSize: '25px', color: '#214E34' }} /> </button>
      {/* <RiCloseLine style={{ fontSize: '25px', color: '#214E34' }} /> */}
      {
        mbView && (
          <motion.div
            initial={{ x:-200,opacity:0  }}
            animate={{ x: 0,opacity:1 }}
            className='md:hidden w-screen pt-2 px-16 bg-white h-screen absolute  top-10 left-0 rounded-lg'>
            <div className='flex justify-between' >
              <Image src={Logo} width={90} />
              <button className='md:hidden' onClick={() => { setmbView(!mbView) }} ><RiCloseLine style={{ fontSize: '25px', color: '#214E34' }} /></button>

            </div>
            <div className='flex flex-col justify-between items-start'>
              <div className='py-12  flex justify-between flex-col h-[40vh] text-[#214E34] w-full'>
                <p className='py-2  px-5 text-lg flex gap-2 items-center hover:bg-[#214E34] hover:text-white rounded-md'><AiOutlineUser style={{ color: "white" }} /> Profile</p>
                <p className='py-2 px-5 text-lg flex gap-2 items-center hover:bg-[#214E34] hover:text-white rounded-md'><AiOutlineUser style={{ color: "white" }} /> Profile</p>
                <p className='py-2 px-5 text-lg flex gap-2 items-center hover:bg-[#214E34] hover:text-white rounded-md'><AiOutlineUser style={{ color: "white" }} /> Profile</p>
                <p className='py-2 px-5 text-lg flex gap-2 items-center hover:bg-[#214E34] hover:text-white rounded-md'><AiOutlineUser style={{ color: "white" }} /> Profile</p>
              </div>
              
                <button className='w-full bg-[#214E34] text-white font-semibold px-6 rounded-md py-2' onClick={handleLogout}>Logout</button>
         
          </div>
            </motion.div>
        )
      }
    </nav>
  )
}

export default Nav
