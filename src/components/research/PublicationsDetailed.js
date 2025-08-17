// src/components/research/PublicationsDetailed.js
import React from 'react';

const PublicationsDetailed = ({ setCurrentView }) => {
  const publications = [
    {
      title: "AI/ML Systems Engineering Workbench Framework",
      authors: "Dr. Kofi Nyarko, Emmanual Masa-Ibi",
      conference: "Conference on Information Sciences and Systems (CISS)",
      badge: "IEEE CISS Conference",
      badgeColor: "green",
      icon: "fas fa-cogs",
      link: "https://ieeexplore.ieee.org/document/10089781/",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Automated Traffic Video Analysis with Modular Computer Vision Pipeline",
      authors: "Tasmeer Alam, Dr. Kofi Nyarko",
      conference: "Conference on Information Sciences and Systems (CISS)",
      badge: "CISS - Paper Accepted",
      badgeColor: "orange",
      icon: "fas fa-video",
      link: null,
      status: "pending",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Network Intrusion Visualization with NIVA",
      authors: "Kofi Nyarko, Tanya Capers, Craig Scott, Kemi Ladeji-Osias",
      conference: "10th Symposium on Haptic Interfaces for Virtual Environment and Teleoperator Systems",
      badge: "IEEE Haptic Symposium",
      badgeColor: "purple",
      icon: "fas fa-shield-alt",
      link: "https://ieeexplore.ieee.org/abstract/document/998969",
      gradient: "from-red-500 to-purple-600"
    },
    {
      title: "Cloud Based Passive Building Occupancy Characterization",
      authors: "Kofi Nyarko, Cecelia Wright-Brown",
      conference: "IEEE International Conference on Technologies for Homeland Security (HST)",
      badge: "IEEE HST Conference",
      badgeColor: "yellow",
      icon: "fas fa-building",
      link: "https://ieeexplore.ieee.org/abstract/document/6699097",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

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
            Research{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-500">
              Publications
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 text-center mb-12 max-w-4xl mx-auto"
             style={{
               textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
               fontFamily: '"Inter", sans-serif'
             }}>
            Explore our comprehensive contributions to research and innovation in AI, machine learning, and technology.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:border-green-500/40 transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${pub.gradient} rounded-full flex items-center justify-center text-white text-3xl shadow-xl`}>
                    <i className={pub.icon}></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      {pub.title}
                    </h3>
                    <span className={`inline-block px-4 py-2 bg-${pub.badgeColor}-500/20 text-${pub.badgeColor}-300 rounded-full text-sm font-semibold border border-${pub.badgeColor}-500/30`}>
                      {pub.badge}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className={`bg-${pub.badgeColor}-500/10 border border-${pub.badgeColor}-500/20 rounded-lg p-4`}>
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <span className={`text-${pub.badgeColor}-300 font-semibold text-lg`}>Authors: </span>
                        <span className="text-gray-200 text-lg">{pub.authors}</span>
                      </div>
                      <div>
                        <span className={`text-${pub.badgeColor}-300 font-semibold text-lg`}>Published in: </span>
                        <span className="text-gray-200 text-lg">{pub.conference}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {pub.link ? (
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${pub.gradient} hover:opacity-80 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Read Full Paper
                  </a>
                ) : (
                  <div className="inline-flex items-center px-6 py-3 bg-gray-500/20 text-gray-300 rounded-lg font-bold border border-gray-500/30">
                    <i className="fas fa-clock mr-2"></i>
                    Publication Pending
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Research Impact Statement */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 text-green-300 rounded-full font-bold backdrop-blur-sm text-lg">
              <i className="fas fa-chart-line mr-3"></i>
              Contributing to the Future of AI and Technology Research
              <i className="fas fa-lightbulb ml-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsDetailed;
