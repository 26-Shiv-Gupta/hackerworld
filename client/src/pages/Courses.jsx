import Course_card from '../components/Course_card';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Courses = () => {

    const { courses } = useContext(AppContext);

    const navigate = useNavigate();

    return (
        <>
            <main className="bg-bg-primary min-h-screen py-16 px-4">
                {/* Hero Banner */}
                <section className="max-w-4xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-bg-card border border-border-subtle rounded-full px-3 py-1 mb-5">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" />
                        <span className="text-[11px] font-mono-terminal tracking-widest text-gray-300 uppercase">
                            Course Catalog
                        </span>
                    </div>
                    <h1 className="text-4xl font-extrabold text-white mb-4">
                        Explore Our <span className="text-gradient-cyan">Cybersecurity Courses</span>
                    </h1>
                    <p className="text-lg text-gray-400">
                        Practical, hands-on cyber education—beginner to advanced, taught by industry leaders.
                    </p>
                </section>

                {/* Filter/Search Row (optional placeholder) */}
                {/* <div className="max-w-5xl mx-auto mb-10 flex flex-col sm:flex-row items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search courses"
                        className="flex-1 px-4 py-3 rounded-lg bg-bg-card text-gray-200 placeholder-gray-500 border border-border-subtle focus:outline-none focus:ring-2 focus:ring-cyan-bright"
                    />
                    <select
                        className="px-4 py-3 rounded-lg bg-bg-card text-gray-200 border border-border-subtle focus:outline-none focus:ring-2 focus:ring-cyan-bright"
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
                                <div key={i} className="animate-pulse bg-bg-card border border-border-subtle h-64 rounded-xl" />
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