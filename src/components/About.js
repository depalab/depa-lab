// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="mb-12 sm:mb-20 md:mb-28 lg:mb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/20 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center animate-fadeInUp" 
              style={{
                textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
                fontFamily: '"Inter", sans-serif'
              }}>
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
              DEPA Lab
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-light mb-8 sm:mb-12 lg:mb-16 text-center max-w-6xl mx-auto px-2" 
             style={{
               textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
               fontFamily: '"Inter", sans-serif'
             }}>
            The <span className="text-blue-300 font-semibold">Data Engineering and Predictive Analytics Lab (DEPA Lab)</span> at Morgan State University, led by Dr. Kofi Nyarko, is dedicated to unraveling the intricacies of complex systems and providing transformative insights. DEPA Lab focuses on applied research in Computer Vision, Machine Learning, and Artificial Intelligence Techniques.
          </p>

          {/* Mission and Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <div className="group transform hover:scale-105 transition-all duration-500 animate-fadeInUp">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-500/20 shadow-2xl h-full hover:border-blue-500/40 hover:shadow-blue-500/20 transition-all duration-500">
                <div className="flex items-center mb-6 lg:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl mr-4 lg:mr-6 shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                    🎯
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white" 
                      style={{
                        textShadow: '0 0 20px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                        fontFamily: '"Inter", sans-serif'
                      }}>
                    Our Mission
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed font-light" 
                   style={{
                     textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                     fontFamily: '"Inter", sans-serif'
                   }}>
                  We develop innovative machine learning models and algorithms for near real-time data collection, transformation, analysis, prediction, and visualization. DEPA Lab promotes <span className="text-blue-300 font-semibold">inclusivity and innovation</span> in data engineering and predictive analytics.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group transform hover:scale-105 transition-all duration-500 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-purple-500/20 shadow-2xl h-full hover:border-purple-500/40 hover:shadow-purple-500/20 transition-all duration-500">
                <div className="flex items-center mb-6 lg:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl mr-4 lg:mr-6 shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                    🚀
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white" 
                      style={{
                        textShadow: '0 0 20px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                        fontFamily: '"Inter", sans-serif'
                      }}>
                    Our Vision
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed font-light" 
                   style={{
                     textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                     fontFamily: '"Inter", sans-serif'
                   }}>
                  The Center for Equitable AI and Machine Learning Systems (CEAMLS) facilitates the development and deployment of <span className="text-purple-300 font-semibold">socially responsible and equitable AI systems</span>, ensuring they benefit everyone while educating the public about their impacts on health, prosperity, and happiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
