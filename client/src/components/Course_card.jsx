import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Course_card = ({index, image, title, description, duration, level, onLearnMore}) => {
    return (
        <>
            <div
                key={index}
                className="bg-bg-card border border-border-subtle rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:border-cyan-bright/40 hover:shadow-lg hover:shadow-cyan-bright/10"
            >
                {/* Course Image */}
                <div className="relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                </div>

                {/* Course Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>

                    <div className="flex justify-between items-center mb-5 text-xs font-mono-terminal">
                        <span className="text-cyan-bright font-semibold tracking-wide uppercase">
                            {duration}
                        </span>
                        <span className="bg-black/30 border border-border-subtle px-3 py-1 rounded-full text-terminal-green uppercase tracking-wide">
                            {level}
                        </span>
                    </div>

                    <button
                        className="w-full bg-cyan-bright hover:bg-cyan-glow text-bg-primary py-3 rounded-lg text-sm font-bold tracking-wide uppercase transition-colors cursor-pointer"
                        onClick={onLearnMore}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </>
    )
}

export default Course_card