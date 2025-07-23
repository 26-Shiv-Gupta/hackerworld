import React from 'react'

const Stats_section = () => {
    return (
        <>
            <section className="bg-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-cyan-400 mb-2">50,000+</div>
                            <div className="text-gray-300">Students Trained</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                            <div className="text-gray-300">Job Placement Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-cyan-400 mb-2">200+</div>
                            <div className="text-gray-300">Expert Instructors</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                            <div className="text-gray-300">Lab Access</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stats_section