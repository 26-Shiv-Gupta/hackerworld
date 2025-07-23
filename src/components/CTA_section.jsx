import React from 'react'

const CTA_section = () => {
    return (
        <>
            <section className="py-24 bg-gradient-to-r from-cyan-800 to-blue-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Start Your Cybersecurity Journey?
                    </h2>
                    <p className="text-xl text-cyan-100 mb-8">
                        Join thousands of professionals who have advanced their careers with our courses
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                            Start Free Trial
                        </button>
                        <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                            View All Courses
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTA_section