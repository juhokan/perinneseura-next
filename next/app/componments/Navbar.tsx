import React from 'react';
import logo from '../assets/pseura-logo.svg'
import stripes from '../assets/stripes.svg'
import Image from 'next/image';
import Link from 'next/link';
import NavbarButton from './NavbarButton';

const Navbar = () => {
  return (
    <div className="navbar bg-white p-0 drop-shadow-3xl">
      <Link href={'/'}>
        <Image src={logo} alt='PerinneSeura' className='h-16 max-w-min py-1 px-4' />
      </Link>
      <div className="navbar-start">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-full min-h-full bg-white place-items-center h-full">
              <div className='h-full flex flex-col items-center justify-center '>
              <li className='group text-black transition-all duration-300 ease-in-out'>
            <a href='https://jaynakisa.fi' className='text-xl hover:bg-transparent py-6 focus:bg-transparent focus:text-black'>
              <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Jäynäkisa
              </span>
            </a>
          </li>
          <li className='group text-black transition-all duration-300 ease-in-out'>
            <a href='https://rasputin.fi' className='text-xl hover:bg-transparent py-6 focus:bg-transparent focus:text-black'>
              <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Rasputin
              </span>
            </a>
          </li>
          <li className='group text-black transition-all duration-300 ease-in-out'>
            <Link href={'/join'} className='text-xl hover:bg-transparent py-6 focus:bg-transparent focus:text-black'>
              <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Jäseneksi?
              </span>
            </Link>
          </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='group text-black transition-all duration-300 ease-in-out'>
            <a href='https://jaynakisa.fi' className='text-xl hover:bg-transparent px-6 focus:bg-transparent focus:text-black'>
              <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Jäynäkisa
              </span>
            </a>
          </li>
          <li className='group text-black transition-all duration-300 ease-in-out'>
            <a href='https://rasputin.fi' className='text-xl hover:bg-transparent px-6 focus:bg-transparent focus:text-black'>
              <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Rasputin
              </span>
            </a>
          </li>
          <li className='group text-black transition-all duration-300 ease-in-out'>
            <Link href={'/join'} className='text-xl hover:bg-transparent px-6 focus:bg-transparent focus:text-black'>
              <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Jäseneksi?
              </span>
            </Link>
          </li>
         
        </ul>
      </div>
      <div className="navbar-end">
        <NavbarButton />
        <Image src={stripes} alt='stripes' className='h-20 max-w-min' />
      </div>
    </div>
  );
}

export default Navbar;
