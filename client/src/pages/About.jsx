import React from "react";

const About = () => {
  return (
    <main className="bg-black min-h-screen py-16 px-6 text-white">
      {/* Header */}
      <section className="max-w-5xl mx-auto mb-15 p-8 border rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Left */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=720&q=80"
              alt="Cybersecurity Training"
              className="rounded-lg shadow-lg object-cover w-full h-72"
            />
          </div>
          {/*text right*/}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-red-600 mb-6 text-center md:text-left">
              About CyberSec Academy
            </h2>
            <p className="text-gray-300 leading-relaxed ">
              CyberSec Academy is dedicated to empowering the next generation of cybersecurity
              professionals through hands-on, ethical, and industry-aligned education. With courses
              designed for all skill levels, we prepare learners to overcome real-world cyber threats
              and protect digital environments worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto mb-15  bg-gray-900 rounded-lg p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Left */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our mission is to democratize cybersecurity education by breaking down complex concepts
              into practical, engaging learning experiences. We cultivate critical thinking, problem-solving,
              and ethical hacking practices to build skilled defenders for tomorrow’s digital world.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through immersive labs, expert-led training, and a vibrant community, students gain the confidence
              and hands-on experience necessary to excel in cybersecurity careers globally.
            </p>
          </div>
          {/* Image Right */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=720&q=80"
              alt="Mission Concept"
              className="rounded-lg shadow-lg object-cover w-full h-72"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-5xl mx-auto mb-15 p-8 border rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Left */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=720&q=80"
              alt="Core Values"
              className="rounded-lg shadow-lg object-cover w-full h-72"
            />
          </div>
          {/* Text Right */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-red-600 mb-6 text-center md:text-left">
              Core Values
            </h2>
            <ul className="list-none list-inside space-y-4 text-gray-300">
              <li>
                <strong className="text-red-500">Ethical Commitment:</strong> Our teachings embody the highest ethical standards,
                emphasizing responsible and legal cybersecurity practices.
              </li>
              <li>
                <strong className="text-red-500">Hands-On Learning:</strong> Practical application through simulated environments drives retention
                and real-world readiness.
              </li>
              <li>
                <strong className="text-red-500">Community & Support:</strong> We maintain an inclusive, supportive space where learners connect,
                collaborate, and flourish.
              </li>
              <li>
                <strong className="text-red-500">Innovation:</strong> Our curriculum is dynamic, evolving continuously to stay relevant amid the rapidly changing cybersecurity landscape.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="max-w-5xl mx-auto mb-15 bg-gray-900 rounded-lg p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Left */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Meet Our Team</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our instructors bring decades of combined experience from cybersecurity frontline roles,
              ethical hacking, penetration testing, and security engineering. Their passion is to equip students
              with the skills and mindset needed for success.
            </p>
            <p className="text-gray-300 leading-relaxed">
              They continuously contribute to cybersecurity research and communities, ensuring our courses remain cutting-edge and impactful.
            </p>
          </div>
          {/* Image Right */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=720&q=80"
              alt="Team"
              className="rounded-lg shadow-lg object-cover w-full h-72"
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-5xl mx-auto mb-15 p-8 border rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Left */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=720&q=80"
              alt="Vision"
              className="rounded-lg shadow-lg object-cover w-full h-72"
            />
          </div>
          {/* Text Right */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-red-600 mb-6 text-center md:text-left">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              We aim to create a more secure digital world where everyone can access practical cybersecurity education.
              By empowering diverse individuals with skills and ethical knowledge, we envision a future with resilient systems,
              safer networks, and proactive defense against emerging cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto text-center pb-20">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Get Started Today</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Whether you're aiming to begin a new career or level up your cybersecurity expertise, CyberSec Academy offers the hands-on learning and expert guidance
          you need. Explore our courses or get in touch to start your journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/courses"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-semibold transition-colors shadow-md shadow-red-600/30"
          >
            View Courses
          </a>
          <a
            href="/contacts"
            className="border border-red-600 hover:bg-red-600 text-red-600 hover:text-white px-10 py-4 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
