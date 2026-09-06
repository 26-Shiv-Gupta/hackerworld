// src/components/Testimonial_section.jsx
import React, { useContext } from 'react';
import { StarIcon } from "@heroicons/react/solid";
import { AppContext } from '../context/AppContext';

const Testimonial_section = () => {
  const { testimonials } = useContext(AppContext);  // <-- get data from context

  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-bg-card border border-border-subtle rounded-full px-3 py-1 mb-5 mx-auto w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" />
            <span className="text-[11px] font-mono-terminal tracking-widest text-gray-300 uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            What Our <span className="text-gradient-cyan">Students Say</span>
          </h2>
          <p className="text-lg text-gray-400">
            Success stories from our cybersecurity professionals
          </p>
        </div>

        {/* Marquee scroll */}
        <div className="overflow-hidden">
          <div className="flex w-max ani-marquee" style={{ minWidth: "100%" }}>
            {testimonials.length === 0 ? (
              Array(3).fill(0).map((_, index) => (
                <div
                  key={index}
                  className="bg-bg-card border border-border-subtle rounded-lg p-6 m-4 flex-shrink-0 w-80 animate-pulse"
                />
              ))
            ) : (
              testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-bg-card border border-border-subtle rounded-lg p-6 m-4 flex-shrink-0 w-80 hover:border-cyan-bright/30 transition-colors"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-cyan-bright" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-terminal-green font-mono-terminal">{testimonial.role}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial_section;