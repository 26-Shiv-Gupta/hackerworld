import React, { useState, useEffect } from "react";
import {
    AcademicCapIcon,
    CheckCircleIcon,
    BookOpenIcon,
    ChevronDownIcon,
    StarIcon,
} from "@heroicons/react/solid";
import { useLocation, useNavigate } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51RzK2SBgVAaIgF2Jj0WgX6G47LihWFMzzYsQxpoPmVEEE0Yuhbdu1rEqyakzKgnSgp6JmUoQ6nWBkGnQJyqyjMl500IiT4MbCS');

const Course_desc = () => {
    const [openIdx, setOpenIdx] = useState(null);
    const location = useLocation();
    const course = location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    return (

        <>
            <main className="bg-black min-h-screen py-12 px-4 text-white flex justify-center">
                <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                        {/* Header */}
                        <section className="mb-10">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-red-600 mb-4 flex items-center gap-2">
                                <AcademicCapIcon className="w-8 h-8" />
                                {course.title}
                            </h1>
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="bg-gray-900 text-white rounded px-4 py-1 font-semibold">
                                    {course.level}
                                </span>
                                <span className="bg-gray-900 text-white rounded px-4 py-1 font-semibold flex items-center">
                                    <BookOpenIcon className="inline-block w-5 h-5 mr-1" />
                                    {course.duration}
                                </span>
                            </div>
                            <p className="text-lg text-gray-300">{course.description}</p>
                        </section>

                        {/* Course Syllabus */}
                        <section className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10">
                            <h2 className="text-2xl font-bold text-red-600 mb-6">Course Syllabus</h2>
                            <div className="space-y-6">
                                {course.modules.map((mod, idx) => (
                                    <div key={idx} className="">
                                        <h3 className="text-xl font-semibold text-white mb-2">{mod.name}</h3>
                                        <ul className="list-disc list-inside text-gray-200 space-y-1 pl-4">
                                            {mod.topics.map((topic, i) => (
                                                <li key={i}>{topic}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Our course.Mentor Section */}
                        <section className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10 flex flex-col md:flex-row items-center gap-6">
                            <img
                                src={course.mentor.image}
                                alt={course.mentor.name}
                                className="w-32 h-32 rounded-full object-cover flex-shrink-0"
                            />
                            <div>
                                <h2 className="text-2xl font-bold text-red-600 mb-2">Our course.Mentor</h2>
                                <h3 className="text-xl font-semibold text-white">{course.mentor.name}</h3>
                                <p className="text-gray-400 italic mb-4">{course.mentor.title}</p>
                                <p className="text-gray-300">{course.mentor.bio}</p>
                            </div>
                        </section>

                        {/* Student Reviews Section */}
                        <section className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10">
                            <h2 className="text-2xl font-bold text-red-600 mb-6">
                                Student Reviews
                            </h2>
                            <div className="space-y-5">
                                {course.reviews.map((review, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-black/60 rounded-lg p-5 shadow-inner"
                                    >
                                        <div className="flex items-center mb-2">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <StarIcon
                                                    key={i}
                                                    className="w-5 h-5 text-red-500"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-300 italic mb-3">"{review.comment}"</p>
                                        <p className="text-red-400 font-semibold">{review.name}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Buy Card */}
                    <aside className="w-full lg:w-[350px] flex-shrink-0 lg:sticky top-16 self-start rounded-lg">
                        <div className="bg-gray-900 rounded-2xl shadow-2xl border-t-4 border-red-700 p-8 mb-8 flex flex-col">
                            <img
                                src={course.image}
                                alt="Course Highlight"
                                className="w-full h-48 object-cover rounded-lg mb-6"
                            />
                            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                                <span className="text-3xl font-extrabold text-red-600">₹3499</span>
                                <span className="text-gray-400 line-through text-xl font-semibold">₹7000</span>
                            </div>
                            <ul className="space-y-3 mb-6 flex-1">
                                {course.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-100 text-base">
                                        <CheckCircleIcon className="w-5 h-5 text-red-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg shadow-red-700/20" onClick={() => navigate(`/pay/${course._id}`)}>
                                Enroll Now
                            </button>
                        </div>
                    </aside>
                </div>
            </main>

            {/* FAQ Section */}
            <section className="bg-black py-15 px-4 text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-red-600 mb-7 text-center">
                        Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                        {course.faqs.map((faq, idx) => (
                            <li key={idx} className="border-b border-gray-800">
                                <button
                                    className="w-full flex items-center justify-between text-left py-4 focus:outline-none"
                                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                    aria-expanded={openIdx === idx}
                                    aria-controls={`faq-panel-${idx}`}
                                    id={`faq-header-${idx}`}
                                >
                                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                                    <ChevronDownIcon
                                        className={`w-5 h-5 text-red-500 transform transition-transform duration-200 ${openIdx === idx ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openIdx === idx && (
                                    <div
                                        id={`faq-panel-${idx}`}
                                        role="region"
                                        aria-labelledby={`faq-header-${idx}`}
                                        className="text-gray-300 pb-4 pl-2 transition-colors"
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
