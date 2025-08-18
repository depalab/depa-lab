import React, { useState, useEffect } from 'react';

const DepaLabHomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Sample team data - replace with actual team data
  const teamMembers = [
    { name: "Dr. Kofi Nyarko", role: "Lab Director", image: "/api/placeholder/150/150" },
    { name: "Research Scientist", role: "AI/ML Specialist", image: "/api/placeholder/150/150" },
    { name: "Graduate Student", role: "Computer Vision", image: "/api/placeholder/150/150" },
    { name: "Research Assistant", role: "Data Analytics", image: "/api/placeholder/150/150" },
  ];

  const scrollTeam = (direction) => {
    setCurrentTeamIndex(prev => {
      if (direction === 'left') {
        return prev > 0 ? prev - 1 : teamMembers.length - 1;
      } else {
        return prev < teamMembers.length - 1 ? prev + 1 : 0;
      }
    });
  };

  const researchAreas = [
    {
      title: "IoT Data Analytics",
      description: "Analyze and visualize complex IoT networks for actionable insights.",
      icon: "🌐"
    },
    {
      title: "Cybersecurity",
      description: "Secure networks through advanced analytics and visualization techniques.",
      icon: "🔒"
    },
    {
      title: "Machine Learning",
      description: "Optimize algorithms for real-world decision support and autonomous systems.",
      icon: "🤖"
    },
    {
      title: "Computer Vision",
      description: "Automating traffic data analysis, pose estimation, and scene perception for diverse applications.",
      icon: "👁️"
    },
    {
      title: "Ethical AI Framework",
      description: "Advancing trustworthy and unbiased AI systems while addressing algorithmic bias.",
      icon: "⚖️"
    },
    {
      title: "Human-Computer Interaction",
      description: "Creating interactive visualization tools for enhanced situational awareness.",
      icon: "🖥️"
    },
    {
      title: "Autonomous Systems",
      description: "Developing robust algorithms for real-time navigation in challenging environments.",
      icon: "🚗"
    }
  ];

  // Updated projects with research links
  const projects = [
    {
      title: "MSU AI Academic Advisor",
      description: "AI Academic Advisor leveraging multi-step agent pipeline with transformer-based LLMs to generate personalized academic guidance for students.",
      link: "msu-ai-advisor",
      icon: "🎓"
    },
    {
      title: "Benchmarking LLMs for AAVE & SAE",
      description: "Investigating how large language models handle different English dialects, focusing on bias detection and mitigation frameworks.",
      link: "llm-benchmarking",
      icon: "🗣️"
    },
    {
      title: "Forensic Video Analysis with MLLMs",
      description: "Evaluating prompting strategies in multimodal large language models for human-aligned forensic video analysis using advanced AI techniques.",
      link: "forensic-video-analysis",
      icon: "🔍"
    },
    {
      title: "Autonomous Wheelchair Navigation System",
      description: "Advancing autonomous wheelchair systems with follower drone integration, mobile app control, and comprehensive hardware development.",
      link: "wheelchair-navigation",
      icon: "♿"
    },
    {
      title: "AI/ML Bench Guard",
      description: "A benchmarking framework for evaluating cloud-based and open-source ML services across various tasks.",
      link: "ml-bench-guard",
      icon: "📊"
    },
    {
      title: "Quantized LLM for Airport Navigation",
      description: "Lightweight language model system using quantized LLMs for efficient airport navigation assistance on limited hardware.",
      link: "quantized-llm-navigation",
      icon: "✈️"
    },
    {
      title: "Queryable Computer Vision Pipeline",
      description: "Developing a scalable system that allows data analysts to execute SQL-like queries on video content.",
      link: "queryable-cv",
      icon: "🔍"
    },
    {
      title: "XPCI Crack Detection and Categorization",
      description: "Automated crack detection in complex materials using X-ray Phase Contrast Imaging integrated with YOLOv11 deep learning architecture.",
      link: "xpci-crack-detection",
      icon: "🔬"
    },
    {
      title: "Multi-Object Tracking in Video Analysis",
      description: "Innovative approaches to enhance tracking of multiple subjects across video frames in complex scenarios.",
      link: "multi-object-tracking",
      icon: "🎯"
    },
    {
      title: "Cyber Shield",
      description: "Advanced abusive language detection system using DistilBERT for intelligent automated content moderation and safer online interactions.",
      link: "cyber-shield",
      icon: "🛡️"
    }
  ];

  // Research Components (these would typically be in separate files)
  const ResearchComponents = {
    'msu-ai-advisor': () => (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-black/60 backdrop-blur-sm text-white rounded-lg hover:bg-black/80 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🎓
              </div>
              <h1 className="text-4xl font-black text-white mb-4">MSU AI Academic Advisor</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-green-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Research Image */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl p-6 border border-blue-500/20">
                <img 
                  src="public/images/msu.png" 
                  alt="MSU AI Academic Advisor System Interface"
                  className="w-full h-auto rounded-xl shadow-2xl border border-white/20"
                  style={{
                    maxHeight: '500px',
                    objectFit: 'contain'
                  }}
                />
                <p className="text-center text-gray-300 text-sm mt-4 italic">
                  MSU AI Academic Advisor interface providing personalized academic guidance to students
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Project Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                The AI Academic Advisor project leverages a multi-step agent pipeline built on transformer-based LLMs fine-tuned with human feedback to generate personalized academic guidance. User profile data—including course history, interests, and scheduling constraints—is collected through a conversational REST API that normalizes and encodes inputs for downstream processing.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                A modular microservices architecture cleanly separates data ingestion, model inference, and output formatting, allowing independent updates to course-planning, internship-suggestion, and study-tip components. This AI Academic advisor truly listens to students' goals, strengths, and challenges. As a student interacts, it learns and adapts—updating its advice when your goals or circumstances change.
              </p>
              
              {/* Key Features Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                  <h4 className="text-xl font-bold text-blue-300 mb-4">Technical Architecture</h4>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Multi-step agent pipeline with transformer-based LLMs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Human feedback fine-tuning for personalized guidance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Conversational REST API for data collection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Modular microservices architecture</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
                  <h4 className="text-xl font-bold text-green-300 mb-4">Key Features</h4>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Personalized course planning and recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Intelligent internship suggestions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Adaptive study tips and learning strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>24/7 accessibility on any device</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Benefits Section */}
              <div className="bg-gradient-to-r from-purple-500/10 to-green-500/10 rounded-xl p-6 border border-purple-500/20 mt-6">
                <h4 className="text-xl font-bold text-purple-300 mb-4">Student Benefits</h4>
                <p className="text-gray-200 leading-relaxed mb-4">
                  The best thing about this AI Academic Advisor is that it's accessible 24/7 on any device, anytime. The system continuously learns and adapts to each student's unique academic journey, providing increasingly relevant and personalized recommendations as students progress through their studies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">24/7</div>
                    <div className="text-sm text-gray-300">Always Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">Adaptive</div>
                    <div className="text-sm text-gray-300">Learns & Evolves</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">Personal</div>
                    <div className="text-sm text-gray-300">Tailored Guidance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'publications': () => (
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
              {/* Publication 1 - AI/ML Systems Engineering */}
              <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:border-green-500/40 transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl shadow-xl">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      AI/ML Systems Engineering Workbench Framework
                    </h3>
                    <span className="inline-block px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-500/30">
                      IEEE CISS Conference
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <span className="text-green-300 font-semibold text-lg">Authors: </span>
                        <span className="text-gray-200 text-lg">Dr. Kofi Nyarko, Emmanual Masa-Ibi</span>
                      </div>
                      <div>
                        <span className="text-green-300 font-semibold text-lg">Published in: </span>
                        <span className="text-gray-200 text-lg">Conference on Information Sciences and Systems (CISS)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://ieeexplore.ieee.org/document/10089781/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Read Full Paper
                </a>
              </div>

              {/* Publication 2 - Traffic Video Analysis */}
              <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:border-green-500/40 transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-3xl shadow-xl">
                    <i className="fas fa-video"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      Automated Traffic Video Analysis with Modular Computer Vision Pipeline
                    </h3>
                    <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold border border-orange-500/30">
                      CISS - Paper Accepted
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <span className="text-blue-300 font-semibold text-lg">Authors: </span>
                        <span className="text-gray-200 text-lg">Tasmeer Alam, Dr. Kofi Nyarko</span>
                      </div>
                      <div>
                        <span className="text-blue-300 font-semibold text-lg">Published in: </span>
                        <span className="text-gray-200 text-lg">Conference on Information Sciences and Systems (CISS)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="inline-flex items-center px-6 py-3 bg-gray-500/20 text-gray-300 rounded-lg font-bold border border-gray-500/30">
                  <i className="fas fa-clock mr-2"></i>
                  Publication Pending
                </div>
              </div>

              {/* Publication 3 - Network Intrusion */}
              <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:border-green-500/40 transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl shadow-xl">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      Network Intrusion Visualization with NIVA
                    </h3>
                    <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
                      IEEE Haptic Symposium
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <span className="text-purple-300 font-semibold text-lg">Authors: </span>
                        <span className="text-gray-200 text-lg">Kofi Nyarko, Tanya Capers, Craig Scott, Kemi Ladeji-Osias</span>
                      </div>
                      <div>
                        <span className="text-purple-300 font-semibold text-lg">Published in: </span>
                        <span className="text-gray-200 text-lg">10th Symposium on Haptic Interfaces for Virtual Environment and Teleoperator Systems</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://ieeexplore.ieee.org/abstract/document/998969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-red-600 hover:from-purple-600 hover:to-red-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Read Full Paper
                </a>
              </div>

              {/* Publication 4 - Building Occupancy */}
              <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:border-green-500/40 transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl shadow-xl">
                    <i className="fas fa-building"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      Cloud Based Passive Building Occupancy Characterization
                    </h3>
                    <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-semibold border border-yellow-500/30">
                      IEEE HST Conference
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <span className="text-yellow-300 font-semibold text-lg">Authors: </span>
                        <span className="text-gray-200 text-lg">Kofi Nyarko, Cecelia Wright-Brown</span>
                      </div>
                      <div>
                        <span className="text-yellow-300 font-semibold text-lg">Published in: </span>
                        <span className="text-gray-200 text-lg">IEEE International Conference on Technologies for Homeland Security (HST)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://ieeexplore.ieee.org/abstract/document/6699097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Read Full Paper
                </a>
              </div>
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
    ),

    'symposium': () => (
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
    ),

    'llm-benchmarking': () => (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-black/60 backdrop-blur-sm text-white rounded-lg hover:bg-black/80 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🗣️
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Benchmarking Large Language Models for AAVE and SAE</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Research Image */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20">
                <img 
                  src="public/images/ppt_cynthia.png" 
                  alt="AAVE and SAE Benchmarking Research Presentation"
                  className="w-full h-auto rounded-xl shadow-2xl border border-white/20"
                  style={{
                    maxHeight: '500px',
                    objectFit: 'contain'
                  }}
                />
                <p className="text-center text-gray-300 text-sm mt-4 italic">
                  Research presentation showcasing AAVE and SAE benchmarking methodology and bias detection framework
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This research investigates how large language models (LLMs) handle different English dialects, with a focus on African American Vernacular English (AAVE) versus Standard American English (SAE). Models such as GPT-4, Claude 3.5, Gemini 1.5 Pro, Qwen2, and LLaMA 3 were evaluated across sentiment, refusal rates, and response quality.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                Findings revealed that even top-tier models often respond more negatively to AAVE or refuse to complete prompts written in the dialect. To address these disparities, a real-time bias framework is being developed to detect, mitigate, and explain model behavior.
              </p>
              
              {/* Key Findings Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-red-500/20">
                  <h4 className="text-xl font-bold text-red-300 mb-4">Critical Findings</h4>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Higher negative sentiment responses to AAVE prompts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Increased refusal rates for AAVE-written prompts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Quality disparities between dialect responses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Systematic bias patterns across multiple LLMs</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
                  <h4 className="text-xl font-bold text-green-300 mb-4">Bias Mitigation Framework</h4>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Real-time bias detection algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Automated debiasing rewrite capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Human-in-the-loop flagging system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>High-risk domain monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Models Evaluated */}
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20 mt-6">
                <h4 className="text-xl font-bold text-purple-300 mb-4">Models Under Investigation</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {['GPT-4', 'Claude 3.5', 'Gemini 1.5 Pro', 'Qwen2', 'LLaMA 3'].map((model) => (
                    <div key={model} className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="font-semibold text-white">{model}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Impact and Goals */}
              <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl p-6 border border-blue-500/20 mt-6">
                <h4 className="text-xl font-bold text-blue-300 mb-4">Research Impact & Goals</h4>
                <p className="text-gray-200 leading-relaxed mb-4">
                  The framework supports both debiasing rewrites and human-in-the-loop flagging for high-risk domains. This work aims to advance AI safety and ensure more equitable treatment of linguistically diverse communities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">Detect</div>
                    <div className="text-sm text-gray-300">Bias Identification</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">Mitigate</div>
                    <div className="text-sm text-gray-300">Real-time Correction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">Explain</div>
                    <div className="text-sm text-gray-300">Transparent Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'forensic-video-analysis': () => (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-black/60 backdrop-blur-sm text-white rounded-lg hover:bg-black/80 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-red-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🔍
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Evaluating Prompting Strategies in Multimodal Large Language Models for Human-Aligned Forensic Video Analysis</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-red-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Research Image */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-purple-500/10 to-red-500/10 rounded-2xl p-6 border border-purple-500/20">
                <img 
                  src="public/images/MD-2.png" 
                  alt="Multimodal Large Language Model Evaluation Framework for Video Forensic Analysis"
                  className="w-full h-auto rounded-xl shadow-2xl border border-white/20"
                  style={{
                    maxHeight: '500px',
                    objectFit: 'contain'
                  }}
                />
                <p className="text-center text-gray-300 text-sm mt-4 italic">
                  Comprehensive evaluation framework for assessing multimodal large language model performance in forensic video analysis
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Research Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This groundbreaking study evaluates eight distinct prompting strategies across three state-of-the-art multimodal large language models (Claude Sonnet 4, GPT-4o, and Gemini 2.0 Flash) for human-aligned forensic video analysis. The research addresses critical gaps in AI-assisted criminal investigations by developing systems that can replicate human expert reasoning while maintaining the rigorous standards required in forensic contexts.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                Using the UCF-Crime Frames dataset with 5,714 frames across eleven crime categories, the study employed a specialized forensic analysis rubric covering crime classification, temporal reconstruction, evidence documentation, and forensic narrative generation. Each technique was evaluated on a 10-point Likert scale, with assessment based on proximity to annotated ground truth standards.
              </p>
              
              {/* Key Findings Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20">
                  <h4 className="text-xl font-bold text-purple-300 mb-4">Key Research Findings</h4>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span><strong>GPT-4o</strong> achieved superior human-alignment (60.48, σ=11.14)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span><strong>ReAct</strong> demonstrated highest human-expert approximation across all models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Claude (70.8), GPT-4o (69.0), Gemini (65.5) with ReAct technique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Chain-of-thought proved effective as secondary technique</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-xl p-6 border border-red-500/20">
                  <h4 className="text-xl font-bold text-red-300 mb-4">Methodology & Evaluation</h4>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong>8 Prompting Techniques:</strong> Zero-shot, Sequential, Least-to-most, ReAct, Chain-of-thought, Meta-prompting, Self-consistency, Iterative</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong>3 Models Tested:</strong> Claude Sonnet 4, GPT-4o, Gemini 2.0 Flash</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong>11 Crime Categories:</strong> Comprehensive crime detection dataset</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong>10-Dimensional Rubric:</strong> Specialized forensic analysis framework</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Applications Section */}
              <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl p-6 border border-blue-500/20 mt-6">
                <h4 className="text-xl font-bold text-blue-300 mb-4">Forensic Applications & Impact</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Primary Applications:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Criminal investigation support</li>
                      <li>• Evidence documentation and analysis</li>
                      <li>• Temporal event reconstruction</li>
                      <li>• Court-admissible forensic narratives</li>
                      <li>• Surveillance video analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Technical Contributions:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Standardized evaluation framework</li>
                      <li>• Human-alignment assessment methodology</li>
                      <li>• Model-technique optimization guidelines</li>
                      <li>• Classification performance validation</li>
                      <li>• Evidence-based deployment strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Performance Metrics */}
              <div className="bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-xl p-6 border border-green-500/20 mt-6">
                <h4 className="text-xl font-bold text-green-300 mb-4">Performance Validation Results</h4>
                <p className="text-gray-200 mb-4">
                  The study employed comprehensive classification metrics achieving exceptional results:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">100%</div>
                    <div className="text-sm text-gray-300">Perfect F1 Score (ReAct + GPT-4o)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">95.8%</div>
                    <div className="text-sm text-gray-300">Precision Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">90.9%</div>
                    <div className="text-sm text-gray-300">Ground Truth Consistency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'wheelchair-navigation': () => (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-black/60 backdrop-blur-sm text-white rounded-lg hover:bg-black/80 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                ♿
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Autonomous Wheelchair Navigation System</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-green-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Project Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This project focuses on advancing autonomous wheelchair systems designed to enhance mobility and independence for users. The comprehensive system integrates multiple cutting-edge components to create a seamless and intelligent mobility solution that adapts to various environments and user needs.
              </p>
              
              {/* Key Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                  <h4 className="text-xl font-bold text-blue-300 mb-4">🚁 Follower Drone for Luggage</h4>
                  <p className="text-gray-200 leading-relaxed">
                    A vision-based autonomous drone system capable of tracking and following the wheelchair user to carry luggage, using person re-identification and real-time object tracking techniques for seamless mobility assistance.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
                  <h4 className="text-xl font-bold text-green-300 mb-4">📱 Mobile App for Wheelchair Summoning</h4>
                  <p className="text-gray-200 leading-relaxed">
                    A user-friendly application that allows users to remotely call and control the wheelchair, enabling greater freedom and convenience in indoor and outdoor settings with intuitive interface design.
                  </p>
                </div>
              </div>
              
              {/* Hardware Integration */}
              <div className="bg-gradient-to-r from-purple-500/10 to-red-500/10 rounded-xl p-6 border border-purple-500/20 mt-6">
                <h4 className="text-xl font-bold text-purple-300 mb-4">🔧 Hardware Integration and Development</h4>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Hands-on work with the physical wheelchair platform, integrating sophisticated sensing and processing capabilities for enhanced autonomous operation.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl mb-2">📡</div>
                    <div className="font-semibold text-white text-sm">LiDAR</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl mb-2">🥧</div>
                    <div className="font-semibold text-white text-sm">Raspberry Pi</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl mb-2">📷</div>
                    <div className="font-semibold text-white text-sm">Camera Devices</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl mb-2">⚖️</div>
                    <div className="font-semibold text-white text-sm">Weight Sensors</div>
                  </div>
                </div>
              </div>
              
              {/* Technical Features */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20 mt-6">
                <h4 className="text-xl font-bold text-cyan-300 mb-4">Technical Innovation Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Advanced Navigation:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Real-time obstacle detection and avoidance</li>
                      <li>• GPS and indoor positioning integration</li>
                      <li>• Adaptive path planning algorithms</li>
                      <li>• Environmental mapping capabilities</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Smart Integration:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Person re-identification systems</li>
                      <li>• Multi-sensor data fusion</li>
                      <li>• Remote monitoring and control</li>
                      <li>• Emergency response protocols</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Impact and Goals */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20 mt-6">
                <h4 className="text-xl font-bold text-yellow-300 mb-4">Impact & Independence Enhancement</h4>
                <p className="text-gray-200 leading-relaxed">
                  This comprehensive autonomous wheelchair system represents a significant advancement in assistive technology, providing users with unprecedented levels of independence and mobility. The integration of drone assistance, mobile control, and sophisticated hardware creates a seamless ecosystem that adapts to the user's needs and environment, ultimately enhancing quality of life and accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'quantized-llm-navigation': () => (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-black/60 backdrop-blur-sm text-white rounded-lg hover:bg-black/80 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                ✈️
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Quantized LLM for Airport Navigation</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Project Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This project demonstrates the development of a lightweight language model system using quantized LLMs to enable efficient performance on limited hardware. The system is specifically designed for airport navigation assistance, providing travelers with intelligent, context-aware guidance while operating with minimal computational requirements.
              </p>
              
              {/* Quantization Technology */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                  <h4 className="text-xl font-bold text-blue-300 mb-4">⚡ Quantization Technology</h4>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Experimented with 4-bit and 8-bit quantized models to reduce memory and computational demands while preserving accuracy and response quality.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-xl font-bold text-blue-400">4-bit</div>
                      <div className="text-xs text-gray-300">Ultra-lightweight</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-xl font-bold text-cyan-400">8-bit</div>
                      <div className="text-xs text-gray-300">Balanced Performance</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
                  <h4 className="text-xl font-bold text-green-300 mb-4">🗺️ Airport Assistant Features</h4>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    A text-based airport assistant that responds only to navigation-related queries with location-specific, concise guidance.
                  </p>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Gate and terminal directions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Service location assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Real-time navigation support</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Technical Implementation */}
              <div className="bg-gradient-to-r from-purple-500/10 to-red-500/10 rounded-xl p-6 border border-purple-500/20 mt-6">
                <h4 className="text-xl font-bold text-purple-300 mb-4">🔧 Technical Implementation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Hardware Optimization:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Minimal memory footprint</li>
                      <li>• Low computational overhead</li>
                      <li>• Edge device compatibility</li>
                      <li>• Battery-efficient operation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Smart Filtering:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Task-specific query processing</li>
                      <li>• Navigation-focused responses</li>
                      <li>• Context-aware assistance</li>
                      <li>• Improved response relevance</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Performance Metrics */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20 mt-6">
                <h4 className="text-xl font-bold text-cyan-300 mb-4">📊 Performance Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">75%</div>
                    <div className="text-sm text-gray-300">Memory Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">90%</div>
                    <div className="text-sm text-gray-300">Accuracy Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">3x</div>
                    <div className="text-sm text-gray-300">Speed Improvement</div>
                  </div>
                </div>
              </div>
              
              {/* Project Impact */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20 mt-6">
                <h4 className="text-xl font-bold text-yellow-300 mb-4">🎯 Project Impact & Applications</h4>
                <p className="text-gray-200 leading-relaxed">
                  This project demonstrates how quantized LLMs can be deployed in real-world scenarios with minimal hardware requirements. It highlights the importance of task-specific filtering to improve response relevance and showcases the potential for deploying sophisticated AI assistance in resource-constrained environments like airport terminals, mobile devices, and embedded systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'xpci-crack-detection': () => (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-black/60 backdrop-blur-sm text-white rounded-lg hover:bg-black/80 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🔬
              </div>
              <h1 className="text-4xl font-black text-white mb-4">XPCI Crack Detection and Categorization</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-green-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Research Image */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl p-6 border border-blue-500/20">
                <img 
                  src="public/images/XPCI_Awotwi.pptx.png" 
                  alt="XPCI Crack Detection Research Presentation and Methodology"
                  className="w-full h-auto rounded-xl shadow-2xl border border-white/20"
                  style={{
                    maxHeight: '500px',
                    objectFit: 'contain'
                  }}
                />
                <p className="text-center text-gray-300 text-sm mt-4 italic">
                  XPCI crack detection methodology and YOLOv11 integration for advanced materials analysis
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Project Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This project focuses on automated crack detection in low-density and structurally complex materials subjected to mechanical stress, such as crystal quartz, Westerly granite, and boron carbide. It integrates X-ray Phase Contrast Imaging (XPCI), known for its sensitivity to subtle structural variations, with the YOLOv11 deep learning architecture for high-resolution crack localization and classification.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                Unlike conventional absorption-based X-ray imaging, XPCI exploits phase shift phenomena to reveal fine internal features, including microcracks and crack tips, with greater clarity. This integration aims to advance non-destructive evaluation techniques for early-stage damage detection in advanced materials.
              </p>
              
              {/* XPCI Technology */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                  <h4 className="text-xl font-bold text-blue-300 mb-4">🔬 XPCI Technology</h4>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    X-ray Phase Contrast Imaging provides superior sensitivity to structural variations compared to conventional absorption-based methods.
                  </p>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Phase shift phenomenon exploitation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Enhanced microcrack visibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Superior crack tip detection</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
                  <h4 className="text-xl font-bold text-green-300 mb-4">🤖 YOLOv11 Integration</h4>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    The YOLOv11 deep learning architecture is optimized for high-precision crack detection in challenging imaging environments.
                  </p>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>High-resolution crack localization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Advanced pattern classification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Noise-resistant performance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Materials Under Study */}
              <div className="bg-gradient-to-r from-purple-500/10 to-red-500/10 rounded-xl p-6 border border-purple-500/20 mt-6">
                <h4 className="text-xl font-bold text-purple-300 mb-4">🧪 Materials Under Investigation</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl mb-2">💎</div>
                    <div className="font-semibold text-white">Crystal Quartz</div>
                    <div className="text-xs text-gray-300">Low-density crystal structure</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl mb-2">🗻</div>
                    <div className="font-semibold text-white">Westerly Granite</div>
                    <div className="text-xs text-gray-300">Complex mineral composition</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="font-semibold text-white">Boron Carbide</div>
                    <div className="text-xs text-gray-300">Ultra-hard ceramic material</div>
                  </div>
                </div>
              </div>
              
              {/* Technical Approach */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20 mt-6">
                <h4 className="text-xl font-bold text-cyan-300 mb-4">🔧 Technical Methodology</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Dataset Development:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Carefully curated imaging dataset</li>
                      <li>• Manual expert annotations</li>
                      <li>• Multiple material types</li>
                      <li>• Various stress conditions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Model Optimization:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• High-precision detection algorithms</li>
                      <li>• Noise-resistant processing</li>
                      <li>• Low-contrast image handling</li>
                      <li>• Real-time analysis capabilities</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Research Impact */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20 mt-6">
                <h4 className="text-xl font-bold text-yellow-300 mb-4">🎯 Research Impact & Applications</h4>
                <p className="text-gray-200 leading-relaxed mb-4">
                  This approach relies on a carefully curated and manually annotated dataset to train and validate the model across a range of material types and stress conditions. The integration of XPCI with YOLOv11 represents a significant advancement in non-destructive evaluation techniques.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Applications:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Aerospace component inspection</li>
                      <li>• Nuclear reactor materials</li>
                      <li>• Advanced ceramic evaluation</li>
                      <li>• Research material analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Benefits:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Early-stage damage detection</li>
                      <li>• Non-destructive evaluation</li>
                      <li>• Improved material reliability</li>
                      <li>• Enhanced safety protocols</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'cyber-shield': () => (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-black/60 backdrop-blur-sm text-white rounded-lg hover:bg-black/80 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🛡️
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Cyber Shield</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-red-400 to-orange-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Research Image */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-500/20">
                <img 
                  src="public/images/CyberShield.pptx.png" 
                  alt="Cyber Shield Abusive Language Detection System Architecture"
                  className="w-full h-auto rounded-xl shadow-2xl border border-white/20"
                  style={{
                    maxHeight: '500px',
                    objectFit: 'contain'
                  }}
                />
                <p className="text-center text-gray-300 text-sm mt-4 italic">
                  Cyber Shield system architecture showcasing DistilBERT integration and QMLP pipeline for intelligent content moderation
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-300 mb-4">System Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                Cyber Shield is an advanced abusive language detection system designed to analyze user-generated text and identify harmful or inappropriate content. Built to integrate seamlessly with the Query-able Machine Learning Pipeline (QMLP), the system provides intelligent automated moderation to support safer online interactions.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                The system ingests input in JSON format, applies advanced preprocessing, and uses sophisticated word embeddings to understand context. At its core, it leverages the DistilBERT model to assess sentiment while detecting and flagging specific abusive terms through dual-level analysis.
              </p>
              
              {/* Core Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-xl p-6 border border-red-500/20">
                  <h4 className="text-xl font-bold text-red-300 mb-4">🧠 Core Technology</h4>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong>DistilBERT Model:</strong> Advanced sentiment analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong>Word Embeddings:</strong> Contextual understanding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong>Dual-Level Analysis:</strong> Content + tone assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong>JSON Integration:</strong> Seamless data processing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl p-6 border border-orange-500/20">
                  <h4 className="text-xl font-bold text-orange-300 mb-4">⚡ Processing Pipeline</h4>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span><strong>Input Processing:</strong> JSON format ingestion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span><strong>Text Preprocessing:</strong> Advanced normalization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span><strong>Context Analysis:</strong> Semantic understanding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span><strong>QMLP Integration:</strong> Scalable deployment</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Detection Capabilities */}
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20 mt-6">
                <h4 className="text-xl font-bold text-purple-300 mb-4">🔍 Detection Capabilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Content Analysis:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Abusive language identification</li>
                      <li>• Toxic content flagging</li>
                      <li>• Inappropriate term detection</li>
                      <li>• Context-aware filtering</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Sentiment Assessment:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Message tone evaluation</li>
                      <li>• Emotional context understanding</li>
                      <li>• Intent classification</li>
                      <li>• Communication pattern analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Integration Features */}
              <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl p-6 border border-blue-500/20 mt-6">
                <h4 className="text-xl font-bold text-blue-300 mb-4">🔗 QMLP Integration Benefits</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">Real-time</div>
                    <div className="text-sm text-gray-300">Processing Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">Scalable</div>
                    <div className="text-sm text-gray-300">Architecture</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">Accurate</div>
                    <div className="text-sm text-gray-300">Detection</div>
                  </div>
                </div>
              </div>
              
              {/* Applications and Impact */}
              <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-xl p-6 border border-green-500/20 mt-6">
                <h4 className="text-xl font-bold text-green-300 mb-4">🎯 Applications & Impact</h4>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Cyber Shield aims to support safer online interactions through intelligent, automated moderation. This dual-level analysis helps in both identifying toxic language and understanding the tone of communication, making it invaluable for various online platforms and communities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Use Cases:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Social media platforms</li>
                      <li>• Online gaming communities</li>
                      <li>• Educational forums</li>
                      <li>• Professional networks</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">Benefits:</h5>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      <li>• Improved user safety</li>
                      <li>• Automated content moderation</li>
                      <li>• Reduced human oversight needs</li>
                      <li>• Enhanced community standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'wheelchair-mobility': () => (
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
                ♿
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Real-Time Segmentation of the Ground Plane for Enhanced Wheelchair Mobility</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This research project addresses the critical need for enhancing mobility for wheelchair users by focusing on real-time segmentation of the ground plane while excluding obstacles. The significance lies in overcoming challenges faced by wheelchair users in navigating diverse environments.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                The objective is to develop a segmentation model within the SAM framework capable of accurately delineating the ground surface to facilitate uninterrupted movement for wheelchair users, utilizing adaptive learning algorithms and machine learning techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'ml-bench-guard': () => (
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
                📊
              </div>
              <h1 className="text-4xl font-black text-white mb-4">AI/ML Bench Guard Framework</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Project Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                AI/ML Bench Guard is a comprehensive benchmarking framework for evaluating cloud-based, LLM, and open-source machine learning services. The system conducts automated performance assessments across multiple providers, including AWS, Azure, GCP, and open-source alternatives.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                By implementing standardized testing protocols and continuous monitoring, the framework enables objective comparison of service performance, reliability, and cost-effectiveness while analyzing potential biases in model outputs.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'ai-action-recognition': () => (
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
                🎬
              </div>
              <h1 className="text-4xl font-black text-white mb-4">AI Models in Action Recognition Video Analysis</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                The CLAIRE (Cross-Referencing Labels, Actions, and Interactions for Robust Explanations) project aims to integrate YOLO detections and LLM vision to analyze video frames, cross-reference object/person–person/person interactions, and generate detailed reports of the video frame's scene.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                This research explores both the benefits and restraints of utilizing AI models in action recognition video analysis, extending to CCTV footage and everyday video recordings.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'queryable-cv': () => (
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
                🔍
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Queryable Computer Vision Pipeline</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This research aims to make video data analysis more accessible by creating a scalable architecture that allows data analysts to execute insightful SQL queries without needing advanced computer vision skills.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                The project leverages cutting-edge algorithms for object detection, tracking, and instance segmentation to develop a framework that extracts pertinent information from video content.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'crack-detection': () => (
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
                🔧
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Crack Detection and Classification in Structural Materials</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This project utilizes advanced machine learning techniques to detect cracks and structural anomalies in materials under stress. By identifying early-stage cracks, monitoring their propagation, and analyzing their orientation, we aim to improve the durability and reliability of materials commonly used in construction and engineering.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                Early detection of these defects enables proactive maintenance, reducing the risk of structural failures and ensuring long-term safety and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'multi-object-tracking': () => (
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
                🎯
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Innovative Techniques for Multi-Object Tracking in Video Analysis</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Project Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This research explores cutting-edge approaches to enhance the ability to track individuals across video frames accurately and consistently. This work focuses on creating systems that can reliably identify and follow multiple subjects, even in complex scenarios where challenges such as overlaps, occlusions, and varying movements arise.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                By leveraging innovative methodologies for detection, feature extraction, and tracking, this research aims to push the boundaries of video analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'robotic-design': () => (
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
                🤖
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Advancing Real-Time Decision-Making and Robotic Design</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
              <p className="text-gray-300 text-lg mb-4">
                <strong>Research Interests:</strong> Edge Computing, Robotics, CAD Modeling, Real-Time Decision-Making, Autonomous Systems
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                This research leverages edge computing technologies, such as the Nvidia Jetson Nano and Raspberry Pi with Google Coral TPU, to enable real-time, on-device decision-making without relying on cloud-based systems. By integrating software and hardware expertise, the research aims to optimize navigation algorithms for efficiency, accuracy, and adaptability in complex, dynamic settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'wheelchair-mobility': () => (
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
                ♿
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Ground Plane Segmentation for Wheelchair Mobility</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This research project addresses the critical need for enhancing mobility for wheelchair users by focusing on real-time segmentation of the ground plane while excluding obstacles. The significance lies in overcoming challenges faced by wheelchair users in navigating diverse environments.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                The objective is to develop a segmentation model within the SAM framework capable of accurately delineating the ground surface to facilitate uninterrupted movement for wheelchair users, utilizing adaptive learning algorithms and machine learning techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'ml-bench-guard': () => (
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
                📊
              </div>
              <h1 className="text-4xl font-black text-white mb-4">AI/ML Bench Guard Framework</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Project Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                AI/ML Bench Guard is a comprehensive benchmarking framework for evaluating cloud-based, LLM, and open-source machine learning services. The system conducts automated performance assessments across multiple providers, including AWS, Azure, GCP, and open-source alternatives.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                By implementing standardized testing protocols and continuous monitoring, the framework enables objective comparison of service performance, reliability, and cost-effectiveness while analyzing potential biases in model outputs.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'ai-action-recognition': () => (
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
                🎬
              </div>
              <h1 className="text-4xl font-black text-white mb-4">AI Models in Action Recognition Video Analysis</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                The CLAIRE (Cross-Referencing Labels, Actions, and Interactions for Robust Explanations) project aims to integrate YOLO detections and LLM vision to analyze video frames, cross-reference object/person–person/person interactions, and generate detailed reports of the video frame's scene.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                This research explores both the benefits and restraints of utilizing AI models in action recognition video analysis, extending to CCTV footage and everyday video recordings.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'queryable-cv': () => (
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
                🔍
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Queryable Computer Vision Pipeline</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This research aims to make video data analysis more accessible by creating a scalable architecture that allows data analysts to execute insightful SQL queries without needing advanced computer vision skills.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                The project leverages cutting-edge algorithms for object detection, tracking, and instance segmentation to develop a framework that extracts pertinent information from video content.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'crack-detection': () => (
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
                🔧
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Crack Detection and Classification in Structural Materials</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This project utilizes advanced machine learning techniques to detect cracks and structural anomalies in materials under stress. By identifying early-stage cracks, monitoring their propagation, and analyzing their orientation, we aim to improve the durability and reliability of materials commonly used in construction and engineering.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                Early detection of these defects enables proactive maintenance, reducing the risk of structural failures and ensuring long-term safety and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'multi-object-tracking': () => (
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
                🎯
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Innovative Techniques for Multi-Object Tracking in Video Analysis</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Project Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This research explores cutting-edge approaches to enhance the ability to track individuals across video frames accurately and consistently. This work focuses on creating systems that can reliably identify and follow multiple subjects, even in complex scenarios where challenges such as overlaps, occlusions, and varying movements arise.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                By leveraging innovative methodologies for detection, feature extraction, and tracking, this research aims to push the boundaries of video analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'robotic-design': () => (
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
                🤖
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Advancing Real-Time Decision-Making and Robotic Design</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
              <p className="text-gray-300 text-lg mb-4">
                <strong>Research Interests:</strong> Edge Computing, Robotics, CAD Modeling, Real-Time Decision-Making, Autonomous Systems
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                This research leverages edge computing technologies, such as the Nvidia Jetson Nano and Raspberry Pi with Google Coral TPU, to enable real-time, on-device decision-making without relying on cloud-based systems. By integrating software and hardware expertise, the research aims to optimize navigation algorithms for efficiency, accuracy, and adaptability in complex, dynamic settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    'awards': () => (
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
    )
  };

  if (currentView !== 'home' && ResearchComponents[currentView]) {
    const Component = ResearchComponents[currentView];
    return <Component />;
  }

  return (
    <div 
      className="min-h-screen overflow-hidden flex flex-col relative"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50" 
              style={{background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)'}}>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold transform group-hover:scale-110 transition-transform duration-300">
                  D
                </div>
                <span className="text-lg sm:text-2xl font-black text-white tracking-wide" 
                      style={{
                        textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 2px 2px 4px rgba(0,0,0,0.8)',
                        fontFamily: '"Inter", sans-serif'
                      }}>
                  DEPA Lab
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {['Home', 'About', 'Research', 'Projects', 'Awards', 'Funding', 'Publications', 'Symposium', 'Team', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/90 hover:text-blue-400 font-semibold transition-all duration-300 relative group text-sm lg:text-base" 
                  style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="text-white hover:text-blue-400 focus:outline-none p-2 rounded-lg bg-black/30 backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 sm:mt-6 pb-4 sm:pb-6 rounded-2xl" 
                 style={{background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)'}}>
              <div className="flex flex-col space-y-3 sm:space-y-5 p-4 sm:p-6">
                {['Home', 'About', 'Research', 'Projects', 'Awards', 'Funding', 'Publications', 'Symposium', 'Team', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-blue-400 font-semibold transition-colors text-base sm:text-lg" 
                    style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24">
        
        {/* Hero Section with Background Image */}
        <section id="hero" className="relative mb-8 sm:mb-16 md:mb-24 pt-8 sm:pt-12 md:pt-16 min-h-screen flex items-center overflow-hidden">
          {/* Hero Background Image */}
          <div 
            className="absolute inset-0 z-0 transform scale-105"
            style={{
              backgroundImage: 'url(images/depa2.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
          />
          
          {/* Animated Background Particles */}
          <div className="absolute inset-0 z-5">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-300/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-purple-300/50 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-blue-500/70 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Dynamic Gradient Overlay */}
          <div 
            className="absolute inset-0 z-10"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(0,0,0,0.85) 0%, 
                  rgba(26,26,46,0.75) 25%, 
                  rgba(15,52,96,0.65) 50%,
                  rgba(26,26,46,0.75) 75%, 
                  rgba(0,0,0,0.85) 100%
                ),
                radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
              `
            }}
          />
          
          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 w-full">
            
            {/* Animated Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
              <div className="flex items-center gap-2 sm:gap-4 animate-pulse">
                <div className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 bg-blue-400 rounded-full animate-ping shadow-lg" 
                     style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'}}></div>
                <span className="text-blue-300 uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-lg font-black px-4 py-2 rounded-full border border-blue-400/30 backdrop-blur-sm bg-blue-400/10" 
                      style={{
                        textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 2px 2px 4px rgba(0,0,0,0.9)',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.1em'
                      }}>
                  🔬 Driving Innovation at the Intersection of Technology and Impact
                </span>
                <div className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 bg-blue-400 rounded-full animate-ping shadow-lg" 
                     style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'}}></div>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-6 sm:mb-8 md:mb-12 leading-[0.9] tracking-tight px-2"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e8f4ff 30%, #ffffff 60%, #e8f4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(59, 130, 246, 0.3)',
                  filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.9))'
                }}>
              Welcome to{' '}
              <span className="block mt-2 sm:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 relative"
                    style={{
                      textShadow: 'none',
                      filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))',
                      animation: 'glow 3s ease-in-out infinite alternate'
                    }}>
                DEPA Research Lab
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/20 via-purple-400/20 to-blue-500/20 rounded-lg blur-xl animate-pulse"></div>
              </span>
            </h1>
            
            {/* Enhanced Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-4">
              <a 
                href="#research" 
                className="w-full sm:w-auto group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/40 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explore Our Research
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              <a 
                href="#projects" 
                className="w-full sm:w-auto group px-8 py-4 bg-transparent border-2 border-white/30 hover:border-blue-400 text-white hover:text-blue-300 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 backdrop-blur-sm hover:bg-blue-400/10 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  View Projects
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </a>
            </div>
            
            {/* Stats or Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300" 
                     style={{textShadow: '0 0 20px rgba(59, 130, 246, 0.6)'}}>
                  50+
                </div>
                <div className="text-gray-300 font-medium">Research Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300" 
                     style={{textShadow: '0 0 20px rgba(147, 51, 234, 0.6)'}}>
                  10+
                </div>
                <div className="text-gray-300 font-medium">Team Members</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300" 
                     style={{textShadow: '0 0 20px rgba(59, 130, 246, 0.6)'}}>
                  7
                </div>
                <div className="text-gray-300 font-medium">Research Areas</div>
              </div>
            </div>
            
            <div className="h-1 sm:h-2 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full shadow-2xl animate-pulse"
                 style={{boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'}}></div>
            
            {/* Enhanced Floating Elements */}
            <div className="hidden lg:block absolute top-1/4 left-1/12 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-bounce border border-blue-400/20"></div>
            <div className="hidden lg:block absolute bottom-1/4 right-1/12 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse border border-purple-400/20"></div>
            <div className="hidden lg:block absolute top-1/2 left-1/6 w-16 h-16 bg-blue-400/15 rounded-full blur-xl animate-ping"></div>
            <div className="hidden xl:block absolute top-1/3 right-1/6 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse border border-purple-400/30"></div>
          </div>
          
          {/* Enhanced Scroll Down Indicator */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-blue-400 transition-colors duration-300">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse group-hover:bg-blue-400"></div>
              </div>
              <span className="text-white/60 text-xs mt-2 group-hover:text-blue-400 transition-colors duration-300">Scroll</span>
            </div>
          </div>
        </section>

        {/* About Section */}
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

        {/* Research Areas Section - Redesigned with Carousel */}
        <section id="research" className="mb-12 sm:mb-16 md:mb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 md:mb-10 text-center animate-fadeInUp" 
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
                  fontFamily: '"Inter", sans-serif'
                }}>
              Core Research{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
                Areas
              </span>
            </h2>
            
            {/* Research Areas Carousel */}
            <div className="relative max-w-7xl mx-auto">
              {/* Navigation Arrows */}
              <button 
                onClick={() => {
                  const container = document.getElementById('research-carousel');
                  container.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 transform hover:scale-110 shadow-2xl border border-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => {
                  const container = document.getElementById('research-carousel');
                  container.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 transform hover:scale-110 shadow-2xl border border-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel Container */}
              <div 
                id="research-carousel"
                className="flex overflow-x-auto gap-6 pb-4 px-12 scrollbar-hide"
                style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
              >
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex-shrink-0 w-80 group transform hover:scale-105 transition-all duration-500 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl h-full hover:border-blue-500/40 hover:shadow-blue-500/20 transition-all duration-500 group-hover:bg-black/50">
                      <div className="text-4xl sm:text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 text-center">
                        {area.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 text-center" 
                          style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        {area.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center" 
                         style={{
                           textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                           fontFamily: '"Inter", sans-serif'
                         }}>
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicator Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: Math.ceil(researchAreas.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const container = document.getElementById('research-carousel');
                      container.scrollTo({ left: index * 1200, behavior: 'smooth' });
                    }}
                    className="w-3 h-3 rounded-full bg-white/30 hover:bg-blue-400 transition-all duration-300 transform hover:scale-125"
                  />
                ))}
              </div>
            </div>

            {/* Research Excellence Badge */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-300 rounded-full font-bold backdrop-blur-sm text-sm">
                <i className="fas fa-microscope mr-2"></i>
                7 Cutting-Edge Research Domains
                <i className="fas fa-brain ml-2"></i>
              </div>
            </div>

            {/* Navigation Hint */}
            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-white/10">
                <svg className="w-4 h-4 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="text-xs text-gray-300 font-medium">Use arrows to explore all research areas</span>
                <svg className="w-4 h-4 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Updated with Links */}
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

        {/* Awards Section */}
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

        {/* Funding & Grants Section */}
        <section id="funding" className="mb-16 sm:mb-24 md:mb-32">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 text-center" 
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
                  fontFamily: '"Inter", sans-serif'
                }}>
              Current{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500">
                Funding & Grants
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-200 text-center mb-8 sm:mb-12 max-w-4xl mx-auto"
               style={{
                 textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              Supporting cutting-edge research through strategic funding and partnerships.
            </p>

            {/* Main Grant Card */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden">
                
                {/* Grant Amount Badge */}
                <div className="absolute top-6 right-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-2xl animate-pulse">
                    <div className="text-center">
                      <div className="text-xs">$545K</div>
                      <div className="text-xs">Grant</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Grant Icon & Basic Info */}
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-6xl shadow-2xl mx-auto lg:mx-0 mb-6">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      Cybersecurity AI Research Grant
                    </h3>
                    <div className="space-y-2 mb-6">
                      <span className="block px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-lg font-semibold border border-emerald-500/30">
                        $545,589.00
                      </span>
                      <span className="block px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm font-semibold border border-teal-500/30">
                        Aug 2025 - Aug 2026
                      </span>
                    </div>
                  </div>
                  
                  {/* Grant Details */}
                  <div className="lg:col-span-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-emerald-300 mb-4">
                      Project Title: "Evaluating AI-Assisted Cybersecurity Operations"
                    </h4>
                    
                    <h5 className="text-lg font-semibold text-white mb-4">
                      Comparative Analysis of Human Performance with and without AI Tools
                    </h5>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-gray-200 leading-relaxed text-lg" 
                         style={{
                           textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                           fontFamily: '"Inter", sans-serif'
                         }}>
                        This project systematically evaluates the impact of Artificial Intelligence assistance on human performance in critical cybersecurity tasks, including <span className="text-emerald-300 font-semibold">vulnerability detection, phishing identification, exploit mitigation, and network anomaly detection.</span>
                      </p>
                      
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6">
                        <h6 className="text-lg font-semibold text-emerald-300 mb-3">Key Research Questions:</h6>
                        <ul className="text-gray-200 space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>How does AI assistance influence task efficiency, accuracy, and error rates compared to manual and traditional tools?</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>What are the cognitive impacts of AI assistance on cybersecurity professionals?</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>In what scenarios does AI provide the greatest operational benefit, and where might it introduce risks?</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Research Methodology */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4">
                        <h6 className="font-semibold text-teal-300 mb-2">Study Design</h6>
                        <ul className="text-gray-200 text-sm space-y-1">
                          <li>• 30 Cybersecurity Professionals</li>
                          <li>• Controlled Experimental Design</li>
                          <li>• Three Testing Conditions</li>
                          <li>• Statistical Analysis (ANOVA)</li>
                        </ul>
                      </div>
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                        <h6 className="font-semibold text-emerald-300 mb-2">AI Models Tested</h6>
                        <ul className="text-gray-200 text-sm space-y-1">
                          <li>• GPT-4 Integration</li>
                          <li>• Claude 3.5 Testing</li>
                          <li>• Frontier Model Analysis</li>
                          <li>• Performance Benchmarking</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-4">
                      <p className="text-emerald-200 font-medium">
                        <i className="fas fa-target mr-2"></i>
                        <strong>Expected Impact:</strong> This research will inform best practices for deploying AI technologies responsibly in cybersecurity, ensuring they enhance human capabilities while maintaining operational safety and trustworthiness.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 opacity-10">
                  <div className="text-8xl text-emerald-400">🔬</div>
                </div>
                <div className="absolute top-1/4 right-1/4 opacity-5">
                  <div className="text-6xl text-teal-400">🛡️</div>
                </div>
              </div>
            </div>

            {/* Research Impact Statement */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 border border-emerald-500/30 text-emerald-300 rounded-full font-bold backdrop-blur-sm text-lg">
                <i className="fas fa-chart-line mr-3"></i>
                Advancing Cybersecurity Through AI Research Excellence
                <i className="fas fa-shield-alt ml-3"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
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
              {/* Publication 1 */}
              <div className="group transform hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl h-full hover:border-green-500/40 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl shadow-xl">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300" 
                          style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        AI/ML Systems Engineering Workbench Framework
                      </h3>
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-500/30 mb-3">
                        IEEE CISS
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-green-300 font-semibold">Authors: </span>
                      <span className="text-gray-200">Dr. Kofi Nyarko, Emmanual Masa-Ibi</span>
                    </div>
                    <div>
                      <span className="text-green-300 font-semibold">Published in: </span>
                      <span className="text-gray-200">Conference on Information Sciences and Systems (CISS)</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://ieeexplore.ieee.org/document/10089781/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Publication 2 */}
              <div className="group transform hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl h-full hover:border-green-500/40 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl shadow-xl">
                      <i className="fas fa-video"></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300" 
                          style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        Automated Traffic Video Analysis with a Modular Computer Vision Pipeline
                      </h3>
                      <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold border border-orange-500/30 mb-3">
                        Paper Accepted
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-green-300 font-semibold">Authors: </span>
                      <span className="text-gray-200">Tasmeer Alam, Dr. Kofi Nyarko</span>
                    </div>
                    <div>
                      <span className="text-green-300 font-semibold">Published in: </span>
                      <span className="text-gray-200">Conference on Information Sciences and Systems (CISS)</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-gray-500/20 text-gray-300 rounded-lg font-semibold border border-gray-500/30">
                    <i className="fas fa-clock mr-2"></i>
                    Yet to be public
                  </div>
                </div>
              </div>

              {/* Publication 3 */}
              <div className="group transform hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl h-full hover:border-green-500/40 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl shadow-xl">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300" 
                          style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        Network Intrusion Visualization with NIVA
                      </h3>
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-500/30 mb-3">
                        IEEE Haptic Symposium
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-green-300 font-semibold">Authors: </span>
                      <span className="text-gray-200">Kofi Nyarko, Tanya Capers, Craig Scott, Kemi Ladeji-Osias</span>
                    </div>
                    <div>
                      <span className="text-green-300 font-semibold">Published in: </span>
                      <span className="text-gray-200">10th Symposium on Haptic Interfaces for Virtual Environment</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://ieeexplore.ieee.org/abstract/document/998969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Publication 4 */}
              <div className="group transform hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl h-full hover:border-green-500/40 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl shadow-xl">
                      <i className="fas fa-building"></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300" 
                          style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        Cloud Based Passive Building Occupancy Characterization
                      </h3>
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-500/30 mb-3">
                        IEEE HST
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-green-300 font-semibold">Authors: </span>
                      <span className="text-gray-200">Kofi Nyarko, Cecelia Wright-Brown</span>
                    </div>
                    <div>
                      <span className="text-green-300 font-semibold">Published in: </span>
                      <span className="text-gray-200">IEEE International Conference on Technologies for Homeland Security</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://ieeexplore.ieee.org/abstract/document/6699097"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
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

        {/* Symposium Section */}
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

        {/* Team Section */}
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

        {/* Contact Section */}
        <section id="contact" className="mb-16 sm:mb-24 md:mb-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8" 
                  style={{
                    textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
                    fontFamily: '"Inter", sans-serif'
                  }}>
                Contact{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
                  Us
                </span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl text-gray-200" 
                   style={{
                     textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                     fontFamily: '"Inter", sans-serif'
                   }}>
                  <span className="text-blue-300 font-semibold">Email:</span>{' '}
                  <a href="mailto:kofi.nyarko@morgan.edu" className="text-white hover:text-blue-300 transition-colors duration-300 underline">
                    kofi.nyarko@morgan.edu
                  </a>
                </p>
                
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed" 
                   style={{
                     textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                     fontFamily: '"Inter", sans-serif'
                   }}>
                  <span className="text-blue-300 font-semibold">Address:</span> Room 112 and 113 Schaefer Engineering Building, School of Engineering, 1700 E Cold Spring Ln, Baltimore, MD 21251
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'}} 
              className="text-white py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                D
              </div>
              <span className="text-2xl font-black" 
                    style={{
                      textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 2px 2px 4px rgba(0,0,0,0.8)',
                      fontFamily: '"Inter", sans-serif'
                    }}>
                DEPA Research Lab
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto"
               style={{
                 textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              Data Engineering and Predictive Analytics Lab at Morgan State University
            </p>
            
            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-300" 
                 style={{
                   textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                   fontFamily: '"Inter", sans-serif'
                 }}>
                © {new Date().getFullYear()} DEPA Research Lab. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.8)); }
          50% { filter: drop-shadow(0 0 60px rgba(59, 130, 246, 1)); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        /* Enhanced scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6));
          border-radius: 10px;
          border: 2px solid rgba(0, 0, 0, 0.1);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8));
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Responsive text scaling */
        @media (max-width: 640px) {
          .hero-title {
            font-size: clamp(2rem, 8vw, 3rem);
          }
          .hero-subtitle {
            font-size: clamp(1rem, 4vw, 1.25rem);
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .hero-title {
            font-size: clamp(3rem, 6vw, 4rem);
          }
          .hero-subtitle {
            font-size: clamp(1.25rem, 3vw, 1.5rem);
          }
        }
        
        @media (min-width: 1025px) {
          .hero-title {
            font-size: clamp(4rem, 5vw, 6rem);
          }
          .hero-subtitle {
            font-size: clamp(1.5rem, 2vw, 2rem);
          }
        }
        
        /* Background parallax effect for larger screens */
        @media (min-width: 1024px) {
          #hero .absolute.inset-0.z-0 {
            transform: scale(1.1);
            transition: transform 0.3s ease-out;
          }
        }
        
        /* Enhanced button hover effects */
        .btn-primary {
          position: relative;
          overflow: hidden;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        /* Glass morphism effect */
        .glass {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
        }
        
        /* Enhanced mobile responsiveness */
        @media (max-width: 475px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .hero-content {
            padding: 0 0.5rem;
          }
        }
        
        /* Improved accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-ping,
          .animate-pulse,
          .animate-bounce,
          .animate-spin {
            animation: none;
          }
        }

        /* Hide scrollbar for horizontal scroll */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Smooth horizontal scrolling */
        .scrollbar-hide {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default DepaLabHomepage;
