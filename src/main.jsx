import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import About from './pages/About';
import Careers from './pages/Careers.jsx';
import Contacts from './pages/Contacts.jsx';
import Courses from './pages/Courses';
import Home from './pages/Home'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This is your main layout wrapper, includes Navbar/Footer
    children: [
      { index: true, element: <Home /> },         // "/" 
      { path: "/about", element: <About /> },     // "/about"
      { path: "/courses", element: <Courses /> }, // "/courses"
      { path: "/careers", element: <Careers /> },  // "/careers"
      { path: "/contacts", element: <Contacts /> }, // "/contacts"
      // add more routes here if needed
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
