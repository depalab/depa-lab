// src/components/research/SymposiumDetailed.js
import React from 'react';

const SymposiumDetailed = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <button
          onClick={() => setCurrentView('home')}
          className="mb-8 px-4 py-2 bg-black/60 backdrop-blur-sm text-white rounded-lg hover:bg-black/80 transition-all duration-300"
        >
          ← Back to Home
        </button>
        
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-8 text-center" 
              style={{
                textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
                fontFamily: '"Inter", sans-serif'
              }}>
            CEAMLS Research{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500">
              Symposium 2025
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 text-center mb-12 max-w-4xl mx-auto"
             style={{
               textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
               fontFamily: '"Inter", sans-serif'
             }}>
            Advancing Equitable AI: Our participation in the premier symposium on fairness and inclusivity in artificial intelligence.
          </p>

          {/* Main Event Card */}
          <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mb-12 relative overflow-hidden">
            
            {/* Event Badge */}
            <div className="absolute top-6 right-6">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl animate-pulse">
                🎯
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Event Details */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl">
                    <i className="fas fa-users"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      CEAMLS Research Symposium
                    </h2>
                    <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-lg font-semibold border border-purple-500/30 mt-2">
                      2025 • Focus: Equitable AI
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-300 mb-3">Our Research Presentation</h3>
                    <p className="text-gray-200 leading-relaxed">
                      <span className="text-pink-300 font-semibold">"Leveraging AI for Equitable Academic and Career Advisory Systems"</span> - 
                      Presenting groundbreaking research on how artificial intelligence can be designed and implemented to ensure fair and inclusive 
                      educational guidance and career counseling for students from diverse backgrounds.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
                      <h4 className="font-semibold text-pink-300 mb-2">Focus Areas</h4>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>• Bias Detection in AI Systems</li>
                        <li>• Inclusive Algorithm Design</li>
                        <li>• Educational Equity</li>
                        <li>• Career Guidance AI</li>
                      </ul>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-300 mb-2">Expected Impact</h4>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>• Enhanced Student Support</li>
                        <li>• Reduced Educational Bias</li>
                        <li>• Improved Career Outcomes</li>
                        <li>• Community Collaboration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Symposium Goals */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Symposium Objectives</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-balance-scale text-purple-300 text-xl"></i>
                      <h4 className="font-semibold text-white">Fairness & Inclusivity</h4>
                    </div>
                    <p className="text-gray-200 text-sm">Discussing innovative strategies for fostering fairness and inclusivity in AI applications across various domains.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-handshake text-pink-300 text-xl"></i>
                      <h4 className="font-semibold text-white">Collaboration</h4>
                    </div>
                    <p className="text-gray-200 text-sm">Bringing together thought leaders, researchers, and practitioners to explore collaborative opportunities.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-lightbulb text-purple-300 text-xl"></i>
                      <h4 className="font-semibold text-white">Innovation</h4>
                    </div>
                    <p className="text-gray-200 text-sm">Sharing cutting-edge research insights and exploring new frontiers in equitable AI development.</p>
                  </div>
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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://www.morgan.edu/ceamls/equitable-ai-symposium/equitable-ai-symposium-(2025)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
            >
              <i className="fas fa-calendar-plus mr-3"></i>
              Register for the Symposium
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <a 
              href="https://www.morgan.edu/ceamls"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-purple-400 hover:border-pink-400 text-purple-300 hover:text-pink-300 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-purple-400/10"
            >
              <i className="fas fa-info-circle mr-3"></i>
              Learn More About CEAMLS
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>

          {/* Mission Statement */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 text-purple-300 rounded-full font-bold backdrop-blur-sm text-lg">
              <i className="fas fa-heart mr-3"></i>
              Building a More Equitable Future Through AI Research and Collaboration
              <i className="fas fa-users ml-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymposiumDetailed;
