import React from 'react';
import logo from '../assets/pseura-logo.svg'
import stripes from '../assets/stripes.svg'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-slate-50 p-0">
      <Link href={'/'}>
        <Image src={logo} alt='PerinneSeura' className='h-16 max-w-min py-1 px-2'/>
      </Link>
      <div className="navbar-start">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" /> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-full min-h-full bg-slate-100 text-base-content flex items-center content-center h-">
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href='https://jaynakisa.fi' className='text-xl hover:bg-transparent px-6'>Jäynäkisa</a></li>
          <li><a href='https://rasputin.fi' className='text-xl hover:bg-transparent px-6'>Rasputin</a></li>
          <li><Link href={'/join'} className='text-xl hover:bg-transparent px-6'>Jäseneksi?</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary lg:hidden absolute top-0 right-0">Open drawer</label>
          </div>
        <Image src={stripes} alt='stripes' className='h-20 max-w-min'/>
      </div>
    </div>
  );
}

export default Navbar;
