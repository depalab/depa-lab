document.addEventListener('DOMContentLoaded', () => {
    // Function to close mobile menu
    function closeMobileMenu() {
        const checkbox = document.getElementById('check');
        const navLinks = document.querySelector('.nav-links');
        if (checkbox && navLinks) {
            checkbox.checked = false;
            navLinks.classList.remove('active');
        }
    }

    // Add click event listener to nav links once they're loaded
    function initializeNavigation() {
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Close mobile menu first
                closeMobileMenu();
                
                // Get the target section id from the href
                const targetId = this.getAttribute('href').split('#')[1];
                
                // If we're on a different page and have a section id
                if (window.location.pathname.includes('pages/') && targetId) {
                    window.location.href = `../index.html#${targetId}`;
                }
                
                // If we're on the main page
                if (targetId && !window.location.pathname.includes('pages/')) {
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - 60,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Add mobile menu toggle functionality
        const checkBtn = document.querySelector('.checkbtn');
        const navLinksMenu = document.querySelector('.nav-links');
        
        if (checkBtn && navLinksMenu) {
            checkBtn.addEventListener('click', () => {
                navLinksMenu.classList.toggle('active');
            });
        }
    }

    // Initialize navigation after a short delay to ensure components are loaded
    setTimeout(initializeNavigation, 100);
});
