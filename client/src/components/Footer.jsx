import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bg-primary border-t border-border-subtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-white">TechHack</span>
                <span className="text-cyan-bright">World</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the future of cybersecurity education through ethical, hands-on learning experiences.
            </p>
          </div>

          <div>
            <h3 className="text-cyan-bright font-semibold mb-4 text-sm uppercase tracking-wide font-mono-terminal">Courses</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Ethical Hacking</a></li>
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Penetration Testing</a></li>
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Network Security</a></li>
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Digital Forensics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-bright font-semibold mb-4 text-sm uppercase tracking-wide font-mono-terminal">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-cyan-bright transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-bright font-semibold mb-4 text-sm uppercase tracking-wide font-mono-terminal">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><NavLink to="/about" className="hover:text-cyan-bright transition-colors">About Us</NavLink></li>
              <li><NavLink to="careers" className="hover:text-cyan-bright transition-colors">Careers</NavLink></li>
              <li><NavLink to="/#privacy_policy" className="hover:text-cyan-bright transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/#term_of_service" className="hover:text-cyan-bright transition-colors">Terms of Service</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border-subtle mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm font-mono-terminal">
            © 2026 TechHackWorld. All rights reserved. |
            <span className="text-terminal-green ml-1 font-semibold">Ethical. Legal. Educational.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer