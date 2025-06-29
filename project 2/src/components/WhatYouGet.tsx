import React from 'react';
import { Briefcase, Zap, Bed } from 'lucide-react';
import { translations } from '../utils/translations';

interface WhatYouGetProps {
  language: 'it' | 'en';
}

export default function WhatYouGet({ language }: WhatYouGetProps) {
  const t = translations[language];

  const features = [
    {
      icon: Briefcase,
      title: t.mentalTranquility,
      description: t.mentalTranquilityDesc,
    },
    {
      icon: Zap,
      title: t.stimulatingWalk,
      description: t.stimulatingWalkDesc,
    },
    {
      icon: Bed,
      title: t.homePickup,
      description: t.homePickupDesc,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.whatYouGetTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500 rounded-full mb-6 group-hover:bg-cyan-400 transition-colors duration-300 shadow-lg shadow-cyan-500/25">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}