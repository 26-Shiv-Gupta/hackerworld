import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Course_card from './Course_card';
import { AppContext } from '../context/AppContext';

const Courses_section = () => {

    const { threeCourses } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <>
            <section id="courses" className="py-24 bg-bg-primary relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-bg-card border border-border-subtle rounded-full px-3 py-1 mb-5">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" />
                            <span className="text-[11px] font-mono-terminal tracking-widest text-gray-300 uppercase">
                                Course Catalog
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Our Course <span className="text-gradient-cyan">Catalog</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            Comprehensive cybersecurity education from beginner to advanced levels
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {threeCourses.map((course, index) => (
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
                    <div className="flex justify-center mt-14">
                        <button
                            className="bg-cyan-bright hover:bg-cyan-glow text-bg-primary px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide uppercase transition-colors shadow-lg shadow-cyan-bright/20 cursor-pointer"
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