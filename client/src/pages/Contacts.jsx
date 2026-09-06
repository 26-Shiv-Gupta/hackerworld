import React, { useState } from "react";
import { MailIcon, PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Trigger submission logic here (e.g., API call)
    setSubmitted(true);
  }

  return (
    <>
      <main className="bg-bg-primary min-h-screen py-16 px-4">
        <section className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-bg-card border border-border-subtle rounded-full px-3 py-1 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" />
            <span className="text-[11px] font-mono-terminal tracking-widest text-gray-300 uppercase">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Contact <span className="text-gradient-cyan">TechHackWorld</span>
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            We'd love to hear from you! Fill out the form, or use the information below to reach us directly.
          </p>
        </section>

        <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-bg-card border border-border-subtle rounded-xl p-8 text-left text-gray-400">
            <h2 className="text-2xl font-bold text-white mb-4">
              Contact <span className="text-gradient-cyan">Information</span>
            </h2>
            <ul className="space-y-5">
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-cyan-bright mr-3 flex-shrink-0" />
                <span>info@techhackworld.com</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-cyan-bright mr-3 flex-shrink-0" />
                <span>+91 9717760561</span>
              </li>
              <li className="flex items-center">
                <LocationMarkerIcon className="h-5 w-5 text-cyan-bright mr-3 flex-shrink-0" />
                <span>Sector 62, Noida City, India</span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-border-subtle">
              <h3 className="text-sm font-semibold text-cyan-bright mb-2 uppercase tracking-wide font-mono-terminal">
                Support Hours
              </h3>
              <p className="text-gray-400 text-sm">
                Monday–Friday: 9am–6pm (Indian Time)
              </p>
              <p className="text-gray-400 text-sm">Weekend & holidays: Email only</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg-card border border-border-subtle rounded-xl p-8 text-left">
            <h2 className="text-2xl font-bold text-white mb-4">
              Send Us a <span className="text-gradient-cyan">Message</span>
            </h2>
            {submitted ? (
              <div className="bg-black/30 border border-terminal-green/30 rounded-lg p-4 text-terminal-green font-mono-terminal text-sm">
                <span className="font-semibold">[OK]</span> Thank you for reaching out! We'll respond as soon as possible.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-300 text-sm mb-1.5">Name</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/30 text-white border border-border-subtle focus:outline-none focus:ring-2 focus:ring-cyan-bright focus:border-transparent transition-shadow"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1.5">Email</label>
                  <input
                    required
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/30 text-white border border-border-subtle focus:outline-none focus:ring-2 focus:ring-cyan-bright focus:border-transparent transition-shadow"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1.5">Message</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/30 text-white border border-border-subtle focus:outline-none focus:ring-2 focus:ring-cyan-bright focus:border-transparent transition-shadow"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-bright hover:bg-cyan-glow text-bg-primary py-3 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Contacts;