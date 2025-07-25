import React from 'react'
import { StarIcon } from "@heroicons/react/solid";

const testimonials = [
  {
    rating: 5,
    content: "The hands-on labs made all the difference—now I'm working in my dream cybersecurity job!",
    name: "Alex Johnson",
    role: "Security Analyst, TechCorp"
  },
  {
    rating: 5,
    content: "The instructors are top-tier. Every lesson was practical and industry-relevant.",
    name: "Maria Patel",
    role: "Penetration Tester, RedShield"
  },
  {
    rating: 4,
    content: "CyberSec Academy opened doors to new certifications and global opportunities.",
    name: "David Kim",
    role: "Cloud Security Engineer, SafeSky"
  },
  {
    rating: 5,
    content: "Best platform for practical cybersecurity learning, period.",
    name: "Fatima Elmasry",
    role: "SOC Analyst, SecureOps"
  },
  {
    rating: 4,
    content: "The labs are very challenging and realistic—absolutely recommend!",
    name: "Juan Alvarez",
    role: "Incident Responder, InfoGuard"
  },
  {
    rating: 5,
    content: "Great support from mentors and a super active community.",
    name: "Wei Lin",
    role: "Junior PenTester, NextSec"
  }
];

const displayTestimonials = [...testimonials, ...testimonials]; // for seamless marquee

const Testimonial_section = () => {
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
            {displayTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 m-4 flex-shrink-0 w-80"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-red-500" />
                  ))}
                </div>
                <p className="text-red-200 mb-4 italic">
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
