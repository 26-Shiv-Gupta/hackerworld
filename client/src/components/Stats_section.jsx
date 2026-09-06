import React from 'react';

const stats = [
  { value: "50,000+", label: "Students Trained" },
  { value: "95%", label: "Job Placement Rate" },
  { value: "200+", label: "Expert Instructors" },
  { value: "24/7", label: "Lab Access" },
];

const Stats_section = () => {
  return (
    <section className="bg-bg-card border-y border-border-subtle py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-extrabold text-gradient-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-mono-terminal uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats_section;