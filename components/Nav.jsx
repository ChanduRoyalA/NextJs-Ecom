"use client"
import Cookies from 'js-cookie'
import React from 'react'
import Logo from '../assets/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Nav = () => {
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
          <button className=' bg-[#214E34] text-white font-semibold px-4 py-2' onClick={handleLogout}>Logout</button>
          
    </nav>
  )
}

export default Nav
