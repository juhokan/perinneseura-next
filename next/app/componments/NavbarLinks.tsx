import Link from 'next/link'
import React from 'react'

interface NavbarLinksProps {
  readonly className: string
  readonly paddinngX: string
  readonly paddinngY: string
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ className, paddinngX, paddinngY }) => {

  return (
    <div className={`${className}`}>
      <div className={`group text-black transition-all duration-300 ease-in-out px-${paddinngX} py-${paddinngY}`}>
        <a href='https://jaynakisa.fi' className='text-xl hover:bg-transparent focus:bg-transparent focus:text-black'>
          <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
            Jäynäkisa
          </span>
        </a>
      </div>
      <div className={`group text-black transition-all duration-300 ease-in-out px-${paddinngX} py-${paddinngY}`}>
        <a href='https://rasputin.fi' className='text-xl hover:bg-transparent focus:bg-transparent focus:text-black'>
          <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
            Rasputin
          </span>
        </a>
      </div>
      <div className={`group text-black transition-all duration-300 ease-in-out px-${paddinngX} py-${paddinngY}`}>
        <Link href={'/join'} className='text-xl hover:bg-transparent focus:bg-transparent focus:text-black'>
          <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
            Jäseneksi?
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NavbarLinks