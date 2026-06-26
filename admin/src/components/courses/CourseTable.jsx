// src/components/courses/CourseTable.jsx
// Renders the courses list table: loading skeleton, empty state, rows + actions.

import React from 'react';

const CourseTable = ({ courses, loading, error, onRetry, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3 w-10">#</th>
            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">Course</th>
            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Level</th>
            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Duration</th>
            <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Price</th>
            <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">

          {/* Skeleton */}
          {loading && Array(6).fill(0).map((_, i) => (
            <tr key={i} className="animate-pulse">
              <td className="px-5 py-4"><div className="h-3 w-4 bg-gray-200 rounded" /></td>
              <td className="px-5 py-4">
                <div className="h-3 w-48 bg-gray-200 rounded mb-2" />
                <div className="h-2.5 w-28 bg-gray-100 rounded" />
              </td>
              <td className="px-5 py-4 hidden md:table-cell"><div className="h-5 w-20 bg-gray-100 rounded-full" /></td>
              <td className="px-5 py-4 hidden md:table-cell"><div className="h-3 w-16 bg-gray-100 rounded" /></td>
              <td className="px-5 py-4 hidden sm:table-cell"><div className="h-3 w-14 bg-gray-200 rounded ml-auto" /></td>
              <td className="px-5 py-4"><div className="h-7 w-16 bg-gray-100 rounded-lg mx-auto" /></td>
            </tr>
          ))}

          {/* Empty */}
          {!loading && !error && courses.length === 0 && (
            <tr>
              <td colSpan={6} className="px-5 py-16 text-center">
                <div className="flex flex-col items-center gap-2 text-gray-400">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <p className="font-medium text-gray-500">No courses yet</p>
                  <p className="text-xs">Click "Add Course" to create your first one.</p>
                </div>
              </td>
            </tr>
          )}

          {/* Rows */}
          {!loading && !error && courses.map((course, index) => (
            <tr key={course._id} className="hover:bg-gray-50 transition-colors">
              <td className="px-5 py-4 text-gray-400 text-xs">{index + 1}</td>
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  {course.image && (
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-10 h-10 rounded-lg object-cover shrink-0 border border-gray-100"
                    />
                  )}
                  <div>
                    <p className="font-medium text-gray-800 leading-snug">
                      {course.title || 'Untitled Course'}
                    </p>
                    {course.description && (
                      <p className="text-xs text-gray-400 mt-0.5 line-clamp-1 max-w-xs">
                        {course.description}
                      </p>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-5 py-4 hidden md:table-cell">
                {course.level ? (
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${course.level === 'Beginner' ? 'bg-green-50 text-green-700' :
                      course.level === 'Intermediate' ? 'bg-yellow-50 text-yellow-700' :
                      'bg-red-50 text-red-700'}`}>
                    {course.level}
                  </span>
                ) : <span className="text-gray-300 text-xs">—</span>}
              </td>
              <td className="px-5 py-4 text-gray-500 text-xs hidden md:table-cell">
                {course.duration || <span className="text-gray-300">—</span>}
              </td>
              <td className="px-5 py-4 text-right hidden sm:table-cell">
                {course.price !== undefined ? (
                  <div>
                    <span className="font-medium text-gray-800">₹{Number(course.price).toLocaleString()}</span>
                    {course.originalPrice && (
                      <p className="text-xs text-gray-400 line-through">
                        ₹{Number(course.originalPrice).toLocaleString()}
                      </p>
                    )}
                  </div>
                ) : <span className="text-gray-300 text-xs">—</span>}
              </td>
              <td className="px-5 py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => onEdit(course)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 active:scale-95 px-3 py-1.5 rounded-lg transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(course)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-red-500 border border-red-100 hover:border-red-300 hover:bg-red-50 active:scale-95 px-3 py-1.5 rounded-lg transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;