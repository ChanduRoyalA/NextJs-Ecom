import Nav from '@/components/Nav'
import Footer from '@/components/footer'
import React from 'react'

const Userlayout = ({ children }) => {
  return (
    <div className='px-16 py-12'>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Userlayout
