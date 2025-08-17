// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
