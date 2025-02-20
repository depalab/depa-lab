// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} DEPA Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
