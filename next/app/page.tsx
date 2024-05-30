import React from 'react';
import bg from './assets/home-image.jpg';

export default function Home() {
  return (
    <div
      className="bg mt-24 absolute -z-10 w-screen h-screen flex items-center bg-cover bg-center
          before:absolute before:w-full before:h-full before:-z-10"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <section>
        <div>
          <h1 className="text-6xl md:text-7xl text-slate-100 z-30 px-4 py-2 lg:text-8xl lg:px-8 lg:py-2">
            PerinneSeura
          </h1>
          <h2 className="text-2xl text-slate-100 z-30 px-4 py-1 lg:text-4xl lg:px-8 lg:py-2">
            Yli 30 vuotta teekkarikulttuuria
          </h2>
        </div>
      </section>
    </div>
  );
}
