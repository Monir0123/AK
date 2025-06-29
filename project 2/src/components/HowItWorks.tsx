import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { translations } from '../utils/translations';

interface HowItWorksProps {
  language: 'it' | 'en';
}

export default function HowItWorks({ language }: HowItWorksProps) {
  const t = translations[language];

  const steps = [
    {
      icon: Calendar,
      title: t.step1,
      description: t.step1Desc,
    },
    {
      icon: MapPin,
      title: t.step2,
      description: t.step2Desc,
    },
    {
      icon: CheckCircle,
      title: t.step3,
      description: t.step3Desc,
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.howItWorksTitle}
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-cyan-500"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-gray-900 p-8 rounded-lg shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-full mr-4">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-cyan-500">0{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-4 h-4 bg-cyan-500 rounded-full relative z-10"></div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}