
'use client'

import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const certificateImages = [
  '/certificate-1.jpg',
  '/certificate-2.jpg',
  '/certificate-3.jpg',
  '/certificate-1.jpg',
  '/certificate-2.jpg',
  '/certificate-3.jpg',
  
]

const visaImages = [
  '/visa-1.jpg',
  '/visa-2.jpg',
  '/visa-3.jpg',
  '/visa-1.jpg',
  '/visa-2.jpg',
  '/visa-3.jpg'
]

export default function Results() {
  return (
    <section className="pb-16 " id="result">
      <div className="container mx-auto px-4">
        <h4 className="text-3xl font-semibold text-center mb-6">Check out our students' results</h4>

        <Marquee speed={40} pauseOnHover={true} direction="right">
          {certificateImages.map((src, idx) => (
            <div key={idx} className="mx-4 w-[220px] h-[300px] relative">
              <Image src={src} alt="certificate" fill className="object-cover rounded-lg" />
            </div>
          ))}
        </Marquee>

        <h4 className="text-3xl font-semibold text-center my-6">Our students' results: those who got a visa</h4>

        <Marquee speed={35} pauseOnHover={true} direction="left">
          {visaImages.map((src, idx) => (
            <div key={idx} className="mx-4 w-[220px] h-[300px] relative">
              <Image src={src} alt="visa" fill className="object-cover rounded-lg" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
