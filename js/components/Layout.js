// js/components/Layout.js
const Layout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            <Header />
            <main className="min-h-screen pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

window.Layout = Layout;
