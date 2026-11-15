import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App bg-[#030712] min-h-screen text-white relative selection:bg-cyan-500 selection:text-black">
      {/* Subtle architectural vertical lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 md:grid-cols-6 opacity-[0.03]">
          <div className="border-r border-white" />
          <div className="border-r border-white" />
          <div className="border-r border-white" />
          <div className="border-r border-white hidden md:block" />
          <div className="border-r border-white hidden md:block" />
          <div className="border-r border-white" />
        </div>
      </div>

      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
