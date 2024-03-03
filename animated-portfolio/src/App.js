import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar /> 
      </div>

      <div className='content'>
        
        <section id="home">
          <Home />
        </section> 

        <section id="about">
          <About />
        </section>

        <section id="resume" >Resume</section>
        <section id="services" >Services</section>
        <section id="skills" >Skills</section>
        <section id="portfolio" >Portfolio</section>
        <section id="testimonial" >testimonial</section>
        <section id="contact" >Contact</section>
      </div>   

      <div className="navbar">
        <Navbar /> 
      </div>
    </div>
  );
}

export default App;
