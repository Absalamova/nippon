import Image from 'next/image'
import React from 'react'

const aboutData = [
  {
    img: '/chat.png',
    text: 'Want to start speaking Japanese in a short time',
  },
  {
    img: '/rocket.png',
    text: 'Want to learn Japanese and build your career',
  },
  {
    img: '/money.png',
    text: 'Want to get a JLPT certificate and win a scholarship to prestigious Japanese universities',
  },
  {
    img: '/travel.png',
    text: 'Plan to study and work in Japan',
  },
  {
    img: '/target.png',
    text: 'Have an intermediate level of Japanese and want to improve',
  },
  {
    img: '/key.png',
    text: 'Have been studying for years but haven’t achieved results',
  }
]

function About() {
  return (
    <section className="pb-16 " id="about">
      <div className="container mx-auto px-4">
        <h4 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Nippon Study Center is definitely for you if you:
        </h4>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {aboutData.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image src={item.img} alt="icon" fill className="object-contain" />
              </div>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
