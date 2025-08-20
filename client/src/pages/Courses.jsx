import Course_card from '../components/Course_card';
import { useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';

const Courses = () => {

    const [courses, setCourses] = useState([]);       // <-- state for courses
    // const [loading, setLoading] = useState(true);     // optional loading state
    // const [error, setError] = useState(null);

    const getCourses = () => {
        fetch("https://hackerworld.onrender.com/api/courses")      // Backend API URL; adjust as needed
            .then(res => res.json())
            .then(json => setCourses(json))
    }

    useEffect(() => {
        getCourses();
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <main className="bg-black min-h-screen py-16 px-4">
                {/* Hero Banner */}
                <section className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Explore Our Cybersecurity Courses
                    </h1>
                    <p className="text-lg text-white">
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
                        {courses.length === 0 ? (
                            Array(6).fill(0).map((_, i) => (
                                <div key={i} className="animate-pulse bg-gray-800 h-64 rounded-lg" />
                            ))
                        ) : (
                            courses.map(course => (
                                <Course_card
                                    key={course._id}
                                    image={course.image}
                                    title={course.title}
                                    description={course.description}
                                    duration={course.duration}
                                    level={course.level}
                                    onLearnMore={() => navigate('/course_desc', { state: course })}
                                />
                            ))
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Courses
