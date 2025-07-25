import React from "react";
import { PlayIcon } from "@heroicons/react/solid";
// import homepageBackground from "../assets/hero_section_background.webp";

const Hero_section = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-30 min-h-[600px]">
      {/* Blurred Background Image */}
      <img
        src={'https://img.freepik.com/premium-photo/mysterious-figure-red-hoodie-hunched-laptop-illuminated-by-red-light-symbolizing-cybercrime-hacking-dark-environment_762139-38060.jpg?ga=GA1.1.1195667242.1745735402&semt=ais_hybrid&w=740'}
        alt="Cybersecurity Professional"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{  opacity: 1 }}
      />
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"/>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[500px]">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Master{" "}
            <span className="text-red-600 transition-colors">
              Ethical Hacking
            </span>{" "}
            &amp;
            <br />
            Cybersecurity Skills
          </h1>
          <p className="text-2xl text-gray-100 mb-10">
            Join thousands of students learning cutting-edge cybersecurity
            techniques through hands-on courses, real-world labs, and
            industry-certified programs. Build your career in ethical hacking
            and cybersecurity defense.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-red-500/30 cursor-pointer">
              Start Learning Today
            </button>
            <button className="border border-red-50 hover:border hover:border-red-600 text-red-500 hover:text-red-600 px-10 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center bg-white bg-opacity-10 cursor-pointer">
              <PlayIcon className="h-5 w-5 mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_section;
