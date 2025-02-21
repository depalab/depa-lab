(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - 100,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scroll with offset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()
      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with offset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  // Your custom code starts here
  document.addEventListener("DOMContentLoaded", () => {
    // Function to close mobile menu
    function closeMobileMenu() {
      const checkbox = document.getElementById('check');
      if (checkbox) {
        checkbox.checked = false;
      }
    }

    // Mobile Menu Toggle
    const checkBtn = document.querySelector('.checkbtn');
    const checkbox = document.getElementById('check');
    const closeBtn = document.querySelector('.close-menu');
    const scrollTopBtn = document.createElement('button');

    // Initialize scroll-to-top button
    scrollTopBtn.textContent = '↑';
    scrollTopBtn.classList.add('scroll-to-top');
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    // Toggle menu on hamburger icon click
    if (checkBtn && checkbox) {
      checkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        checkbox.checked = !checkbox.checked;
        scrollTopBtn.style.display = 'none';
      });
    }

    // Close button functionality
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMobileMenu();
      });
    }

    // Add change event listener to checkbox
    checkbox?.addEventListener('change', (e) => {
      if (e.target.checked) {
        scrollTopBtn.style.display = 'none';
      }
    });

    // Navigation Links Click Handling
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').split('#')[1];
        
        if (!targetId) return;

        if (window.location.pathname.includes('pages/')) {
          window.location.href = `../index.html#${targetId}`;
        } else {
          e.preventDefault();
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            // First scroll to the section
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            
            // Then close the menu after a short delay
            setTimeout(() => {
              closeMobileMenu();
            }, 300);
          }
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      const navLinks = document.querySelector('.nav-links');
      if (checkbox?.checked) {
        const isClickInsideMenu = navLinks?.contains(e.target);
        const isClickOnButton = checkBtn?.contains(e.target);
        
        if (!isClickInsideMenu && !isClickOnButton) {
          closeMobileMenu();
        }
      }
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

    // Combined Carousel functionality
    const teamCarousel = document.querySelector('.team-carousel');
    if (teamCarousel) {
      // Carousel Arrow Functionality
      const leftArrow = document.querySelector('.left-arrow');
      const rightArrow = document.querySelector('.right-arrow');
      
      if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => teamCarousel.scrollBy({ left: -300, behavior: 'smooth' }));
        rightArrow.addEventListener('click', () => teamCarousel.scrollBy({ left: 300, behavior: 'smooth' }));
        
        // Handle keyboard navigation for accessibility
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

      // Populate Team Carousel
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

    // Active Link Highlighting
    const sections = document.querySelectorAll('section');
    const navLinksArray = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 100;
      const menuOpen = checkbox?.checked;
      
      // Handle scroll-to-top button visibility
      scrollTopBtn.style.display = (window.scrollY > 300 && !menuOpen) ? 'block' : 'none';
      
      // Handle active section highlighting
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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

})();
