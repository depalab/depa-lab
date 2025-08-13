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
        
        {/* Hero Section */}
        <section id="hero" className="relative mb-16 sm:mb-24 md:mb-32 pt-8 sm:pt-12 md:pt-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            
            {/* Animated Badge */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 md:mb-10 animate-pulse">
              <div className="h-2 w-2 sm:h-4 sm:w-4 bg-blue-400 rounded-full animate-ping shadow-lg" 
                   style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'}}></div>
              <span className="text-blue-300 uppercase tracking-widest text-xs sm:text-sm md:text-lg font-black" 
                    style={{
                      textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 2px 2px 4px rgba(0,0,0,0.9)',
                      fontFamily: '"Inter", sans-serif',
                      letterSpacing: '0.1em sm:0.2em'
                    }}>
                🔬 Driving Innovation at the Intersection of Technology and Impact
              </span>
              <div className="h-2 w-2 sm:h-4 sm:w-4 bg-blue-400 rounded-full animate-ping shadow-lg" 
                   style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'}}></div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 md:mb-12 leading-[0.9] tracking-tight"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e8f4ff 50%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(59, 130, 246, 0.2)',
                  filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.9))'
                }}>
              Welcome to{' '}
              <span className="block mt-2 sm:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500"
                    style={{
                      textShadow: 'none',
                      filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
                      animation: 'glow 2s ease-in-out infinite alternate'
                    }}>
                DEPA Research Lab
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light"
               style={{
                 textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                 fontFamily: '"Inter", sans-serif'
               }}>
              Driving innovation at the intersection of technology and impact.
            </p>
            
            <div className="h-1 sm:h-2 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full shadow-2xl mb-8 sm:mb-12 md:mb-16"
                 style={{boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'}}></div>
            
            {/* Floating Elements */}
            <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-bounce"></div>
            <div className="hidden sm:block absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="hidden sm:block absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-ping"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16 sm:mb-24 md:mb-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl">
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 md:mb-12 text-center" 
                  style={{
                    textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
                    fontFamily: '"Inter", sans-serif'
                  }}>
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
                  DEPA Lab
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-8 sm:mb-12 text-center max-w-5xl mx-auto" 
                 style={{
                   textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                   fontFamily: '"Inter", sans-serif'
                 }}>
                The <span className="text-blue-300 font-semibold">Data Engineering and Predictive Analytics Lab (DEPA Lab)</span> at Morgan State University, led by Dr. Kofi Nyarko, is dedicated to unraveling the intricacies of complex systems and providing transformative insights. DEPA Lab focuses on applied research in Computer Vision, Machine Learning, and Artificial Intelligence Techniques.
              </p>

              {/* Mission and Vision Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                
                {/* Mission Card */}
                <div className="group transform hover:scale-105 transition-all duration-500">
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-500/20 shadow-2xl h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mr-4 shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                        🎯
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white" 
                          style={{
                            textShadow: '0 0 20px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        Our Mission
                      </h3>
                    </div>
                    
                    <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light" 
                       style={{
                         textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                         fontFamily: '"Inter", sans-serif'
                       }}>
                      We develop innovative machine learning models and algorithms for near real-time data collection, transformation, analysis, prediction, and visualization. DEPA Lab promotes <span className="text-blue-300 font-semibold">inclusivity and innovation</span> in data engineering and predictive analytics.
                    </p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="group transform hover:scale-105 transition-all duration-500">
                  <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-purple-500/20 shadow-2xl h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mr-4 shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                        🚀
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white" 
                          style={{
                            textShadow: '0 0 20px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                        Our Vision
                      </h3>
                    </div>
                    
                    <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light" 
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
        <section id="research" className="mb-16 sm:mb-24 md:mb-32">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 sm:mb-12 md:mb-16 text-center" 
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.9)',
                  fontFamily: '"Inter", sans-serif'
                }}>
              Core Research{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500">
                Areas
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {researchAreas.map((area, index) => (
                <div key={index} className="group transform hover:scale-105 transition-all duration-500">
                  <div className="bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl h-full hover:border-blue-500/40 transition-all duration-300">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors duration-300" 
                        style={{
                          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.9)',
                          fontFamily: '"Inter", sans-serif'
                        }}>
                      {area.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300" 
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
          0%, 100% { filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5)); }
          50% { filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.8)); }
        }
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default DepaLabHomepage;
