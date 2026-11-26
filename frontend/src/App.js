import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('work');
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        const rect = aboutElement.getBoundingClientRect();
        if (rect.top <= 200) {
          setActiveSection('about');
        } else {
          setActiveSection('work');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App bg-[#ECECEC] text-[#181818] min-h-screen relative selection:bg-[#FF4949] selection:text-white font-sans antialiased">
      {/* Subtle architectural vertical lines (huyml.co grid) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 md:grid-cols-6 opacity-20">
          <div className="border-r border-[#D4D4D4]" />
          <div className="border-r border-[#D4D4D4]" />
          <div className="border-r border-[#D4D4D4]" />
          <div className="border-r border-[#D4D4D4] hidden md:block" />
          <div className="border-r border-[#D4D4D4] hidden md:block" />
          <div className="border-r border-[#D4D4D4]" />
        </div>
      </div>

      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenContact={() => setContactOpen(true)}
      />

      <main className="relative z-10">
        <Hero onOpenContact={() => setContactOpen(true)} />
        <About onOpenContact={() => setContactOpen(true)} />
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => setContactOpen(true)}
      />

      <Contact
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}

export default App;
