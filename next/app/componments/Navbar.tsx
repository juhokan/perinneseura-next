import React from 'react';
import logo from '../assets/pseura-logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import NavbarButton from './NavbarButton';
import NavbarLinks from './NavbarLinks';
import NavbarDrawer from './NavbarDrawer';

const Navbar = () => {
  return (
    <div className="navbar bg-white p-0 drop-shadow-3xl">
      <Link href={'/'}>
        <Image src={logo} alt='PerinneSeura' className='h-16 max-w-min py-1 px-4' />
      </Link>
      <NavbarDrawer/>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavbarLinks className='flex' paddinngX='6' paddinngY='4'/>
        </ul>
      </div>
      <div className="navbar-end">
        <NavbarButton />
      </div>
    </div>
  );
}

export default Navbar;
