// import React, { useEffect, useState, useContext } from "react";
// // import { createContext } from "react";
// import { createContext } from "react";

// export const AuthContext = createContext(null);
// // If you have an AuthContext (or use Redux/etc)
// // import { AuthContext } from "../context/AuthContext"; // change path as per your app

// export default function MyCourses() {
//   const { user, isLoggedIn } = useContext(AuthContext); // Update if you use another method
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch user's enrolled courses
//   useEffect(() => {
//     if (!isLoggedIn || !user?._id) return;

//     fetch(`https://hackerworld.onrender.com/api/users/${user._id}/courses`, {
//       headers: {
//         "Authorization": `Bearer ${user.token}` // only include if you use JWT auth
//       }
//     })
//       .then(res => res.ok ? res.json() : Promise.reject("Failed to get courses"))
//       .then(data => {
//         setCourses(data);
//         setError(null);
//       })
//       .catch(err => setError(err.toString()))
//       .finally(() => setLoading(false));
//   }, [user, isLoggedIn]);

//   if (!isLoggedIn) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <p className="text-xl text-gray-700">Please log in to view your courses.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto my-10 px-4">
//       <h2 className="text-2xl font-bold mb-6">My Enrolled Courses</h2>
//       {loading ? (
//         <p>Loading your courses...</p>
//       ) : error ? (
//         <p className="text-red-600">{error}</p>
//       ) : courses.length === 0 ? (
//         <p>You haven’t enrolled in any courses yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {courses.map(course => (
//             <div key={course._id} className="bg-white rounded shadow p-4 flex flex-col">
//               <img src={course.image} alt={course.title} className="h-40 w-full object-cover rounded mb-4"/>
//               <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
//               <p className="text-gray-600 mb-2">{course.description?.slice(0, 90)}...</p>
//               <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
//                 <span>Level: {course.level}</span>
//                 <span>|</span>
//                 <span>Duration: {course.duration}</span>
//               </div>
//               <a
//                 href={course.enrollmentLink || "#"}
//                 className="mt-auto px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-center"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Go to Course
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import React from 'react'

const MyCourses = () => {
  return (
    <div>MyCourses</div>
  )
}

export default MyCourses
