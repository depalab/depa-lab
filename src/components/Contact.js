// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="mb-16 sm:mb-24 md:mb-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8" 
              style={{
                textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
                fontFamily: '"Inter", sans-serif'
              }}>
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
              Us
            </span>
          </h2>
          
          <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-200" 
               style={{
                 textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              <span className="text-blue-300 font-semibold">Email:</span>{' '}
              <a href="mailto:kofi.nyarko@morgan.edu" className="text-white hover:text-blue-300 transition-colors duration-300 underline">
                kofi.nyarko@morgan.edu
              </a>
            </p>
            
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed" 
               style={{
                 textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              <span className="text-blue-300 font-semibold">Address:</span> Room 112 and 113 Schaefer Engineering Building, School of Engineering, 1700 E Cold Spring Ln, Baltimore, MD 21251
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
