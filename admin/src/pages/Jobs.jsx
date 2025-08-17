import { useState, useEffect } from "react";

// Modal component for Add/Edit (define outside main component)
function JobModal({ visible, onClose, onSubmit, job, handleChange }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded max-w-md w-full relative">
        <button onClick={onClose} className="absolute right-3 top-2 text-lg font-bold">×</button>
        <h2 className="text-xl mb-4">{job._id ? "Edit Job" : "Add Job"}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Title</label>
            <input type="text" name="title" value={job.title} onChange={handleChange} required className="w-full border px-3 py-2 rounded"/>
          </div>
          <div>
            <label className="block mb-1">Department</label>
            <input type="text" name="dept" value={job.dept} onChange={handleChange} required className="w-full border px-3 py-2 rounded"/>
          </div>
          <div>
            <label className="block mb-1">Location</label>
            <input type="text" name="location" value={job.location} onChange={handleChange} required className="w-full border px-3 py-2 rounded"/>
          </div>
          <div>
            <label className="block mb-1">Type</label>
            <input type="text" name="type" value={job.type} onChange={handleChange} required className="w-full border px-3 py-2 rounded"/>
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">{job._id ? "Update" : "Add"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal state for add/edit
  const [modalOpen, setModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState({
    title: "",
    dept: "",
    location: "",
    type: ""
  });

  // Fetch jobs list
  const fetchJobs = () => {
    setLoading(true);
    fetch("http://localhost:5000/api/careers")
      .then(res => res.ok ? res.json() : Promise.reject("Failed to load jobs"))
      .then(data => {
        setJobs(data);
        setError(null);
      })
      .catch(err => setError(err.toString()))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Open modal for add
  const openAdd = () => {
    setCurrentJob({ title: "", dept: "", location: "", type: "" });
    setModalOpen(true);
  };

  // Open modal for edit
  const openEdit = (job) => {
    setCurrentJob(job);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setCurrentJob({ title: "", dept: "", location: "", type: "" });
  };

  // Form input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentJob(prev => ({ ...prev, [name]: value }));
  };

  // Submit Add/Edit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const method = currentJob._id ? "PUT" : "POST";
    const url = currentJob._id ? `http://localhost:5000/api/careers/${currentJob._id}` : "http://localhost:5000/api/careers";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentJob),
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to save job");
        return res.json();
      })
      .then(() => {
        fetchJobs();
        closeModal();
      })
      .catch(err => alert(err.toString()));
  };

  // Delete job
  const handleDelete = (id) => {
    if (!window.confirm("Delete this job?")) return;
    fetch(`http://localhost:5000/api/careers/${id}`, { method: "DELETE" })
      .then(res => {
        if (!res.ok) throw new Error("Failed to delete job");
        fetchJobs();
      })
      .catch(err => alert(err.toString()));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Jobs</h1>
        <button onClick={openAdd} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Add Job
        </button>
      </div>

      {loading && <p>Loading jobs...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {jobs.length > 0 ? (
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
            {jobs.map(job => (
              <tr key={job._id}>
                <td className="p-2">{job.title}</td>
                <td className="p-2">{job.dept}</td>
                <td className="p-2">{job.location}</td>
                <td className="p-2">{job.type}</td>
                <td className="p-2 space-x-2">
                  <button onClick={() => openEdit(job)} className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(job._id)} className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No jobs found.</p>
      )}

      <JobModal
        visible={modalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        job={currentJob}
        handleChange={handleChange}
      />
    </div>
  );
}
