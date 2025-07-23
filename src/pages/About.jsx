import React from 'react'
import { AcademicCapIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/solid";

const About = () => {
    return (
        <>
            <main className="bg-gray-900 min-h-screen py-16 px-4">
                <section className="max-w-4xl mx-auto text-center mb-16">
                    <AcademicCapIcon className="w-14 h-14 mx-auto text-cyan-400 mb-4" />
                    <h1 className="text-4xl font-bold text-white mb-4">About CyberSec Academy</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        CyberSec Academy empowers the next generation of cybersecurity experts with practical, ethical, and industry-driven education. Our mission is to bridge the cyber skills gap by making hands-on security training accessible for all, from absolute beginners to seasoned professionals.
                    </p>
                </section>

                <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-gray-800 rounded-lg p-8">
                        <ShieldCheckIcon className="w-10 h-10 text-cyan-400 mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-2">Our Values</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
                            <li><span className="text-cyan-400 font-semibold">Ethical Hacking:</span> We teach security the right way—ethically and legally, with respect for all learners and targets.</li>
                            <li><span className="text-cyan-400 font-semibold">Hands-On Labs:</span> True mastery comes from real practice. Our labs are immersive, up-to-date, and simulate real cyber threats.</li>
                            <li><span className="text-cyan-400 font-semibold">Community Growth:</span> Sharing knowledge is at our core. We foster a global, inclusive, and supportive learning environment.</li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-8">
                        <UserGroupIcon className="w-10 h-10 text-cyan-400 mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-2">Meet the Team</h2>
                        <p className="text-gray-300 mb-3">
                            Our instructors are certified ethical hackers, penetration testers, and security engineers with years of frontline experience. Together, they’ve
                            trained thousands of learners worldwide and contributed to recognized security communities.
                        </p>
                        <p className="text-gray-300">
                            We’re passionate about creating the best cybersecurity learning journey—for students and professionals alike.
                        </p>
                    </div>
                </section>

                <section className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Ready to begin?</h2>
                    <p className="text-gray-300 mb-8">
                        Explore our course catalog or contact us to find out how CyberSec Academy can help you launch or accelerate your cyber career.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/#courses"
                            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                        >
                            View Courses
                        </a>
                        <a
                            href="/#contact"
                            className="border border-cyan-600 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About