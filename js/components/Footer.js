// js/components/Layout.js
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

window.Layout = Layout;
