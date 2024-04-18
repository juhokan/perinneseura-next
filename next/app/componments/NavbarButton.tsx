'use client'
import React from 'react'
import { Cross as Hamburger } from 'hamburger-react'

const NavbarButton = () => {



  return (
    <div className="drawer-content">
      <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary lg:hidden absolute 
      top-0 right-0 w-20 h-20 rounded-full flex items-center justify-center
      bg-transparent border-transparent shadow-none
      hover:bg-transparent hover:border-transparent">
        <Hamburger size={24}/>
      </label>
    </div>
  )
}

export default NavbarButton