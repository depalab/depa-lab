// src/components/Hero.js
import React from 'react';

const Hero = () => {
  const stats = [
    { number: "50+", label: "Research Projects" },
    { number: "10+", label: "Team Members" },
    { number: "7", label: "Research Areas" }
  ];

  return (
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
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-2xl sm:text-3xl md:text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300 ${
                index % 2 === 0 ? 'text-blue-400' : 'text-purple-400'
              }`} 
                   style={{textShadow: `0 0 20px rgba(${index % 2 === 0 ? '59, 130, 246' : '147, 51, 234'}, 0.6)`}}>
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
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
  );
};

export default Hero;
