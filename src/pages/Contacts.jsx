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
      <main className="bg-black min-h-screen py-16 px-4">
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact CyberSec Academy</h1>
          <p className="text-lg text-red-300 mb-6">
            We'd love to hear from you! Fill out the form, or use the information below to reach us directly.
          </p>
        </section>

        <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-gray-900 rounded-lg p-8 text-left text-gray-300">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Contact Information</h2>
            <ul className="space-y-5">
              <li className="flex items-center">
                <MailIcon className="h-6 w-6 text-red-600 mr-3" />
                <span>info@cybersecacademy.com</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-red-600 mr-3" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <LocationMarkerIcon className="h-6 w-6 text-red-600 mr-3" />
                <span>1234 Cyber Lane, Innovation City, USA</span>
              </li>
            </ul>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-red-600 mb-2">Support Hours</h3>
              <p className="text-gray-400">
                Monday–Friday: 9am–6pm (US Eastern Time)
              </p>
              <p className="text-gray-400">Weekend & holidays: Email only</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg p-8 text-left">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Send Us a Message</h2>
            {submitted ? (
              <div className="text-red-500 font-semibold">
                Thank you for reaching out! We'll respond as soon as possible.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-200 mb-1">Name</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-200 mb-1">Email</label>
                  <input
                    required
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-200 mb-1">Message</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
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
