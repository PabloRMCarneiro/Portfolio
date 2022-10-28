import React from 'react'

import Hero from './Hero';
import Header from './Header';
import About from './About';
import ProjectSection from './ProjectSection';
import Skills from './Skills';
import Skills2 from './Skills2';
import Interview from './Interview';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';
import Copyright from './Copyright';

function MainContainer() {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Skills2 />
      <ProjectSection />
      <Testimonial />
      <Interview />
      <Contact />
      <Footer />
      <Copyright />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default MainContainer