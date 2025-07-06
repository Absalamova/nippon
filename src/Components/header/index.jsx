import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className=' w-full shadow'>
      <div className='container max-w-[1200px] mx-auto py-2.5 px-2 flex items-center justify-between'>
        
        <Link href="/">
          <div className="relative w-[60px] h-[80px] ">
            <Image fill src="/logo.png" alt="logo" />
          </div> 
        </Link>
        
        <nav className='flex gap-[30px] '> 
            <Link className='hover:text-red-600' href="#we">Why Us</Link>
            <Link className='hover:text-red-600' href="#result">Results</Link>
            <Link className='hover:text-red-600' href="#course">Courses</Link>
            <Link className='hover:text-red-600' href="#faq">FAQ</Link>
        </nav>
        <div className='flex flex-col'>
           <Link className='hover:text-red-600' href="tel:+998 (95) 325 5000">+998 (95) 325 5000</Link>
           <Link className='hover:text-red-600' href="tel:+998 (90) 444 7000">+998 (90) 444 7000</Link>
        </div>
      </div>
    </header>
  )
}

export default Header




