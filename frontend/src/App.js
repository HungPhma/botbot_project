import React from 'react';
import Header from '../src/components/Header.js';
import Hero from '../src/components/Hero.js';
import Portfolio from '../src/components/Porfolio.js';
import About from '../src/components/About.js';
import Contact from '../src/components/Contact.js';
import Footer from '../src/components/Footer.js';
import '../src/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      {/* <Services /> */}
      <Footer />
    </div>
  );
}

export default App;
