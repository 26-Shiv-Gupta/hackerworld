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
        icon: <LockClosedIcon className="w-10 h-10 text-cyan-400 mx-auto" />,
        title: "Ethical Hacking Fundamentals",
        description: "Start from zero and learn the basics of ethical hacking, reconnaissance, and vulnerability analysis.",
        duration: "8 weeks",
        level: "Beginner"
    },
    {
        icon: <AcademicCapIcon className="w-10 h-10 text-cyan-400 mx-auto" />,
        title: "Advanced Penetration Testing",
        description: "Master exploitation techniques, post-exploitation, and advanced network attacks in modern environments.",
        duration: "12 weeks",
        level: "Advanced"
    },
    {
        icon: <CodeIcon className="w-10 h-10 text-cyan-400 mx-auto" />,
        title: "Web Application Security",
        description: "In-depth guide to web security, OWASP Top 10, and secure coding practices with hands-on labs.",
        duration: "10 weeks",
        level: "Intermediate"
    }
];


const Courses_section = () => {
    return (
        <>
            <section id="courses" className="py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Course Catalog
                        </h2>
                        <p className="text-xl text-gray-300">
                            Comprehensive cybersecurity education from beginner to advanced levels
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:transition duration-200 transform hover:-translate-y-2">
                                <div className="text-3xl mb-4 flex justify-center">{course.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                                <p className="text-gray-300 mb-4">{course.description}</p>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-cyan-400">Duration: {course.duration}</span>
                                    <span className="text-sm bg-gray-700 px-2 py-1 rounded">{course.level}</span>
                                </div>
                                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg transition-colors">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <button
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                    // onClick={() => ...} // Add your navigation, modal, or load-more logic here
                    >
                        Explore More Courses
                    </button>
                </div>
            </section>
        </>
    )
}

export default Courses_section