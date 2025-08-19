import React, { useState, useEffect } from 'react';

const DepaLabHomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const presentTeamMembers = [
  { name: "Dr. Kofi Nyarko", role: "Director of DEPA Lab", image: "nyarko.jpg" },
  { name: "Cynthia Nosiri", role: "AI Researcher", image: "Cynthia.jpeg" },
  { name: "Derrick Cook", role: "AI Researcher", image: "Derrick_Cook.PNG" },
  { name: "Rezoan Sultan", role: "Generative AI Researcher", image: "Rezoan_Sultan.jpeg" },
  { name: "Benjamin Hall", role: "Researcher", image: "Benjamin Hall.jpg" },
  { name: "Emmanuel Masa-ibi", role: "Researcher", image: "Emmanuel Masa-ibi.jpeg" },
  { name: "Awotwi Baffoe", role: "AI Researcher", image: "Awotwi_Baffoe.jpg" },
  { name: "Opeyemi Adeniran", role: "AI Researcher", image: "Opeyemi.PNG" },
  { name: "Anjolie Anthony", role: "Researcher", image: "Anjolie.JPG" },
  { name: "Binisa Giri", role: "AI Researcher", image: "Binisa_Giri.jpeg" },
  { name: "Nicholas Cook", role: "AI Researcher", image: "NicholasCook.jpg" },
  { name: "Temitope Ajibola", role: "Researcher", image: "Temi.JPG" },
  { name: "David Nyarko", role: "Researcher", image: "david-nyarko.JPG" },
];

const pastTeamMembers = [
  { name: "Ekata Dhital", role: "Research Assistant", image: "Ekata Dhital.JPG" },
  { name: "Tasmeer Alam", role: "AI Researcher", image: "Tasmeer_Alam.jpeg" },
];

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

  // Updated projects with new research content
  const projects = [
    {
      title: "XPCI Crack Detection and Categorization",
      description: "Automated crack detection in low-density materials using X-ray Phase Contrast Imaging (XPCI) with YOLOv11 deep learning architecture.",
      link: "xpci-crack-detection",
      icon: "🔬"
    },
    {
      title: "MSU AI Academic Advisor",
      description: "Multi-step agent pipeline leveraging transformer-based LLMs fine-tuned with human feedback for personalized academic guidance.",
      link: "msu-ai-advisor",
      icon: "🎓"
    },
    {
      title: "Cyber Shield",
      description: "Abusive language detection system using DistilBERT model to assess sentiment and detect harmful content in user-generated text.",
      link: "cyber-shield",
      icon: "🛡️"
    },
    {
      title: "Benchmarking LLMs for AAVE & SAE",
      description: "Research investigating how large language models handle different English dialects, focusing on African American Vernacular English versus Standard American English.",
      link: "llm-benchmarking",
      icon: "🗣️"
    },
    {
      title: "Quantized LLM for Airport Navigation",
      description: "Lightweight language model system using quantized LLMs for efficient performance on limited hardware for airport assistance.",
      link: "quantized-llm-navigation",
      icon: "✈️"
    },
    {
      title: "Vision-based Autonomous Drone Object Tracking",
      description: "Autonomous wheelchair system with follower drone for luggage tracking using person re-identification and real-time object tracking.",
      link: "drone-tracking-system",
      icon: "🚁"
    },
    {
      title: "AI/ML Bench Guard",
      description: "Comprehensive benchmarking framework for evaluating cloud-based, LLM, and open-source machine learning services.",
      link: "ml-bench-guard",
      icon: "📊"
    },
    {
      title: "Multimodal LLMs for Forensic Video Analysis",
      description: "Investigating prompting strategies in multimodal large language models for human-aligned forensic video analysis applications.",
      link: "forensic-video-analysis",
      icon: "🎬"
    },
    {
      title: "Smart Contract Reentrancy Detection",
      description: "Automated detection of reentrancy vulnerabilities in smart contracts using hybrid feature engineering approach.",
      link: "smart-contract-detection",
      icon: "⛓️"
    }
  ];

  // Research Components with new content
  const ResearchComponents = {
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
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🔬
              </div>
              <h1 className="text-4xl font-black text-white mb-4">XPCI Crack Detection and Categorization</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Research Video */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-xl font-bold text-purple-300 mb-4 text-center">Research Demonstration Video</h4>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎥</div>
                    <h4 className="text-xl font-bold text-white mb-2">XPCI Research Demo</h4>
                    <p className="text-gray-300">Video demonstration available</p>
                    <a 
                      href="https://www.youtube.com/watch?v=a2RgwtP6pHg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-300"
                    >
                      <i className="fab fa-youtube mr-2"></i>
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Research Overview</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                This project focuses on automated crack detection in low-density and structurally complex materials subjected to mechanical stress, such as crystal quartz, Westerly granite, and boron carbide. It integrates X-ray Phase Contrast Imaging (XPCI), known for its sensitivity to subtle structural variations, with the YOLOv11 deep learning architecture for high-resolution crack localization and classification.
              </p>
              <p className="text-gray-200 leading-relaxed text-lg">
                Unlike conventional absorption-based X-ray imaging, XPCI exploits phase shift phenomena to reveal fine internal features, including microcracks and crack tips, with greater clarity. The approach relies on a carefully curated and manually annotated dataset to train and validate the model across a range of material types and stress conditions.
              </p>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20 mt-6">
                <h4 className="text-xl font-bold text-purple-300 mb-4">Key Features</h4>
                <ul className="text-gray-200 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>YOLOv11 model optimized for crack pattern detection and categorization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>High precision detection in noisy or low-contrast XPCI environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Advanced non-destructive evaluation for early-stage damage detection</span>
                  </li>
                </ul>
              </div>
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
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-8 text-center">
              Awards and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                Recognitions
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 text-center mb-12 max-w-3xl mx-auto">
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
                  <h2 className="text-3xl font-bold text-white mb-4">
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
                  
                  <p className="text-gray-200 leading-relaxed text-lg mb-6">
                    The DEPA Lab achieved first place at the Morgan TechFest 2024 Innovation Expo with groundbreaking research in autonomous wheelchair navigation. This AI-driven system integrates advanced technologies including Ultralytics YOLOv8, QR Code navigation, LiDAR, and computer vision cameras to enhance mobility in crowded environments like airports.
                  </p>
                </div>
              </div>
            </div>

            {/* Awotwi Baffoe Top Poster Award */}
            <div className="group transform hover:scale-105 transition-all duration-500 lg:col-span-2 xl:col-span-3 mb-8">
              <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden">
                
                {/* Award Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl animate-pulse">
                    🏆
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  {/* Award Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                      <i className="fas fa-chart-line"></i>
                    </div>
                  </div>
                  
                  {/* Award Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      Top Poster Award - MSEE Annual Technical Review 2025
                    </h3>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
                        Johns Hopkins University
                      </span>
                      <span className="inline-block ml-2 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
                        Washington, D.C.
                      </span>
                    </div>
                    
                    <p className="text-blue-300 font-semibold mb-3">
                      Award Winner: Awotwi Baffoe
                    </p>
                    
                    <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 mb-4">
                      Awotwi Baffoe was recognized as one of the <span className="text-blue-300 font-semibold">top poster award recipients</span> at the MSEE (Material Science in Extreme Environment) Annual Technical Review 2025. The award-winning poster showcased groundbreaking research on automated crack detection in low-density, structurally complex materials under stress using the <span className="text-blue-300 font-semibold">YOLOv11 deep learning model and X-ray Phase Contrast Imaging (XPCI)</span> dataset.
                    </p>
                    
                    {/* Research Materials */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
                      <h6 className="font-semibold text-blue-300 mb-2">Materials Studied:</h6>
                      <div className="flex flex-wrap gap-2">
                        {['Quartz Crystal', 'Pink Westerly Granite', 'Boron Carbide'].map((material) => (
                          <span 
                            key={material} 
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium border border-purple-500/30"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg p-4">
                      <p className="text-blue-200 font-medium">
                        <i className="fas fa-microscope mr-2"></i>
                        <strong>Research Impact:</strong> This innovative approach advances non-destructive evaluation techniques for early-stage damage detection in critical materials, contributing significantly to materials science in extreme environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MIT Hack the Climate Hackathon First Place Award */}
            <div className="group transform hover:scale-105 transition-all duration-500 lg:col-span-2 xl:col-span-3 mb-8">
              <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:border-green-500/40 transition-all duration-300 relative overflow-hidden">
                
                {/* Award Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl animate-pulse">
                    🥇
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  {/* Award Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                      <i className="fas fa-leaf"></i>
                    </div>
                  </div>
                  
                  {/* Award Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                      First Place - MIT Hack the Climate Hackathon
                    </h3>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-500/30">
                        MIT RAISE AI & Education Summit
                      </span>
                      <span className="inline-block ml-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-semibold border border-emerald-500/30">
                        July 2025
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-green-300 mb-2">Winning Team Members:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30">
                          Kianna Spencer (CECE Lab)
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30">
                          Koby Nyarkon (DEPA Lab)
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30">
                          Jamal Williamson (CECE Lab)
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-emerald-300 mb-3">
                      Project: ThermaWise
                    </h4>
                    
                    <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 mb-4">
                      A team of CEAMLS students claimed <span className="text-green-300 font-semibold">first place</span> at the prestigious MIT Hack the Climate Hackathon. The winning team developed <span className="text-emerald-300 font-semibold">ThermaWise</span>, a powerful AI-powered platform that delivers creative, data-driven energy-saving strategies rooted in passive design and building science.
                    </p>
                    
                    {/* Project Features */}
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4 mb-4">
                      <h6 className="font-semibold text-green-300 mb-2">ThermaWise Key Features:</h6>
                      <ul className="text-gray-200 space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>AI-powered energy optimization algorithms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>Data-driven passive design recommendations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span>Building science integration for sustainable solutions</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-emerald-500/10 to-green-600/10 border border-emerald-500/20 rounded-lg p-4">
                      <p className="text-emerald-200 font-medium">
                        <i className="fas fa-globe-americas mr-2"></i>
                        <strong>Climate Impact:</strong> ThermaWise represents a significant advancement in sustainable building technology, combining artificial intelligence with proven building science principles to create actionable solutions for climate change mitigation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Datathon '25 First and Third Place Awards */}
            <div className="group transform hover:scale-105 transition-all duration-500 lg:col-span-2 xl:col-span-3">
              <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden">
                
                {/* Award Badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-lg shadow-2xl animate-pulse">
                    🥇
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-lg shadow-2xl animate-pulse">
                    🥉
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  {/* Award Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                      <i className="fas fa-chart-bar"></i>
                    </div>
                  </div>
                  
                  {/* Award Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      First & Third Place - Datathon '25
                    </h3>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold border border-cyan-500/30">
                        HITI Lab
                      </span>
                      <span className="inline-block ml-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
                        Emory University School of Medicine
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-cyan-300 mb-2">Award-Winning Team Members:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-lg text-sm font-medium border border-yellow-500/30">
                          David Nyarko (DEPA Lab)
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30">
                          Cynthia Nosiri (DEPA Lab)
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-medium border border-cyan-500/30">
                          Team Members
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-sm">
                            🥇
                          </div>
                          <h5 className="font-semibold text-yellow-300">First Place</h5>
                        </div>
                        <p className="text-gray-200 text-sm">Outstanding data analysis and innovative solution delivery</p>
                      </div>
                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-sm">
                            🥉
                          </div>
                          <h5 className="font-semibold text-orange-300">Third Place</h5>
                        </div>
                        <p className="text-gray-200 text-sm">Exceptional teamwork and technical implementation</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 mb-4">
                      The DEPA Lab team achieved remarkable success at <span className="text-cyan-300 font-semibold">Datathon '25</span>, securing both <span className="text-yellow-300 font-semibold">first place and third place</span> in the prestigious competition organized by HITI Lab at Emory University School of Medicine. This outstanding performance demonstrates the team's exceptional data science capabilities and innovative problem-solving skills in healthcare analytics.
                    </p>
                    
                    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-4">
                      <p className="text-cyan-200 font-medium">
                        <i className="fas fa-stethoscope mr-2"></i>
                        <strong>Healthcare Impact:</strong> This dual achievement highlights DEPA Lab's excellence in applying advanced data science techniques to solve complex healthcare challenges, contributing to the advancement of medical research and patient care.
                      </p>
                    </div>
                  </div>
                </div>
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
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-8 text-center">
              CEAMLS Research{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500">
                Symposium 2025
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 text-center mb-12 max-w-4xl mx-auto">
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
                      <h2 className="text-3xl font-bold text-white">
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
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-8 text-center">
              Awards and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                Recognitions
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 text-center mb-12 max-w-3xl mx-auto">
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
                  <h2 className="text-3xl font-bold text-white mb-4">
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
                  
                  <p className="text-gray-200 leading-relaxed text-lg mb-6">
                    The DEPA Lab achieved first place at the Morgan TechFest 2024 Innovation Expo with groundbreaking research in autonomous wheelchair navigation. This AI-driven system integrates advanced technologies including Ultralytics YOLOv8, QR Code navigation, LiDAR, and computer vision cameras to enhance mobility in crowded environments like airports.
                  </p>
                </div>
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
        background: 'linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50" 
              style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 50%, transparent 100%)'}}>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center group">
                <img 
                  src="/depa-lab/images/DEPA-logo.png"
                  alt="DEPA Lab Logo"
                  className="h-8 sm:h-10 md:h-12 w-auto mr-2 sm:mr-4 transform group-hover:scale-110 transition-transform duration-300"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5)) drop-shadow(2px 2px 4px rgba(0,0,0,0.8))'
                  }}
                />
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {['Home', 'About', 'Research', 'Projects', 'Awards', 'Funding', 'Publications', 'Symposium', 'Team', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-black hover:text-blue-600 font-semibold transition-all duration-300 relative group text-sm lg:text-base" 
                  style={{textShadow: '1px 1px 2px rgba(255,255,255,0.3)'}}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="text-black hover:text-blue-600 focus:outline-none p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-300 transition-all duration-300"
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
                 style={{background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(0,0,0,0.1)', backdropFilter: 'blur(20px)'}}>
              <div className="flex flex-col space-y-3 sm:space-y-5 p-4 sm:p-6">
                {['Home', 'About', 'Research', 'Projects', 'Awards', 'Funding', 'Publications', 'Symposium', 'Team', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-black hover:text-blue-600 font-semibold transition-colors text-base sm:text-lg" 
                    style={{textShadow: '1px 1px 2px rgba(255,255,255,0.3)'}}
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
        
        {/* Hero Section - Blue Background */}
        <section id="hero" className="relative mb-0 pt-8 sm:pt-12 md:pt-16 min-h-screen flex items-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)'
          }}>
          
          {/* Hero Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/depa-lab/images/depa2.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: '0.2'
            }}
          />
          
          {/* Dark Overlay for Text Readability */}
          <div 
            className="absolute inset-0 z-5"
            style={{
              background: 'linear-gradient(135deg, rgba(29,78,216,0.8) 0%, rgba(37,99,235,0.7) 50%, rgba(59,130,246,0.8) 100%)'
            }}
          />
          
          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 w-full">
            
            {/* Animated Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
              <div className="flex items-center gap-2 sm:gap-4 animate-pulse">
                <div className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 bg-blue-200 rounded-full animate-ping shadow-lg" 
                     style={{boxShadow: '0 0 20px rgba(191, 219, 254, 0.8)'}}></div>
                <span className="text-blue-100 uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-lg font-black px-4 py-2 rounded-full border border-blue-200/30 backdrop-blur-sm bg-blue-200/10" 
                      style={{
                        textShadow: '0 0 20px rgba(191, 219, 254, 0.8), 2px 2px 4px rgba(0,0,0,0.9)',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.1em'
                      }}>
                  🔬 Driving Innovation at the Intersection of Technology and Impact
                </span>
                <div className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 bg-blue-200 rounded-full animate-ping shadow-lg" 
                     style={{boxShadow: '0 0 20px rgba(191, 219, 254, 0.8)'}}></div>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-6 sm:mb-8 md:mb-12 leading-[0.9] tracking-tight px-2"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  color: 'white',
                  textShadow: '0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(191, 219, 254, 0.3)',
                  filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.9))'
                }}>
              Welcome to{' '}
              <span className="block mt-2 sm:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-200 relative"
                    style={{
                      textShadow: 'none',
                      filter: 'drop-shadow(0 0 30px rgba(191, 219, 254, 0.8))',
                      animation: 'glow 3s ease-in-out infinite alternate'
                    }}>
                DEPA Research Lab
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100/20 via-white/20 to-blue-200/20 rounded-lg blur-xl animate-pulse"></div>
              </span>
            </h1>
            
            {/* Enhanced Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-4">
              <a 
                href="#research" 
                className="w-full sm:w-auto group px-8 py-4 bg-gradient-to-r from-white to-blue-100 hover:from-blue-50 hover:to-white text-blue-600 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-white/40 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explore Our Research
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a 
                href="#projects" 
                className="w-full sm:w-auto group px-8 py-4 bg-transparent border-2 border-white/50 hover:border-white text-white hover:text-blue-100 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10 relative overflow-hidden"
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
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-100 mb-2 group-hover:scale-110 transition-transform duration-300" 
                     style={{textShadow: '0 0 20px rgba(191, 219, 254, 0.6)'}}>
                  50+
                </div>
                <div className="text-blue-200 font-medium">Research Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-100 mb-2 group-hover:scale-110 transition-transform duration-300" 
                     style={{textShadow: '0 0 20px rgba(191, 219, 254, 0.6)'}}>
                  13+
                </div>
                <div className="text-blue-200 font-medium">Team Members</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-100 mb-2 group-hover:scale-110 transition-transform duration-300" 
                     style={{textShadow: '0 0 20px rgba(191, 219, 254, 0.6)'}}>
                  7
                </div>
                <div className="text-blue-200 font-medium">Research Areas</div>
              </div>
            </div>
            
            <div className="h-1 sm:h-2 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-blue-200 to-white mx-auto rounded-full shadow-2xl animate-pulse"
                 style={{boxShadow: '0 0 40px rgba(191, 219, 254, 0.6)'}}></div>
          </div>
          
          {/* Enhanced Scroll Down Indicator */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center group-hover:border-blue-200 transition-colors duration-300">
                <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse group-hover:bg-blue-200"></div>
              </div>
              <span className="text-white/80 text-xs mt-2 group-hover:text-blue-200 transition-colors duration-300">Scroll</span>
            </div>
          </div>
        </section>

        {/* About Section - White Background */}
        <section id="about" className="py-16 sm:py-20 md:py-28 lg:py-32"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)'
          }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-gray-200 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center animate-fadeInUp" 
                  style={{
                    textShadow: '0 0 30px rgba(0,0,0,0.1), 3px 3px 6px rgba(0,0,0,0.1)',
                    fontFamily: '"Inter", sans-serif'
                  }}>
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-orange-500 to-blue-700">
                  DEPA Lab
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed font-light mb-8 sm:mb-12 lg:mb-16 text-center max-w-6xl mx-auto px-2" 
                 style={{
                   textShadow: '1px 1px 3px rgba(255,255,255,0.5)',
                   fontFamily: '"Inter", sans-serif'
                 }}>
                The <span className="text-blue-600 font-semibold">Data Engineering and Predictive Analytics Lab (DEPA Lab)</span> at Morgan State University, led by Dr. Kofi Nyarko, is dedicated to unraveling the intricacies of complex systems and providing transformative insights. DEPA Lab focuses on applied research in Computer Vision, Machine Learning, and Artificial Intelligence Techniques.
              </p>

              {/* Mission and Vision Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                
                {/* Mission Card */}
                <div className="group transform hover:scale-105 transition-all duration-500 animate-fadeInUp">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-200 shadow-2xl h-full hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-500">
                    <div className="flex items-center mb-6 lg:mb-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl mr-4 lg:mr-6 shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                        🎯
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black" 
                          style={{
                            textShadow: '0 0 20px rgba(255,255,255,0.5), 2px 2px 4px rgba(255,255,255,0.3)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        Our Mission
                      </h3>
                    </div>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed font-light" 
                       style={{
                         textShadow: '1px 1px 3px rgba(255,255,255,0.5)',
                         fontFamily: '"Inter", sans-serif'
                       }}>
                      We develop innovative machine learning models and algorithms for near real-time data collection, transformation, analysis, prediction, and visualization. DEPA Lab promotes <span className="text-blue-600 font-semibold">inclusivity and innovation</span> in data engineering and predictive analytics.
                    </p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="group transform hover:scale-105 transition-all duration-500 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-purple-200 shadow-2xl h-full hover:border-purple-400 hover:shadow-purple-500/20 transition-all duration-500">
                    <div className="flex items-center mb-6 lg:mb-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl mr-4 lg:mr-6 shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                        🚀
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black" 
                          style={{
                            textShadow: '0 0 20px rgba(255,255,255,0.5), 2px 2px 4px rgba(255,255,255,0.3)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        Our Vision
                      </h3>
                    </div>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed font-light" 
                       style={{
                         textShadow: '1px 1px 3px rgba(255,255,255,0.5)',
                         fontFamily: '"Inter", sans-serif'
                       }}>
                      The Center for Equitable AI and Machine Learning Systems (CEAMLS) facilitates the development and deployment of <span className="text-orange-600 font-semibold">socially responsible and equitable AI systems</span>, ensuring they benefit everyone while educating the public about their impacts on health, prosperity, and happiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas Section - Orange Background */}
        <section id="research" className="py-16 sm:py-20 md:py-24"
          style={{
            background: 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%)'
          }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 md:mb-10 text-center animate-fadeInUp" 
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.5)',
                  fontFamily: '"Inter", sans-serif'
                }}>
              Core Research{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
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
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-2xl border border-white/30"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-2xl border border-white/30"
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
                    <div className="bg-white/20 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/30 shadow-2xl h-full hover:border-white/50 hover:shadow-orange-500/20 transition-all duration-500 group-hover:bg-white/25">
                      <div className="text-4xl sm:text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 text-center">
                        {area.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors duration-300 text-center" 
                          style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.5)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        {area.title}
                      </h3>
                      <p className="text-base sm:text-lg text-orange-100 leading-relaxed group-hover:text-orange-50 transition-colors duration-300 text-center" 
                         style={{
                           textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
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
                    className="w-3 h-3 rounded-full bg-white/50 hover:bg-yellow-200 transition-all duration-300 transform hover:scale-125"
                  />
                ))}
              </div>
            </div>

            {/* Research Excellence Badge */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 border border-white/30 text-orange-100 rounded-full font-bold backdrop-blur-sm text-sm">
                <i className="fas fa-microscope mr-2"></i>
                7 Cutting-Edge Research Domains
                <i className="fas fa-brain ml-2"></i>
              </div>
            </div>

            {/* Navigation Hint */}
            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <svg className="w-4 h-4 text-yellow-200 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="text-xs text-orange-100 font-medium">Use arrows to explore all research areas</span>
                <svg className="w-4 h-4 text-yellow-200 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Blue Background */}
        <section id="projects" className="py-16 sm:py-24 md:py-32"
          style={{
            background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)'
          }}>
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 md:mb-12 text-center" 
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.5)',
                  fontFamily: '"Inter", sans-serif'
                }}>
              Innovative Projects and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-200">
                Research Highlights
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-blue-100 text-center mb-8 sm:mb-12 max-w-4xl mx-auto"
               style={{
                 textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              At DEPA Research Lab, we are at the forefront of cutting-edge research, solving complex real-world challenges through interdisciplinary approaches.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group transform hover:scale-105 transition-all duration-500">
                  <div className="bg-blue-900/50 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-blue-300/30 shadow-2xl h-full hover:border-blue-200/50 transition-all duration-300">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-4">{project.icon}</div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-200 transition-colors duration-300" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.5)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      {project.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed mb-6 group-hover:text-blue-50 transition-colors duration-300" 
                       style={{
                         textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                         fontFamily: '"Inter", sans-serif'
                       }}>
                      {project.description}
                    </p>
                    <button 
                      onClick={() => setCurrentView(project.link)}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-white to-blue-100 hover:from-blue-50 hover:to-white text-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25"
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

        {/* Awards Section - White Background */}
        <section id="awards" className="py-16 sm:py-24 md:py-32"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)'
          }}>
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6 sm:mb-8 text-center" 
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.5), 3px 3px 6px rgba(255,255,255,0.3)',
                  fontFamily: '"Inter", sans-serif'
                }}>
              Awards and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-blue-600 to-orange-700">
                Recognitions
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-black text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
               style={{
                 textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              Celebrating excellence and innovation in research and technology.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {/* First Place Innovation Expo Award */}
              <div className="group transform hover:scale-105 transition-all duration-500">
                <div className="bg-white/90 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-2xl hover:border-yellow-400 transition-all duration-300 relative overflow-hidden">
                  
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
                      <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300" 
                          style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.5), 2px 2px 4px rgba(255,255,255,0.3)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        First Place Innovation Expo Award
                      </h3>
                      
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold border border-yellow-200">
                          Morgan TechFest 2024
                        </span>
                        <span className="inline-block ml-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold border border-green-200">
                          $2,000 Prize
                        </span>
                      </div>
                      
                      <p className="text-blue-600 font-semibold mb-3" 
                         style={{
                           textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
                           fontFamily: '"Inter", sans-serif'
                         }}>
                        Award Winner: David Nyarko
                      </p>
                      
                      <p className="text-black leading-relaxed group-hover:text-gray-800 transition-colors duration-300" 
                         style={{
                           textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
                           fontFamily: '"Inter", sans-serif'
                         }}>
                        The lab won first place at Morgan TechFest 2024 Innovation Expo with its groundbreaking research, <span className="text-orange-600 font-semibold">'Track-Based Autonomous Wheelchair Navigation for Airport Environments.'</span> This AI-driven system integrates advanced technologies such as Ultralytics YOLOv8, QR Code navigation, LiDAR, and cameras to enhance mobility in crowded spaces like airports, ensuring efficient path-following and obstacle avoidance.
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['YOLOv8', 'QR Navigation', 'LiDAR', 'Computer Vision', 'AI Navigation'].map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-orange-100 border border-blue-300 text-black rounded-full font-bold backdrop-blur-sm">
                <i className="fas fa-star mr-2 text-orange-600"></i>
                Striving for Excellence in Research and Innovation
              </div>
            </div>
                  
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
                      <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300" 
                          style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.5), 2px 2px 4px rgba(255,255,255,0.3)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        First Place Innovation Expo Award
                      </h3>
                      
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold border border-yellow-200">
                          Morgan TechFest 2024
                        </span>
                        <span className="inline-block ml-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold border border-green-200">
                          $2,000 Prize
                        </span>
                      </div>
                      
                      <p className="text-blue-600 font-semibold mb-3" 
                         style={{
                           textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
                           fontFamily: '"Inter", sans-serif'
                         }}>
                        Award Winner: David Nyarko
                      </p>
                      
                      <p className="text-black leading-relaxed group-hover:text-gray-800 transition-colors duration-300" 
                         style={{
                           textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
                           fontFamily: '"Inter", sans-serif'
                         }}>
                        The lab won first place at Morgan TechFest 2024 Innovation Expo with its groundbreaking research, <span className="text-orange-600 font-semibold">'Track-Based Autonomous Wheelchair Navigation for Airport Environments.'</span> This AI-driven system integrates advanced technologies such as Ultralytics YOLOv8, QR Code navigation, LiDAR, and cameras to enhance mobility in crowded spaces like airports, ensuring efficient path-following and obstacle avoidance.
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['YOLOv8', 'QR Navigation', 'LiDAR', 'Computer Vision', 'AI Navigation'].map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Placeholder for Future Awards */}
              <div className="group transform hover:scale-105 transition-all duration-500 opacity-50">
                                  <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xl border-dashed h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 opacity-50">
                      <i className="fas fa-plus"></i>
                    </div>
                    <p className="text-black font-medium">More awards coming soon...</p>
                  </div>
                </div>
              </div>

              <div className="group transform hover:scale-105 transition-all duration-500 opacity-50">
                <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xl border-dashed h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 opacity-50">
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="text-black font-medium">Future recognitions</p>
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
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-orange-100 border border-blue-300 text-black rounded-full font-bold backdrop-blur-sm">
                <i className="fas fa-star mr-2 text-orange-600"></i>
                Striving for Excellence in Research and Innovation
              </div>
            </div>
          </div>
        </section>

        {/* Funding & Grants Section - Orange Background */}
        <section id="funding" className="py-16 sm:py-24 md:py-32"
          style={{
            background: 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%)'
          }}>
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 text-center" 
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.5)',
                  fontFamily: '"Inter", sans-serif'
                }}>
              Current{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
                Funding & Grants
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-orange-100 text-center mb-8 sm:mb-12 max-w-4xl mx-auto"
               style={{
                 textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              Supporting cutting-edge research through strategic funding and partnerships.
            </p>

            {/* Main Grant Card */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/20 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl hover:border-white/50 transition-all duration-300 relative overflow-hidden">
                
                {/* Grant Amount Badge */}
                <div className="absolute top-6 right-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full flex items-center justify-center text-orange-800 text-sm font-bold shadow-2xl animate-pulse">
                    <div className="text-center">
                      <div className="text-xs">$545K</div>
                      <div className="text-xs">Grant</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Grant Icon & Basic Info */}
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full flex items-center justify-center text-orange-800 text-6xl shadow-2xl mx-auto lg:mx-0 mb-6">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.5)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      Cybersecurity AI Research Grant
                    </h3>
                    <div className="space-y-2 mb-6">
                      <span className="block px-4 py-2 bg-yellow-200/30 text-yellow-100 rounded-full text-lg font-semibold border border-yellow-200/50">
                        $545,589.00
                      </span>
                      <span className="block px-4 py-2 bg-orange-200/30 text-orange-100 rounded-full text-sm font-semibold border border-orange-200/50">
                        Aug 2025 - Aug 2026
                      </span>
                    </div>
                  </div>
                  
                  {/* Grant Details */}
                  <div className="lg:col-span-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-yellow-200 mb-4">
                      Project Title: "Evaluating AI-Assisted Cybersecurity Operations"
                    </h4>
                    
                    <h5 className="text-lg font-semibold text-white mb-4">
                      Comparative Analysis of Human Performance with and without AI Tools
                    </h5>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-orange-100 leading-relaxed text-lg" 
                         style={{
                           textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                           fontFamily: '"Inter", sans-serif'
                         }}>
                        This project systematically evaluates the impact of Artificial Intelligence assistance on human performance in critical cybersecurity tasks, including <span className="text-yellow-200 font-semibold">vulnerability detection, phishing identification, exploit mitigation, and network anomaly detection.</span>
                      </p>
                      
                      <div className="bg-yellow-200/20 border border-yellow-200/30 rounded-lg p-6">
                        <h6 className="text-lg font-semibold text-yellow-200 mb-3">Key Research Questions:</h6>
                        <ul className="text-orange-100 space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-200 mt-1">•</span>
                            <span>How does AI assistance influence task efficiency, accuracy, and error rates compared to manual and traditional tools?</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-200 mt-1">•</span>
                            <span>What are the cognitive impacts of AI assistance on cybersecurity professionals?</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-200 mt-1">•</span>
                            <span>In what scenarios does AI provide the greatest operational benefit, and where might it introduce risks?</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-200/20 to-orange-200/20 border border-yellow-200/30 rounded-lg p-4">
                      <p className="text-yellow-100 font-medium">
                        <i className="fas fa-target mr-2"></i>
                        <strong>Expected Impact:</strong> This research will inform best practices for deploying AI technologies responsibly in cybersecurity, ensuring they enhance human capabilities while maintaining operational safety and trustworthiness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Impact Statement */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center px-8 py-4 bg-white/20 border border-white/30 text-orange-100 rounded-full font-bold backdrop-blur-sm text-lg">
                <i className="fas fa-chart-line mr-3"></i>
                Advancing Cybersecurity Through AI Research Excellence
                <i className="fas fa-shield-alt ml-3"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section - Blue Background */}
        <section id="publications" className="py-16 sm:py-24 md:py-32"
          style={{
            background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)'
          }}>
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 text-center" 
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.5)',
                  fontFamily: '"Inter", sans-serif'
                }}>
              Research{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-200">
                Publications
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-blue-100 text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
               style={{
                 textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              Explore our contributions to research and innovation in AI and technology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Publication 1 */}
              <div className="group transform hover:scale-105 transition-all duration-500">
                <div className="bg-blue-900/50 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-blue-300/30 shadow-2xl h-full hover:border-blue-200/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-white to-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl shadow-xl">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300" 
                          style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.5)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        AI/ML Systems Engineering Workbench Framework
                      </h3>
                      <span className="inline-block px-3 py-1 bg-white/20 text-blue-100 rounded-full text-sm font-semibold border border-white/30 mb-3">
                        IEEE CISS
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-blue-200 font-semibold">Authors: </span>
                      <span className="text-blue-100">Dr. Kofi Nyarko, Emmanual Masa-Ibi</span>
                    </div>
                    <div>
                      <span className="text-blue-200 font-semibold">Published in: </span>
                      <span className="text-blue-100">Conference on Information Sciences and Systems (CISS)</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://ieeexplore.ieee.org/document/10089781/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-white to-blue-100 hover:from-blue-50 hover:to-white text-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25"
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
                <div className="bg-blue-900/50 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-blue-300/30 shadow-2xl h-full hover:border-blue-200/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-white to-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl shadow-xl">
                      <i className="fas fa-video"></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300" 
                          style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.5)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        Automated Traffic Video Analysis with a Modular Computer Vision Pipeline
                      </h3>
                      <span className="inline-block px-3 py-1 bg-white/20 text-blue-100 rounded-full text-sm font-semibold border border-white/30 mb-3">
                        IEEE CISS
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-blue-200 font-semibold">Authors: </span>
                      <span className="text-blue-100">Tasmeer Alam, Dr. Kofi Nyarko</span>
                    </div>
                    <div>
                      <span className="text-blue-200 font-semibold">Published in: </span>
                      <span className="text-blue-100">Conference on Information Sciences and Systems (CISS)</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://ieeexplore.ieee.org/document/10944672"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-white to-blue-100 hover:from-blue-50 hover:to-white text-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25"
                  >
                    Read Full Paper
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Publication 3 */}
              <div className="group transform hover:scale-105 transition-all duration-500">
                <div className="bg-blue-900/50 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-blue-300/30 shadow-2xl h-full hover:border-blue-200/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-white to-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl shadow-xl">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300" 
                          style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.5)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        Network Intrusion Visualization with NIVA
                      </h3>
                      <span className="inline-block px-3 py-1 bg-white/20 text-blue-100 rounded-full text-sm font-semibold border border-white/30 mb-3">
                        IEEE Haptic Symposium
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-blue-200 font-semibold">Authors: </span>
                      <span className="text-blue-100">Kofi Nyarko, Tanya Capers, Craig Scott, Kemi Ladeji-Osias</span>
                    </div>
                    <div>
                      <span className="text-blue-200 font-semibold">Published in: </span>
                      <span className="text-blue-100">10th Symposium on Haptic Interfaces for Virtual Environment</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://ieeexplore.ieee.org/abstract/document/998969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-white to-blue-100 hover:from-blue-50 hover:to-white text-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25"
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
                <div className="bg-blue-900/50 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-blue-300/30 shadow-2xl h-full hover:border-blue-200/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-white to-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl shadow-xl">
                      <i className="fas fa-building"></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300" 
                          style={{
                            textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.5)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        Cloud Based Passive Building Occupancy Characterization
                      </h3>
                      <span className="inline-block px-3 py-1 bg-white/20 text-blue-100 rounded-full text-sm font-semibold border border-white/30 mb-3">
                        IEEE HST
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-blue-200 font-semibold">Authors: </span>
                      <span className="text-blue-100">Kofi Nyarko, Cecelia Wright-Brown</span>
                    </div>
                    <div>
                      <span className="text-blue-200 font-semibold">Published in: </span>
                      <span className="text-blue-100">IEEE International Conference on Technologies for Homeland Security</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://ieeexplore.ieee.org/abstract/document/6699097"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-white to-blue-100 hover:from-blue-50 hover:to-white text-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25"
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
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white to-blue-100 hover:from-blue-50 hover:to-white text-blue-600 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25"
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

        {/* Symposium Section - White Background */}
        <section id="symposium" className="py-16 sm:py-24 md:py-32"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)'
          }}>
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6 sm:mb-8 text-center" 
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.5), 3px 3px 6px rgba(255,255,255,0.3)',
                  fontFamily: '"Inter", sans-serif'
                }}>
              CEAMLS Research{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-orange-500 to-blue-700">
                Symposium
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-black text-center mb-8 sm:mb-12 max-w-4xl mx-auto"
               style={{
                 textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              Learn more about our contributions to the 2025 CEAMLS Research Symposium on Equitable AI.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-gray-200 shadow-2xl relative overflow-hidden">
                
                {/* Event Badge */}
                <div className="absolute top-6 right-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl animate-pulse">
                    🎯
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Event Icon & Title */}
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-6xl shadow-2xl mx-auto lg:mx-0 mb-6">
                      <i className="fas fa-users"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-4" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.5), 2px 2px 4px rgba(255,255,255,0.3)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      CEAMLS Research Symposium 2025
                    </h3>
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-lg font-semibold border border-blue-200">
                      Focus: Equitable AI
                    </span>
                  </div>
                  
                  {/* Event Details */}
                  <div className="lg:col-span-2">
                    <h4 className="text-2xl font-bold text-orange-600 mb-6">Our Participation & Research Presentation</h4>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-black leading-relaxed text-lg" 
                         style={{
                           textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
                           fontFamily: '"Inter", sans-serif'
                         }}>
                        DEPA Lab is proud to be an active participant in the 2025 CEAMLS Research Symposium, focusing on <span className="text-blue-600 font-semibold">"Equitable AI."</span> This event brings together thought leaders, researchers, and practitioners to discuss innovative strategies for fostering fairness and inclusivity in AI applications.
                      </p>
                      
                      <p className="text-black leading-relaxed text-lg" 
                         style={{
                           textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
                           fontFamily: '"Inter", sans-serif'
                         }}>
                        During the symposium, our team will present groundbreaking research on <span className="text-orange-600 font-semibold">leveraging AI for equitable academic and career advisory systems.</span> We look forward to engaging with the community to explore collaborative opportunities and share insights.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://www.morgan.edu/ceamls/equitable-ai-symposium/equitable-ai-symposium-(2025)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                      >
                        <i className="fas fa-external-link-alt mr-2"></i>
                        Register for the Symposium
                      </a>
                      <a 
                        href="https://www.morgan.edu/ceamls"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-600 hover:border-orange-600 text-blue-600 hover:text-orange-600 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-blue-50"
                      >
                        <i className="fas fa-info-circle mr-2"></i>
                        Learn More About CEAMLS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <button
                onClick={() => setCurrentView('symposium')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
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

        {/* Team Section - Orange Background */}
        <section id="team" className="py-16 sm:py-24 md:py-32"
          style={{
            background: 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%)'
          }}>
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 text-center" 
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.5)',
                  fontFamily: '"Inter", sans-serif'
                }}>
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
                Team
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-orange-100 text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
               style={{
                 textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              Meet the brilliant minds behind DEPA Lab's groundbreaking research and innovation.
            </p>

            {/* Present Team Section */}
            <div className="mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center" 
                  style={{
                    textShadow: '0 0 20px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.5)',
                    fontFamily: '"Inter", sans-serif'
                  }}>
                Present Team
              </h3>
              
              {/* Team Carousel */}
              <div className="relative max-w-7xl mx-auto">
                {/* Navigation Arrows */}
                <button 
                  onClick={() => {
                    const container = document.getElementById('team-carousel');
                    container.scrollBy({ left: -400, behavior: 'smooth' });
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-2xl border border-white/30"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={() => {
                    const container = document.getElementById('team-carousel');
                    container.scrollBy({ left: 400, behavior: 'smooth' });
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-2xl border border-white/30"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Carousel Container */}
                <div 
                  id="team-carousel"
                  className="flex overflow-x-auto gap-6 pb-4 px-12 scrollbar-hide"
                  style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
                >
                  {presentTeamMembers.map((member, index) => (
                    <div key={index} className="flex-shrink-0 w-64 group transform hover:scale-105 transition-all duration-500">
                      <div className="bg-white/20 backdrop-blur-2xl rounded-2xl p-6 border border-white/30 shadow-2xl text-center hover:border-white/50 hover:shadow-orange-500/20 transition-all duration-300 h-full">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-200/50 shadow-2xl group-hover:border-yellow-200/80 transition-all duration-300 relative">
                          <img 
                            src={`/depa-lab/images/${member.image}`}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300" 
                            style={{
                              textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.5)',
                              fontFamily: '"Inter", sans-serif'
                            }}>
                          {member.name}
                        </h4>
                        <p className="text-orange-100 font-medium group-hover:text-orange-50 transition-colors duration-300" 
                           style={{
                             textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                             fontFamily: '"Inter", sans-serif'
                           }}>
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scroll Indicator Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: Math.ceil(presentTeamMembers.length / 4) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const container = document.getElementById('team-carousel');
                        container.scrollTo({ left: index * 1000, behavior: 'smooth' });
                      }}
                      className="w-3 h-3 rounded-full bg-white/50 hover:bg-yellow-200 transition-all duration-300 transform hover:scale-125"
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Hint */}
              <div className="text-center mt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <svg className="w-4 h-4 text-yellow-200 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span className="text-xs text-orange-100 font-medium">Use arrows to explore all team members</span>
                  <svg className="w-4 h-4 text-yellow-200 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Past Team Section */}
            <div className="mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center" 
                  style={{
                    textShadow: '0 0 20px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.5)',
                    fontFamily: '"Inter", sans-serif'
                  }}>
                Past Team Members
              </h3>
              
              {/* Past Team Carousel */}
              <div className="relative max-w-7xl mx-auto">
                {/* Carousel Container */}
                <div 
                  id="past-team-carousel"
                  className="flex justify-center overflow-x-auto gap-6 pb-4 px-12 scrollbar-hide"
                  style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
                >
                  {pastTeamMembers.map((member, index) => (
                    <div key={index} className="flex-shrink-0 w-64 group transform hover:scale-105 transition-all duration-500">
                      <div className="bg-white/20 backdrop-blur-2xl rounded-2xl p-6 border border-white/30 shadow-2xl text-center hover:border-white/50 hover:shadow-orange-500/20 transition-all duration-300 h-full">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200/50 shadow-2xl group-hover:border-orange-200/80 transition-all duration-300 relative">
                          <img 
                            src={`/depa-lab/images/${member.image}`}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-200 transition-colors duration-300" 
                            style={{
                              textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.5)',
                              fontFamily: '"Inter", sans-serif'
                            }}>
                          {member.name}
                        </h4>
                        <p className="text-orange-100 font-medium group-hover:text-orange-50 transition-colors duration-300" 
                           style={{
                             textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                             fontFamily: '"Inter", sans-serif'
                           }}>
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team Statistics */}
            <div className="text-center">
              <div className="inline-flex items-center px-8 py-4 bg-white/20 border border-white/30 text-orange-100 rounded-full font-bold backdrop-blur-sm text-lg">
                <i className="fas fa-users mr-3"></i>
                {presentTeamMembers.length} Active Researchers Building the Future of AI
                <i className="fas fa-brain ml-3"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Blue Background */}
        <section id="contact" className="py-16 sm:py-24 md:py-32"
          style={{
            background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)'
          }}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-blue-900/50 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-300/30 shadow-2xl text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8" 
                  style={{
                    textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.5)',
                    fontFamily: '"Inter", sans-serif'
                  }}>
                Contact{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-200">
                  Us
                </span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl text-blue-100" 
                   style={{
                     textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                     fontFamily: '"Inter", sans-serif'
                   }}>
                  <span className="text-blue-200 font-semibold">Email:</span>{' '}
                  <a href="mailto:kofi.nyarko@morgan.edu" className="text-white hover:text-blue-200 transition-colors duration-300 underline">
                    kofi.nyarko@morgan.edu
                  </a>
                </p>
                
                <p className="text-lg sm:text-xl text-blue-100 leading-relaxed" 
                   style={{
                     textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                     fontFamily: '"Inter", sans-serif'
                   }}>
                  <span className="text-blue-200 font-semibold">Address:</span> Room 112 and 113 Schaefer Engineering Building, School of Engineering, 1700 E Cold Spring Ln, Baltimore, MD 21251
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - White Background */}
      <footer className="py-8 sm:py-10 md:py-12"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
                borderTop: '1px solid rgba(0,0,0,0.1)'
              }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                D
              </div>
              <span className="text-2xl font-black text-black" 
                    style={{
                      textShadow: '0 0 20px rgba(59, 130, 246, 0.2), 2px 2px 4px rgba(255,255,255,0.5)',
                      fontFamily: '"Inter", sans-serif'
                    }}>
                DEPA Research Lab
              </span>
            </div>
            
            <p className="text-black mb-6 max-w-2xl mx-auto"
               style={{
                 textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              Data Engineering and Predictive Analytics Lab at Morgan State University
            </p>
            
            <div className="border-t border-gray-200 pt-6">
              <p className="text-black" 
                 style={{
                   textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
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
