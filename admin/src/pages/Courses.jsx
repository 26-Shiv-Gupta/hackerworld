import { useEffect, useState, useRef } from "react";

// Modal extracted OUTSIDE so it's always the same component identity.
function Modal({ type, onClose, onSubmit, formData, handleChange, addModule, removeModule, handleModuleChange, addTopic, removeTopic, handleTopicChange }) {
  // Esc-to-close
  const dialogRef = useRef(null);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="modal-heading" className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative overflow-y-auto max-h-screen">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-2xl"
          aria-label="Close"
        >×</button>
        <h3 id="modal-heading" className="text-lg font-bold mb-4">{type === "edit" ? "Edit Course" : "Add Course"}</h3>
        <form onSubmit={onSubmit} className="space-y-3">
          {/* Core fields */}
          <div className="grid md:grid-cols-2 gap-3">
            <label className="block">
              <span className="text-gray-700">Title*</span>
              <input type="text" name="title" autoFocus value={formData.title ?? ""} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
            </label>
            <label className="block">
              <span className="text-gray-700">Level</span>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Duration</span>
              <input type="text" name="duration" value={formData.duration ?? ""} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
            </label>
            <label className="block">
              <span className="text-gray-700">Image URL</span>
              <input type="text" name="image" value={formData.image ?? ""} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
            </label>
            <label className="block">
              <span className="text-gray-700">Price (₹)</span>
              <input type="number" name="price" value={formData.price ?? ""} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
            </label>
            <label className="block">
              <span className="text-gray-700">Original Price (₹)</span>
              <input type="number" name="originalPrice" value={formData.originalPrice ?? ""} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
            </label>
            <label className="block md:col-span-2">
              <span className="text-gray-700">Enrollment Link</span>
              <input type="text" name="enrollmentLink" value={formData.enrollmentLink ?? ""} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
            </label>
            <label className="block md:col-span-2">
              <span className="text-gray-700">Description</span>
              <textarea name="description" value={formData.description ?? ""} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
            </label>
            <label className="block md:col-span-2">
              <span className="text-gray-700">Features (comma separated)</span>
              <input type="text" name="features" value={formData.features ?? ""} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
            </label>
          </div>
          {/* Mentor fields */}
          <div className="pt-3 border-t">
            <div className="font-semibold mb-1 text-gray-800">Mentor</div>
            <div className="grid md:grid-cols-2 gap-3">
              <label className="block">
                <span className="text-gray-700">Name</span>
                <input type="text" name="mentor.name" value={formData.mentor?.name ?? ""} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
              </label>
              <label className="block">
                <span className="text-gray-700">Title</span>
                <input type="text" name="mentor.title" value={formData.mentor?.title ?? ""} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
              </label>
              <label className="block md:col-span-2">
                <span className="text-gray-700">Bio</span>
                <textarea name="mentor.bio" value={formData.mentor?.bio ?? ""} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
              </label>
              <label className="block md:col-span-2">
                <span className="text-gray-700">Image URL</span>
                <input type="text" name="mentor.image" value={formData.mentor?.image ?? ""} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
              </label>
            </div>
          </div>
          {/* Modules */}
          <div className="pt-3 border-t">
            <div className="font-semibold mb-1 text-gray-800">Modules</div>
            {formData.modules.map((module, idx) => (
              <div key={idx} className="mb-3 border rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <input
                    type="text"
                    placeholder="Module Name"
                    value={module.name ?? ""}
                    onChange={e => handleModuleChange(idx, e.target.value)}
                    className="w-2/3 border border-gray-300 rounded px-3 py-2"
                  />
                  <button type="button" onClick={() => removeModule(idx)} className="text-red-500 hover:text-red-700 ml-2"
                    disabled={formData.modules.length === 1}>
                    Remove Module
                  </button>
                </div>
                <div className="pl-1">
                  <div className="text-xs text-gray-500 mb-1">Topics</div>
                  {module.topics.map((topic, tidx) => (
                    <div key={tidx} className="flex mb-1">
                      <input
                        type="text"
                        value={topic ?? ""}
                        placeholder="Topic"
                        onChange={e => handleTopicChange(idx, tidx, e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                      <button
                        type="button"
                        onClick={() => removeTopic(idx, tidx)}
                        className="text-red-500 hover:text-red-700 ml-2"
                        disabled={module.topics.length === 1}
                      >×</button>
                    </div>
                  ))}
                  <button type="button" className="text-sm text-blue-600 mt-1" onClick={() => addTopic(idx)}>
                    + Add Topic
                  </button>
                </div>
              </div>
            ))}
            <button type="button" className="text-sm text-blue-600 mt-1" onClick={addModule}>
              + Add Module
            </button>
          </div>
          {/* Submit/Cancel */}
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

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    level: "",
    duration: "",
    image: "",
    price: "",
    originalPrice: "",
    enrollmentLink: "",
    features: "",
    mentor: {
      name: "",
      title: "",
      bio: "",
      image: "",
    },
    modules: [{ name: "", topics: [""] }],
  });

  const fetchCourses = () => {
    setLoading(true);
    fetch("https://hackerworld.onrender.com/api/courses")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch courses");
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    let mounted = true;
    fetch("https://hackerworld.onrender.com/api/courses")
      .then(res => res.ok ? res.json() : Promise.reject("Failed to fetch courses"))
      .then(data => mounted && setCourses(data))
      .catch(err => mounted && setError(err.message))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, []);

  // --- Helpers for modules/topics
  const addModule = () => {
    setFormData((prev) => ({
      ...prev,
      modules: [
        ...prev.modules,
        { name: "", topics: [""] }
      ],
    }));
  };
  const removeModule = (i) => {
    setFormData((prev) => ({
      ...prev,
      modules: prev.modules.filter((_, idx) => idx !== i),
    }));
  };
  const handleModuleChange = (i, value) => {
    setFormData((prev) => {
      // Deep clone module + topics
      const modules = prev.modules.map((mod, idx) =>
        idx === i ? { ...mod, name: value, topics: [...mod.topics] } : { ...mod, topics: [...mod.topics] }
      );
      return { ...prev, modules };
    });
  };
  const handleTopicChange = (modIdx, topicIdx, value) => {
    setFormData((prev) => {
      // Deep clone modules and topics
      const modules = prev.modules.map((mod, idx) => {
        if (idx !== modIdx) return { ...mod, topics: [...mod.topics] };
        const topics = mod.topics.map((t, tidx) => tidx === topicIdx ? value : t);
        return { ...mod, topics };
      });
      return { ...prev, modules };
    });
  };
  const addTopic = (modIdx) => {
    setFormData((prev) => {
      const modules = prev.modules.map((mod, idx) =>
        idx !== modIdx
          ? { ...mod, topics: [...mod.topics] }
          : { ...mod, topics: [...mod.topics, ""] }
      );
      return { ...prev, modules };
    });
  };
  const removeTopic = (modIdx, topicIdx) => {
    setFormData((prev) => {
      const modules = prev.modules.map((mod, idx) =>
        idx !== modIdx
          ? { ...mod, topics: [...mod.topics] }
          : { ...mod, topics: mod.topics.filter((_, tidx) => tidx !== topicIdx) }
      );
      return { ...prev, modules };
    });
  };

  // Controlled input
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("mentor.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        mentor: { ...prev.mentor, [key]: value }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Open modal for add
  const openAddModal = () => {
    setModalType("add");
    setEditingCourse(null);
    setFormData({
      title: "", description: "", level: "",
      duration: "", image: "", price: "", originalPrice: "",
      enrollmentLink: "", features: "",
      mentor: { name: "", title: "", bio: "", image: "" },
      modules: [{ name: "", topics: [""] }]
    });
  };

  // Open modal for edit
  const openEditModal = (course) => {
    setModalType("edit");
    setEditingCourse(course);
    setFormData({
      title: course.title ?? "",
      description: course.description ?? "",
      level: course.level ?? "",
      duration: course.duration ?? "",
      image: course.image ?? "",
      price: course.price ?? "",
      originalPrice: course.originalPrice ?? "",
      enrollmentLink: course.enrollmentLink ?? "",
      features: (course.features || []).filter(f => f).join(", "),
      mentor: {
        name: course.mentor?.name ?? "",
        title: course.mentor?.title ?? "",
        bio: course.mentor?.bio ?? "",
        image: course.mentor?.image ?? "",
      },
      modules: (course.modules && course.modules.length > 0)
        ? course.modules.map((m) => ({
            name: m.name ?? "",
            topics: m.topics ? [...m.topics] : [""],
          }))
        : [{ name: "", topics: [""] }],
    });
  };

  // Close modal
  const closeModal = () => {
    setModalType(null);
    setEditingCourse(null);
    setFormData({
      title: "", description: "", level: "", duration: "", image: "",
      price: "", originalPrice: "", enrollmentLink: "", features: "",
      mentor: { name: "", title: "", bio: "", image: "" },
      modules: [{ name: "", topics: [""] }]
    });
  };

  // Handle "Add" / "Edit" submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const isEditing = modalType === "edit";
    // Strip server-managed fields
    const { _id, __v, createdAt, updatedAt, ...cleanFormData } = formData;
    const payload = {
      ...cleanFormData,
      price: formData.price === "" ? undefined : Number(formData.price),
      originalPrice: formData.originalPrice === "" ? undefined : Number(formData.originalPrice),
      features: formData.features.split(",").map(f => f.trim()).filter(Boolean),
    };

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `https://hackerworld.onrender.com/api/courses/${editingCourse._id}`
      : "https://hackerworld.onrender.com/api/courses";
    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to ${isEditing ? "update" : "add"} course`);
        return res.json();
      })
      .then(() => {
        fetchCourses();
        closeModal();
      })
      .catch((err) => alert(err.message));
  };

  // Delete a course
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    fetch(`https://hackerworld.onrender.com/api/courses/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete course");
        fetchCourses();
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Courses</h2>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" onClick={openAddModal}>
          Add Course
        </button>
      </div>
      {modalType && (
        <Modal
          type={modalType}
          onClose={closeModal}
          onSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          addModule={addModule}
          removeModule={removeModule}
          handleModuleChange={handleModuleChange}
          addTopic={addTopic}
          removeTopic={removeTopic}
          handleTopicChange={handleTopicChange}
        />
      )}
      {loading ? (
        <p>Loading courses...</p>
      ) : error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : (
        <div className="overflow-auto">
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">Title</th>
                <th className="p-2">Level</th>
                <th className="p-2">Duration</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c._id} className="border-b">
                  <td className="p-2">{c.title}</td>
                  <td className="p-2">{c.level}</td>
                  <td className="p-2">{c.duration}</td>
                  <td className="p-2 space-x-2">
                    <button onClick={() => openEditModal(c)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                    <button onClick={() => handleDelete(c._id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
              {courses.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center p-4 text-gray-600">
                    No courses available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
