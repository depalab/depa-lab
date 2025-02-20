// js/components/Team.js
const Team = () => {
    // Team members data
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

    React.useEffect(() => {
        // Initialize carousel functionality
        const teamCarousel = document.querySelector('.team-carousel');
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');

        if (teamCarousel && leftArrow && rightArrow) {
            const scrollLeft = () => teamCarousel.scrollBy({ left: -300, behavior: 'smooth' });
            const scrollRight = () => teamCarousel.scrollBy({ left: 300, behavior: 'smooth' });

            leftArrow.addEventListener('click', scrollLeft);
            rightArrow.addEventListener('click', scrollRight);

            // Keyboard navigation
            teamCarousel.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    scrollLeft();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    scrollRight();
                }
            });

            // Cleanup event listeners
            return () => {
                leftArrow.removeEventListener('click', scrollLeft);
                rightArrow.removeEventListener('click', scrollRight);
                teamCarousel.removeEventListener('keydown');
            };
        }
    }, []);

    return (
        <section id="team" className="section fade-in">
            <div className="container">
                <h2>Meet Our Team</h2>
                <p>Our diverse and talented team is committed to advancing research and innovation, solving real-world problems through technology.</p>

                <div className="team-carousel-wrapper">
                    <button className="arrow left-arrow" aria-label="Scroll Left">❮</button>
                    <div className="team-carousel">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="card" tabIndex="0">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="team-photo"
                                    onError={(e) => e.target.src = 'images/placeholder.jpg'}
                                />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                    <button className="arrow right-arrow" aria-label="Scroll Right">❯</button>
                </div>
                
                <div className="view-team-button-wrapper">
                    <a href="pages/team.html" className="view-team-button">
                        View All Team Members
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

// Make the component available globally
window.Team = Team;
