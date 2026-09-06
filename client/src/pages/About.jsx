import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  
  const navigate = useNavigate();
  
  return (
    <main className="bg-bg-primary min-h-screen py-16 px-6 text-white">
      {/* Header */}
      <section className="max-w-5xl mx-auto mb-12 p-8 bg-bg-card border border-border-subtle rounded-xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Left */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=720&q=80"
              alt="Cybersecurity Training"
              className="rounded-lg object-cover w-full h-72 border border-border-subtle"
            />
          </div>
          {/* Text Right */}
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-black/30 border border-border-subtle rounded-full px-3 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" />
              <span className="text-[11px] font-mono-terminal tracking-widest text-gray-300 uppercase">
                About Us
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-6 text-center md:text-left">
              About <span className="text-gradient-cyan">TechHackWorld</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              TechHackWorld is dedicated to empowering the next generation of cybersecurity
              professionals through hands-on, ethical, and industry-aligned education. With courses
              designed for all skill levels, we prepare learners to overcome real-world cyber threats
              and protect digital environments worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto mb-12 bg-bg-card border border-border-subtle rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Left */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Our <span className="text-gradient-cyan">Mission</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our mission is to democratize cybersecurity education by breaking down complex concepts
              into practical, engaging learning experiences. We cultivate critical thinking, problem-solving,
              and ethical hacking practices to build skilled defenders for tomorrow's digital world.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Through immersive labs, expert-led training, and a vibrant community, students gain the confidence
              and hands-on experience necessary to excel in cybersecurity careers globally.
            </p>
          </div>
          {/* Image Right */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=720&q=80"
              alt="Mission Concept"
              className="rounded-lg object-cover w-full h-72 border border-border-subtle"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-5xl mx-auto mb-12 p-8 bg-bg-card border border-border-subtle rounded-xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Left */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=720&q=80"
              alt="Core Values"
              className="rounded-lg object-cover w-full h-72 border border-border-subtle"
            />
          </div>
          {/* Text Right */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-white mb-6 text-center md:text-left">
              Core <span className="text-gradient-cyan">Values</span>
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-terminal-green mt-2 flex-shrink-0" />
                <span><strong className="text-cyan-bright">Ethical Commitment:</strong> Our teachings embody the highest ethical standards, emphasizing responsible and legal cybersecurity practices.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-terminal-green mt-2 flex-shrink-0" />
                <span><strong className="text-cyan-bright">Hands-On Learning:</strong> Practical application through simulated environments drives retention and real-world readiness.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-terminal-green mt-2 flex-shrink-0" />
                <span><strong className="text-cyan-bright">Community & Support:</strong> We maintain an inclusive, supportive space where learners connect, collaborate, and flourish.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-terminal-green mt-2 flex-shrink-0" />
                <span><strong className="text-cyan-bright">Innovation:</strong> Our curriculum is dynamic, evolving continuously to stay relevant amid the rapidly changing cybersecurity landscape.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="max-w-5xl mx-auto mb-12 bg-bg-card border border-border-subtle rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Left */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Meet Our <span className="text-gradient-cyan">Team</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our instructors bring decades of combined experience from cybersecurity frontline roles,
              ethical hacking, penetration testing, and security engineering. Their passion is to equip students
              with the skills and mindset needed for success.
            </p>
            <p className="text-gray-400 leading-relaxed">
              They continuously contribute to cybersecurity research and communities, ensuring our courses remain cutting-edge and impactful.
            </p>
          </div>
          {/* Image Right */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=720&q=80"
              alt="Team"
              className="rounded-lg object-cover w-full h-72 border border-border-subtle"
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-5xl mx-auto mb-12 p-8 bg-bg-card border border-border-subtle rounded-xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Left */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=720&q=80"
              alt="Vision"
              className="rounded-lg object-cover w-full h-72 border border-border-subtle"
            />
          </div>
          {/* Text Right */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-white mb-6 text-center md:text-left">
              Our <span className="text-gradient-cyan">Vision</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We aim to create a more secure digital world where everyone can access practical cybersecurity education.
              By empowering diverse individuals with skills and ethical knowledge, we envision a future with resilient systems,
              safer networks, and proactive defense against emerging cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto text-center pb-20">
        <h2 className="text-3xl font-extrabold text-white mb-6">
          Get Started <span className="text-gradient-cyan">Today</span>
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Whether you're aiming to begin a new career or level up your cybersecurity expertise, TechHackWorld offers the hands-on learning and expert guidance
          you need. Explore our courses or get in touch to start your journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
        <button
            onClick={() => navigate("/courses")}
            className="bg-cyan-bright hover:bg-cyan-glow text-bg-primary px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors shadow-lg shadow-cyan-bright/20 cursor-pointer"
          >
            View Courses
          </button>
          <button
            onClick={() => navigate("/contacts")}
            className="border border-border-subtle hover:border-cyan-bright text-white px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;