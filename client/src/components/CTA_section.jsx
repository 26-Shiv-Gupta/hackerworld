import React from 'react'
import { NavLink } from 'react-router-dom'

const CTA_section = () => {
  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-glow/10 rounded-full blur-3xl pointer-events-none animate-blob" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to Start Your <span className="text-gradient-cyan">Cybersecurity Journey</span>?
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who have advanced their careers with our courses
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-cyan-bright hover:bg-cyan-glow text-bg-primary px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors shadow-lg shadow-cyan-bright/20 cursor-pointer">
            Start Free Trial
          </button>
          <NavLink
            to="/courses"
            className="border border-border-subtle hover:border-cyan-bright text-white px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors"
          >
            View All Courses
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default CTA_section