import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { translations } from '../utils/translations';

interface HeroProps {
  language: 'it' | 'en';
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language];
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`w-full h-full transition-all duration-2000 ease-out ${
            isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
        >
          <img
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Golden Retriever"
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className={`absolute inset-0 bg-black/60 transition-opacity duration-1500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
      </div>

      {/* Content with Staggered Animations */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title with Typewriter Effect */}
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          <span className="inline-block">
            {t.heroTitle.split(' ').map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-4 transition-all duration-800 ease-out ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Subtitle Animation */}
        <p 
          className={`text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto font-light leading-relaxed transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1.2s' }}
        >
          {t.heroSubtitle}
        </p>

        {/* CTA Button with Glow Effect */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1.5s' }}
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="relative bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 group overflow-hidden"
          >
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
            
            <span className="relative z-10">{t.bookWalkButton}</span>
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ transitionDelay: '2s' }}
      >
        <button
          onClick={() => scrollToSection('services')}
          className="text-white/70 hover:text-cyan-400 transition-all duration-300 animate-bounce hover:animate-pulse"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}