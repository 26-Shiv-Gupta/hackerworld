// src/api/courseApi.js
// All network calls related to courses live here.
// Update VITE_API_BASE_URL in your .env to change the backend URL everywhere at once.

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://hackerworld.onrender.com';

const COURSES_URL = `${BASE_URL}/api/courses`;

async function handleResponse(res) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed with status ${res.status}`);
  }
  return res.json();
}

export async function fetchCourses() {
  const res = await fetch(COURSES_URL);
  return handleResponse(res);
}

export async function createCourse(data) {
  const res = await fetch(COURSES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
}

export async function updateCourse(id, data) {
  const res = await fetch(`${COURSES_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
}

export async function deleteCourse(id) {
  const res = await fetch(`${COURSES_URL}/${id}`, { method: 'DELETE' });
  return handleResponse(res);
}