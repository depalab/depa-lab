// pages.js - Updated version
document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Function to close mobile menu
    const closeMobileMenu = () => {
        const checkbox = document.getElementById('check');
        const navLinksContainer = document.querySelector('.nav-links');
        if (checkbox) {
            checkbox.checked = false;
        }
        if (navLinksContainer) {
            navLinksContainer.classList.remove('active');
        }
    };

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target section id from the href
            const targetId = this.getAttribute('href').split('#')[1];
            
            // Always close the mobile menu first
            closeMobileMenu();
            
            // If we're on a different page and have a section id
            if (window.location.pathname.includes('pages/') && targetId) {
                window.location.href = `../index.html#${targetId}`;
                return; // Stop further execution
            }
            
            // If we're on the main page
            if (targetId && !window.location.pathname.includes('pages/')) {
                e.preventDefault();
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    // Add a small delay to ensure the menu is closed before scrolling
                    setTimeout(() => {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                }
            }
        });
    });

    // Add click event listener to the menu button
    const menuButton = document.querySelector('.checkbtn');
    if (menuButton) {
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from bubbling up
            const navLinksContainer = document.querySelector('.nav-links');
            if (navLinksContainer) {
                navLinksContainer.classList.toggle('active');
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const navLinksContainer = document.querySelector('.nav-links');
        const menuButton = document.querySelector('.checkbtn');
        const checkbox = document.getElementById('check');
        
        if (navLinksContainer && menuButton) {
            // If click is outside menu and menu button
            if (!navLinksContainer.contains(e.target) && !menuButton.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
});
