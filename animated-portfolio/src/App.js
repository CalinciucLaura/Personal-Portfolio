import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import { useInView } from "react-intersection-observer";
import Resume from './components/resume/Resume';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  const [refHome, inViewHome] = useInView({
    triggerOnce: false,
  });
  const [refAbout, inViewAbout] = useInView({
    triggerOnce: false,
  });
  const [refResume, inViewResume] = useInView({
    triggerOnce: false,
  });
  const [refServices, inViewServices] = useInView({
    triggerOnce: false,
  });
  const [refSkills, inViewSkills] = useInView({
    triggerOnce: false,
  });
  const [refPortfolio, inViewPortfolio] = useInView({
    triggerOnce: false,
  });
  const [refTestimonial, inViewTestimonial] = useInView({
    triggerOnce: false,
  });
  const [refContact, inViewContact] = useInView({
    triggerOnce: false,
  });


  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar /> 
      </div>

      <div className='content'>
        <section id="home" ref={refHome}>
          <Home />
        </section> 
        <section id="about" ref={refAbout}>
          <About />
        </section>
        <section id="resume" ref={refResume}>
          <Resume />
        </section>
        <section id="services" ref={refServices}>Services</section>
        <section id="skills" ref={refSkills}>
          <Skills />
        </section>
        <section id="portfolio" ref={refPortfolio}>
        <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width:"800" ,height:"450" }} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FZOo9wzPVa8vhuKVnyvOett%2FUntitled%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DALVNFF0Vwoc4TzuQ-1" allowfullscreen></iframe>
        </section>
        <section id="testimonial" ref={refTestimonial}>
          <Testimonial />
        </section>
        <section id="contact" ref={refContact}>
          <Contact />
        </section>
      </div>   

      <div className="navbar">
        <Navbar 
          isHome={inViewHome}
          isAbout={inViewAbout} 
          isResume={inViewResume} 
          isServices={inViewServices} 
          isSkills={inViewSkills} 
          isPortfolio={inViewPortfolio} 
          isTestimonial={inViewTestimonial} 
          isContact={inViewContact}
        /> 
      </div>
    </div>
  );
}

export default App;
