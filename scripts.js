document.addEventListener("DOMContentLoaded", () => {
    // Team Members Array - Define this at the top level
    const teamMembers = [
        {
            name: "Dr. Kofi Nyarko",
            role: "Director of DEPA Lab",
            image: "images/nyarko.jpg"
        },
        {
            name: "Tasmeer Alam",
            role: "AI Researcher",
            image: "images/Tasmeer_Alam.jpeg"
        },
        {
            name: "Cynthia Nosiri",
            role: "AI Researcher",
            image: "images/Cynthia.jpeg"
        },
        {
            name: "Derrick Cook",
            role: "Research Assistant",
            image: "images/Derrick_Cook.PNG"
        },
        {
            name: "Rezoan Sultan",
            role: "Research Assistant",
            image: "images/Rezoan_Sultan.jpeg"
        },
        {
            name: "Benjamin Hall",
            role: "Researcher",
            image: "images/Benjamin Hall.jpg"
        },
        {
            name: "Emmanuel Masa-ibi",
            role: "Research Assistant",
            image: "images/Emmanuel Masa-ibi.jpeg"
        },
        {
            name: "Awotwi Baffoe",
            role: "Research Assistant",
            image: "images/Awotwi_Baffoe.jpg"
        },
        {
            name: "Opeyemi Adeniran",
            role: "Research Assistant",
            image: "images/Opeyemi.PNG"
        },
        {
            name: "Anjolie Anthony",
            role: "Researcher",
            image: "images/Anjolie.JPG"
        },
        {
            name: "David Nyarko",
            role: "Research Assistant",
            image: "images/david-nyarko.JPG"
        }
    ];

    // Function to close mobile menu
    function closeMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        const checkbox = document.querySelector('.check');
        if (navLinks && checkbox) {
            navLinks.classList.remove('active');
            checkbox.checked = false;
        }
    }

    // Cache DOM elements
    const checkBtn = document.querySelector('.checkbtn');
    const navLinks = document.querySelector('.nav-links');
    const checkbox = document.getElementById('check');

    // Mobile Menu Toggle
    if (checkBtn && navLinks) {
        checkBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle body scroll
            document.body.classList.toggle('menu-open');
        });
    }

    // Navigation Links Click Handling
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').split('#')[1];
            
            // Close mobile menu first
            closeMobileMenu();
            document.body.classList.remove('menu-open');
            
            // Handle navigation to different pages
            if (window.location.pathname.includes('pages/') && targetId) {
                window.location.href = `../index.html#${targetId}`;
                return;
            }
            
            // Handle same-page navigation
            if (targetId && !window.location.pathname.includes('pages/')) {
                e.preventDefault();
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    setTimeout(() => {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                }
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = navLinks?.contains(e.target);
        const isClickOnMenuButton = checkBtn?.contains(e.target);
        const isMenuOpen = navLinks?.classList.contains('active');

        if (isMenuOpen && !isClickInsideMenu && !isClickOnMenuButton) {
            closeMobileMenu();
            document.body.classList.remove('menu-open');
        }
    });

    // Fade-In Animation Logic
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // Carousel Arrow Functionality
    const teamCarousel = document.querySelector('.team-carousel');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if (teamCarousel && leftArrow && rightArrow) {
        // Scroll Left
        leftArrow.addEventListener('click', () => {
            teamCarousel.scrollBy({
                left: -300, // Adjust scroll amount
                behavior: 'smooth'
            });
        });

        // Scroll Right
        rightArrow.addEventListener('click', () => {
            teamCarousel.scrollBy({
                left: 300, // Adjust scroll amount
                behavior: 'smooth'
            });
        });

        // Handle keyboard navigation for accessibility
        teamCarousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                teamCarousel.scrollBy({
                    left: -300,
                    behavior: 'smooth'
                });
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                teamCarousel.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Active Link Highlighting for Navigation
    const sections = document.querySelectorAll('section');
    const navLinksArray = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100; // Adjust based on header height
        sections.forEach(section => {
            if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').split('#')[1] === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Scroll-to-Top Button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.textContent = '↑';
    scrollTopBtn.classList.add('scroll-to-top');
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    });

    window.addEventListener('scroll', () => {
        scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    // Populate Team Carousel
    if (teamCarousel) {
        teamMembers.forEach(member => {
            const cardHTML = `
                <div class="card" tabindex="0">
                    <img src="${member.image}" 
                         alt="${member.name}" 
                         class="team-photo"
                         onerror="this.src='images/placeholder.jpg'">
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                </div>
            `;
            teamCarousel.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
});
