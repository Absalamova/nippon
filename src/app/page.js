import About from '@/Components/about'
import Footer from '@/Components/footer'
import Header from '@/Components/header'
import Hero from '@/Components/hero'
import News from '@/Components/news'
import Results from '@/Components/results'
import React from 'react'

function Home() {
  return (
    <div className='relative h-full bg-[url("/body-bg.jpg")] bg-cover bg-center bg-fixed'>  
      <div className="absolute inset-0 bg-white/40 z-0"></div>
      <div className="relative z-10">
        <Header />
        <Hero/>
        <News/>
        <About/>
        <Results/>
        <Footer />
      </div>

    </div>
  )
}

export default Home
