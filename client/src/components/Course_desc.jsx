import React, { useState, useEffect } from "react";
import {
    AcademicCapIcon,
    CheckCircleIcon,
    BookOpenIcon,
    ChevronDownIcon,
    StarIcon,
} from "@heroicons/react/solid";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth, useClerk } from "@clerk/clerk-react";

const Course_desc = () => {
    const [openIdx, setOpenIdx] = useState(null);
    const location = useLocation();
    const course = location.state;

    const navigate = useNavigate();

    const { isSignedIn } = useAuth();
    const { openSignIn } = useClerk();

    const handleEnroll = () => {
        if(!isSignedIn) {
            openSignIn();
            return;
        }

        navigate(`/pay/${course._id}`);
    };


    return (

        <>
            <main className="bg-bg-primary min-h-screen py-12 px-4 text-white flex justify-center">
                <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                        {/* Header */}
                        <section className="mb-10">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 flex items-center gap-3">
                                <AcademicCapIcon className="w-8 h-8 text-cyan-bright" />
                                {course.title}
                            </h1>
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="bg-bg-card border border-border-subtle text-terminal-green rounded-full px-4 py-1 font-mono-terminal text-xs uppercase tracking-wide">
                                    {course.level}
                                </span>
                                <span className="bg-bg-card border border-border-subtle text-cyan-bright rounded-full px-4 py-1 font-mono-terminal text-xs uppercase tracking-wide flex items-center">
                                    <BookOpenIcon className="inline-block w-4 h-4 mr-1.5" />
                                    {course.duration}
                                </span>
                            </div>
                            <p className="text-lg text-gray-400">{course.description}</p>
                        </section>

                        {/* Course Syllabus */}
                        <section className="bg-bg-card border border-border-subtle rounded-xl shadow-lg p-8 mb-10">
                            <h2 className="text-2xl font-bold text-white mb-6">
                                Course <span className="text-gradient-cyan">Syllabus</span>
                            </h2>
                            <div className="space-y-6">
                                {course.modules.map((mod, idx) => (
                                    <div key={idx}>
                                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                            <span className="text-cyan-bright font-mono-terminal text-sm">0{idx + 1}</span>
                                            {mod.name}
                                        </h3>
                                        <ul className="space-y-1 pl-6">
                                            {mod.topics.map((topic, i) => (
                                                <li key={i} className="text-gray-400 flex items-start gap-2">
                                                    <span className="text-terminal-green mt-1.5 h-1 w-1 rounded-full bg-terminal-green flex-shrink-0" />
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Our course.Mentor Section */}
                        <section className="bg-bg-card border border-border-subtle rounded-xl shadow-lg p-8 mb-10 flex flex-col md:flex-row items-center gap-6">
                            <img
                                src={course.mentor.image}
                                alt={course.mentor.name}
                                className="w-32 h-32 rounded-full object-cover flex-shrink-0 border-2 border-cyan-bright/30"
                            />
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    Your <span className="text-gradient-cyan">Mentor</span>
                                </h2>
                                <h3 className="text-xl font-semibold text-white">{course.mentor.name}</h3>
                                <p className="text-cyan-bright italic mb-4 text-sm">{course.mentor.title}</p>
                                <p className="text-gray-400">{course.mentor.bio}</p>
                            </div>
                        </section>

                        {/* Student Reviews Section */}
                        <section className="bg-bg-card border border-border-subtle rounded-xl shadow-lg p-8 mb-10">
                            <h2 className="text-2xl font-bold text-white mb-6">
                                Student <span className="text-gradient-cyan">Reviews</span>
                            </h2>
                            <div className="space-y-5">
                                {course.reviews.map((review, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-black/30 border border-border-subtle rounded-lg p-5"
                                    >
                                        <div className="flex items-center mb-2">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <StarIcon
                                                    key={i}
                                                    className="w-5 h-5 text-cyan-bright"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-300 italic mb-3">"{review.comment}"</p>
                                        <p className="text-cyan-bright font-semibold text-sm">{review.name}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Buy Card */}
                    <aside className="w-full lg:w-[350px] flex-shrink-0 lg:sticky top-16 self-start rounded-lg">
                        <div className="bg-bg-card rounded-2xl shadow-2xl border-t-4 border-cyan-bright p-8 mb-8 flex flex-col">
                            <img
                                src={course.image}
                                alt="Course Highlight"
                                className="w-full h-48 object-cover rounded-lg mb-6"
                            />
                            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                                <span className="text-3xl font-extrabold text-white">₹3499</span>
                                <span className="text-gray-500 line-through text-xl font-semibold">₹7000</span>
                            </div>
                            <ul className="space-y-3 mb-6 flex-1">
                                {course.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-300 text-base">
                                        <CheckCircleIcon className="w-5 h-5 text-terminal-green mr-2 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="w-full bg-cyan-bright hover:bg-cyan-glow text-bg-primary py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-cyan-bright/20 cursor-pointer"
                                onClick={handleEnroll}
                            >
                                Enroll Now
                            </button>
                        </div>
                    </aside>
                </div>
            </main>

            {/* FAQ Section */}
            <section className="bg-bg-primary py-16 px-4 text-white border-t border-border-subtle">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">
                        Frequently Asked <span className="text-gradient-cyan">Questions</span>
                    </h2>
                    <ul className="space-y-4">
                        {course.faqs.map((faq, idx) => (
                            <li key={idx} className="border-b border-border-subtle">
                                <button
                                    className="w-full flex items-center justify-between text-left py-4 focus:outline-none cursor-pointer"
                                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                    aria-expanded={openIdx === idx}
                                    aria-controls={`faq-panel-${idx}`}
                                    id={`faq-header-${idx}`}
                                >
                                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                                    <ChevronDownIcon
                                        className={`w-5 h-5 text-cyan-bright transform transition-transform duration-200 ${openIdx === idx ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openIdx === idx && (
                                    <div
                                        id={`faq-panel-${idx}`}
                                        role="region"
                                        aria-labelledby={`faq-header-${idx}`}
                                        className="text-gray-400 pb-4 pl-2"
                                    >
                                        {faq.answer}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Course_desc;