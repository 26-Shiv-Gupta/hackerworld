import React from 'react'
import Navbar from '../components/Navbar'
import Hero_section from '../components/Hero_section'
import Stats_section from '../components/Stats_section'
import Courses_section from '../components/courses_section'
import Features_section from '../components/Features_section'
import Testimonial_section from '../components/Testimonial_section'
import CTA_section from '../components/CTA_section'
import Footer from '../components/Footer'
import Contact from './Contacts'
import Career from './Careers'

const Home = () => {
  return (
    <>
    <Hero_section />
    <Stats_section />
    <Courses_section />
    <Features_section />
    <Testimonial_section />
    <CTA_section />
    </>
  )
}

export default Home