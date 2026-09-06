import { React, useContext } from 'react';
import { AcademicCapIcon, UserGroupIcon, ShieldCheckIcon, BriefcaseIcon } from "@heroicons/react/solid";
import { AppContext } from '../context/AppContext';

const Careers = () => {
  const { careers } = useContext(AppContext);

  return (
    <main className="bg-bg-primary min-h-screen py-16 px-4">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-bg-card border border-border-subtle rounded-full px-3 py-1 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" />
          <span className="text-[11px] font-mono-terminal tracking-widest text-gray-300 uppercase">
            We're Hiring
          </span>
        </div>
        <BriefcaseIcon className="w-12 h-12 mx-auto text-cyan-bright mb-4" />
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Join Our <span className="text-gradient-cyan">Team</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Passionate about cybersecurity and education? Help us empower tomorrow's ethical hackers and defenders.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-bg-card border border-border-subtle p-8 rounded-xl text-center hover:border-cyan-bright/40 hover:-translate-y-1 transition-all duration-300">
          <AcademicCapIcon className="w-10 h-10 mx-auto text-cyan-bright mb-3" />
          <h2 className="text-lg text-white font-bold mb-2">Impactful Mission</h2>
          <p className="text-gray-400 text-sm">Educate, mentor, and grow the global cybersecurity community—for good.</p>
        </div>
        <div className="bg-bg-card border border-border-subtle p-8 rounded-xl text-center hover:border-cyan-bright/40 hover:-translate-y-1 transition-all duration-300">
          <ShieldCheckIcon className="w-10 h-10 mx-auto text-cyan-bright mb-3" />
          <h2 className="text-lg text-white font-bold mb-2">Remote Flexibility</h2>
          <p className="text-gray-400 text-sm">Work remotely or hybrid, with a supportive and modern environment.</p>
        </div>
        <div className="bg-bg-card border border-border-subtle p-8 rounded-xl text-center hover:border-cyan-bright/40 hover:-translate-y-1 transition-all duration-300">
          <UserGroupIcon className="w-10 h-10 mx-auto text-cyan-bright mb-3" />
          <h2 className="text-lg text-white font-bold mb-2">Growth & Inclusion</h2>
          <p className="text-gray-400 text-sm">Continuous learning, a diverse team, and real opportunities for advancement.</p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-extrabold text-white mb-6 text-center">
          Open <span className="text-gradient-cyan">Positions</span>
        </h2>
        <div className="overflow-auto rounded-xl border border-border-subtle">
          <table className="min-w-full table-auto bg-bg-card text-white">
            <thead>
              <tr className="bg-black/30 text-cyan-bright font-mono-terminal text-xs uppercase tracking-wide">
                <th className="py-3 px-4 text-left font-semibold">Position</th>
                <th className="py-3 px-4 text-left font-semibold">Department</th>
                <th className="py-3 px-4 text-left font-semibold">Location</th>
                <th className="py-3 px-4 text-left font-semibold">Type</th>
              </tr>
            </thead>
            <tbody>
              {careers.map((job, i) => (
                <tr key={i} className="border-t border-border-subtle hover:bg-black/20 transition-colors cursor-pointer">
                  <td className="py-3 px-4 text-white font-medium">{job.title}</td>
                  <td className="py-3 px-4 text-gray-400">{job.dept}</td>
                  <td className="py-3 px-4 text-gray-400">{job.location}</td>
                  <td className="py-3 px-4 text-gray-400">{job.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-center mt-6">
          Don't see a fit? Send your CV to <span className="text-cyan-bright font-semibold">careers@cybersecacademy.com</span>
        </p>
      </section>

      {/* Benefits and Application Process */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-bg-card border border-border-subtle rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">
            Benefits <span className="text-gradient-cyan">& Perks</span>
          </h2>
          <ul className="space-y-2.5 text-gray-400">
            {[
              "Competitive salary & annual bonuses",
              "Professional development & certifications",
              "Remote and flexible schedules",
              "Health benefits (role/location dependent)",
              "Access to all course content & labs",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-terminal-green mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-bg-card border border-border-subtle rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">
            Application <span className="text-gradient-cyan">Process</span>
          </h2>
          <ol className="space-y-2.5 text-gray-400">
            {[
              "Apply online with résumé and cover letter",
              "Initial screening and skills/culture interview",
              "Meet team, demonstrate skills",
              "Receive offer & onboarding guidance",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-cyan-bright font-mono-terminal text-sm flex-shrink-0">0{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold text-white mb-4">
          Ready to Make an <span className="text-gradient-cyan">Impact</span>?
        </h2>
        <p className="text-gray-400 mb-8">
          Submit your application to <span className="text-cyan-bright font-semibold">careers@cybersecacademy.com</span> or apply through our portal (coming soon).
        </p>
        
      </section>
    </main>
  );
};

export default Careers;