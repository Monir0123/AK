import React, { useState } from 'react';
import { Clock, Shield, Heart, ArrowRight, Zap, Star } from 'lucide-react';
import { translations } from '../utils/translations';

interface TestimonialsProps {
  language: 'it' | 'en';
}

export default function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language];
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = language === 'it' ? [
    {
      icon: Zap,
      title: 'Prezzo Imbattibile',
      subtitle: 'Qualità premium, costo onesto',
      description: 'Servizio professionale a un prezzo che non troverai da nessun\'altra parte a Milano.',
      highlight: 'Miglior rapporto qualità-prezzo',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Il Tuo Cane Mi Amerà',
      subtitle: 'Garanzia al 100%',
      description: 'Non è solo una passeggiata. È un\'esperienza che il tuo cane aspetterà con ansia ogni giorno.',
      highlight: 'Cani felici = Proprietari felici',
      color: 'from-pink-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Massima Sicurezza',
      subtitle: 'Zero preoccupazioni',
      description: 'Assicurato, esperto, affidabile. Il tuo cane è al sicuro come se fossi tu a portarlo fuori.',
      highlight: '15+ anni senza incidenti',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      title: 'Disponibile OGGI',
      subtitle: 'Anche all\'ultimo minuto',
      description: 'Mentre altri dog walker sono pieni per settimane, io sono sempre disponibile. Anche per emergenze.',
      highlight: 'Risposta in meno di 1 ora',
      color: 'from-cyan-500 to-blue-600'
    }
  ] : [
    {
      icon: Zap,
      title: 'Unbeatable Price',
      subtitle: 'Premium quality, honest cost',
      description: 'Professional service at a price you won\'t find anywhere else in Milan.',
      highlight: 'Best quality-price ratio',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Your Dog Will Love Me',
      subtitle: '100% Guarantee',
      description: 'It\'s not just a walk. It\'s an experience your dog will eagerly await every day.',
      highlight: 'Happy dogs = Happy owners',
      color: 'from-pink-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Maximum Safety',
      subtitle: 'Zero worries',
      description: 'Insured, experienced, reliable. Your dog is as safe as if you were walking them yourself.',
      highlight: '15+ years without incidents',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      title: 'Available TODAY',
      subtitle: 'Even last minute',
      description: 'While other dog walkers are booked for weeks, I\'m always available. Even for emergencies.',
      highlight: 'Response in less than 1 hour',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.testimonialsTitle}
          </h2>
        </div>

        {/* Main Feature Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className={`bg-gradient-to-br ${features[currentFeature].color} p-1 rounded-2xl shadow-2xl`}>
            <div className="bg-black rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${features[currentFeature].color} rounded-full shadow-lg`}>
                  {React.createElement(features[currentFeature].icon, { className: "h-8 w-8 text-white" })}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {features[currentFeature].title}
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  {features[currentFeature].subtitle}
                </p>
                <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto">
                  {features[currentFeature].description}
                </p>
                <div className={`inline-block bg-gradient-to-r ${features[currentFeature].color} text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg`}>
                  {features[currentFeature].highlight}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setCurrentFeature(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentFeature 
                  ? `bg-gradient-to-r ${feature.color} shadow-lg scale-125` 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Value Proposition CTA */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-center shadow-2xl border border-gray-700">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'it' 
              ? 'Prova Il Servizio Premium'
              : 'Try The Premium Service'}
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'it' 
              ? 'Scopri perché i proprietari di cani a Milano scelgono il mio servizio e non tornano mai indietro.'
              : 'Discover why dog owners in Milan choose my service and never go back.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2 group"
            >
              <span>
                {language === 'it' ? 'INIZIA OGGI' : 'START TODAY'}
              </span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="text-gray-400 text-sm">
              {language === 'it' 
                ? 'La prima passeggiata è gratis • Nessun impegno a lungo termine'
                : 'First walk is free • No long-term commitment'}
            </div>
          </div>
        </div>

        {/* Social Proof Strip */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>{language === 'it' ? 'Online ora' : 'Online now'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-red-500" />
              <span>{language === 'it' ? 'Tu rilassato, senza pensieri' : 'You relaxed, worry-free'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-blue-500" />
              <span>{language === 'it' ? 'Tutto sotto controllo' : 'Everything under control'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}