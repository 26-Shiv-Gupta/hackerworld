// --- Move JobModal OUTSIDE Jobs function ---
import React, { useEffect, useState } from "react";

// Modal OUTSIDE so it preserves identity
function JobModal({ type, onClose, onSubmit, jobForm, handleChange }) {
  useEffect(() => {
    const esc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
      <div role="dialog" aria-modal="true" aria-labelledby="modal-heading" className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-2xl" aria-label="Close">×</button>
        <h3 id="modal-heading" className="text-lg font-bold mb-4">{type === "edit" ? "Edit Job" : "Add Job"}</h3>
        <form onSubmit={onSubmit} className="space-y-3">
          <label className="block">
            <span className="text-gray-700">Title*</span>
            <input type="text" name="title" value={jobForm.title ?? ""} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"/>
          </label>
          <label className="block">
            <span className="text-gray-700">Department*</span>
            <input type="text" name="dept" value={jobForm.dept ?? ""} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"/>
          </label>
          <label className="block">
            <span className="text-gray-700">Location*</span>
            <input type="text" name="location" value={jobForm.location ?? ""} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"/>
          </label>
          <label className="block">
            <span className="text-gray-700">Type*</span>
            <input type="text" name="type" value={jobForm.type ?? ""} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"/>
          </label>
          <div className="flex gap-2 mt-4">
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              {type === "edit" ? "Update" : "Add"}
            </button>
            <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --- Main Jobs Component ---
export default function Jobs() {
  const [careers, setCareers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalType, setModalType] = useState(null); // 'add' | 'edit' | null
  const [editingJobIdx, setEditingJobIdx] = useState(null);

  // Form for job
  const [jobForm, setJobForm] = useState({ title: "", dept: "", location: "", type: "" });

  // Fetch careers data
  const fetchCareers = () => {
    setLoading(true);
    fetch("https://hackerworld.onrender.com/api/careers")
      .then(res => res.ok ? res.json() : Promise.reject("Failed to fetch careers"))
      .then(data => {
        setCareers(data);
        setError(null);
      })
      .catch(err => setError(`${err}`))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchCareers(); }, []);

  // Helpers for modal
  const openAddModal = () => {
    setModalType("add");
    setEditingJobIdx(null);
    setJobForm({ title: "", dept: "", location: "", type: "" });
  };
  const openEditModal = (job, idx) => {
    setModalType("edit");
    setEditingJobIdx(idx);
    setJobForm({ ...job }); // deep copy not needed for primitives
  };
  const closeModal = () => {
    setModalType(null);
    setEditingJobIdx(null);
    setJobForm({ title: "", dept: "", location: "", type: "" });
  };

  // Controlled form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobForm(prev => ({ ...prev, [name]: value }));
  };

  // Add/edit job in jobs array, then update server
  const handleJobSubmit = (e) => {
    e.preventDefault();
    // Defensive clone
    const updatedJobs = (careers?.jobs ?? []).map(j => ({ ...j }));
    if (modalType === "add") {
      updatedJobs.push({ ...jobForm });
    } else if (modalType === "edit" && editingJobIdx !== null) {
      updatedJobs[editingJobIdx] = { ...jobForm };
    }
    updateCareersOnServer({ jobs: updatedJobs, contactEmail: careers?.contactEmail ?? "" });
    closeModal();
  };

  // Remove job by index
  const handleDeleteJob = (idx) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    const updatedJobs = (careers?.jobs ?? []).filter((_, i) => i !== idx);
    updateCareersOnServer({ jobs: updatedJobs, contactEmail: careers?.contactEmail ?? "" });
  };

  // Contact email update (avoiding issues with rapid typing by cloning)
  const handleEmailChange = (e) => {
    updateCareersOnServer({ jobs: (careers?.jobs ?? []).map(j => ({ ...j })), contactEmail: e.target.value });
  };

  // Only keep shape fields in PUT
  const updateCareersOnServer = (payload) => {
    setLoading(true);
    // Strip _id, __v, etc. from jobs:
    const jobs = payload.jobs.map(({ title, dept, location, type }) => ({ title, dept, location, type }));
    fetch("https://hackerworld.onrender.com/api/careers", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobs, contactEmail: payload.contactEmail }),
    })
      .then(res => (res.ok ? res.json() : Promise.reject("Failed to update careers")))
      .then(() => fetchCareers())
      .catch(err => setError(`${err}`))
      .finally(() => setLoading(false));
  };

  // --- Render ---
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Job Openings</h2>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" onClick={openAddModal}>
          Add Job
        </button>
      </div>
      {/* Edit contact email */}
      {careers && (
        <div className="mb-4">
          <label className="font-semibold text-gray-700 mr-2">Contact Email:</label>
          <input
            type="email"
            value={careers.contactEmail ?? ""}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
      )}
      {modalType && (
        <JobModal
          type={modalType}
          onClose={closeModal}
          onSubmit={handleJobSubmit}
          jobForm={jobForm}
          handleChange={handleChange}
        />
      )}
      {loading ? (
        <p>Loading jobs...</p>
      ) : error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : (careers && careers.jobs && careers.jobs.length > 0 ? (
        <div className="overflow-auto">
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">Title</th>
                <th className="p-2">Department</th>
                <th className="p-2">Location</th>
                <th className="p-2">Type</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {careers.jobs.map((job, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{job.title}</td>
                  <td className="p-2">{job.dept}</td>
                  <td className="p-2">{job.location}</td>
                  <td className="p-2">{job.type}</td>
                  <td className="p-2 space-x-2">
                    <button onClick={() => openEditModal(job, idx)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                    <button onClick={() => handleDeleteJob(idx)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No jobs available.</p>
      ))}
    </div>
  );
}
