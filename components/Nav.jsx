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
              <p className='hover:border-b-2 hover:border-b-[#214E34] border-2 border-white rounded-none'>Products</p>
              <p className='hover:border-b-2 hover:border-b-[#214E34] border-2 border-white rounded-none'>Cart</p>
              <p className='hover:border-b-2 hover:border-b-[#214E34] border-2 border-white rounded-none'>Liked</p>
          </div>
      <button className='hidden md:flex bg-[#214E34] text-white font-semibold px-4 py-2' onClick={handleLogout}>Logout</button>
      <button className='md:hidden' onClick={()=>{setmbView(!mbView)}} >{mbView ? <RiCloseLine style={{ fontSize: '25px', color: '#214E34' }} /> : <RiMenu3Line style={{ fontSize: '25px', color: '#214E34' }} />}</button>
      {
        mbView && (
          <motion.div
            initial={{ width: 0 }}
            animate={{width:'70vw'}}
            className='md:hidden pt-2 bg-white h-fit absolute w-[70vw] top-10 rounded-lg'>
            <Image src={Logo} width={90} />
            <div className='flex flex-col justify-between'>
              <div className='px-10 py-12  flex justify-between flex-col h-[40vh] text-[#214E34]'>
                <p className='py-2 px-5 text-lg flex gap-2 items-center hover:bg-[#214E34] hover:text-white rounded-md'><AiOutlineUser style={{ color: "white" }} /> Profile</p>
                <p className='py-2 px-5 text-lg flex gap-2 items-center hover:bg-[#214E34] hover:text-white rounded-md'><AiOutlineUser style={{ color: "white" }} /> Profile</p>
                <p className='py-2 px-5 text-lg flex gap-2 items-center hover:bg-[#214E34] hover:text-white rounded-md'><AiOutlineUser style={{ color: "white" }} /> Profile</p>
                <p className='py-2 px-5 text-lg flex gap-2 items-center hover:bg-[#214E34] hover:text-white rounded-md'><AiOutlineUser style={{ color: "white" }} /> Profile</p>
              </div>
              <div className='px-10 py-12'>
                <button className=' self-start bg-[#214E34] text-white font-semibold px-6 rounded-md py-2' onClick={handleLogout}>Logout</button>
              </div>
          </div>
          </motion.div>
        )
      }
    </nav>
  )
}

export default Nav
