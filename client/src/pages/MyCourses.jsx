import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const MyCourses = () => {
  const { myCourses } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-primary text-white px-6 md:px-12 py-10">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-bg-card border border-border-subtle rounded-full px-3 py-1 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" />
          <span className="text-[11px] font-mono-terminal tracking-widest text-gray-300 uppercase">
            Your Dashboard
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          My <span className="text-gradient-cyan">Courses</span>
        </h1>

        <p className="text-gray-400 mt-2">
          Courses you have enrolled in
        </p>
      </div>


      {/* No Courses */}
      {myCourses.length === 0 ? (
        <div className="max-w-7xl mx-auto text-center py-20">
          <div className="bg-bg-card border border-border-subtle rounded-xl py-16 px-6 max-w-lg mx-auto">
            <h2 className="text-xl font-semibold text-white">
              You haven't enrolled in any course yet.
            </h2>

            <p className="text-gray-400 mt-3 mb-8">
              Explore our courses and start learning today.
            </p>

            <button
              onClick={() => navigate("/courses")}
              className="bg-cyan-bright hover:bg-cyan-glow text-bg-primary px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors cursor-pointer"
            >
              Browse Courses
            </button>
          </div>
        </div>
      ) : (

        /* Courses Grid */
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {myCourses.map((course) => (
            <div
              key={course._id}
              className="bg-bg-card border border-border-subtle rounded-xl overflow-hidden hover:border-cyan-bright/40 hover:-translate-y-1 transition-all duration-300"
            >

              {/* Course Image */}
              {course.image && (
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                </div>
              )}


              {/* Course Content */}
              <div className="p-5">

                <h2 className="text-lg font-semibold mb-2 text-white">
                  {course.title}
                </h2>

                <p className="text-gray-400 text-sm line-clamp-3">
                  {course.description}
                </p>


                {/* Course Info */}
                <div className="flex justify-between items-center mt-5 text-xs font-mono-terminal">

                  <span className="bg-black/30 border border-border-subtle px-3 py-1 rounded-full text-terminal-green uppercase tracking-wide">
                    {course.level}
                  </span>

                  <span className="text-cyan-bright font-semibold tracking-wide uppercase">
                    {course.duration}
                  </span>

                </div>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default MyCourses;