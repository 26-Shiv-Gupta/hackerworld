import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Ethical_hacking_img from '../assets/Ethical_hacking.jpeg';
import Penetration_testing_img from '../assets/penetration_testing.png';
import Web_application_security_img from '../assets/web_application_security.jpg';
import Course_card from './Course_card';



const Courses_section = () => {
    const [courses, setCourses] = useState([]);

    const getCourses = () => {
        fetch("http://localhost:5000/api/homeCourses")      // Backend API URL; adjust as needed
            .then(res => res.json())
            .then(json => setCourses(json))
    }

    useEffect(() => {
        getCourses();
    }, []);

    const navigate = useNavigate();

    return (
        <>
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {courses.map((course, index) => (
                            <Course_card
                                key={index}
                                image={course.image}
                                title={course.title}
                                description={course.description}
                                duration={course.duration}
                                level={course.level}
                                onLearnMore={() => navigate('/course_desc', { state: course })} />
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
        </>
    );
};

export default Courses_section;