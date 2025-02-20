// Header.js
import React from 'react';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const isInSubdirectory = window.location.pathname.includes('/pages/');
  const basePath = isInSubdirectory ? '../' : '/depa-lab/';
  
  return (
    <header className="w-full fixed top-0 right-0 bg-white z-50">
      <nav className="relative flex items-center justify-between p-4">
        <a href={`${basePath}index.html`} className="logo">
          <img
            src={`${basePath}images/DEPA-logo.png`}
            alt="DEPA Lab Logo"
            className="h-12"
          />
        </a>
        <MobileNavigation basePath={basePath} />
      </nav>
    </header>
  );
};

export default Header;
