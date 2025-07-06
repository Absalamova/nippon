// pages/news.js
'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const images = [
  '/banner-1.jpg',
  '/banner-2.jpg',
  '/banner-3.jpg'
]

export default function News() {
  return (
    <div className="min-h-screen relative z-10 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">News</h1>

      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md bg-white/30 backdrop-blur">
                <Image
                  src={src}
                  alt={`News ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
