import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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