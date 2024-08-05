/* eslint-disable @next/next/no-img-element */
import React from 'react';
import bg from '@/public/pseura.webp';

export default function Home() {
  return (
    <div
      className="-z-10 w-screen h-screen flex items-center transition-all duration-500 ease-in-out bg-gradient-to-b from-[#e20000]  to-[#960000]"
    >
      <img
        src={bg.src}
        alt="PerinneSeura - GrandeFinale 2024"
        className="absolute inset-0 object-cover w-full h-full brightness-50"
        loading="lazy"
      />
      <section className="relative">
        <div>
          <h1 className="text-6xl md:text-7xl text-slate-100 px-4 py-2 lg:text-8xl lg:px-8 lg:py-2">
            PerinneSeura
          </h1>
          <h2 className="text-2xl text-slate-100 px-4 py-1 lg:text-4xl lg:px-8 lg:py-2">
            Yli 30 vuotta teekkarikulttuuria
          </h2>
        </div>
      </section>
    </div>
  );
}
