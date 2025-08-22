import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import About from './pages/About';
import Careers from './pages/Careers.jsx';
import Contacts from './pages/Contacts.jsx';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Course_desc from './components/Course_desc.jsx';

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import { ClerkProvider } from '@clerk/clerk-react'
import My_courses from './pages/MyCourses.jsx';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

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
      { path: "/course_desc", element: <Course_desc /> },
      { path: "/my_courses", element: <My_courses /> }
      // add more routes here if needed
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
