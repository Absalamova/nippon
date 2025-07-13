// components/Header.jsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="shadow-md  w-full  ">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-[80px] h-[80px] ">
          <Link href="#home">
            <Image src="/logo.png" alt="Logo" fill />
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex gap-6 items-center">
          <Link href="#we" className="hover:text-red-500">Why Us</Link>
          <Link href="#result" className="hover:text-red-500">Results</Link>
          <Link href="#news" className="hover:text-red-500">News</Link>
          <Link href="#faq" className="hover:text-red-500">Frequently Asked Questions</Link>
        </nav>

    
        <div className="flex items-center gap-4">

          {/* Phone numbers - hidden on small */}
          <div className="hidden lg:flex flex-col text-sm">
            <a href="tel:+998953255000" className="hover:text-red-500">+998 (95) 325 5000</a>
            <a href="tel:+998904447000" className="hover:text-red-500">+998 (90) 444 7000</a>
          </div>

          {/* Burger Icon */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-[40%] h-screen bg-pink-100 z-50 p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-semibold">Menu</span>
            <button onClick={() => setMobileOpen(false)} className="text-2xl">
              <FaTimes />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link href="#we" onClick={() => setMobileOpen(false)}>Why Us</Link>
            <Link href="#result" onClick={() => setMobileOpen(false)}>Results</Link>
            <Link href="#course" onClick={() => setMobileOpen(false)}>Courses</Link>
            <Link href="#faq" onClick={() => setMobileOpen(false)}>FAQ</Link>
          </nav>
          <div className="mt-6 space-y-2 text-sm">
            <a href="tel:+998953255000" className="block">+998 (95) 325 5000</a>
            <a href="tel:+998904447000" className="block">+998 (90) 444 7000</a>
          </div>
          
        </div>
      )}
    </header>
  )
}