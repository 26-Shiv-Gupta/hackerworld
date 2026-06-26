// src/hooks/useCourses.js
// Encapsulates all state + actions for the Courses admin page:
// fetching, adding, updating, removing from local state after API calls.

import { useState, useEffect, useCallback } from 'react';
import { fetchCourses as fetchCoursesApi } from '../api/courseApi';

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchCoursesApi();
      setCourses(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load courses. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadCourses(); }, [loadCourses]);

  const addCourseToList = (saved) => {
    setCourses(prev => [saved, ...prev]);
  };

  const updateCourseInList = (saved) => {
    setCourses(prev => prev.map(c => (c._id === saved._id ? saved : c)));
  };

  const removeCourseFromList = (id) => {
    setCourses(prev => prev.filter(c => c._id !== id));
  };

  return {
    courses,
    loading,
    error,
    reload: loadCourses,
    addCourseToList,
    updateCourseInList,
    removeCourseFromList,
  };
}