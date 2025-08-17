// src/components/research/AwardsDetailed.js
import React from 'react';

const AwardsDetailed = ({ setCurrentView }) => {
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
            Awards and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              Recognitions
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 text-center mb-12 max-w-3xl mx-auto"
             style={{
               textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
               fontFamily: '"Inter", sans-serif'
             }}>
            Celebrating excellence and innovation in research and technology.
          </p>

          {/* First Place Innovation Expo Award - Detailed View */}
          <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mb-8 relative overflow-hidden">
            
            {/* Award Badge */}
            <div className="absolute top-6 right-6">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl animate-pulse">
                🏆
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Award Icon & Title */}
              <div className="text-center lg:text-left">
                <div className="w-32 h-32 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white text-6xl shadow-2xl mx-auto lg:mx-0 mb-6">
                  <i className="fas fa-award"></i>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" 
                    style={{
                      textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                      fontFamily: '"Inter", sans-serif'
                    }}>
                  First Place Innovation Expo Award
                </h2>
                <div className="space-y-2">
                  <span className="block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-lg font-semibold border border-yellow-500/30">
                    Morgan TechFest 2024
                  </span>
                  <span className="block px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-lg font-semibold border border-green-500/30">
                    $2,000 Prize Winner
                  </span>
                </div>
              </div>
              
              {/* Award Details */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Award Winner: David Nyarko</h3>
                
                <h4 className="text-xl font-semibold text-yellow-300 mb-4">
                  Research Project: "Track-Based Autonomous Wheelchair Navigation for Airport Environments"
                </h4>
                
                <p className="text-gray-200 leading-relaxed text-lg mb-6" 
                   style={{
                     textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                     fontFamily: '"Inter", sans-serif'
                   }}>
                  The DEPA Lab achieved first place at the Morgan TechFest 2024 Innovation Expo with groundbreaking research in autonomous wheelchair navigation. This AI-driven system integrates advanced technologies including Ultralytics YOLOv8, QR Code navigation, LiDAR, and computer vision cameras to enhance mobility in crowded environments like airports.
                </p>
                
                <p className="text-gray-200 leading-relaxed text-lg mb-6" 
                   style={{
                     textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                     fontFamily: '"Inter", sans-serif'
                   }}>
                  The system automates quiz creation and processes multiple-choice questions with correct answer validation, streamlining assessment workflows for educators. AACA enhances personalized learning by providing targeted evaluations, improving both student engagement and academic outcomes.
                </p>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-3">Key Technologies:</h5>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'Ultralytics YOLOv8', 
                      'QR Code Navigation', 
                      'LiDAR Technology', 
                      'Computer Vision', 
                      'AI Path Planning',
                      'Obstacle Avoidance',
                      'Real-time Processing'
                    ].map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-lg p-4">
                  <p className="text-yellow-200 font-medium">
                    <i className="fas fa-lightbulb mr-2"></i>
                    Innovation Impact: This research addresses critical mobility challenges in complex environments, ensuring efficient path-following and obstacle avoidance for enhanced accessibility and independence.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute bottom-4 left-4 opacity-10">
              <div className="text-8xl text-yellow-400">🏆</div>
            </div>
            <div className="absolute top-1/4 right-1/4 opacity-5">
              <div className="text-6xl text-blue-400">⭐</div>
            </div>
          </div>

          {/* Future Awards Placeholder */}
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-300 rounded-full font-bold backdrop-blur-sm text-lg">
              <i className="fas fa-trophy mr-3"></i>
              Continuing Our Journey of Excellence in Research and Innovation
              <i className="fas fa-star ml-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsDetailed;
