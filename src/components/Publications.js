// src/components/Publications.js
import React from 'react';
import { publications } from '../data/constants';

const Publications = ({ setCurrentView }) => {
  const getBadgeColor = (color) => {
    const colors = {
      green: 'bg-green-500/20 text-green-300 border-green-500/30',
      orange: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      yellow: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
    };
    return colors[color] || colors.green;
  };

  return (
    <section id="publications" className="mb-16 sm:mb-24 md:mb-32">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 text-center" 
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
              fontFamily: '"Inter", sans-serif'
            }}>
          Research{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-500">
            Publications
          </span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-200 text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
           style={{
             textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
             fontFamily: '"Inter", sans-serif'
           }}>
          Explore our contributions to research and innovation in AI and technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {publications.map((publication, index) => (
            <div key={index} className="group transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl h-full hover:border-green-500/40 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl shadow-xl">
                    <i className={publication.icon}></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      {publication.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border mb-3 ${getBadgeColor(publication.badgeColor)}`}>
                      {publication.badge}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-green-300 font-semibold">Authors: </span>
                    <span className="text-gray-200">{publication.authors}</span>
                  </div>
                  <div>
                    <span className="text-green-300 font-semibold">Published in: </span>
                    <span className="text-gray-200">{publication.conference}</span>
                  </div>
                </div>
                
                {publication.status === 'published' ? (
                  <a 
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <div className="inline-flex items-center px-4 py-2 bg-gray-500/20 text-gray-300 rounded-lg font-semibold border border-gray-500/30">
                    <i className="fas fa-clock mr-2"></i>
                    Yet to be public
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentView('publications')}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25"
          >
            <i className="fas fa-book-open mr-2"></i>
            View All Publications
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
