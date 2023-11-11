import Nav from '@/components/Nav'
import React from 'react'

const Userlayout = ({children}) => {
  return (
    <div className='px-16 py-12'>
          <Nav/>
          {children}
    </div>
  )
}

export default Userlayout
