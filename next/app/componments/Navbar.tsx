/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/pseura-logo.svg';
import stripes from '@/public/stripes.svg';

export default function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleMobileNavigation = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <header className="bg-white w-full ease-in duration-200 fixed top-0 left-0 z-10 drop-shadow-3xl">
      <nav className="mx-auto h-24 flex justify-between items-center">
        <div>
          <Link className="flex items-center justify-center" href="/" onClick={menuIcon ? handleMobileNavigation : () => {}}>
            <Image src={logo} alt="PerinneSeura Logo" className="h-16 w-16 m-2" />
          </Link>

        </div>
        <ul className="hidden md:flex text-xl">
          <li>

            <Link href="https://jaynakisa.fi/">
              <span className="m-2 lg:m-4 hover:underline">
                Jäynäkisa
              </span>
            </Link>

          </li>

          <li>

            <Link href="https://rasputin.fi/">
              <span className="m-2 lg:m-4 hover:underline">
                Rasputin
              </span>
            </Link>

          </li>

          <li>

            <Link href="/join">
              <span className="m-2 lg:m-4 hover:underline">
                Jäseneksi?
              </span>
            </Link>

          </li>
        </ul>

        <Image src={stripes} alt="PerinneSeura stripes" className="h-24 w-24 max-md:hidden" />

        <div onClick={handleMobileNavigation} className="flex justify-center items-center md:hidden my-2 mx-4 w-8 h-5 cursor-pointer">
          {menuIcon ? (
            <div className="relative flex items-center justify-center h-full w-full">
              <div className="absolute top-1/2 left-1/2 h-1 w-full bg-black transform -translate-x-1/2 -translate-y-1/2 rotate-45 transition-all duration-300" />
              <div className="absolute top-1/2 left-1/2 h-1 w-full bg-black transform -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-all duration-300" />
            </div>
          ) : (

            <div className="relative flex flex-col justify-center items-center h-full w-full">
              <div className="absolute top-[5%] left-1/2 h-1 w-[85%] bg-black transform -translate-x-1/2 transition-all duration-300" />
              <div className="absolute bottom-[5%] left-1/2 h-1 w-[85%] bg-black transform -translate-x-1/2 transition-all duration-300" />
            </div>
          )}
        </div>

        <div className={menuIcon
          ? 'md:hidden absolute top-24 left-0 right-0 bottom-0 flex items-center text-center w-full h-screen bg-white ease-in duration-200 transform translate-x-0'
          : 'md:hidden absolute top-24 left-0 right-[-100%] bottom-0 flex items-center text-center w-full h-screen bg-white ease-in duration-200 transform translate-x-full'}
        >

          <div className="w-full">

            <ul className="text-2xl mb-52 [&>*]:mt-4 [&>*]:mb-4">

              <li className="py-5 hover:underline cursor-pointer">
                <Link onClick={handleMobileNavigation} href="https://jaynakisa.fi/">
                  Jäynäkisa
                </Link>
              </li>

              <li className="py-5 hover:underline cursor-pointer">
                <Link onClick={handleMobileNavigation} href="https://rasputin.fi/">
                  Rasputin
                </Link>
              </li>

              <li className="py-5 hover:underline cursor-pointer">
                <Link onClick={handleMobileNavigation} href="/join">
                  Jäseneksi?
                </Link>
              </li>

            </ul>

          </div>

        </div>
      </nav>
    </header>
  );
}
