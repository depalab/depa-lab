document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements
    const navLinks = document.querySelectorAll('.nav-links a');
    const navLinksContainer = document.querySelector('.nav-links');
    const menuButton = document.querySelector('.checkbtn');
    const checkbox = document.getElementById('check');

    // Function to close mobile menu
    const closeMobileMenu = () => {
        if (checkbox) {
            checkbox.checked = false; // Uncheck the checkbox (if it controls the menu)
        }
        if (navLinksContainer) {
            navLinksContainer.classList.remove('active'); // Remove the 'active' class to hide the menu
        }
    };

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Extract the target section ID from the href attribute
            const targetId = this.getAttribute('href').split('#')[1];

            // Always close the mobile menu when a link is clicked
            closeMobileMenu();

            // Handle navigation based on the current page
            if (window.location.pathname.includes('pages/') && targetId) {
                // If on a subpage, redirect to the main page with the target section in the URL hash
                window.location.href = `../index.html#${targetId}`;
                return; // Stop further execution
            }

            if (targetId && !window.location.pathname.includes('pages/')) {
                // If on the main page, prevent default link behavior and scroll smoothly to the target section
                e.preventDefault();
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    // Add a small delay to ensure the menu is fully closed before scrolling
                    setTimeout(() => {
                        targetSection.scrollIntoView({
                            behavior: 'smooth', // Smooth scroll
                            block: 'start' // Align the top of the section with the viewport
                        });
                    }, 100);
                }
            }
        });
    });

    // Add click event listener to the menu button
    if (menuButton) {
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the click event from bubbling up
            if (navLinksContainer) {
                navLinksContainer.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
            }
        });
    }

    // Close the menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (navLinksContainer && menuButton) {
            // If the click is outside the menu and the menu button, close the menu
            if (!navLinksContainer.contains(e.target) && !menuButton.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
});
