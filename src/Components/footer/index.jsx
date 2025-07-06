import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane, FaPhoneAlt, FaInstagram,  FaFacebookSquare } from "react-icons/fa";

function Footer() {
    return (
        <footer className='bg-black'>
            <div className='container max-w-[1200px] mx-auto py-2.5 px-2 flex items-center justify-between text-white'>
                <div className="relative w-[60px] h-[80px] ">
                    <Link className='hover:text-red-500' href="/">
                        <Image fill src="/footer-logo.png" alt="logo" />
                    </Link>
                </div>
                <nav className='flex gap-[30px] '>
                    <Link className='hover:text-red-500' href="#we">Why Us</Link>
                    <Link className='hover:text-red-500' href="#result">Results</Link>
                    <Link className='hover:text-red-500' href="#course">Courses</Link>
                    <Link className='hover:text-red-500' href="#faq">FAQ</Link>
                </nav>
                <div className='flex gap-[25px]'>
                  <Link className='hover:text-red-500' href="tel:+998 (95) 325 5000"><FaPhoneAlt /></Link>
                  <Link className='hover:text-red-500' href="https://t.me/nipponstudycenter"><FaTelegramPlane /></Link>
                  <Link className='hover:text-red-500' href="https://www.instagram.com/nippon.uz/"><FaInstagram /></Link>
                  <Link className='hover:text-red-500' href="https://www.facebook.com/nippon.uz">< FaFacebookSquare/></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer