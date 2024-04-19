import React from 'react'
import NavbarLinks from './NavbarLinks'

const NavbarDrawer = () => {
  return (
    <div className="navbar-start">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-full min-h-full bg-white place-items-center h-full">
            <div className='h-full flex flex-col items-center justify-center'>
              <NavbarLinks className='flex-col' paddinngX='4' paddinngY='6' />
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarDrawer