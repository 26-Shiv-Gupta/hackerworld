import React from 'react';
import { useNavigate } from 'react-router-dom';

import Ethical_hacking_img from '../assets/Ethical_hacking.jpeg';
import Penetration_testing_img from '../assets/penetration_testing.png';
import Web_application_security_img from '../assets/web_application_security.jpg';

const courses = [
    {
        title: "Ethical Hacking Fundamentals",
        description:
            "Start from zero and learn the basics of ethical hacking, reconnaissance, and vulnerability analysis.",
        duration: "8 weeks",
        level: "Beginner",
        image: Ethical_hacking_img,
    },
    {
        title: "Advanced Penetration Testing",
        description:
            "Master exploitation techniques, post-exploitation, and advanced network attacks in modern environments.",
        duration: "12 weeks",
        level: "Advanced",
        image: Penetration_testing_img,
    },
    {
        title: "Web Application Security",
        description:
            "In-depth guide to web security, OWASP Top 10, and secure coding practices with hands-on labs.",
        duration: "10 weeks",
        level: "Intermediate",
        image: Web_application_security_img,
    },
];

const Courses_section = () => {

    const navigate = useNavigate();

    return (
        <section id="courses" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our Course Catalog
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive cybersecurity education from beginner to advanced levels
                    </p>
                </div>

                {/* Courses grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover: transition-shadow duration-300 transform hover:-translate-y-2"
                        >
                            {/* Course Image */}
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Course Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-red-600 mb-2">{course.title}</h3>
                                <p className="text-gray-300 mb-4">{course.description}</p>

                                <div className="flex justify-between items-center mb-4 text-sm">
                                    <span className="text-red-500 font-semibold">Duration: {course.duration}</span>
                                    <span className="bg-gray-700 px-3 py-1 rounded-full text-white">
                                        {course.level}
                                    </span>
                                </div>

                                <button className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explore More button */}
                <div className="flex justify-center mt-12">
                    <button
                        className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors"
                        onClick={() => navigate('/courses')}
                    >
                        Explore More Courses
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses_section;
