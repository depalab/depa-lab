// src/components/GlobalStyles.js
import React from 'react';

const GlobalStyles = () => {
  return (
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
  );
};

export default GlobalStyles;
