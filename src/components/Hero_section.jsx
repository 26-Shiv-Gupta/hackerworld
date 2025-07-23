import React from 'react'
import { PlayIcon } from '@heroicons/react/solid';


const Hero_section = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master <span className="text-cyan-400">Ethical Hacking</span> &amp;<br />
              Cybersecurity Skills
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of students learning cutting-edge cybersecurity techniques through hands-on courses,
              real-world labs, and industry-certified programs. Build your career in ethical hacking and
              cybersecurity defense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Start Learning Today
              </button>
              <button className="border border-gray-600 hover:border-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center">
                <PlayIcon className="h-5 w-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero_section