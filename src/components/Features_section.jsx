import React from 'react'
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  DeviceMobileIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

const features = [
  {
    icon: <AcademicCapIcon className="w-12 h-12 text-red-500 mx-auto" />,
    title: "Expert Instructors",
    description: "Learn from certified security professionals with real-world experience.",
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12 text-red-500 mx-auto" />,
    title: "Industry-Relevant Curriculum",
    description: "Courses are aligned with top certifications and the latest security practices.",
  },
  {
    icon: <DeviceMobileIcon className="w-12 h-12 text-red-500 mx-auto" />,
    title: "Flexible Learning",
    description: "Access hands-on labs and content anytime, anywhere, on any device.",
  },
  {
    icon: <UserGroupIcon className="w-12 h-12 text-red-500 mx-auto" />,
    title: "Active Community",
    description: "Join a thriving community, network, and get support from peers and mentors.",
  },
];

const Features_section = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose CyberSec Academy?
          </h2>
          <p className="text-xl text-white">
            We provide the most comprehensive and practical cybersecurity education
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-gray-900 rounded-xl px-6 py-10 shadow-lg border-t-4 border-red-600 transition-shadow duration-300"
            >
              <div className="text-4xl mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-red-600 mb-2">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features_section;
