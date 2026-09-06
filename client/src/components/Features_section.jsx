import React from 'react'
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  DeviceMobileIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

const features = [
  {
    icon: <AcademicCapIcon className="w-10 h-10 text-cyan-bright mx-auto" />,
    title: "Expert Instructors",
    description: "Learn from certified security professionals with real-world experience.",
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 text-cyan-bright mx-auto" />,
    title: "Industry-Relevant Curriculum",
    description: "Courses are aligned with top certifications and the latest security practices.",
  },
  {
    icon: <DeviceMobileIcon className="w-10 h-10 text-cyan-bright mx-auto" />,
    title: "Flexible Learning",
    description: "Access hands-on labs and content anytime, anywhere, on any device.",
  },
  {
    icon: <UserGroupIcon className="w-10 h-10 text-cyan-bright mx-auto" />,
    title: "Active Community",
    description: "Join a thriving community, network, and get support from peers and mentors.",
  },
];

const Features_section = () => {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-bg-card border border-border-subtle rounded-full px-3 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" />
            <span className="text-[11px] font-mono-terminal tracking-widest text-gray-300 uppercase">
              Why TechHackWorld
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Why Choose <span className="text-gradient-cyan">TechHackWorld</span>?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We provide the most comprehensive and practical cybersecurity education
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-bg-card border border-border-subtle rounded-xl px-6 py-10 hover:border-cyan-bright/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features_section;