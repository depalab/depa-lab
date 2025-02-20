// MobileNavigation.js
import React, { useState, useCallback, useEffect } from 'react';

const MobileNavigation = ({ basePath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    
    if (!targetId) return;
    
    if (window.location.pathname.includes('/pages/')) {
      window.location.href = `${basePath}index.html#${targetId}`;
      return;
    }

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(closeMenu, 300);
    }
  }, [basePath, closeMenu]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const navContainer = document.querySelector('.nav-links');
      const menuButton = document.querySelector('.mobile-menu-button');
      
      if (isMenuOpen && navContainer && menuButton) {
        const isClickInsideMenu = navContainer.contains(e.target);
        const isClickOnButton = menuButton.contains(e.target);
        
        if (!isClickInsideMenu && !isClickOnButton) {
          closeMenu();
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen, closeMenu]);

  const navItems = [
    'about',
    'research',
    'innovation',
    'events',
    'team',
    'contact'
  ];

  return (
    <>
      <button
        className="mobile-menu-button lg:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <i className="fas fa-bars text-2xl"></i>
      </button>

      <div className={`nav-links absolute top-full right-0 w-3/4 bg-white transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:relative lg:translate-x-0 lg:w-auto`}>
        <button
          className="lg:hidden absolute top-4 right-4 p-2"
          onClick={closeMenu}
        >
          <i className="fas fa-times"></i>
        </button>
        
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4">
          {navItems.map(item => (
            <li key={item}>
              <a
                href={`${basePath}index.html#${item}`}
                className="text-lg hover:text-blue-600 transition-colors"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;
