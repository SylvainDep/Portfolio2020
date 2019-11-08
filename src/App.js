import React from 'react';
import './App.css';

import Hero from './Hero/Hero'
import About from './About/About'
import Service from './Service/Service'
import Portfolio from './Portfolio/Portfolio'

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Service />
      <Portfolio />
    </div>
  );
}

export default App;
