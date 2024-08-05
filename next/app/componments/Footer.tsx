import React from 'react';
import logo from '@/public/pseura-inverted.svg';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-between w-full bg-[#e20000] brightness-95">
        <div className="flex items-center">
          <Image src={logo} alt="Teekkarien PerinneSeura" className="h-12 w-auto my-2 mx-4" />
          <h3 className="text-white">©2024 Teekkarien PerinneSeura ry</h3>
        </div>
        <Link href="https://www.instagram.com/jaynakisatre/" className="mx-4" aria-label="Jäynäkisa Tampere Instagram">
          <FaInstagram size={28} color="white" />
        </Link>
      </div>
    </footer>
  );
}
