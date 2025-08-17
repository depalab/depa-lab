// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ResearchAreas from './components/ResearchAreas';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Publications from './components/Publications';
import Symposium from './components/Symposium';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import GlobalStyles from './components/GlobalStyles'; // Comment this out
import GlobalStyles from './components/GlobalStyles';
import './App.css';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // If viewing a research detail page
  if (currentView !== 'home') {
    return <ResearchComponents currentView={currentView} setCurrentView={setCurrentView} />;
  }

  return (
    <div 
      className="min-h-screen overflow-hidden flex flex-col relative"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />

      <Header />
      
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24">
        <Hero />
        <About />
        <ResearchAreas />
        <Projects setCurrentView={setCurrentView} />
        <Awards setCurrentView={setCurrentView} />
        <Publications setCurrentView={setCurrentView} />
        <Symposium setCurrentView={setCurrentView} />
        <Team />
        <Contact />
      </main>

      <Footer />
      // {/* <GlobalStyles /> */} {/* Comment this out */}
    </div>
  );
};

export default App;
