// src/components/courses/FormFields.jsx
// Tiny reusable, presentational form pieces shared by the course modal.

import React from 'react';

export const Label = ({ children, required }) => (
  <label className="block text-xs font-medium text-gray-600 mb-1">
    {children} {required && <span className="text-red-400">*</span>}
  </label>
);

export const Input = ({ className = '', ...props }) => (
  <input
    className={`w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400 transition ${className}`}
    {...props}
  />
);

export const Textarea = ({ className = '', ...props }) => (
  <textarea
    rows={3}
    className={`w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400 transition resize-none ${className}`}
    {...props}
  />
);

export const Select = ({ children, className = '', ...props }) => (
  <select
    className={`w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400 transition ${className}`}
    {...props}
  >
    {children}
  </select>
);

export const SectionTitle = ({ children }) => (
  <h3 className="text-sm font-semibold text-gray-700 mt-6 mb-3 pb-1.5 border-b border-gray-100">
    {children}
  </h3>
);

export const AddBtn = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="mt-2 text-xs text-red-500 hover:text-red-600 font-medium flex items-center gap-1"
  >
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
    {children}
  </button>
);

export const RemoveBtn = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-gray-300 hover:text-red-400 transition shrink-0 mt-2"
    title="Remove"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
);