// js/components/MobileNavigation.js
const MobileNavigation = ({ basePath }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const closeMenu = React.useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const handleNavClick = React.useCallback((e, targetId) => {
        e.preventDefault();
        
        if (!targetId) return;
        
        if (window.location.pathname.includes('/pages/')) {
            window.location.href = `${basePath}index.html#${targetId}`;
            return;
        }

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(closeMenu, 300);
        }
    }, [basePath, closeMenu]);

    React.useEffect(() => {
        const handleOutsideClick = (e) => {
            const navContainer = document.querySelector('.nav-links');
            const menuButton = document.querySelector('.mobile-menu-button');
            
            if (isMenuOpen && navContainer && menuButton) {
                const isClickInsideMenu = navContainer.contains(e.target);
                const isClickOnButton = menuButton.contains(e.target);
                
                if (!isClickInsideMenu && !isClickOnButton) {
                    closeMenu();
                }
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleOutsideClick);
        window.addEventListener('resize', handleResize);
        
        return () => {
            document.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen, closeMenu]);

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'research', label: 'Research' },
        { id: 'innovation', label: 'Innovation' },
        { id: 'events', label: 'Events' },
        { id: 'team', label: 'Team' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <div className="nav-container">
            <button
                className="mobile-menu-button lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
            >
                <i className="fas fa-bars"></i>
            </button>

            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <button
                    className="close-menu lg:hidden"
                    onClick={closeMenu}
                >
                    <i className="fas fa-times"></i>
                </button>
                
                <ul>
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => handleNavClick(e, item.id)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

window.MobileNavigation = MobileNavigation;
