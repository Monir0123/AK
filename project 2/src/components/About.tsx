import React from 'react';
import { translations } from '../utils/translations';

interface AboutProps {
  language: 'it' | 'en';
}

export default function About({ language }: AboutProps) {
  const t = translations[language];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {t.aboutTitle}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              {t.aboutText}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
                {language === 'it' ? '15+ anni di esperienza' : '15+ years experience'}
              </div>
              <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
                {language === 'it' ? 'Cani di tutte le taglie' : 'Dogs of all sizes'}
              </div>
              <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
                {language === 'it' ? 'Disponibile 7/7' : 'Available 7/7'}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
                alt="Beautiful English Setter in mountain meadow landscape"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}