import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Course_desc from "./components/Course_desc";

function App() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-900 text-white">
        <Outlet />
      </main>
      <Footer /> 
    </>
  )
}

export default App