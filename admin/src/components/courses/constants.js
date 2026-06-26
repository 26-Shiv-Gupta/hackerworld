// src/components/courses/constants.js
// Default empty form state used when adding a new course

export const EMPTY_FORM = {
  title: '',
  description: '',
  duration: '',
  level: 'Beginner',
  price: '',
  originalPrice: '',
  enrollmentLink: '',
  image: '',
  mentor: { name: '', title: '', bio: '', image: '' },
  features: [''],
  modules: [{ name: '', topics: [''] }],
  faqs: [{ question: '', answer: '' }],
  reviews: [{ name: '', rating: 5, comment: '' }],
};