import React from 'react'
import { StarIcon } from "@heroicons/react/solid";
import { useState, useEffect } from 'react';

const Testimonial_section = () => {

  const [testimonials, setTestimonials] = useState([])

  const getTestimonials = () => {
    fetch("https://hackerworld.onrender.com/api/homeReviews")
      .then(res => res.json())
      .then(json => setTestimonials(json))
  }

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-300">
            Success stories from our cybersecurity professionals
          </p>
        </div>
        {/* Marquee scroll */}
        <div className="overflow-hidden">
          <div
            className="flex w-max ani-marquee"
            style={{ minWidth: "100%" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 m-4 flex-shrink-0 w-80"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-red-500" />
                  ))}
                </div>
                <p className="text-white mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-red-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial_section
