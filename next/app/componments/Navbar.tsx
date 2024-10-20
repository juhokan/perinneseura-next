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

        <button onClick={handleMobileNavigation} type="button" className="relative flex justify-center items-center md:hidden m-4 w-8 h-5 cursor-pointer">
          <div className="sr-only">{menuIcon ? 'Close menu' : 'Open menu'}</div>

          <div
            aria-hidden="true"
            className={`absolute h-1 w-[85%] bg-black transition duration-300 ease-in-out transform ${
              menuIcon ? 'rotate-45' : '-translate-y-1.5'
            }`}
          />

          <div
            aria-hidden="true"
            className={`absolute h-1 w-[85%] bg-black transition duration-300 ease-in-out transform ${
              menuIcon ? '-rotate-45' : 'translate-y-1.5'
            }`}
          />
        </button>

        <div
          aria-hidden="true"
          className={`md:hidden fixed top-0 pt-24 pb-24 left-0 right-0 bottom-0 -z-50 flex justify-center items-center text-center w-full h-screen bg-white ease-in-out duration-300 transform will-change-transform ${
            menuIcon ? 'translate-x-0' : 'fixed translate-x-full pointer-events-none'
          }`}
        >

          <div className="w-full">

            <ul className="text-2xl flex-col items-center justify-center [&>*]:m-4">

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
