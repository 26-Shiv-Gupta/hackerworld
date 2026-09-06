import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyCourses = () => {
  const { myCourses } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-10">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          My Courses
        </h1>

        <p className="text-gray-400 mt-2">
          Courses you have enrolled in
        </p>
      </div>


      {/* No Courses */}
      {myCourses.length === 0 ? (
        <div className="max-w-7xl mx-auto text-center py-20">
          <h2 className="text-2xl font-semibold">
            You haven't enrolled in any course yet.
          </h2>

          <p className="text-gray-400 mt-3">
            Explore our courses and start learning today.
          </p>
        </div>
      ) : (

        /* Courses Grid */
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {myCourses.map((course) => (
            <div
              key={course._id}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition"
            >

              {/* Course Image */}
              {course.image && (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              )}


              {/* Course Content */}
              <div className="p-5">

                <h2 className="text-xl font-semibold mb-2">
                  {course.title}
                </h2>

                <p className="text-gray-400 text-sm line-clamp-3">
                  {course.description}
                </p>


                {/* Course Info */}
                <div className="flex justify-between items-center mt-5">

                  <span className="text-sm text-gray-400">
                    {course.level}
                  </span>

                  <span className="text-sm text-gray-400">
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