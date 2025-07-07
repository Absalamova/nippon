
import React from 'react'
import Image from 'next/image'

export default function License() {
  return (
    <section className="py-16 " id="license">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">License</h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">
              Our center is licensed in accordance with the legislation of the Republic of Uzbekistan
            </h3>
            <p className="text-gray-700">
              Our Nippon Learning Center is a private educational institution licensed to conduct extracurricular activities and licensed in accordance with the law. This means that you can trust us and everything is legal.
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-[350px]">
            <Image
              src="/license.jpg"
              alt="license photo"
              fill
              className="object-contain rounded "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
