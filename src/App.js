import React from 'react';
import './App.css';

import Hero from './Hero/Hero'
import About from './About/About'
import Service from './Service/Service'
import Portfolio from './Portfolio/Portfolio'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
