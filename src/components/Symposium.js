// src/components/Symposium.js
import React from 'react';

const Symposium = ({ setCurrentView }) => {
  return (
    <section id="symposium" className="mb-16 sm:mb-24 md:mb-32">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 text-center" 
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
              fontFamily: '"Inter", sans-serif'
            }}>
          CEAMLS Research{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500">
            Symposium
          </span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-200 text-center mb-8 sm:mb-12 max-w-4xl mx-auto"
           style={{
             textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
             fontFamily: '"Inter", sans-serif'
           }}>
          Learn more about our contributions to the 2025 CEAMLS Research Symposium on Equitable AI.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
            
            {/* Event Badge */}
            <div className="absolute top-6 right-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl animate-pulse">
                🎯
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Event Icon & Title */}
              <div className="text-center lg:text-left">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-6xl shadow-2xl mx-auto lg:mx-0 mb-6">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4" 
                    style={{
                      textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                      fontFamily: '"Inter", sans-serif'
                    }}>
                  CEAMLS Research Symposium 2025
                </h3>
                <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-lg font-semibold border border-purple-500/30">
                  Focus: Equitable AI
                </span>
              </div>
              
              {/* Event Details */}
              <div className="lg:col-span-2">
                <h4 className="text-2xl font-bold text-purple-300 mb-6">Our Participation & Research Presentation</h4>
                
                <div className="space-y-4 mb-6">
                  <p className="text-gray-200 leading-relaxed text-lg" 
                     style={{
                       textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                       fontFamily: '"Inter", sans-serif'
                     }}>
                    DEPA Lab is proud to be an active participant in the 2025 CEAMLS Research Symposium, focusing on <span className="text-purple-300 font-semibold">"Equitable AI."</span> This event brings together thought leaders, researchers, and practitioners to discuss innovative strategies for fostering fairness and inclusivity in AI applications.
                  </p>
                  
                  <p className="text-gray-200 leading-relaxed text-lg" 
                     style={{
                       textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                       fontFamily: '"Inter", sans-serif'
                     }}>
                    During the symposium, our team will present groundbreaking research on <span className="text-pink-300 font-semibold">leveraging AI for equitable academic and career advisory systems.</span> We look forward to engaging with the community to explore collaborative opportunities and share insights.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.morgan.edu/ceamls/equitable-ai-symposium/equitable-ai-symposium-(2025)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Register for the Symposium
                  </a>
                  <a 
                    href="https://www.morgan.edu/ceamls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-purple-400 hover:border-pink-400 text-purple-300 hover:text-pink-300 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-purple-400/10"
                  >
                    <i className="fas fa-info-circle mr-2"></i>
                    Learn More About CEAMLS
                  </a>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute bottom-4 left-4 opacity-10">
              <div className="text-8xl text-purple-400">🎯</div>
            </div>
            <div className="absolute top-1/4 right-1/4 opacity-5">
              <div className="text-6xl text-pink-400">✨</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentView('symposium')}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
          >
            <i className="fas fa-calendar-alt mr-2"></i>
            Learn More About the Symposium
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Symposium;
