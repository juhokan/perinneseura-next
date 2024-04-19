'use client'
import React from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import Image from 'next/image';
import stripes from '../assets/stripes.svg'

const NavbarButton = () => {

  return (
    <div className='flex items-center justify-center h-20'>
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary lg:hidden absolute 
      top-0 right-0 w-20 h-20 rounded-full flex items-center justify-center
      bg-transparent border-transparent shadow-none
      hover:bg-transparent hover:border-transparent">
          <Hamburger size={24} />
        </label>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Image src={stripes} alt='stripes' className='h-20 max-w-min' />
      </div>
    </div>
  )
}

export default NavbarButton