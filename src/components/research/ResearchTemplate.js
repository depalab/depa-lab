// src/components/research/ResearchTemplate.js
import React from 'react';

const ResearchTemplate = ({ title, icon, overview, setCurrentView }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <button
          onClick={() => setCurrentView('home')}
          className="mb-8 px-4 py-2 bg-black/60 backdrop-blur-sm text-white rounded-lg hover:bg-black/80 transition-all duration-300"
        >
          ← Back to Home
        </button>
        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
              {icon}
            </div>
            <h1 className="text-4xl font-black text-white mb-4">{title}</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
            {overview.map((paragraph, index) => (
              <p key={index} className="text-gray-200 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchTemplate;
