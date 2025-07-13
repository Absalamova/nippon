import React from 'react'
import Image from 'next/image'
function JLPT() {
  return (
    <section className="py-16" id="we">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-3xl  font-semibold text-center mb-8">
          The opportunity to win a grant of up to 100% for Japanese language schools.
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/2">
            <Image
              src="/jlpt.png"
              alt="JLPT Info"
              width={500}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-justify">
            <p className='text-2x1'>
              JLPT (Japanese-Language Proficiency Test) is an international standardized exam that assesses Japanese
              language proficiency. It evaluates skills such as reading, listening, grammar, vocabulary, and kanji
              (Chinese characters). The test is held worldwide in July and December. Passing the JLPT can be an
              important requirement for studying or working in Japan.
            </p>
          </div>
        </div>
      </div>
       <div className="max-w-[1200px] mx-auto px-4">
          <h4 className="text-2xl font-semibold text-center mb-10">Our Achievements</h4>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="text-center px-6 py-8 w-[250px] bg-white rounded-lg">
              <div className=" text-red-600  text-4xl font-bold mb-2">500+</div>
              <div className="text-sm">Students who have received certificates</div>
            </div>
            <div className="text-center px-6 py-8 w-[250px] bg-white rounded-lg">
              <div className=" text-red-600  text-4xl font-bold mb-2">500+</div>
              <div className="text-sm">Students who have received visas</div>
            </div>
            <div className="text-center px-6 py-8 w-[250px] bg-white rounded-lg">
              <div className=" text-red-600  text-4xl font-bold mb-2">320+</div>
              <div className="text-sm">Students who have been admitted to universities</div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default JLPT