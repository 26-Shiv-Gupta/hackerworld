// src/pages/courses.jsx
// Admin page for managing courses (list, add, edit, delete).
// State + API orchestration lives in the useCourses hook; this file
// just wires it to the table and the two modals.

import React, { useState } from 'react';
import CourseModal from '../components/courses/CourseModal';
import DeleteModal from '../components/courses/DeleteModal';
import CourseTable from '../components/courses/CourseTable';
import { useCourses } from '../hooks/useCourses';

const Courses = () => {
  const {
    courses,
    loading,
    error,
    reload,
    addCourseToList,
    updateCourseInList,
    removeCourseFromList,
  } = useCourses();

  const [modal, setModal] = useState(null); // null | { mode: 'add' | 'edit', course?: {} }
  const [deleteTarget, setDeleteTarget] = useState(null); // course to delete

  const handleSaved = (saved, mode) => {
    if (mode === 'add') {
      addCourseToList(saved);
    } else {
      updateCourseInList(saved);
    }
    setModal(null);
  };

  const handleDeleted = (id) => {
    removeCourseFromList(id);
    setDeleteTarget(null);
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen">
      <div className="p-6 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Courses</h1>
            {!loading && !error && (
              <p className="text-sm text-gray-500 mt-0.5">
                {courses.length} course{courses.length !== 1 ? 's' : ''} total
              </p>
            )}
          </div>
          <button
            onClick={() => setModal({ mode: 'add' })}
            className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Course
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
            <button onClick={reload} className="ml-auto underline hover:no-underline text-red-600">
              Retry
            </button>
          </div>
        )}

        {/* Table */}
        <CourseTable
          courses={courses}
          loading={loading}
          error={error}
          onRetry={reload}
          onEdit={(course) => setModal({ mode: 'edit', course })}
          onDelete={(course) => setDeleteTarget(course)}
        />
      </div>

      {/* Course Modal (Add / Edit) */}
      {modal && (
        <CourseModal
          mode={modal.mode}
          initial={modal.mode === 'edit' ? modal.course : null}
          onClose={() => setModal(null)}
          onSaved={handleSaved}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <DeleteModal
          course={deleteTarget}
          onClose={() => setDeleteTarget(null)}
          onDeleted={handleDeleted}
        />
      )}
    </div>
  );
};

export default Courses;