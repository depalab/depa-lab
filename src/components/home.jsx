import React, { useState, useEffect } from 'react';

const DepaLabHomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

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

  const projects = [
    {
      title: "AI Assistive Comprehension Assessor",
      description: "Developing an AI-powered tool to evaluate student comprehension by analyzing essays and generating quizzes in Canvas QTI/XML format.",
      link: "#"
    },
    {
      title: "Benchmarking LLMs for AAVE & SAE",
      description: "Assessing leading LLMs for their ability to generate dialect-specific text while maintaining semantic consistency.",
      link: "#"
    },
    {
      title: "Ground Plane Segmentation for Wheelchair Mobility",
      description: "Utilizing real-time segmentation techniques within the SAM framework to improve navigation for wheelchair users.",
      link: "#"
    },
    {
      title: "AI/ML Bench Guard",
      description: "A benchmarking framework for evaluating cloud-based and open-source ML services across various tasks.",
      link: "#"
    },
    {
      title: "Advanced Academic Support System",
      description: "Integrating Generative AI into an academic advisory system to provide instant, AI-driven responses.",
      link: "#"
    },
    {
      title: "Queryable Computer Vision Pipeline",
      description: "Developing a scalable system that allows data analysts to execute SQL-like queries on video content.",
      link: "#"
    }
  ];

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
              {['Home', 'About', 'Research', 'Projects', 'Team', 'Contact'].map((item) => (
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
                {['Home', 'About', 'Research', 'Projects', 'Team', 'Contact'].map((item) => (
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
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 mb-8 sm:mb-12 md:mb-16 max-w-5xl mx-auto leading-relaxed font-light px-4"
               style={{
                 textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 20px rgba(255,255,255,0.1)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              Driving innovation at the intersection of{' '}
              <span className="text-blue-300 font-semibold">technology</span> and{' '}
              <span className="text-purple-300 font-semibold">impact</span>.
            </p>
            
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

        {/* Research Areas Section */}
        <section id="research" className="mb-12 sm:mb-20 md:mb-28 lg:mb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center animate-fadeInUp" 
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
                  fontFamily: '"Inter", sans-serif'
                }}>
              Core Research{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
                Areas
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {researchAreas.map((area, index) => (
                <div key={index} className="group transform hover:scale-105 transition-all duration-500 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl h-full hover:border-blue-500/40 hover:shadow-blue-500/20 transition-all duration-500 group-hover:bg-black/50">
                    <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 lg:mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 text-center">
                      {area.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 group-hover:text-blue-300 transition-colors duration-300 text-center" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      {area.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center" 
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
          </div>
        </section>

        {/* Projects Section */}
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
                    <a 
                      href={project.link}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
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
      `}</style>
    </div>
  );
};

export default DepaLabHomepage;
