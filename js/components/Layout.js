// js/components/Layout.js
const Layout = ({ children }) => {
    React.useEffect(() => {
        // Initialize fade-in animations
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        // Cleanup
        return () => observer.disconnect();
    }, []);

    return (
        <div className="layout-wrapper min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

// Global export for use without modules
window.Layout = Layout;
