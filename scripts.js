// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    // Load Components First
    loadComponents().then(() => {
        initializeUI();
    });
});

// Component Loading Function
async function loadComponents() {
    try {
        // Load header into header container
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            const headerResponse = await fetch('/components/header.html');
            const headerHtml = await headerResponse.text();
            headerContainer.innerHTML = headerHtml;
        }

        // Create and load footer container if it doesn't exist
        let footerContainer = document.getElementById('footer-container');
        if (!footerContainer) {
            footerContainer = document.createElement('div');
            footerContainer.id = 'footer-container';
            document.body.appendChild(footerContainer);
        }
        
        const footerResponse = await fetch('/components/footer.html');
        const footerHtml = await footerResponse.text();
        footerContainer.innerHTML = footerHtml;

    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Main UI Initialization
function initializeUI() {
    // Mobile Menu Elements
    const checkbox = document.getElementById('check');
    const checkBtn = document.querySelector('.checkbtn');
    const closeBtn = document.querySelector('.close-menu');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Function to close mobile menu
    function closeMobileMenu() {
        if (checkbox) {
            checkbox.checked = false;
        }
    }

    // Initialize scroll-to-top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.textContent = '↑';
    scrollTopBtn.classList.add('scroll-to-top');
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    // Mobile Menu Event Listeners
    checkBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        checkbox.checked = !checkbox.checked;
        scrollTopBtn.style.display = 'none';
    });

    closeBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMobileMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (checkbox?.checked && 
            !nav?.contains(e.target) && 
            !checkBtn?.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Stop propagation for clicks inside nav
    nav?.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Navigation Links Click Handling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').split('#')[1];
            
            if (!targetId) return;

            if (window.location.pathname.includes('pages/')) {
                window.location.href = `../index.html#${targetId}`;
            } else {
                e.preventDefault();
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setTimeout(closeMobileMenu, 300);
                }
            }
        });
    });

    // Fade-In Animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Team Carousel Functionality
    const teamCarousel = document.querySelector('.team-carousel');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if (teamCarousel && leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => 
            teamCarousel.scrollBy({ left: -300, behavior: 'smooth' }));
        
        rightArrow.addEventListener('click', () => 
            teamCarousel.scrollBy({ left: 300, behavior: 'smooth' }));

        // Keyboard navigation
        teamCarousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                teamCarousel.scrollBy({ left: -300, behavior: 'smooth' });
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                teamCarousel.scrollBy({ left: 300, behavior: 'smooth' });
            }
        });
    }

    // Active Link Highlighting & Scroll Button
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;
        
        // Handle scroll-to-top button visibility
        scrollTopBtn.style.display = (window.scrollY > 300 && !checkbox?.checked) ? 'block' : 'none';
        
        // Handle active section highlighting
        document.querySelectorAll('section').forEach(section => {
            if (section.offsetTop <= scrollPos && 
                (section.offsetTop + section.offsetHeight) > scrollPos) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').split('#')[1] === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Scroll-to-top functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Team Members Data
    const teamMembers = [
        { name: "Dr. Kofi Nyarko", role: "Director of DEPA Lab", image: "images/nyarko.jpg" },
        { name: "Tasmeer Alam", role: "AI Researcher", image: "images/Tasmeer_Alam.jpeg" },
        { name: "Cynthia Nosiri", role: "AI Researcher", image: "images/Cynthia.jpeg" },
        { name: "Derrick Cook", role: "Research Assistant", image: "images/Derrick_Cook.PNG" },
        { name: "Rezoan Sultan", role: "Research Assistant", image: "images/Rezoan_Sultan.jpeg" },
        { name: "Benjamin Hall", role: "Researcher", image: "images/Benjamin Hall.jpg" },
        { name: "Emmanuel Masa-ibi", role: "Research Assistant", image: "images/Emmanuel Masa-ibi.jpeg" },
        { name: "Awotwi Baffoe", role: "Research Assistant", image: "images/Awotwi_Baffoe.jpg" },
        { name: "Opeyemi Adeniran", role: "Research Assistant", image: "images/Opeyemi.PNG" },
        { name: "Anjolie Anthony", role: "Researcher", image: "images/Anjolie.JPG" },
        { name: "David Nyarko", role: "Research Assistant", image: "images/david-nyarko.JPG" }
    ];

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
}
