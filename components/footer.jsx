import React from 'react'
import Logo from '../assets/Logo.svg'
import socialIcons from '../assets/socialIcons.svg'
import Image from 'next/image'

const Footer = () => {
  return (
      <footer className='flex flex-col md:flex-row justify-between mt-10'>
          <div className="mt-10 md:mt-0 flex justify-between flex-col  order-2 md:order-1 gap-3 md:gap-16 self-center md:self-auto">
              <Image src={Logo} width={100} height={100}/>
              <Image src={socialIcons} />
          </div>
          <div className="self-start md:self-auto flex flex-col md:flex-row gap-8 md:gap-20 order-1 md:order-2">
              <div className="FooterSubDivs">
                  <h1 className="font-bold text-lg">About</h1>
                  <p>How it works</p>
                  <p>Company</p>
                  <p>Help & Support</p>
              </div>
              <div className="FooterSubDivs">
                  <h1 className="font-bold text-lg">For creators</h1>
                  <p>How can i get paid</p>
                  <p>Become a creator</p>
              </div>
              <div className="FooterSubDivs">
                  <h1 className="font-bold text-lg">Learn</h1>
                  <p>Blog</p>
                  <p>Cookies policy</p>
                  <p>Privacy policy</p>
              </div>
              <div className="FooterSubDivs">
                  <h1 className="font-bold text-lg">Support</h1>
                  <p>Service status</p>
                  <p>Report abuse</p>
                  <p>Dispute a payment</p>
              </div>
          </div>
      </footer>
  )
}

export default Footer
