// src/components/Awards.js
import React from 'react';

const Awards = ({ setCurrentView }) => {
  return (
    <section id="awards" className="mb-16 sm:mb-24 md:mb-32">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 text-center" 
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
              fontFamily: '"Inter", sans-serif'
            }}>
          Awards and{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
            Recognitions
          </span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-200 text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
           style={{
             textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
             fontFamily: '"Inter", sans-serif'
           }}>
          Celebrating excellence and innovation in research and technology.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {/* First Place Innovation Expo Award */}
          <div className="group transform hover:scale-105 transition-all duration-500 lg:col-span-2 xl:col-span-3">
            <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:border-yellow-500/40 transition-all duration-300 relative overflow-hidden">
              
              {/* Award Badge */}
              <div className="absolute top-4 right-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl animate-pulse">
                  🏆
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-start gap-6">
                {/* Award Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                    <i className="fas fa-award"></i>
                  </div>
                </div>
                
                {/* Award Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300" 
                      style={{
                        textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                        fontFamily: '"Inter", sans-serif'
                      }}>
                    First Place Innovation Expo Award
                  </h3>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-semibold border border-yellow-500/30">
                      Morgan TechFest 2024
                    </span>
                    <span className="inline-block ml-2 px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-500/30">
                      $2,000 Prize
                    </span>
                  </div>
                  
                  <p className="text-blue-300 font-semibold mb-3" 
                     style={{
                       textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                       fontFamily: '"Inter", sans-serif'
                     }}>
                    Award Winner: David Nyarko
                  </p>
                  
                  <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300" 
                     style={{
                       textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                       fontFamily: '"Inter", sans-serif'
                     }}>
                    The lab won first place at Morgan TechFest 2024 Innovation Expo with its groundbreaking research, <span className="text-yellow-300 font-semibold">'Track-Based Autonomous Wheelchair Navigation for Airport Environments.'</span> This AI-driven system integrates advanced technologies such as Ultralytics YOLOv8, QR Code navigation, LiDAR, and cameras to enhance mobility in crowded spaces like airports, ensuring efficient path-following and obstacle avoidance.
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['YOLOv8', 'QR Navigation', 'LiDAR', 'Computer Vision', 'AI Navigation'].map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute bottom-4 left-4 opacity-10">
                <div className="text-6xl text-yellow-400">🏆</div>
              </div>
            </div>
          </div>

          {/* Placeholder for Future Awards */}
          <div className="group transform hover:scale-105 transition-all duration-500 opacity-50">
            <div className="bg-gradient-to-br from-black/20 via-gray-900/20 to-black/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl border-dashed h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 opacity-50">
                  <i className="fas fa-plus"></i>
                </div>
                <p className="text-gray-400 font-medium">More awards coming soon...</p>
              </div>
            </div>
          </div>

          <div className="group transform hover:scale-105 transition-all duration-500 opacity-50">
            <div className="bg-gradient-to-br from-black/20 via-gray-900/20 to-black/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl border-dashed h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 opacity-50">
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-400 font-medium">Future recognitions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentView('awards')}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25 mr-4"
          >
            <i className="fas fa-trophy mr-2"></i>
            View All Awards
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-300 rounded-full font-bold backdrop-blur-sm">
            <i className="fas fa-star mr-2"></i>
            Striving for Excellence in Research and Innovation
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
