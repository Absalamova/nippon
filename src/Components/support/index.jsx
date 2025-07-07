
'use client'

import React, { useState } from 'react'

export default function Support() {
  const [formData, setFormData] = useState({ name: '', number: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    // bu yerga API yuborish logikasini yozish mumkin
  }

  return (
    <section className="py-16 " id="support">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col rounded-lg bg-gradient-to-r from-red-300 to-red-600  text-white p-10 lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left max-w-xl">
            <h3 className="text-3xl font-semibold mb-2">Have any questions?</h3>
            <p >
              Leave your information, and we will contact you to answer all your questions.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border bg-red-200  text-red-800 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2  focus:ring-red-500"
                required
              />
            </div>
            <div>
              <input
                type="number"
                name="number"
                placeholder="Your phone number"
                value={formData.number}
                onChange={handleChange}
                className="w-full border bg-red-200 text-red-800 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <button
              type="submit"
              className=" w-full text-center bg-gradient-to-r from-red-300 to-red-500 hover:from-red-200 hover:to-red-400 text-white  py-2 rounded-lg shadow-md transition"
            >
              Ask a question
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
