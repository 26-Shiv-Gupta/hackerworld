import React from 'react'
import { ShieldCheckIcon } from "@heroicons/react/solid";

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 border-t border-gray-700 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <ShieldCheckIcon className="h-8 w-8 text-cyan-400 mr-2" />
                                <span className="text-xl font-bold text-white">CyberSec Academy</span>
                            </div>
                            <p className="text-gray-400">
                                Leading the future of cybersecurity education through ethical, hands-on learning experiences.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Courses</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-cyan-400">Ethical Hacking</a></li>
                                <li><a href="#" className="hover:text-cyan-400">Penetration Testing</a></li>
                                <li><a href="#" className="hover:text-cyan-400">Network Security</a></li>
                                <li><a href="#" className="hover:text-cyan-400">Digital Forensics</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-cyan-400">Documentation</a></li>
                                <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
                                <li><a href="#" className="hover:text-cyan-400">Community</a></li>
                                <li><a href="#" className="hover:text-cyan-400">Support</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-cyan-400">About Us</a></li>
                                <li><a href="#" className="hover:text-cyan-400">Careers</a></li>
                                <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-cyan-400">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p className="text-gray-400">
                            © 2024 CyberSec Academy. All rights reserved. |
                            <span className="text-cyan-400 ml-1">Ethical. Legal. Educational.</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer