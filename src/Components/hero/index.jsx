// components/Hero.jsx
import React from 'react'

function Hero() {
    return (
        <section className='container max-w-[1200px] mx-auto py-20' >
            <div className="relative z-10 flex flex-col h-full text-left px-4">
                <p className="text-red-600 mb-2 text-lg">Start speaking Japanese in 4 months</p>
                <h1 className="text-4xl md:text-6xl font-semibold text-black leading-tight max-w-3xl">
                    Opportunity to study in Japanese universities with up to 100% scholarship
                </h1>
                <div className="mt-6 flex flex-col md:flex max-w-2xl font-semibold text-gray-800">
                    <p>
                        We will help you reach N5 level in Japanese in 4 months
                    </p>
                    <p>
                        Achieve a high level of Japanese and gain the opportunity to study and work in Japan
                    </p>
                </div>
                <div className='w-[220px] h-[40px] mt-10 '>
                    <a
                    href="#contact"
                    className="px-3 py-2 text-white 
                    bg-gradient-to-r from-red-400 to-red-600 
                     hover:from-red-500 hover:to-red-800 
                    rounded-full text-lg shadow-md transition"
                    >
                    Sign up for a free lesson
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
