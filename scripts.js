document.addEventListener('DOMContentLoaded', () => {
    // Check if we're in a subdirectory
    const isInSubdirectory = window.location.pathname.includes('/pages/');
    const basePath = isInSubdirectory ? '../' : '';

    // Load components
    loadComponent('header-container', `${basePath}components/header.html`);
    loadComponent('footer-container', `${basePath}components/footer.html`);

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

    function toggleMobileMenu() {
        const checkbox = document.getElementById('check');
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        const menuIcon = document.querySelector('.checkbtn'); 

        const isOpen = menuIcon.classList.contains('menu-open'); 
        menuIcon.classList.toggle('menu-open', !isOpen); 

        if (checkbox) checkbox.checked = !isOpen;
        if (nav) {
            nav.style.visibility = !isOpen ? 'visible' : 'hidden';
            nav.style.opacity = !isOpen ? '1' : '0';
        }
        if (navLinks) navLinks.style.right = !isOpen ? '0' : '-100%';

        // Hide the hamburger menu when open
        menuIcon.innerHTML = isOpen ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
    }

    function closeMobileMenu() {
        const checkbox = document.getElementById('check');
        const menuIcon = document.querySelector('.checkbtn');
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');

        if (checkbox) checkbox.checked = false;
        if (nav) {
            nav.style.visibility = 'hidden';
            nav.style.opacity = '0';
        }
        if (navLinks) navLinks.style.right = '-100%';
        if (menuIcon) {
            menuIcon.classList.remove('menu-open'); 
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Reset to hamburger menu
        }
    }

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
                toggleMobileMenu(); 
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

        document.addEventListener('click', (e) => {
            const checkbox = document.getElementById('check');
            const menuIcon = document.querySelector('.checkbtn'); 
            if (checkbox?.checked) {
                const isClickInsideMenu = navLinks?.contains(e.target);
                const isClickOnButton = menuIcon?.contains(e.target);

                if (!isClickInsideMenu && !isClickOnButton) {
                    closeMobileMenu();
                }
            }
        });
    }

    initializeEventListeners();

    // Scroll-to-top functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Update the team carousel
    const teamCarousel = document.querySelector('.team-carousel');
    if (teamCarousel) {
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

        teamMembers.forEach(member => {
            const cardHTML = `
                <div class="card" tabindex="0">
                    <img src="${member.image}" alt="${member.name}" class="team-photo" onerror="this.src='images/placeholder.jpg'">
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                </div>
            `;
            teamCarousel.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
});
