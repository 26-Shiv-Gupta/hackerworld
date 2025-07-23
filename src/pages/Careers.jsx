import React from 'react'
import { AcademicCapIcon, UserGroupIcon, ShieldCheckIcon, BriefcaseIcon } from "@heroicons/react/solid";

const jobs = [
    { title: "Cybersecurity Instructor", dept: "Course Development", location: "Remote/Hybrid", type: "Full-Time" },
    { title: "Lab Content Creator", dept: "Learning Experience", location: "Remote", type: "Contract" },
    { title: "Community Manager", dept: "Marketing", location: "Remote/On-site", type: "Full-Time" },
    { title: "Curriculum Developer", dept: "Education", location: "Remote", type: "Full-Time" },
    { title: "Frontend React Developer", dept: "Engineering", location: "Remote/On-site", type: "Full-Time" },
    { title: "Student Support Specialist", dept: "Learner Success", location: "On-site/Remote", type: "Part-Time" },
    { title: "Marketing Coordinator", dept: "Marketing", location: "On-site", type: "Full-Time" }
];


const Careers = () => {
    return (
        <>
            <main className="bg-gray-900 min-h-screen py-16 px-4">
                {/* Header */}
                <section className="max-w-4xl mx-auto text-center mb-16">
                    <BriefcaseIcon className="w-14 h-14 mx-auto text-cyan-400 mb-4" />
                    <h1 className="text-4xl font-bold text-white mb-4">Join Our Team</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Passionate about cybersecurity and education? Help us empower tomorrow's ethical hackers and defenders.
                    </p>
                </section>

                {/* Why Work With Us */}
                <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 mb-16">
                    <div className="bg-gray-800 p-8 rounded-lg text-center">
                        <AcademicCapIcon className="w-10 h-10 mx-auto text-cyan-400 mb-3" />
                        <h2 className="text-xl text-white font-bold mb-2">Impactful Mission</h2>
                        <p className="text-gray-300">Educate, mentor, and grow the global cybersecurity community—for good.</p>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg text-center">
                        <ShieldCheckIcon className="w-10 h-10 mx-auto text-cyan-400 mb-3" />
                        <h2 className="text-xl text-white font-bold mb-2">Remote Flexibility</h2>
                        <p className="text-gray-300">Work remotely or hybrid, with a supportive and modern environment.</p>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg text-center">
                        <UserGroupIcon className="w-10 h-10 mx-auto text-cyan-400 mb-3" />
                        <h2 className="text-xl text-white font-bold mb-2">Growth & Inclusion</h2>
                        <p className="text-gray-300">Continuous learning, a diverse team, and real opportunities for advancement.</p>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="max-w-5xl mx-auto mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">Open Positions</h2>
                    <div className="overflow-auto rounded-lg">
                        <table className="min-w-full table-auto bg-gray-800 text-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-gray-700">
                                    <th className="py-3 px-4 text-left font-semibold">Position</th>
                                    <th className="py-3 px-4 text-left font-semibold">Department</th>
                                    <th className="py-3 px-4 text-left font-semibold">Location</th>
                                    <th className="py-3 px-4 text-left font-semibold">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((job, i) => (
                                    <tr key={i} className="border-t border-gray-700 hover:bg-gray-700 transition">
                                        <td className="py-3 px-4">{job.title}</td>
                                        <td className="py-3 px-4">{job.dept}</td>
                                        <td className="py-3 px-4">{job.location}</td>
                                        <td className="py-3 px-4">{job.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-400 text-center mt-6">
                        Don’t see a fit? Send your CV to <span className="text-cyan-400">careers@cybersecacademy.com</span>
                    </p>
                </section>

                {/* Benefits and Application Process */}
                <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 mb-20">
                    <div className="bg-gray-800 rounded-lg p-8">
                        <h2 className="text-xl font-bold text-white mb-3">Benefits & Perks</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Competitive salary & annual bonuses</li>
                            <li>Professional development & certifications</li>
                            <li>Remote and flexible schedules</li>
                            <li>Health benefits (role/location dependent)</li>
                            <li>Access to all course content & labs</li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-8">
                        <h2 className="text-xl font-bold text-white mb-3">Application Process</h2>
                        <ol className="list-decimal list-inside text-gray-300 space-y-2">
                            <li>Apply online with résumé and cover letter</li>
                            <li>Initial screening and skills/culture interview</li>
                            <li>Meet team, demonstrate skills</li>
                            <li>Receive offer & onboarding guidance</li>
                        </ol>
                    </div>
                </section>

                {/* CTA */}
                <section className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
                    <p className="text-gray-300 mb-8">
                        Submit your application to <span className="text-cyan-400">careers@cybersecacademy.com</span> or apply through our portal (coming soon).
                    </p>
                    <a
                        href="mailto:careers@cybersecacademy.com"
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                    >
                        Apply Now
                    </a>
                </section>
            </main>
        </>
    )
}

export default Careers