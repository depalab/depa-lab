document.addEventListener('DOMContentLoaded', () => {
    // Check if we're in a subdirectory
    const isInSubdirectory = window.location.pathname.includes('/pages/');
    const basePath = isInSubdirectory ? '../' : '';

    // Load components
    loadComponent('header-container', `${basePath}components/header.html`);
    loadComponent('footer-container', `${basePath}components/footer.html`);

    // Function to load components
    function loadComponent(containerId, componentPath) {
        const container = document.getElementById(containerId);
        if (container) {
            fetch(componentPath)
                .then(response => response.text())
                .then(data => {
                    container.innerHTML = data;
                    initializeEventListeners();
                })
                .catch(error => console.error('Error loading component:', error));
        }
    }

    // Function to toggle mobile menu
    function toggleMobileMenu(show) {
        const checkbox = document.getElementById('check');
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        const checkBtn = document.querySelector('.checkbtn');

        if (checkbox) checkbox.checked = show;
        if (nav) {
            nav.style.visibility = show ? 'visible' : 'hidden';
            nav.style.opacity = show ? '1' : '0';
        }
        if (navLinks) navLinks.style.right = show ? '0' : '-100%';
        if (checkBtn) checkBtn.style.display = show ? 'none' : 'block';

        if (window.scrollY > 300) {
            scrollTopBtn.style.display = show ? 'none' : 'block';
        }
    }

    // Function to close mobile menu
    function closeMobileMenu() {
        toggleMobileMenu(false);
    }

    // Create scroll-to-top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.textContent = '↑';
    scrollTopBtn.classList.add('scroll-to-top');
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    function initializeEventListeners() {
        const checkBtn = document.querySelector('.checkbtn');
        const navLinks = document.querySelector('.nav-links');

        if (checkBtn) {
            checkBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleMobileMenu(true);
            });
        }

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href').split('#')[1];

                if (window.matchMedia("(max-width: 768px)").matches) {
                    closeMobileMenu();
                }

                if (!targetId) return;

                if (window.location.pathname.includes('pages/')) {
                    window.location.href = `../index.html#${targetId}`;
                } else {
                    e.preventDefault();
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const checkbox = document.getElementById('check');
            const checkBtn = document.querySelector('.checkbtn');
            if (checkbox?.checked) {
                const isClickInsideMenu = navLinks?.contains(e.target);
                const isClickOnButton = checkBtn?.contains(e.target);

                if (!isClickInsideMenu && !isClickOnButton) {
                    closeMobileMenu();
                }
            }
        });
    }

    initializeEventListeners();

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

    // Carousel Elements and Functionality
    const teamCarousel = document.querySelector('.team-carousel');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if (teamCarousel && leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => teamCarousel.scrollBy({ left: -300, behavior: 'smooth' }));
        rightArrow.addEventListener('click', () => teamCarousel.scrollBy({ left: 300, behavior: 'smooth' }));

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

    // Active Link Highlighting and Scroll-to-Top Button Visibility
    const sections = document.querySelectorAll('section');
    const navLinksArray = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;
        const checkbox = document.getElementById('check');
        const menuOpen = checkbox?.checked;

        scrollTopBtn.style.display = (window.scrollY > 300 && !menuOpen) ? 'block' : 'none';

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

    // Scroll-to-top functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Complete Team Members Data
    const teamMembers = [
        { name: "Dr. Kofi Nyarko", role: "Director of DEPA Lab", image: "images/nyarko.jpg" },
        { name: "Tasmeer Alam", role: "AI Researcher", image: "images/Tasmeer_Alam.jpeg" },
        { name: "Cynthia Nosiri", role: "AI Researcher", image: "images/Cynthia.jpeg" },
        { name: "Derrick Cook", role: "AI Researcher", image: "images/Derrick_Cook.PNG" },
        { name: "Rezoan Sultan", role: "Generative AI Researcher", image: "images/Rezoan_Sultan.jpeg" },
        { name: "Benjamin Hall", role: "Researcher", image: "images/Benjamin Hall.jpg" },
        { name: "Emmanuel Masa-ibi", role: "Researcher", image: "images/Emmanuel Masa-ibi.jpeg" },
        { name: "Awotwi Baffoe", role: "AI Researcher", image: "images/Awotwi_Baffoe.jpg" },
        { name: "Opeyemi Adeniran", role: "AI Researcher", image: "images/Opeyemi.PNG" },
        { name: "Anjolie Anthony", role: "Researcher", image: "images/Anjolie.JPG" }, 
        { name: "Binisa Giri", role: "AI Researcher", image: "images/giri.jpeg" },
        { name: "Nicholas Cook", role: "AI Researcher", image: "images/NicholasCook.jpg" },
        { name: "David Nyarko", role: "AI Researcher", image: "images/david-nyarko.JPG" }
    ];

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
