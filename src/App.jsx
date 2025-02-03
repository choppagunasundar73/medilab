import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Departments />
        <Doctors />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;