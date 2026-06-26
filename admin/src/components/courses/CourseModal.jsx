// src/components/courses/CourseModal.jsx
// Modal form used for both "Add Course" and "Edit Course".

import React, { useState } from 'react';
import { Label, Input, Textarea, Select, SectionTitle, AddBtn, RemoveBtn } from './FormFields';
import { EMPTY_FORM } from './constants';
import { createCourse, updateCourse } from '../../api/courseApi';

const CourseModal = ({ mode, initial, onClose, onSaved }) => {
  const [form, setForm] = useState(initial || EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  // ── Generic field setters ────────────────────────────────────────────────
  const set = (field, value) => setForm(f => ({ ...f, [field]: value }));

  const setMentor = (field, value) =>
    setForm(f => ({ ...f, mentor: { ...f.mentor, [field]: value } }));

  const setArr = (field, idx, value) =>
    setForm(f => {
      const arr = [...f[field]];
      arr[idx] = value;
      return { ...f, [field]: arr };
    });

  const addArr = (field, empty) =>
    setForm(f => ({ ...f, [field]: [...f[field], empty] }));

  const removeArr = (field, idx) =>
    setForm(f => ({ ...f, [field]: f[field].filter((_, i) => i !== idx) }));

  // modules helpers
  const setModuleName = (mi, value) =>
    setForm(f => ({
      ...f,
      modules: f.modules.map((m, i) => (i === mi ? { ...m, name: value } : m)),
    }));

  const setModuleTopic = (mi, ti, value) =>
    setForm(f => ({
      ...f,
      modules: f.modules.map((m, i) => {
        if (i !== mi) return m;
        const topics = [...m.topics];
        topics[ti] = value;
        return { ...m, topics };
      }),
    }));

  const addModuleTopic = (mi) =>
    setForm(f => ({
      ...f,
      modules: f.modules.map((m, i) => (i === mi ? { ...m, topics: [...m.topics, ''] } : m)),
    }));

  const removeModuleTopic = (mi, ti) =>
    setForm(f => ({
      ...f,
      modules: f.modules.map((m, i) =>
        i === mi ? { ...m, topics: m.topics.filter((_, j) => j !== ti) } : m
      ),
    }));

  // faq / review helpers
  const setFaq = (idx, field, value) =>
    setForm(f => ({
      ...f,
      faqs: f.faqs.map((q, i) => (i === idx ? { ...q, [field]: value } : q)),
    }));

  const setReview = (idx, field, value) =>
    setForm(f => ({
      ...f,
      reviews: f.reviews.map((r, i) => (i === idx ? { ...r, [field]: value } : r)),
    }));

  // ── Submit ───────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!form.title.trim()) { setErr('Course title is required.'); return; }
    if (!form.price) { setErr('Price is required.'); return; }
    setErr('');
    setSaving(true);
    try {
      const saved = mode === 'edit'
        ? await updateCourse(initial._id, form)
        : await createCourse(form);
      onSaved(saved, mode);
    } catch (e) {
      setErr(e.message || 'Something went wrong. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col">

        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl z-10">
          <h2 className="text-base font-semibold text-gray-800">
            {mode === 'edit' ? 'Edit Course' : 'Add New Course'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="px-6 py-5 overflow-y-auto flex-1">

          {/* ── Basic Info ── */}
          <SectionTitle>Basic Info</SectionTitle>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label required>Title</Label>
              <Input
                placeholder="e.g. Introduction to Ethical Hacking"
                value={form.title}
                onChange={e => set('title', e.target.value)}
              />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea
                placeholder="Short course description…"
                value={form.description}
                onChange={e => set('description', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Duration</Label>
                <Input
                  placeholder="e.g. 5 weeks"
                  value={form.duration}
                  onChange={e => set('duration', e.target.value)}
                />
              </div>
              <div>
                <Label>Level</Label>
                <Select value={form.level} onChange={e => set('level', e.target.value)}>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label required>Price (₹)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 1999"
                  value={form.price}
                  onChange={e => set('price', e.target.value)}
                />
              </div>
              <div>
                <Label>Original Price (₹)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 7000"
                  value={form.originalPrice}
                  onChange={e => set('originalPrice', e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label>Enrollment Link</Label>
              <Input
                placeholder="https://your-enroll-link.com"
                value={form.enrollmentLink}
                onChange={e => set('enrollmentLink', e.target.value)}
              />
            </div>
            <div>
              <Label>Course Image URL</Label>
              <Input
                placeholder="https://…"
                value={form.image}
                onChange={e => set('image', e.target.value)}
              />
              {form.image && (
                <img
                  src={form.image}
                  alt="preview"
                  className="mt-2 h-24 w-40 object-cover rounded-lg border border-gray-100"
                  onError={e => (e.target.style.display = 'none')}
                />
              )}
            </div>
          </div>

          {/* ── Mentor ── */}
          <SectionTitle>Mentor</SectionTitle>
          <div className="grid grid-cols-1 gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Name</Label>
                <Input
                  placeholder="John Doe"
                  value={form.mentor.name}
                  onChange={e => setMentor('name', e.target.value)}
                />
              </div>
              <div>
                <Label>Title</Label>
                <Input
                  placeholder="Senior Instructor"
                  value={form.mentor.title}
                  onChange={e => setMentor('title', e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label>Bio</Label>
              <Textarea
                placeholder="Mentor background…"
                value={form.mentor.bio}
                onChange={e => setMentor('bio', e.target.value)}
              />
            </div>
            <div>
              <Label>Mentor Image URL</Label>
              <Input
                placeholder="https://…"
                value={form.mentor.image}
                onChange={e => setMentor('image', e.target.value)}
              />
            </div>
          </div>

          {/* ── Features ── */}
          <SectionTitle>Features</SectionTitle>
          {form.features.map((feat, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <Input
                placeholder={`Feature ${i + 1}`}
                value={feat}
                onChange={e => setArr('features', i, e.target.value)}
              />
              {form.features.length > 1 && (
                <RemoveBtn onClick={() => removeArr('features', i)} />
              )}
            </div>
          ))}
          <AddBtn onClick={() => addArr('features', '')}>Add Feature</AddBtn>

          {/* ── Modules ── */}
          <SectionTitle>Modules</SectionTitle>
          {form.modules.map((mod, mi) => (
            <div key={mi} className="mb-4 border border-gray-100 rounded-xl p-4 bg-gray-50">
              <div className="flex gap-2 mb-3">
                <Input
                  placeholder={`Module ${mi + 1} name`}
                  value={mod.name}
                  onChange={e => setModuleName(mi, e.target.value)}
                />
                {form.modules.length > 1 && (
                  <RemoveBtn onClick={() => removeArr('modules', mi)} />
                )}
              </div>
              <p className="text-xs text-gray-400 mb-2 font-medium">Topics</p>
              {mod.topics.map((topic, ti) => (
                <div key={ti} className="flex gap-2 mb-1.5">
                  <Input
                    placeholder={`Topic ${ti + 1}`}
                    value={topic}
                    onChange={e => setModuleTopic(mi, ti, e.target.value)}
                  />
                  {mod.topics.length > 1 && (
                    <RemoveBtn onClick={() => removeModuleTopic(mi, ti)} />
                  )}
                </div>
              ))}
              <AddBtn onClick={() => addModuleTopic(mi)}>Add Topic</AddBtn>
            </div>
          ))}
          <AddBtn onClick={() => addArr('modules', { name: '', topics: [''] })}>
            Add Module
          </AddBtn>

          {/* ── FAQs ── */}
          <SectionTitle>FAQs</SectionTitle>
          {form.faqs.map((faq, i) => (
            <div key={i} className="mb-4 border border-gray-100 rounded-xl p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-gray-500">FAQ {i + 1}</span>
                {form.faqs.length > 1 && (
                  <RemoveBtn onClick={() => removeArr('faqs', i)} />
                )}
              </div>
              <div className="space-y-2">
                <div>
                  <Label>Question</Label>
                  <Input
                    placeholder="Question…"
                    value={faq.question}
                    onChange={e => setFaq(i, 'question', e.target.value)}
                  />
                </div>
                <div>
                  <Label>Answer</Label>
                  <Textarea
                    placeholder="Answer…"
                    value={faq.answer}
                    onChange={e => setFaq(i, 'answer', e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
          <AddBtn onClick={() => addArr('faqs', { question: '', answer: '' })}>
            Add FAQ
          </AddBtn>

          {/* ── Reviews ── */}
          <SectionTitle>Reviews</SectionTitle>
          {form.reviews.map((rev, i) => (
            <div key={i} className="mb-4 border border-gray-100 rounded-xl p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-gray-500">Review {i + 1}</span>
                {form.reviews.length > 1 && (
                  <RemoveBtn onClick={() => removeArr('reviews', i)} />
                )}
              </div>
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div>
                  <Label>Reviewer Name</Label>
                  <Input
                    placeholder="Alex Johnson"
                    value={rev.name}
                    onChange={e => setReview(i, 'name', e.target.value)}
                  />
                </div>
                <div>
                  <Label>Rating (1–5)</Label>
                  <Select
                    value={rev.rating}
                    onChange={e => setReview(i, 'rating', Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n} ⭐</option>
                    ))}
                  </Select>
                </div>
              </div>
              <div>
                <Label>Comment</Label>
                <Textarea
                  placeholder="Review comment…"
                  value={rev.comment}
                  onChange={e => setReview(i, 'comment', e.target.value)}
                />
              </div>
            </div>
          ))}
          <AddBtn onClick={() => addArr('reviews', { name: '', rating: 5, comment: '' })}>
            Add Review
          </AddBtn>

        </div>

        {/* Modal footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between gap-3 sticky bottom-0 bg-white rounded-b-2xl">
          {err && <p className="text-xs text-red-500 flex-1">{err}</p>}
          <div className="flex gap-2 ml-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={saving}
              className="px-5 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {saving && (
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
              )}
              {saving ? 'Saving…' : mode === 'edit' ? 'Save Changes' : 'Add Course'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseModal;