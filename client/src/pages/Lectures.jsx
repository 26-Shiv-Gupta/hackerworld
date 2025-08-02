import React, { useState } from "react";
import sampleVideo from '../assets/abcd.mp4';

const demoLectures = [
  {
    id: "lecture1",
    title: "Introduction to React",
    description: "Get familiar with React basics, components, and JSX.",
    videoUrl: "https://www.youtube.com/watch?v=8I3NTE4cn5s",
  },
  {
    id: "lecture2",
    title: "State and Props",
    description: "Learn how to manage state and pass props between components.",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  },
  {
    id: "lecture3",
    title: "React Router Basics",
    description: "Understand routing in React using React Router.",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  },
  {
    id: "lecture4",
    title: "Handling Side Effects with",
    description: "Managing lifecycle and side effects with the useEffect hook.",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  },
];

const Lectures = () => {
  // Keep track of selected lecture by id
  const [selectedLectureId, setSelectedLectureId] = useState(demoLectures[0].id);
  // Sidebar open state for mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Track completion status in local state only
  const [completedLectures, setCompletedLectures] = useState({});

  const selectedLecture = demoLectures.find((lec) => lec.id === selectedLectureId);

  const toggleComplete = () => {
    setCompletedLectures((prev) => ({
      ...prev,
      [selectedLectureId]: !prev[selectedLectureId],
    }));
  };

  // Close sidebar on mobile after selecting a lecture
  const handleLectureSelect = (id) => {
    setSelectedLectureId(id);
    setSidebarOpen(false);
  };

  return (
    <main className="min-h-screen bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative">
        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden mb-4 p-2 rounded-md bg-red-600 hover:bg-red-700 focus:outline-none fixed top-5 left-5 z-50"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {sidebarOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon
            )}
          </svg>
        </button>

        {/* Sidebar */}
        <nav
          className={`
            fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 rounded-r-lg p-3 shadow-lg
            transform transition-transform duration-300 ease-in-out
            lg:static lg:translate-x-0 lg:rounded-lg lg:shadow-lg lg:h-[80vh] lg:overflow-y-auto
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-6 border-b border-red-600 pb-3">Lectures</h2>
          <ul className="space-y-3">
            {demoLectures.map((lec, idx) => {
              const isActive = lec.id === selectedLectureId;
              const isCompleted = completedLectures[lec.id];
              return (
                <li key={lec.id}>
                  <button
                    onClick={() => handleLectureSelect(lec.id)}
                    className={`flex justify-between w-full px-2 py-3 rounded-md transition-colors duration-300 ${
                      isActive
                        ? "bg-red-600 text-white font-semibold shadow-lg"
                        : "text-gray-300 hover:bg-red-700 hover:text-white"
                    } focus:outline-none`}
                  >
                    <span className="">
                      {lec.title}
                    </span>
                    {isCompleted && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 lg:hidden z-30"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <section className="flex-1 rounded-lg shadow-lg mt-2 lg:mt-0">
          {selectedLecture ? (
            <>
              {/* <h1 className="text-3xl font-bold mb-6 text-red-600">{selectedLecture.title}</h1> */}

              {/* Video Player */}
              <div className="aspect-w-16 aspect-h-10 mb-6 rounded-lg overflow-hidden shadow-md bg-black">
                <video
                  key={selectedLecture.videoUrl}
                  src={sampleVideo}
                  controls
                  className="w-full h-full object-cover"
                >
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>

              {/* <button
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  completedLectures[selectedLectureId]
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                }`}
                onClick={toggleComplete}
              >
                {completedLectures[selectedLectureId] ? "Mark as Incomplete" : "Mark as Complete"}
              </button> */}
            </>
          ) : (
            <div className="text-center py-20 text-gray-400 select-none">
              <p className="text-lg">No lecture selected.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Lectures;
