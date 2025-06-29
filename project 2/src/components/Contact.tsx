import React, { useState } from 'react';
import { MessageCircle, Send, User, Calendar, Clock, FileText } from 'lucide-react';
import { translations } from '../utils/translations';
import emailjs from '@emailjs/browser';

interface ContactProps {
  language: 'it' | 'en';
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    dogName: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const templateParams = {
        user_name: formData.name,
        dog_name: formData.dogName,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        extra_notes: formData.notes,
      };

      await emailjs.send(
        'service_dx27cqr',
        'template_amvqrfn',
        templateParams,
        '08ztLpay7nZxt81uR'
      );

      setSubmitMessage('Richiesta inviata! Ti risponderò al più presto.');
      setFormData({
        name: '',
        dogName: '',
        preferredDate: '',
        preferredTime: '',
        notes: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('Errore nell\'invio. Riprova o contattami su WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openWhatsApp = () => {
    const message = language === 'it' 
      ? 'Ciao! Vorrei maggiori informazioni sui servizi di dog walking.'
      : 'Hi! I would like more information about dog walking services.';
    const whatsappUrl = `https://wa.me/+393200708429?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Generate time options (every 30 minutes from 6:00 to 23:30)
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 6; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push(timeString);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contactTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.nameLabel}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                />
              </div>

              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">🐕</span>
                <input
                  type="text"
                  name="dogName"
                  value={formData.dogName}
                  onChange={handleInputChange}
                  placeholder={t.dogNameLabel}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-12 pr-4 py-4 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-200 [color-scheme:dark]"
                />
              </div>

              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400">
                    {t.preferredTimeLabel}
                  </option>
                  {timeOptions.map((time) => (
                    <option key={time} value={time} className="bg-black text-white">
                      {time}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <FileText className="absolute left-3 top-4 text-gray-400 h-5 w-5" />
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder={t.notesLabel}
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Invio in corso...' : t.submitButton}</span>
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-lg text-center font-medium ${
                  submitMessage.includes('Errore') 
                    ? 'bg-red-900/50 text-red-300 border border-red-700' 
                    : 'bg-green-900/50 text-green-300 border border-green-700'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="bg-black p-8 rounded-lg shadow-2xl">
              <div className="text-center mb-8">
                <img
                  src="/src/assets/image copy.png"
                  alt="Monir with Dalmatian dog"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {language === 'it' ? 'Contattami Subito!' : 'Contact Me Now!'}
                </h3>
                <p className="text-gray-300 mb-8">
                  {language === 'it' 
                    ? 'Ti rispondo entro meno di un\'ora'
                    : 'I reply within less than an hour'}
                </p>
              </div>

              <button
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{t.whatsappButton}</span>
              </button>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="text-center text-gray-400">
                  <p className="mb-2">
                    {language === 'it' ? 'Disponibile' : 'Available'}: 
                    <span className="text-cyan-400 font-semibold ml-1">06:00 - 00:00</span>
                  </p>
                  <p>
                    {language === 'it' ? 'Anche nei weekend!' : 'Weekends too!'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer data-footer className="mt-24 pt-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {language === 'it' ? 'Contatti' : 'Contact'}
              </h3>
              <p className="text-gray-400">+39 320 070 8429</p>
              <p className="text-gray-400">AK.SERVIZI.CINOFILI@GMAIL.COM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {language === 'it' ? 'Posizione' : 'Location'}
              </h3>
              <p className="text-gray-400">Milano</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                AK Servizi Cinofili
              </h3>
              <p className="text-gray-400">
                {language === 'it' 
                  ? 'Servizio professionale di dog walking a Milano'
                  : 'Professional dog walking service in Milan'}
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              © 2024 AK Servizi Cinofili. {language === 'it' ? 'Tutti i diritti riservati.' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Book Button */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <button
          onClick={openWhatsApp}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-lg font-semibold shadow-2xl flex items-center justify-center space-x-2 shadow-cyan-500/25"
        >
          <MessageCircle className="h-5 w-5" />
          <span>{t.book}</span>
        </button>
      </div>
    </section>
  );
}