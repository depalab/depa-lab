// src/components/Projects.js
import React from 'react';
import { projects } from '../data/constants';

const Projects = ({ setCurrentView }) => {
  return (
    <section id="projects" className="mb-16 sm:mb-24 md:mb-32">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 md:mb-12 text-center" 
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
              fontFamily: '"Inter", sans-serif'
            }}>
          Innovative Projects and{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
            Research Highlights
          </span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-200 text-center mb-8 sm:mb-12 max-w-4xl mx-auto"
           style={{
             textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
             fontFamily: '"Inter", sans-serif'
           }}>
          At DEPA Research Lab, we are at the forefront of cutting-edge research, solving complex real-world challenges through interdisciplinary approaches.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl h-full hover:border-purple-500/40 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-4">{project.icon}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors duration-300" 
                    style={{
                      textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                      fontFamily: '"Inter", sans-serif'
                    }}>
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300" 
                   style={{
                     textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                     fontFamily: '"Inter", sans-serif'
                   }}>
                  {project.description}
                </p>
                <button 
                  onClick={() => setCurrentView(project.link)}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
