import React from 'react'
import About from '@/Components/about'
import Footer from '@/Components/footer'
import Header from '@/Components/header'
import Hero from '@/Components/hero'
import JLPT from '@/Components/jlpt'
import News from '@/Components/news'
import Results from '@/Components/results'
import Faq from '@/Components/faq'
import License from '@/Components/license'

function Home() {
  return (
    <div className='relative h-full bg-[url("/body-bg.jpg")] bg-cover bg-center bg-fixed'>  
      <div className="absolute inset-0 bg-white/50 z-0"></div>
      <div className="relative z-10">
        <Header />
        <Hero/>
        <News/>
        <About/>
        <Results/>
        <JLPT/>
        <License/>
        <Faq/>
        <Footer />
      </div>

    </div>
  )
}

export default Home
