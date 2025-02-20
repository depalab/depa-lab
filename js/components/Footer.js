// js/components/Footer.js
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>DEPA Lab</h3>
                        <p>Data Engineering and Predictive Analytics Laboratory</p>
                        <p>Morgan State University</p>
                    </div>
                    <div className="footer-section">
                        <h3>Contact</h3>
                        <p>Email: kofi.nyarko@morgan.edu</p>
                        <p>Address: 1700 E Cold Spring Ln, Baltimore, MD 21251</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#research">Research</a></li>
                            <li><a href="#innovation">Innovation</a></li>
                            <li><a href="#team">Team</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} DEPA Lab. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

window.Footer = Footer;
