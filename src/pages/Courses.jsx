import React from 'react'
import {
    LockClosedIcon,
    AcademicCapIcon,
    CodeIcon,
    ShieldCheckIcon,
    DeviceMobileIcon,
    DatabaseIcon,
    CloudIcon,
} from "@heroicons/react/solid";

const courses = [
    {
        icon: <LockClosedIcon className="w-10 h-10 text-red-500 mx-auto" />,
        title: "Ethical Hacking Fundamentals",
        description: "Start from zero and learn the basics of ethical hacking, reconnaissance, and vulnerability analysis.",
        duration: "8 weeks",
        level: "Beginner"
    },
    {
        icon: <AcademicCapIcon className="w-10 h-10 text-red-500 mx-auto" />,
        title: "Advanced Penetration Testing",
        description: "Master exploitation techniques, post-exploitation, and advanced network attacks in modern environments.",
        duration: "12 weeks",
        level: "Advanced"
    },
    {
        icon: <CodeIcon className="w-10 h-10 text-red-500 mx-auto" />,
        title: "Web Application Security",
        description: "In-depth guide to web security, OWASP Top 10, and secure coding practices with hands-on labs.",
        duration: "10 weeks",
        level: "Intermediate"
    },
    {
        icon: <ShieldCheckIcon className="w-10 h-10 text-red-500 mx-auto" />,
        title: "Network Security",
        description: "Learn to protect and monitor network infrastructure with firewalls, IDS/IPS, and VPNs.",
        duration: "6 weeks",
        level: "Intermediate"
    },
    {
        icon: <DeviceMobileIcon className="w-10 h-10 text-red-500 mx-auto" />,
        title: "Mobile Security",
        description: "Understand mobile OS vulnerabilities and how to secure iOS and Android devices.",
        duration: "7 weeks",
        level: "Intermediate"
    },
    {
        icon: <DatabaseIcon className="w-10 h-10 text-red-500 mx-auto" />,
        title: "Database Security",
        description: "Protect databases from attacks and learn best practices for data integrity and encryption.",
        duration: "5 weeks",
        level: "Advanced"
    },
    {
        icon: <CloudIcon className="w-10 h-10 text-red-500 mx-auto" />,
        title: "Cloud Security",
        description: "Secure cloud environments and understand cloud threat vectors and compliance.",
        duration: "8 weeks",
        level: "Advanced"
    },
    {
        icon: <CodeIcon className="w-10 h-10 text-red-500 mx-auto" />,
        title: "Secure Coding Practices",
        description: "Learn to write code with security in mind to prevent common vulnerabilities.",
        duration: "6 weeks",
        level: "Beginner"
    },
];

const Courses = () => {
    return (
        <>
            <main className="bg-black min-h-screen py-16 px-4">
                {/* Hero Banner */}
                <section className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Explore Our Cybersecurity Courses
                    </h1>
                    <p className="text-lg text-red-300">
                        Practical, hands-on cyber education—beginner to advanced, taught by industry leaders.
                    </p>
                </section>

                {/* Filter/Search Row (optional placeholder) */}
                {/* <div className="max-w-5xl mx-auto mb-10 flex flex-col sm:flex-row items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search courses"
                        className="flex-1 px-4 py-3 rounded-lg bg-gray-900 text-gray-200 placeholder-red-600 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <select
                        className="px-4 py-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                        defaultValue=""
                    >
                        <option value="">All Levels</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div> */}

                {/* Course Grid */}
                <section className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition duration-200 transform hover:-translate-y-2 shadow-lg"
                            >
                                <div className="mb-4 flex justify-center">{course.icon}</div>
                                <h3 className="text-xl font-bold text-red-600 mb-2">{course.title}</h3>
                                <p className="text-red-300 mb-4">{course.description}</p>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-red-500">Duration: {course.duration}</span>
                                    <span className="text-sm bg-gray-800 px-2 py-1 rounded text-white">{course.level}</span>
                                </div>
                                <button className="w-full bg-red-700 hover:bg-red-700 text-white py-2 rounded-lg transition-colors">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Courses
