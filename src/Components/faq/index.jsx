// components/Faq.jsx
'use client'

import React, { useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'

const faqData = [
  {
    question: 'Can I go to language courses in Japan without knowing Japanese?',
    answer:
      'Actually, you can, but we do not recommend it, because it can cause difficulties in adapting to life in Japan, attending classes in language schools, and working. We recommend that you start learning Japanese as soon as you submit your documents.'
  },
  {
    question: 'What are your guarantees for obtaining a visa to language schools in Japan?',
    answer:
      'We have two types of services: 1. 100% guarantee of obtaining a visa, 2. 80% to 90% probability of getting a visa.'
  },
  {
    question: 'Since when have you been operating Nippon Study Center?',
    answer:
      'We have been operating since December 2017. Currently, more than 500 of our students are studying at prestigious universities and colleges in Japan.'
  },
  {
    question:
      "I am from another region. It's hard for me to come for consultation and document submission. Can we do everything online?",
    answer:
      'Yes, of course. Our main branch is located in Shahrisabz, Kashkadarya region. If it\'s too far for you, you can make an online contract and submit documents. Many students from Samarkand, Jizzakh, Andijan, Namangan, Fergana, and Khorezm have already done this online.'
  },
  {
    question: 'Can you submit my documents to any city in Japan that I want?',
    answer:
      'Yes, of course. We can submit your documents to any city in Japan as we currently have contracts with almost all regions of Japan.'
  },
  {
    question:
      'Studying in Japan is a bit expensive for me. Can I pay in installments, at least in two parts?',
    answer:
      'Yes, we have such an option. You can pay only half of the tuition fee for the first year and start studying in Japan. After studying for 6 months, you can easily pay the remaining amount with the money you earn yourself.'
  },
  {
    question:
      'Is it possible to study for free at language schools or universities in Japan?',
    answer: 'Unfortunately, no.'
  },
  {
    question: 'How much does your offline course cost?',
    answer: '500,000 sum.'
  },
  {
    question: 'I want to travel with a tourist visa, what can you offer?',
    answer:
      'We can help you with document preparation. We have this service available. The cost is only 2 million sum.'
  },
  {
    question:
      'Why are you giving a 100% guarantee on a student visa, how realistic is that?',
    answer:
      "We have been working since 2017, which means we have experience that others don't. In fact, there are several reasons to get a visa with 100% guarantee: 1. Proper document preparation. 2. No false information or forged documents. 3. Choosing a school that has been awarded the 'excellent school' status by Japanese immigration. If you meet these conditions, you will get the visa without any problems."
  }
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-16" id="faq">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white bg-opacity-90 rounded-xl overflow-hidden shadow">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-4 text-left"
              >
                <p className="text-lg font-medium">{item.question}</p>
                <span className="text-teal-600 text-2xl">
                  {activeIndex === index ? <FaTimes /> : <FaPlus />}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-gray-700">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
