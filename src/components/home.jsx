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
  { name: "Rezoan Sultan", role: "Human-AI Interaction Research Engineer", image: "Rezoan_Sultan.jpeg" },
  { name: "Benjamin Hall", role: "Researcher", image: "Benjamin Hall.jpg" },
  { name: "Emmanuel Masa-ibi", role: "Researcher", image: "Emmanuel Masa-ibi.jpeg" },
  { name: "Awotwi Baffoe", role: "AI Researcher", image: "Awotwi_Baffoe.jpg" },
  { name: "Opeyemi Adeniran", role: "AI Research Engineer", image: "Opeyemi.PNG" },
  { name: "Anjolie Anthony", role: "Researcher", image: "Anjolie.JPG" },
  { name: "Binisa Giri", role: "AI Researcher", image: "Binisa_Giri.jpeg" },
  { name: "Nicholas Cook", role: "AI Researcher", image: "NicholasCook.jpg" },
  { name: "Temitope Ajibola", role: "AI Researcher", image: "Temi.JPG" },
  { name: "David Nyarko", role: "Researcher", image: "david-nyarko.JPG" },
];

// eslint-disable-next-line no-unused-vars
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

  // Research Components
  const ResearchComponents = {
    'xpci-crack-detection': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🔬
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">XPCI Crack Detection and Categorization</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-blue-600 mb-4 text-center">Research Demonstration Video</h4>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-blue-200 bg-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎥</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">XPCI Research Demo</h4>
                    <p className="text-gray-600">Video demonstration available</p>
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
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Research Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                This project focuses on automated crack detection in low-density and structurally complex materials subjected to mechanical stress, such as crystal quartz, Westerly granite, and boron carbide. It integrates X-ray Phase Contrast Imaging (XPCI), known for its sensitivity to subtle structural variations, with the YOLOv11 deep learning architecture for high-resolution crack localization and classification.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Unlike conventional absorption-based X-ray imaging, XPCI exploits phase shift phenomena to reveal fine internal features, including microcracks and crack tips, with greater clarity. The approach relies on a carefully curated and manually annotated dataset to train and validate the model across a range of material types and stress conditions.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-blue-600 mb-4">Key Features</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>YOLOv11 model optimized for crack pattern detection and categorization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>High precision detection in noisy or low-contrast XPCI environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Advanced non-destructive evaluation for early-stage damage detection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'msu-ai-advisor': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🎓
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">MSU AI Academic Advisor</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-blue-600 mb-4 text-center">System Demo</h4>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-blue-200 bg-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎥</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">MSU AI Advisor Demo</h4>
                    <p className="text-gray-600">System demonstration available</p>
                    <a 
                      href="https://www.youtube.com/watch?v=5msFb_V-XaE" 
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
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Project Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                The AI Academic Advisor project leverages a multi-step agent pipeline built on transformer-based LLMs fine-tuned with human feedback to generate personalized academic guidance. User profile data—including course history, interests, and scheduling constraints—is collected through a conversational REST API that normalizes and encodes inputs for downstream processing.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-blue-600 mb-4">Key Features</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>24/7 accessibility on any device</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Adaptive learning based on student interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Personalized course planning and internship suggestions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'cyber-shield': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🛡️
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">Cyber Shield</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <img 
                  src="/depa-lab/images/CyberShield.pptx.png"
                  alt="Cyber Shield System Architecture"
                  className="w-full h-96 rounded-xl shadow-2xl border border-blue-200 object-cover"
                />
                <p className="text-center text-gray-600 text-sm mt-4 italic">
                  Cyber Shield abusive language detection system architecture
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">System Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Cyber Shield is an abusive language detection system designed to analyze user-generated text and identify harmful or inappropriate content. Built to integrate with the Query-able Machine Learning Pipeline (QMLP), the system ingests input in JSON format, applies advanced preprocessing, and uses word embeddings to understand context.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-blue-600 mb-4">Key Technologies</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>DistilBERT model for sentiment assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Advanced text preprocessing and word embeddings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Dual-level analysis for comprehensive content moderation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'llm-benchmarking': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🗣️
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">Benchmarking LLMs for AAVE & SAE</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <img 
                  src="/depa-lab/images/ppt_cynthia.png"
                  alt="AAVE & SAE Benchmarking Research"
                  className="w-full h-96 rounded-xl shadow-2xl border border-blue-200 object-cover"
                />
                <p className="text-center text-gray-600 text-sm mt-4 italic">
                  Research presentation showcasing AAVE and SAE benchmarking methodology and results
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Research Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                This research investigates how large language models (LLMs) handle different English dialects, with a focus on African American Vernacular English (AAVE) versus Standard American English (SAE). Models such as GPT-4, Claude 3.5, Gemini 1.5 Pro, Qwen2, and LLaMA 3 were evaluated across sentiment, refusal rates, and response quality.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-blue-600 mb-4">Key Research Contributions</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Framework supports both debiasing rewrites and human-in-the-loop flagging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Advanced AI safety measures for equitable treatment of linguistic communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Real-time bias detection and mitigation for high-risk domains</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'quantized-llm-navigation': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                ✈️
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">Quantized LLM for Airport Navigation</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <img 
                  src="/depa-lab/images/DEPA POSTER.pptx (1)-1.png"
                  alt="Quantized LLM Airport Navigation System"
                  className="w-full h-96 rounded-xl shadow-2xl border border-blue-200 object-cover"
                />
                <p className="text-center text-gray-600 text-sm mt-4 italic">
                  DEPA Lab poster presentation on quantized LLM airport navigation system
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Project Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                For this project, we developed a lightweight language model system using quantized LLMs to enable efficient performance on limited hardware. We experimented with 4-bit and 8-bit quantized models to reduce memory and computational demands while preserving accuracy.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-blue-600 mb-4">Key Achievements</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Task-specific filtering to improve response relevance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Efficient deployment on minimal hardware requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Real-world application demonstrating quantized LLM capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'drone-tracking-system': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🚁
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">Vision-based Autonomous Drone Object Tracking System</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-blue-600 mb-4 text-center">System Demonstration</h4>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-blue-200 bg-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎥</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Drone Tracking Demo</h4>
                    <p className="text-gray-600">System demonstration available</p>
                    <a 
                      href="https://www.youtube.com/watch?v=b9aJA9C0Q6w" 
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
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Project Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                This project focuses on advancing autonomous wheelchair system designed to enhance mobility and independence. This includes multiple integrated components such as a Follower Drone for Luggage: A vision-based autonomous drone system capable of tracking and following the wheelchair user to carry luggage, using person re-identification and real-time object tracking techniques.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-blue-600 mb-4">System Components</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Person re-identification and real-time object tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Mobile app for remote wheelchair control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Integrated LiDAR, Raspberry Pi, cameras, and sensors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'ml-bench-guard': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                📊
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">AI/ML Bench Guard</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-blue-600 mb-4 text-center">Benchmarking Framework Demo</h4>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-blue-200 bg-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎥</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">AI/ML Bench Guard Demo</h4>
                    <p className="text-gray-600">Framework demonstration available</p>
                    <a 
                      href="https://www.youtube.com/watch?v=kIk6zBRpjr4" 
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
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Framework Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                AI/ML Bench Guard is a comprehensive benchmarking framework for evaluating cloud-based, LLM, and open-source machine learning services. The system conducts automated performance assessments across multiple providers, including AWS, Azure, GCP, and open-source alternatives.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-blue-600 mb-4">Key Features</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Automated performance assessments across multiple cloud providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Standardized testing protocols and continuous monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Objective comparison of performance, reliability, and cost-effectiveness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'forensic-video-analysis': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                🎬
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">Multimodal LLMs for Forensic Video Analysis</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <img 
                  src="/depa-lab/images/MD-2.png"
                  alt="Forensic Video Analysis Framework"
                  className="w-full h-96 rounded-xl shadow-2xl border border-blue-200 object-cover"
                />
                <p className="text-center text-gray-600 text-sm mt-4 italic">
                  Research framework for forensic video analysis using multimodal LLMs
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Research Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                This research investigates how different prompting strategies can optimize multimodal large language models for forensic video analysis applications. The study systematically evaluates eight distinct prompting techniques including zero-shot, sequential, least-to-most, ReAct, chain-of-thought, meta-prompting, self-consistency, and iterative approaches.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-blue-600 mb-4">Research Significance</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>First systematic comparison of prompting strategies for forensic video analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Standardized evaluation framework for human expert-level analytical rigor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Important implications for criminal justice systems integrating AI assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'smart-contract-detection': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            ← Back to Home
          </button>
          <div className="max-w-6xl mx-auto bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                ⛓️
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">Smart Contract Reentrancy Detection</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <img 
                  src="/depa-lab/images/Automated Detection-Poster-Template.pptx.png"
                  alt="Smart Contract Reentrancy Detection System"
                  className="w-full h-96 rounded-xl shadow-2xl border border-blue-200 object-cover"
                />
                <p className="text-center text-gray-600 text-sm mt-4 italic">
                  Automated detection system for reentrancy vulnerabilities in smart contracts
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Research Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                This research develops an automated system for detecting reentrancy vulnerabilities in smart contracts, which represent one of the most dangerous security flaws in blockchain applications. The study introduces a hybrid feature engineering approach that combines pattern-based detection with graph-based analysis.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-blue-600 mb-4">Key Innovations</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Hybrid methodology combining pattern and graph-based analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Scalable solution for protecting valuable digital assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Critical advancement in blockchain security for DeFi applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'awards': () => (
  <div className="min-h-screen bg-white">
    <div className="container mx-auto px-4 py-16">
      <button
        onClick={() => setCurrentView('home')}
        className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        ← Back to Home
      </button>
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black text-gray-900 mb-8 text-center">
          Awards and{' '}
          <span className="text-blue-600">
            Recognitions
          </span>
        </h1>
        
        <p className="text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          Celebrating excellence and innovation in research and technology.
        </p>

        <div className="space-y-12">
          {/* National Innovation Venture Competition - $100K Prize */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 border-2 border-green-300 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-6xl lg:text-7xl shadow-2xl mx-auto lg:mx-0 mb-6">
                  🏆
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                  First Place National Competition
                </h2>
                <div className="space-y-2">
                  <span className="block px-6 py-3 bg-green-200 text-green-900 rounded-full text-xl font-black border-2 border-green-400">
                    $100,000 Top Prize
                  </span>
                  <span className="block px-6 py-3 bg-emerald-200 text-emerald-900 rounded-full text-lg font-bold border-2 border-emerald-400">
                    National Innovation Venture Competition
                  </span>
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl lg:text-3xl font-black text-green-700 mb-4">Graduate Students Win First Place Victory for Morgan State</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Winning Team - AgroVision:</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'David Nyarko',
                      'Obiageli Nwachukwu',
                      'Marvellous Ododoh',
                      'Dapiriye Briggs'
                    ].map((member) => (
                      <span 
                        key={member} 
                        className="px-4 py-2 bg-white text-green-700 rounded-lg text-base font-bold border-2 border-green-400 shadow-md"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-emerald-700 mb-4">
                  Tier 3 (Graduate-Level) Champion
                </h4>
                
                <p className="text-gray-800 leading-relaxed text-lg mb-6 font-medium">
                  Team AgroVision emerged as the <span className="text-green-700 font-black">Tier 3 (graduate-level) champion</span> at the national competition for their revolutionary <span className="text-emerald-700 font-bold">AI-powered modular hydroponic farming system</span>. Their innovative solution leverages artificial intelligence, renewable energy, and smart agriculture technologies to tackle food insecurity, climate volatility, and resource scarcity in farming.
                </p>
                
                <div className="mb-6">
                  <h5 className="text-xl font-bold text-gray-900 mb-4">Innovation Highlights:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'AI-Powered Agriculture',
                      'Modular Hydroponic System',
                      'Renewable Energy Integration',
                      'Smart Farming Technologies',
                      'Food Security Solutions',
                      'Climate-Resilient Design'
                    ].map((tech) => (
                      <div 
                        key={tech} 
                        className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg text-sm font-bold border-2 border-green-300 shadow-sm"
                      >
                        <span className="text-green-600 text-lg">✓</span>
                        <span className="text-gray-800">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border-2 border-green-400 shadow-lg">
                  <p className="text-green-800 font-bold text-lg">
                    <strong>Global Impact:</strong> AgroVision's breakthrough technology addresses critical challenges in food insecurity, climate change adaptation, and sustainable agriculture, demonstrating how AI and renewable energy can revolutionize farming for communities worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

{/* HBCUniverse 30 Under 30 Award */}
<div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border-2 border-purple-300 shadow-xl">
  <div className="flex flex-col lg:flex-row items-start gap-8">
    <div className="flex-shrink-0 text-center lg:text-left">
      <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-6xl lg:text-7xl shadow-2xl mx-auto lg:mx-0 mb-6">
        ⭐
      </div>
      <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
        HBCUniverse 30 Under 30 Award
      </h2>
      <div className="space-y-2">
        <span className="block px-6 py-3 bg-purple-200 text-purple-900 rounded-full text-xl font-black border-2 border-purple-400">
          2025 Recipients
        </span>
        <span className="block px-6 py-3 bg-indigo-200 text-indigo-900 rounded-full text-lg font-bold border-2 border-indigo-400">
          Two DEPA Lab Members
        </span>
      </div>
    </div>
    
    <div className="flex-grow">
      <h3 className="text-2xl lg:text-3xl font-black text-purple-700 mb-6">Celebrating Young Leaders in STEM and Business</h3>
      
      <p className="text-gray-800 leading-relaxed text-lg mb-8 font-medium">
        We are excited to announce that <span className="text-purple-700 font-black">two of our members have been selected as recipients</span> of the prestigious 2025 HBCUniverse 30 Under 30 Award, recognizing their outstanding contributions and impact in their respective fields!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* David Nyarko Card */}
        <div className="bg-white rounded-2xl p-6 border-2 border-purple-400 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
              🔬
            </div>
            <div>
              <h4 className="font-black text-purple-700 text-2xl">David Nyarko</h4>
              <p className="text-purple-600 font-bold">STEM and Research</p>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-300 mb-4">
            <p className="text-gray-800 font-semibold mb-2">Recognition Category:</p>
            <p className="text-purple-700 font-bold text-lg">STEM and Research Category</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Recognized for exceptional contributions to STEM research, innovation in AI and autonomous systems, and leadership in advancing cutting-edge technology solutions.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['AI Research', 'Innovation', 'STEM Leadership'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold border border-purple-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Temitope Ajibola Card */}
        <div className="bg-white rounded-2xl p-6 border-2 border-indigo-400 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
              💼
            </div>
            <div>
              <h4 className="font-black text-indigo-700 text-2xl">Temitope Ajibola</h4>
              <p className="text-indigo-600 font-bold">Business & Corporate</p>
            </div>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-300 mb-4">
            <p className="text-gray-800 font-semibold mb-2">Recognition Category:</p>
            <p className="text-indigo-700 font-bold text-lg">Business and Corporate Category</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Recognized for outstanding business acumen, corporate leadership, and significant impact in driving innovation and excellence in the business sector.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Business Impact', 'Leadership', 'Innovation'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold border border-indigo-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* About Section - Now outside the flex container */}
  <div className="mt-8 space-y-6">
    <div className="bg-white rounded-lg p-6 border-2 border-purple-400 shadow-lg">
      <h5 className="text-xl font-bold text-purple-700 mb-4">About HBCUniverse 30 Under 30</h5>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HBCUniverse 30 Under 30 Award celebrates young leaders under 30 who are making significant contributions across various fields including STEM, business, arts, and social impact. This prestigious recognition highlights the exceptional talent and innovation emerging from HBCU communities.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
          <p className="text-2xl font-black text-purple-700">30</p>
          <p className="text-xs text-gray-600 font-semibold">Leaders Recognized</p>
        </div>
        <div className="text-center p-3 bg-indigo-50 rounded-lg border border-indigo-200">
          <p className="text-2xl font-black text-indigo-700">2025</p>
          <p className="text-xs text-gray-600 font-semibold">Award Year</p>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
          <p className="text-2xl font-black text-purple-700">2</p>
          <p className="text-xs text-gray-600 font-semibold">DEPA Lab Winners</p>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-lg p-6 border-2 border-purple-400 shadow-lg">
      <p className="text-purple-800 font-bold text-lg">
        <strong>Excellence Recognition:</strong> This achievement showcases DEPA Lab's commitment to developing outstanding leaders who make meaningful impacts in both technical research and business innovation, representing the next generation of HBCU excellence.
      </p>
    </div>
  </div>
</div>

          {/* First Place Innovation Expo Award */}
          <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 border-2 border-blue-200 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-5xl lg:text-6xl shadow-2xl mx-auto lg:mx-0 mb-6">
                  🏆
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  First Place Innovation Expo Award
                </h2>
                <div className="space-y-2">
                  <span className="block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-lg font-semibold border border-orange-300">
                    Morgan TechFest 2024
                  </span>
                  <span className="block px-4 py-2 bg-green-100 text-green-700 rounded-full text-lg font-semibold border border-green-300">
                    $2,000 Prize Winner
                  </span>
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Award Winner: David Nyarko</h3>
                
                <h4 className="text-xl font-semibold text-orange-600 mb-4">
                  Research Project: "Track-Based Autonomous Wheelchair Navigation for Airport Environments"
                </h4>
                
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  The DEPA Lab achieved first place at the Morgan TechFest 2024 Innovation Expo with groundbreaking research in autonomous wheelchair navigation. This AI-driven system integrates advanced technologies including Ultralytics YOLOv8, QR Code navigation, LiDAR, and computer vision cameras to enhance mobility in crowded environments like airports.
                </p>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Technologies:</h5>
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
                        className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium border border-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-orange-300">
                  <p className="text-orange-700 font-medium">
                    <strong>Innovation Impact:</strong> This research addresses critical mobility challenges in complex environments, ensuring efficient path-following and obstacle avoidance for enhanced accessibility and independence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Awotwi Baffoe Top Poster Award */}
          <div className="bg-blue-50 rounded-3xl p-8 border-2 border-blue-200 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl">
                  🏆
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Top Poster Award - MSEE Annual Technical Review 2025
                </h3>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-300">
                    Johns Hopkins University
                  </span>
                  <span className="inline-block ml-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-300">
                    Washington, D.C.
                  </span>
                </div>
                
                <p className="text-blue-600 font-semibold mb-3">
                  Award Winner: Awotwi Baffoe
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Awotwi Baffoe was recognized as one of the <span className="text-blue-600 font-semibold">top poster award recipients</span> at the MSEE (Material Science in Extreme Environment) Annual Technical Review 2025. The award-winning poster showcased groundbreaking research on automated crack detection in low-density, structurally complex materials under stress using the <span className="text-blue-600 font-semibold">YOLOv11 deep learning model and X-ray Phase Contrast Imaging (XPCI)</span> dataset.
                </p>
                
                <div className="bg-white rounded-lg p-4 border border-blue-300 mb-4">
                  <h6 className="font-semibold text-blue-600 mb-2">Materials Studied:</h6>
                  <div className="flex flex-wrap gap-2">
                    {['Quartz Crystal', 'Pink Westerly Granite', 'Boron Carbide'].map((material) => (
                      <span 
                        key={material} 
                        className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium border border-purple-300"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-blue-300">
                  <p className="text-blue-700 font-medium">
                    <strong>Research Impact:</strong> This innovative approach advances non-destructive evaluation techniques for early-stage damage detection in critical materials.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MIT Hack the Climate Hackathon */}
          <div className="bg-green-50 rounded-3xl p-8 border-2 border-green-200 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl">
                  🥇
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  First Place - MIT Hack the Climate Hackathon
                </h3>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold border border-green-300">
                    MIT RAISE AI & Education Summit
                  </span>
                  <span className="inline-block ml-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold border border-emerald-300">
                    July 2025
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-green-600 mb-2">Winning Team Members:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium border border-blue-300">
                      Kianna Spencer (CECE Lab)
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium border border-purple-300">
                      Koby Nyarkon (DEPA Lab)
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium border border-blue-300">
                      Jamal Williamson (CECE Lab)
                    </span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-green-600 mb-3">
                  Project: ThermaWise
                </h4>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  A team of CEAMLS students claimed <span className="text-green-600 font-semibold">first place</span> at the prestigious MIT Hack the Climate Hackathon. The winning team developed <span className="text-green-600 font-semibold">ThermaWise</span>, a powerful AI-powered platform that delivers creative, data-driven energy-saving strategies rooted in passive design and building science.
                </p>
                
                <div className="bg-white rounded-lg p-4 border border-green-300 mb-4">
                  <h6 className="font-semibold text-green-600 mb-2">ThermaWise Key Features:</h6>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>AI-powered energy optimization algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Data-driven passive design recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Building science integration for sustainable solutions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-green-300">
                  <p className="text-green-700 font-medium">
                    <strong>Climate Impact:</strong> ThermaWise represents a significant advancement in sustainable building technology, combining AI with building science principles to create actionable solutions for climate change mitigation.
                  </p>
                </div>
              </div>
            </div>
          </div>

       {/* Datathon '24 Awards */}
<div className="bg-cyan-50 rounded-3xl p-8 border-2 border-cyan-200 shadow-xl">
  <div className="flex flex-col lg:flex-row items-start gap-6">
    <div className="flex-shrink-0">
      <div className="flex gap-2">
        <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl">
          🥇
        </div>
        <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl">
          🥉
        </div>
      </div>
    </div>
    
    <div className="flex-grow">
      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
        First & Third Place - Datathon '24
      </h3>
      
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold border border-cyan-300">
          HITI Lab
        </span>
        <span className="inline-block ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-300">
          Emory University School of Medicine
        </span>
      </div>
      
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-cyan-600 mb-2">Award-Winning Team Members:</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm font-medium border border-yellow-300">
            David Nyarko (DEPA Lab)
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium border border-purple-300">
            Cynthia Nosiri (DEPA Lab)
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-lg p-4 border border-yellow-300">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-sm">
              🥇
            </div>
            <h5 className="font-semibold text-yellow-700">First Place</h5>
          </div>
          <p className="text-gray-700 text-sm">Outstanding data analysis and innovative solution delivery</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-orange-300">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-sm">
              🥉
            </div>
            <h5 className="font-semibold text-orange-700">Third Place</h5>
          </div>
          <p className="text-gray-700 text-sm">Exceptional teamwork and technical implementation</p>
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        The DEPA Lab team achieved remarkable success at <span className="text-cyan-600 font-semibold">Datathon '24</span>, securing both <span className="text-yellow-600 font-semibold">first place and third place</span> in the prestigious competition organized by HITI Lab at Emory University School of Medicine.
      </p>
      
      <div className="bg-white rounded-lg p-4 border border-cyan-300">
        <p className="text-cyan-700 font-medium">
          <strong>Healthcare Impact:</strong> This dual achievement highlights DEPA Lab's excellence in applying advanced data science techniques to solve complex healthcare challenges.
        </p>
      </div>
    </div>
  </div>
</div>

{/* Datathon '25 Award - Third Place */}
<div className="bg-blue-50 rounded-3xl p-8 border-2 border-blue-200 shadow-xl">
  <div className="flex flex-col lg:flex-row items-start gap-6">
    <div className="flex-shrink-0">
      <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl">
        🥉
      </div>
    </div>
    
    <div className="flex-grow">
      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
        Third Place - Datathon '25
      </h3>
      
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold border border-cyan-300">
          HITI Lab
        </span>
        <span className="inline-block ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-300">
          Emory University School of Medicine
        </span>
      </div>
      
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-blue-600 mb-2">Award-Winning Team Lead:</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium border border-orange-300">
            Cynthia Nosiri (DEPA Lab)
          </span>
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        Building on previous success, Cynthia Nosiri's team secured <span className="text-orange-600 font-semibold">third place</span> at <span className="text-cyan-600 font-semibold">Datathon '25</span>, demonstrating continued excellence and innovation in healthcare data science at the HITI Lab competition hosted by Emory University School of Medicine.
      </p>
      
      <div className="bg-white rounded-lg p-4 border border-blue-300">
        <p className="text-blue-700 font-medium">
          <strong>Continued Excellence:</strong> This consecutive recognition showcases DEPA Lab's sustained commitment to advancing healthcare analytics and solving critical medical challenges through innovative data science approaches.
        </p>
      </div>
    </div>
  </div>
</div>
            </div>  {/* This closes the space-y-12 div */}

        {/* Impact Statement */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-blue-100 border border-blue-300 text-blue-700 rounded-full font-bold text-lg">
            <span className="mr-3">🏆</span>
            Continuing Our Journey of Excellence in Research and Innovation
            <span className="ml-3">⭐</span>
          </div>
        </div>
      </div>
    </div>
  </div>
),

   
    'publications': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            ← Back to Home
          </button>
          
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-black text-gray-900 mb-8 text-center">
              Research{' '}
              <span className="text-blue-600">
                Publications
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto">
              Explore our comprehensive contributions to research and innovation in AI, machine learning, and technology.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Publication 1 - AI/ML Systems Engineering */}
              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl shadow-xl">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      AI/ML Systems Engineering Workbench Framework
                    </h3>
                    <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold border border-green-300">
                      IEEE CISS Conference
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <span className="text-blue-600 font-semibold text-lg">Authors: </span>
                        <span className="text-gray-700 text-lg">Dr. Kofi Nyarko, Emmanual Masa-Ibi</span>
                      </div>
                      <div>
                        <span className="text-blue-600 font-semibold text-lg">Published in: </span>
                        <span className="text-gray-700 text-lg">Conference on Information Sciences and Systems (CISS)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://ieeexplore.ieee.org/document/10089781/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Read Full Paper
                </a>
              </div>

              {/* Publication 2 - Traffic Video Analysis */}
              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl shadow-xl">
                    <i className="fas fa-video"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Automated Traffic Video Analysis with Modular Computer Vision Pipeline
                    </h3>
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-300">
                      IEEE CISS Conference
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <span className="text-blue-600 font-semibold text-lg">Authors: </span>
                        <span className="text-gray-700 text-lg">Tasmeer Alam, Dr. Kofi Nyarko</span>
                      </div>
                      <div>
                        <span className="text-blue-600 font-semibold text-lg">Published in: </span>
                        <span className="text-gray-700 text-lg">Conference on Information Sciences and Systems (CISS)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://ieeexplore.ieee.org/document/10944672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Read Full Paper
                </a>
              </div>

              {/* Publication 3 - Network Intrusion */}
              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-purple-700 rounded-full flex items-center justify-center text-white text-3xl shadow-xl">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Network Intrusion Visualization with NIVA
                    </h3>
                    <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-300">
                      IEEE Haptic Symposium
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <span className="text-purple-600 font-semibold text-lg">Authors: </span>
                        <span className="text-gray-700 text-lg">Kofi Nyarko, Tanya Capers, Craig Scott, Kemi Ladeji-Osias</span>
                      </div>
                      <div>
                        <span className="text-purple-600 font-semibold text-lg">Published in: </span>
                        <span className="text-gray-700 text-lg">10th Symposium on Haptic Interfaces for Virtual Environment and Teleoperator Systems</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://ieeexplore.ieee.org/abstract/document/998969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Read Full Paper
                </a>
              </div>

              {/* Publication 4 - Building Occupancy */}
              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-700 rounded-full flex items-center justify-center text-white text-3xl shadow-xl">
                    <i className="fas fa-building"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Cloud Based Passive Building Occupancy Characterization
                    </h3>
                    <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold border border-yellow-300">
                      IEEE HST Conference
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <span className="text-yellow-700 font-semibold text-lg">Authors: </span>
                        <span className="text-gray-700 text-lg">Kofi Nyarko, Cecelia Wright-Brown</span>
                      </div>
                      <div>
                        <span className="text-yellow-700 font-semibold text-lg">Published in: </span>
                        <span className="text-gray-700 text-lg">IEEE International Conference on Technologies for Homeland Security (HST)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://ieeexplore.ieee.org/abstract/document/6699097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Read Full Paper
                </a>
              </div>

              {/* Publication 5 - SmartPattern */}
              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 lg:col-span-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl shadow-xl">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      SmartPattern: A Machine Learning Framework for Detecting Reentrancy Vulnerabilities in Blockchain Smart Contracts
                    </h3>
                    <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold border border-green-300">
                      IEEE Publication
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-blue-200 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-green-600 font-semibold">Research Focus: </span>
                        <span className="text-gray-700">Machine Learning Framework for Blockchain Security</span>
                      </div>
                      <div>
                        <span className="text-green-600 font-semibold">Key Achievement: </span>
                        <span className="text-gray-700">94% detection accuracy analyzing 40,000 smart contracts</span>
                      </div>
                      <div>
                        <span className="text-green-600 font-semibold">Models Used: </span>
                        <span className="text-gray-700">Random Forest, Support Vector Classifier</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    SmartPattern introduces a novel machine learning-based framework to detect reentrancy attacks in smart contracts, achieving superior performance over traditional static analysis tools and transformer-based approaches.
                  </p>
                </div>
                
                <a 
                  href="https://ieeexplore.ieee.org/abstract/document/10944738"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Read Full Paper
                </a>
              </div>
            </div>

            {/* Research Impact Statement */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center px-8 py-4 bg-blue-100 border border-blue-300 text-blue-700 rounded-full font-bold backdrop-blur-sm text-lg">
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
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            ← Back to Home
          </button>
          
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-black text-gray-900 mb-8 text-center">
              CEAMLS Research{' '}
              <span className="text-blue-600">
                Symposium 2025
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto">
              Advancing Equitable AI: Our participation in the premier symposium on fairness and inclusivity in artificial intelligence.
            </p>

            {/* Main Event Card */}
            <div className="bg-blue-50 rounded-3xl p-12 border border-blue-200 shadow-2xl mb-12 relative overflow-hidden">
              
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
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl">
                      <i className="fas fa-users"></i>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        CEAMLS Research Symposium
                      </h2>
                      <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-lg font-semibold border border-purple-300 mt-2">
                        2025 • Focus: Equitable AI
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 border border-purple-300">
                      <h3 className="text-xl font-bold text-purple-600 mb-3">Our Research Presentation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="text-pink-600 font-semibold">"Leveraging AI for Equitable Academic and Career Advisory Systems"</span> - 
                        Presenting groundbreaking research on how artificial intelligence can be designed and implemented to ensure fair and inclusive 
                        educational guidance and career counseling for students from diverse backgrounds.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-pink-50 border border-pink-300 rounded-lg p-4">
                        <h4 className="font-semibold text-pink-600 mb-2">Focus Areas</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Bias Detection in AI Systems</li>
                          <li>• Inclusive Algorithm Design</li>
                          <li>• Educational Equity</li>
                          <li>• Career Guidance AI</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 border border-purple-300 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-600 mb-2">Expected Impact</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Symposium Objectives</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-purple-300">
                      <div className="flex items-center gap-3 mb-2">
                        <i className="fas fa-balance-scale text-purple-600 text-xl"></i>
                        <h4 className="font-semibold text-gray-900">Fairness & Inclusivity</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Discussing innovative strategies for fostering fairness and inclusivity in AI applications across various domains.</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-pink-300">
                      <div className="flex items-center gap-3 mb-2">
                        <i className="fas fa-handshake text-pink-600 text-xl"></i>
                        <h4 className="font-semibold text-gray-900">Collaboration</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Bringing together thought leaders, researchers, and practitioners to explore collaborative opportunities.</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-purple-300">
                      <div className="flex items-center gap-3 mb-2">
                        <i className="fas fa-lightbulb text-purple-600 text-xl"></i>
                        <h4 className="font-semibold text-gray-900">Innovation</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Sharing cutting-edge research insights and exploring new frontiers in equitable AI development.</p>
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
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
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
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-blue-400 hover:border-pink-400 text-blue-600 hover:text-pink-600 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-50"
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
              <div className="inline-flex items-center px-8 py-4 bg-purple-100 border border-purple-300 text-purple-700 rounded-full font-bold backdrop-blur-sm text-lg">
                <i className="fas fa-heart mr-3"></i>
                Building a More Equitable Future Through AI Research and Collaboration
                <i className="fas fa-users ml-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  if (currentView !== 'home' && ResearchComponents[currentView]) {
    const Component = ResearchComponents[currentView];
    return <Component />;
  }

  return (
    <div 
      className="min-h-screen overflow-hidden flex flex-col relative bg-white"
    >
      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />

      {/* Animated background overlay */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.15), transparent 40%)`
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-blue-100 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center group">
              <div className="relative bg-blue-50 rounded-lg p-2 shadow-sm">
                <img 
                  src="/depa-lab/images/DEPA-logo.png"
                  alt="DEPA Lab Logo"
                  className="h-10 md:h-12 w-auto transform group-hover:scale-110 transition-all duration-500"
                />
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center bg-blue-50/80 backdrop-blur-xl rounded-full px-2 py-2 shadow-lg border border-blue-100">
                {['Home', 'About', 'Research', 'Projects', 'Awards', 'Funding', 'Publications', 'Symposium', 'Team'].map((item) => (
                  <a 
                    key={item}
                    href={item === 'Home' ? '#hero' : `#${item.toLowerCase()}`}
                    className="relative px-4 py-2 mx-1 text-sm font-medium text-gray-700 hover:text-white rounded-full transition-all duration-300 group"
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                  </a>
                ))}
              </div>
            </nav>
            
            {/* CTA Button for Desktop */}
            <div className="hidden lg:block">
              <a 
                href="#contact"
                className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <svg className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="relative group p-3 bg-blue-50 rounded-2xl shadow-lg border border-blue-100"
              >
                <div className="flex flex-col justify-center items-center w-6 h-6">
                  <span className={`bg-blue-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-blue-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-blue-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-black/20 backdrop-blur-sm z-40" onClick={() => setMobileMenuOpen(false)}>
            <div className="bg-white m-4 rounded-3xl shadow-2xl border border-blue-100 p-8 max-w-sm mx-auto">
              <div className="space-y-6">
                {['Home', 'About', 'Research', 'Projects', 'Awards', 'Funding', 'Publications', 'Symposium', 'Team'].map((item, index) => (
                  <a
                    key={item}
                    href={item === 'Home' ? '#hero' : `#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl hover:from-blue-100 hover:to-blue-100 transition-all duration-300 border border-blue-100"
                  >
                    <span className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-blue-200">
                  <a 
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <span>Get In Touch</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main className="flex-grow pt-20">
        
        {/* Hero Section */}
        <section id="hero" className="relative mb-16 pt-16 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
          
          {/* Hero Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 w-full">
            
            {/* Animated Badge */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4 animate-pulse">
                <div className="h-3 w-3 bg-orange-400 rounded-full animate-ping"></div>
                <span className="text-white uppercase tracking-wider text-sm font-bold px-4 py-2 rounded-full border border-white/30 bg-white/10">
                  🔬 Transforming Data to Decisions Through Intelligent Systems
                </span>
                <div className="h-3 w-3 bg-orange-400 rounded-full animate-ping"></div>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 leading-tight text-white">
              Welcome to{' '}
              <span className="block mt-4 text-white drop-shadow-2xl">
                DEPA Research Lab
              </span>
            </h1>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a 
                href="#research" 
                className="w-full sm:w-auto group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl"
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
                className="w-full sm:w-auto group px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  View Projects
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-blue-100 font-medium">Research Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  13+
                </div>
                <div className="text-blue-100 font-medium">Team Members</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  7
                </div>
                <div className="text-blue-100 font-medium">Research Areas</div>
              </div>
            </div>
            
            <div className="h-2 w-32 bg-orange-500 mx-auto rounded-full shadow-2xl animate-pulse mt-12"></div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
              <span className="text-white text-xs mt-2">Scroll</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24 py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 rounded-3xl p-12 border border-blue-200 shadow-xl">
              
              <h2 className="text-5xl font-black text-gray-900 mb-12 text-center">
                About{' '}
                <span className="text-blue-600">
                  DEPA Lab
                </span>
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-6xl mx-auto">
                The <span className="text-blue-600 font-semibold">Data Engineering and Predictive Analytics Lab (DEPA Lab)</span> at Morgan State University, led by Dr. Kofi Nyarko, is dedicated to unraveling the intricacies of complex systems and providing transformative insights. DEPA Lab focuses on applied research in Computer Vision, Machine Learning, and Artificial Intelligence Techniques.
              </p>

              {/* Mission and Vision Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Mission Card */}
                <div className="group transform hover:scale-105 transition-all duration-500">
                  <div className="bg-white rounded-2xl p-10 border border-blue-200 shadow-lg h-full">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl mr-6 shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                        🎯
                      </div>
                      <h3 className="text-3xl font-black text-gray-900">
                        Our Mission
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We develop innovative machine learning models and algorithms for near real-time data collection, transformation, analysis, prediction, and visualization. DEPA Lab promotes <span className="text-blue-600 font-semibold">inclusivity and innovation</span> in data engineering and predictive analytics.
                    </p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="group transform hover:scale-105 transition-all duration-500">
                  <div className="bg-white rounded-2xl p-10 border border-blue-200 shadow-lg h-full">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl mr-6 shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                        🚀
                      </div>
                      <h3 className="text-3xl font-black text-gray-900">
                        Our Vision
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The Center for Equitable AI and Machine Learning Systems (CEAMLS) facilitates the development and deployment of <span className="text-blue-600 font-semibold">socially responsible and equitable AI systems</span>, ensuring they benefit everyone while educating the public about their impacts on health, prosperity, and happiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas Section */}
        <section id="research" className="mb-24 py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-black text-white mb-10 text-center">
              Core Research{' '}
              <span className="text-white">
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
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-2xl"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-2xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel Container */}
              <div 
                id="research-carousel"
                className="flex overflow-x-auto gap-6 pb-4 px-12 scrollbar-hide"
              >
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex-shrink-0 w-80 group transform hover:scale-105 transition-all duration-500">
                    <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-xl h-full">
                      <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 text-center">
                        {area.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                        {area.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed text-center">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Excellence Badge */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full font-bold text-sm">
                <i className="fas fa-microscope mr-2"></i>
                7 Cutting-Edge Research Domains
                <i className="fas fa-brain ml-2"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-5xl font-black text-gray-900 mb-12 text-center">
              Innovative Projects and{' '}
              <span className="text-blue-600">
                Research Highlights
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto">
              At DEPA Research Lab, we are at the forefront of cutting-edge research, solving complex real-world challenges through interdisciplinary approaches.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group transform hover:scale-105 transition-all duration-500">
                  <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 shadow-lg h-full hover:shadow-xl transition-all duration-300">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-4">{project.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <button 
                      onClick={() => setCurrentView(project.link)}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
        <section id="awards" className="mb-24 py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-5xl font-black text-gray-900 mb-8 text-center">
              Awards and{' '}
              <span className="text-blue-600">
                Recognitions
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Celebrating excellence and innovation in research and technology.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* First Place Innovation Expo Award */}
              <div className="group transform hover:scale-105 transition-all duration-500 lg:col-span-2 xl:col-span-3">
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl">
                        🏆
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">
                        First Place Innovation Expo Award
                      </h3>
                      
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold border border-orange-300">
                          Morgan TechFest 2024
                        </span>
                        <span className="inline-block ml-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold border border-green-300">
                          $2,000 Prize
                        </span>
                      </div>
                      
                      <p className="text-blue-600 font-semibold mb-3">
                        Award Winner: David Nyarko
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        The lab won first place at Morgan TechFest 2024 Innovation Expo with its groundbreaking research, <span className="text-orange-600 font-semibold">'Track-Based Autonomous Wheelchair Navigation for Airport Environments.'</span> This AI-driven system integrates advanced technologies such as Ultralytics YOLOv8, QR Code navigation, LiDAR, and cameras.
                      </p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['YOLOv8', 'QR Navigation', 'LiDAR', 'Computer Vision', 'AI Navigation'].map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium border border-blue-300"
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

            <div className="text-center mt-12">
              <button
                onClick={() => setCurrentView('awards')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg mr-4"
              >
                <i className="fas fa-trophy mr-2"></i>
                View All Awards
              </button>
            </div>
          </div>
        </section>


        {/* Funding Section */}
        <section id="funding" className="mb-24 py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-5xl font-black text-white mb-8 text-center">
              Current{' '}
              <span className="text-white">
                Funding & Grants
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 text-center mb-12 max-w-4xl mx-auto">
              Supporting cutting-edge research through strategic funding and partnerships.
            </p>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl p-12 border border-blue-200 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-6xl shadow-2xl mx-auto lg:mx-0 mb-6">
                      🔬
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Cybersecurity AI Research Grant
                    </h3>
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-300">
                      Aug 2025 - Aug 2026
                    </span>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-2xl font-bold text-blue-600 mb-4">
                      Evaluating AI-Assisted Cybersecurity Operations
                    </h4>
                    
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      This project systematically evaluates the impact of Artificial Intelligence assistance on human performance in critical cybersecurity tasks, including <span className="text-blue-600 font-semibold">vulnerability detection, phishing identification, exploit mitigation, and network anomaly detection.</span>
                    </p>
                    
                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                      <h6 className="text-lg font-semibold text-blue-600 mb-3">Key Research Focus:</h6>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>AI assistance influence on task efficiency and accuracy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>Cognitive impacts on cybersecurity professionals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>Operational benefits and risk scenarios</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="mb-24 py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-5xl font-black text-gray-900 mb-8 text-center">
              Research{' '}
              <span className="text-blue-600">
                Publications
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Explore our contributions to research and innovation in AI and technology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Publication 1 */}
              <div className="group transform hover:scale-105 transition-all duration-500">
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 shadow-lg h-full hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl shadow-xl">
                      📄
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        AI/ML Systems Engineering Workbench Framework
                      </h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-300 mb-3">
                        IEEE CISS
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-blue-600 font-semibold">Authors: </span>
                      <span className="text-gray-700">Dr. Kofi Nyarko, Emmanual Masa-Ibi</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://ieeexplore.ieee.org/document/10089781/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Read More
                  </a>
                </div>
              </div>

              {/* Publication 2 */}
              <div className="group transform hover:scale-105 transition-all duration-500">
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 shadow-lg h-full hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl shadow-xl">
                      🎥
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Automated Traffic Video Analysis
                      </h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-300 mb-3">
                        IEEE CISS
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-blue-600 font-semibold">Authors: </span>
                      <span className="text-gray-700">Tasmeer Alam, Dr. Kofi Nyarko</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://ieeexplore.ieee.org/document/10944672"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Read More
                  </a>
                </div>
              </div>

              {/* Publication 3 */}
              <div className="group transform hover:scale-105 transition-all duration-500">
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 shadow-lg h-full hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl shadow-xl">
                      🔒
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Network Intrusion Visualization
                      </h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-300 mb-3">
                        IEEE Haptic
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-blue-600 font-semibold">Authors: </span>
                      <span className="text-gray-700">Kofi Nyarko et al.</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://ieeexplore.ieee.org/abstract/document/998969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setCurrentView('publications')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-book-open mr-2"></i>
                View All Publications
              </button>
            </div>
          </div>
        </section>

        {/* Symposium Section */}
        <section id="symposium" className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-5xl font-black text-white mb-8 text-center">
              CEAMLS Research{' '}
              <span className="text-white">
                Symposium
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 text-center mb-12 max-w-4xl mx-auto">
              Learn more about our contributions to the 2025 CEAMLS Research Symposium on Equitable AI.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-12 border border-blue-200 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-6xl shadow-2xl mx-auto lg:mx-0 mb-6">
                      🎯
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      CEAMLS Research Symposium 2025
                    </h3>
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-lg font-semibold border border-blue-300">
                      Focus: Equitable AI
                    </span>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-2xl font-bold text-blue-600 mb-6">Our Participation & Research</h4>
                    
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      DEPA Lab is proud to be an active participant in the 2025 CEAMLS Research Symposium, focusing on <span className="text-blue-600 font-semibold">"Equitable AI."</span> During the symposium, our team will present groundbreaking research on <span className="text-orange-600 font-semibold">leveraging AI for equitable academic and career advisory systems.</span>
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://www.morgan.edu/ceamls/equitable-ai-symposium/equitable-ai-symposium-(2025)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Register for Symposium
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setCurrentView('symposium')}
                className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full font-bold backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Learn More About the Symposium
              </button>
            </div>
          </div>
        </section>
        <section id="team" className="mb-24 py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-5xl font-black text-white mb-8 text-center">
              Meet Our{' '}
              <span className="text-white">
                Team
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 text-center mb-12 max-w-3xl mx-auto">
              Meet the brilliant minds behind DEPA Lab's groundbreaking research and innovation.
            </p>

            {/* Team Carousel */}
            <div className="relative max-w-7xl mx-auto">
              <button 
                onClick={() => {
                  const container = document.getElementById('team-carousel');
                  container.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-2xl"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-2xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div 
                id="team-carousel"
                className="flex overflow-x-auto gap-6 pb-4 px-12 scrollbar-hide"
              >
                {presentTeamMembers.map((member, index) => (
                  <div key={index} className="flex-shrink-0 w-64 group transform hover:scale-105 transition-all duration-500">
                    <div className="bg-white rounded-2xl p-6 border border-blue-200 shadow-xl text-center h-full">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
                        <img 
                          src={`/depa-lab/images/${member.image}`}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="w-full h-full absolute inset-0 flex items-center justify-center text-3xl text-white font-bold"
                          style={{
                            background: `linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)`,
                            display: 'none'
                          }}
                        >
                          {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {member.name}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-bold text-lg">
                <i className="fas fa-users mr-3"></i>
                {presentTeamMembers.length} Active Researchers Building the Future of AI
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24 py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-blue-50 rounded-3xl p-12 border border-blue-200 shadow-xl text-center">
              <h2 className="text-5xl font-black text-gray-900 mb-8">
                Contact{' '}
                <span className="text-blue-600">
                  Us
                </span>
              </h2>
              
              <div className="space-y-6 max-w-3xl mx-auto">
                <p className="text-xl text-gray-700">
                  <span className="text-blue-600 font-semibold">Email:</span>{' '}
                  <a href="mailto:kofi.nyarko@morgan.edu" className="text-gray-900 hover:text-blue-600 transition-colors duration-300 underline">
                    kofi.nyarko@morgan.edu
                  </a>
                </p>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  <span className="text-blue-600 font-semibold">Address:</span> Room 112 and 113 Schaefer Engineering Building, School of Engineering, 1700 E Cold Spring Ln, Baltimore, MD 21251
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">
                D
              </div>
              <span className="text-2xl font-black">
                DEPA Research Lab
              </span>
            </div>
            
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Data Engineering and Predictive Analytics Lab at Morgan State University
            </p>
            
            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100">
                © {new Date().getFullYear()} DEPA Research Lab. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default DepaLabHomepage;
