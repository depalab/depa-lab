// js/components/Header.js
const Header = () => {
    const isInSubdirectory = window.location.pathname.includes('/pages/');
    const basePath = isInSubdirectory ? '../' : '/depa-lab/';

    return (
        <header className="main-header">
            <nav>
                <a href={`${basePath}index.html`} className="logo">
                    <img src={`${basePath}images/DEPA-logo.png`} alt="DEPA Lab Logo" className="logo-image" />
                </a>
                <MobileNavigation basePath={basePath} />
            </nav>
        </header>
    );
};

window.Header = Header;
