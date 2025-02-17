document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target section id from the href
            const targetId = this.getAttribute('href').split('#')[1];
            
            // If we're on a different page and have a section id
            if (window.location.pathname.includes('pages/') && targetId) {
                window.location.href = `../index.html#${targetId}`;
            }
            
            // If we're on the main page
            if (targetId && !window.location.pathname.includes('pages/')) {
                e.preventDefault();
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            
            // Close mobile menu
            const checkbox = document.getElementById('check');
            if (checkbox) {
                checkbox.checked = false;
            }
        });
    });
});
