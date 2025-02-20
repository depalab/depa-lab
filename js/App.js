// App.js
const HomeContent = () => {
    return (
        <main>
            {/* Hero Section */}
            <section id="hero" className="hero">
                <div className="container">
                    <h1>Welcome to DEPA Research Lab</h1>
                    <p>Driving innovation at the intersection of technology and impact.</p>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="container">
                    <h2 className="title">About DEPA Lab</h2>
                    <p className="about-text">
                        The Data Engineering and Predictive Analytics Lab (DEPA Lab) at Morgan State University, led by Dr. Kofi Nyarko,
                        is dedicated to unraveling the intricacies of complex systems and providing transformative insights. DEPA Lab
                        focuses on applied research in Computer Vision, Machine Learning, and Artificial Intelligence Techniques.
                    </p>

                    <div className="card-container">
                        <div className="info-card">
                            <h3>Our Mission</h3>
                            <p>
                                We develop innovative machine learning models and algorithms for near real-time data collection,
                                transformation, analysis, prediction, and visualization. DEPA Lab promotes inclusivity and innovation
                                in data engineering and predictive analytics.
                            </p>
                        </div>
                        <div className="info-card">
                            <h3>Our Vision</h3>
                            <p>
                                The Center for Equitable AI and Machine Learning Systems (CEAMLS) facilitates the development and deployment
                                of socially responsible and equitable AI systems, ensuring they benefit everyone while educating the public
                                about their impacts on health, prosperity, and happiness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Section */}
            <section id="research" className="section bg-light fade-in">
                <div className="container">
                    <h2>Core Research Areas</h2>
                    <div className="grid">
                        <div className="card">
                            <h3>IoT Data Analytics</h3>
                            <p>Analyze and visualize complex IoT networks for actionable insights.</p>
                        </div>
                        <div className="card">
                            <h3>Cybersecurity</h3>
                            <p>Secure networks through advanced analytics and visualization techniques.</p>
                        </div>
                        <div className="card">
                            <h3>Machine Learning</h3>
                            <p>Optimize algorithms for real-world decision support and autonomous systems.</p>
                        </div>
                        <div className="card">
                            <h3>Computer Vision</h3>
                            <p>Automating traffic data analysis, pose estimation, and scene perception for diverse applications.</p>
                        </div>
                        <div className="card">
                            <h3>Ethical AI Framework</h3>
                            <p>Advancing trustworthy and unbiased AI systems while addressing algorithmic bias.</p>
                        </div>
                        <div className="card">
                            <h3>Human-Computer Interaction</h3>
                            <p>Creating interactive visualization tools for enhanced situational awareness.</p>
                        </div>
                        <div className="card">
                            <h3>Autonomous Systems</h3>
                            <p>Developing robust algorithms for real-time navigation in challenging environments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation Section */}
            <section id="innovation" className="section bg-light fade-in">
                <div className="container">
                    <h2>Innovative Projects and Research Highlights</h2>
                    <p>At DEPA Research Lab, we are at the forefront of cutting-edge research, solving complex real-world challenges through interdisciplinary approaches.</p>
                    <div className="grid">
                        <div className="card">
                            <h3>AI Assistive Comprehension Assessor</h3>
                            <p>Developing an AI-powered tool to evaluate student comprehension by analyzing essays and generating quizzes in Canvas QTI/XML format.</p>
                            <a href="pages/AssistiveComprehensionAssessor.html" className="btn">Learn More</a>
                        </div>
                        <div className="card">
                            <h3>Benchmarking LLMs for AAVE & SAE</h3>
                            <p>Assessing leading LLMs for their ability to generate dialect-specific text while maintaining semantic consistency.</p>
                            <a href="pages/Benchmarking-LLM-AAVE-SAE.html" className="btn">Learn More</a>
                        </div>
                        <div className="card">
                            <h3>Ground Plane Segmentation</h3>
                            <p>Utilizing real-time segmentation techniques within the SAM framework to improve navigation for wheelchair users.</p>
                            <a href="pages/Ground Plane for Enhanced Wheelchair Mobility.html" className="btn">Learn More</a>
                        </div>
                        {/* Add other project cards here */}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section id="events" className="section bg-light fade-in">
                <div className="container">
                    <h2>Latest Events and News</h2>
                    <div className="grid">
                        <div className="card">
                            <h3>DEPA Lab Award</h3>
                            <p>DEPA Lab has been recognized for its groundbreaking research on equitable AI systems.</p>
                            <a href="pages/awards.html" className="btn">Read More</a>
                        </div>
                        <div className="card">
                            <h3>Publications</h3>
                            <p>DEPA Lab has made significant strides in advancing equitable AI systems.</p>
                            <a href="pages/publications.html" className="btn">Read More</a>
                        </div>
                        <div className="card">
                            <h3>CEAMLS Symposium</h3>
                            <p>Join DEPA at the CEAMLS Symposium as we delve into groundbreaking advancements.</p>
                            <a href="pages/symposium.html" className="btn">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <Team />

            {/* Contact Section */}
            <section id="contact" className="section fade-in">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>Email: <a href="mailto:kofi.nyarko@morgan.edu">kofi.nyarko@morgan.edu</a></p>
                    <p>Address: 1700 E Cold Spring Ln, Baltimore, MD 21251</p>
                </div>
            </section>
        </main>
    );
};

// Main App Component
const App = () => {
    return (
        <Layout>
            <HomeContent />
        </Layout>
    );
};

// Make it available globally since we're not using modules
window.App = App;
