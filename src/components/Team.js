// src/components/Team.js
import React, { useState } from 'react';
import { teamMembers } from '../data/constants';

const Team = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  const scrollTeam = (direction) => {
    setCurrentTeamIndex(prev => {
      if (direction === 'left') {
        return prev > 0 ? prev - 1 : teamMembers.length - 1;
      } else {
        return prev < teamMembers.length - 1 ? prev + 1 : 0;
      }
    });
  };

  return (
    <section id="team" className="mb-16 sm:mb-24 md:mb-32">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 text-center" 
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
              fontFamily: '"Inter", sans-serif'
            }}>
          Meet Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
            Team
          </span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-200 text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
           style={{
             textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
             fontFamily: '"Inter", sans-serif'
           }}>
          Our diverse and talented team is committed to advancing research and innovation, solving real-world problems through technology.
        </p>

        {/* Team Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <button 
              onClick={() => scrollTeam('left')}
              className="absolute left-0 z-10 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 transform hover:scale-110 shadow-2xl"
            >
              ❮
            </button>
            
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-8 border border-white/20 shadow-2xl text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl">
                  <img 
                    src={teamMembers[currentTeamIndex].image} 
                    alt={teamMembers[currentTeamIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" 
                    style={{
                      textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                      fontFamily: '"Inter", sans-serif'
                    }}>
                  {teamMembers[currentTeamIndex].name}
                </h3>
                <p className="text-blue-300 font-semibold" 
                   style={{
                     textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                     fontFamily: '"Inter", sans-serif'
                   }}>
                  {teamMembers[currentTeamIndex].role}
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => scrollTeam('right')}
              className="absolute right-0 z-10 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 transform hover:scale-110 shadow-2xl"
            >
              ❯
            </button>
          </div>
          
          {/* Team indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTeamIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTeamIndex 
                    ? 'bg-blue-400 shadow-lg' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Team Button */}
        <div className="text-center mt-8 sm:mt-12">
          <a 
            href="#team" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
          >
            View All Team Members
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
