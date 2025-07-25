import React from 'react'
import { ShieldCheckIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-xl font-bold text-white">CyberSec Academy</span>
            </div>
            <p className="text-gray-400">
              Leading the future of cybersecurity education through ethical, hands-on learning experiences.
            </p>
          </div>

          <div>
            <h3 className="text-red-600 font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-red-500 transition-colors">Ethical Hacking</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Penetration Testing</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Network Security</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Digital Forensics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-red-600 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-red-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-red-600 font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 CyberSec Academy. All rights reserved. |
            <span className="text-red-500 ml-1 font-semibold">Ethical. Legal. Educational.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
