import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatYouGet from './components/WhatYouGet';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [language, setLanguage] = useState<'it' | 'en'>('it');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'it' ? 'en' : 'it');
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar 
        language={language}
        toggleLanguage={toggleLanguage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <Hero language={language} />
      <WhatYouGet language={language} />
      <HowItWorks language={language} />
      <Testimonials language={language} />
      <About language={language} />
      <Contact language={language} />
    </div>
  );
}

export default App;