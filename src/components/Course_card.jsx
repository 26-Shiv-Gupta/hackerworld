import React from 'react'

const Course_card = ({index, image, title, description, duration, level}) => {
    return (
        <>
            <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover: transition-shadow duration-300 transform hover:-translate-y-2"
            >
                {/* Course Image */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />

                {/* Course Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-red-600 mb-2">{title}</h3>
                    <p className="text-gray-300 mb-4">{description}</p>

                    <div className="flex justify-between items-center mb-4 text-sm">
                        <span className="text-red-500 font-semibold">Duration: {duration}</span>
                        <span className="bg-gray-700 px-3 py-1 rounded-full text-white">
                            {level}
                        </span>
                    </div>

                    <button className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition-colors">
                        Learn More
                    </button>
                </div>
            </div>

        </>
    )
}

export default Course_card