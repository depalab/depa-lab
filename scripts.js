document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const checkbox = document.getElementById("check");
    const closeBtn = document.querySelector(".close-menu");
    const navLinksContainer = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Function to close the mobile menu
    function closeMobileMenu() {
        if (checkbox) {
            checkbox.checked = false; // Uncheck the menu toggle checkbox
        }
        if (navLinksContainer) {
            navLinksContainer.classList.remove("active"); // Remove active class
        }
    }

    // Close menu when the close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener("click", closeMobileMenu);
    }

    // Close menu when clicking on a navigation link
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href").split("#")[1];

            if (!targetId) return;

            // If navigating within the same page, scroll smoothly
            if (!window.location.pathname.includes("pages/")) {
                e.preventDefault();
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }

            // Close the mobile menu after a short delay
            setTimeout(closeMobileMenu, 200);
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (
            navLinksContainer &&
            checkbox &&
            checkbox.checked &&
            !navLinksContainer.contains(e.target) &&
            !e.target.matches(".checkbtn")
        ) {
            closeMobileMenu();
        }
    });

    // Fade-In Animation
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    // Scroll-to-Top Button
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.textContent = "↑";
    scrollTopBtn.classList.add("scroll-to-top");
    scrollTopBtn.setAttribute("aria-label", "Scroll to top");
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    // Team Members Array
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
});
