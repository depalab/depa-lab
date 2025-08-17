// src/components/ResearchAreas.js
import React from 'react';
import { researchAreas } from '../data/constants';

const ResearchAreas = () => {
  return (
    <section id="research" className="mb-12 sm:mb-20 md:mb-28 lg:mb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center animate-fadeInUp" 
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
              fontFamily: '"Inter", sans-serif'
            }}>
          Core Research{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
            Areas
          </span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="group transform hover:scale-105 transition-all duration-500 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl h-full hover:border-blue-500/40 hover:shadow-blue-500/20 transition-all duration-500 group-hover:bg-black/50">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 lg:mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 text-center">
                  {area.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 group-hover:text-blue-300 transition-colors duration-300 text-center" 
                    style={{
                      textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                      fontFamily: '"Inter", sans-serif'
                    }}>
                  {area.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center" 
                   style={{
                     textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                     fontFamily: '"Inter", sans-serif'
                   }}>
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
