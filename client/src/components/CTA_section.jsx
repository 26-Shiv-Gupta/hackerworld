import React from 'react'
import { NavLink } from 'react-router-dom'

const CTA_section = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Cybersecurity Journey?
        </h2>
        <p className="text-xl text-white mb-8">
          Join thousands of professionals who have advanced their careers with our courses
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-red-500/20">
            Start Free Trial
          </button>
          <NavLink to="/courses" className="border border-red-500 hover:bg-red-600 hover:text-white text-red-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            View All Courses
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default CTA_section
