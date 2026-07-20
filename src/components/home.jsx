import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// -----------------------------------------------------------------------------
// Static data - declared once at module scope (not re-created on every render).
// -----------------------------------------------------------------------------

const projects = [
    {
      title: "UrbanFlow: Accessible Autonomous Mobility",
      description: "Flagship retrofit autonomous mobility platform combining LiDAR, computer vision, localization, mapping, and planning to support safe navigation in complex indoor and outdoor environments.",
      link: "urbanflow",
      icon: ""
    },
    {
      title: "Trustworthy AI for Cybersecurity & Cyber-Physical Systems",
      description: "Program developing and evaluating AI methods for threat detection, explainability, robustness, and human oversight in cybersecurity and cyber-physical systems.",
      link: "trustworthy-ai",
      icon: ""
    },
    {
      title: "XPCI Crack Detection and Categorization",
      description: "Automated crack detection in low-density materials using X-ray Phase Contrast Imaging (XPCI) with YOLOv11 deep learning architecture.",
      link: "xpci-crack-detection",
      icon: ""
    },
    {
      title: "MSU AI Academic Advisor",
      description: "Multi-step agent pipeline leveraging transformer-based LLMs fine-tuned with human feedback for personalized academic guidance.",
      link: "msu-ai-advisor",
      icon: ""
    },
    {
      title: "Cyber Shield",
      description: "Abusive language detection system using DistilBERT model to assess sentiment and detect harmful content in user-generated text.",
      link: "cyber-shield",
      icon: ""
    },
    {
      title: "Benchmarking LLMs for AAVE & SAE",
      description: "Research investigating how large language models handle different English dialects, focusing on African American Vernacular English versus Standard American English.",
      link: "llm-benchmarking",
      icon: ""
    },
    {
      title: "Quantized LLM for Airport Navigation",
      description: "Lightweight language model system using quantized LLMs for efficient performance on limited hardware for airport assistance.",
      link: "quantized-llm-navigation",
      icon: ""
    },
    {
      title: "Vision-based Autonomous Drone Object Tracking",
      description: "Autonomous wheelchair system with follower drone for luggage tracking using person re-identification and real-time object tracking.",
      link: "drone-tracking-system",
      icon: ""
    },
    {
      title: "AI/ML Bench Guard",
      description: "Comprehensive benchmarking framework for evaluating cloud-based, LLM, and open-source machine learning services.",
      link: "ml-bench-guard",
      icon: ""
    },
    {
      title: "Multimodal LLMs for Forensic Video Analysis",
      description: "Investigating prompting strategies in multimodal large language models for human-aligned forensic video analysis applications.",
      link: "forensic-video-analysis",
      icon: ""
    },
    {
      title: "Smart Contract Reentrancy Detection",
      description: "Automated detection of reentrancy vulnerabilities in smart contracts using hybrid feature engineering approach.",
      link: "smart-contract-detection",
      icon: ""
    }
  ];

// Snapshot date shown wherever counts/metrics appear. Update on each content review.
const METRICS_AS_OF = "As of June 2026";

// Four research programs (replaces the flat topic list). Guide 5.1.
const researchPrograms = [
  {
    title: "Data Engineering and Intelligent Workflows",
    description:
      "We design scalable data pipelines, data integration methods, agentic workflows, and computing architectures that convert heterogeneous data into reliable, decision-ready information.",
  },
  {
    title: "Predictive Analytics and Decision Support",
    description:
      "We develop forecasting, optimization, simulation, and explainable predictive models for transportation, infrastructure, aerospace, health, and other high-consequence settings.",
  },
  {
    title: "Trustworthy AI and Cybersecurity",
    description:
      "We study robustness, fairness, privacy, explainability, anomaly detection, and human oversight in AI-enabled cybersecurity and cyber-physical systems.",
    view: "trustworthy-ai",
  },
  {
    title: "Computer Vision and Autonomous Systems",
    description:
      "We combine computer vision, LiDAR, intelligent sensing, localization, and planning to support accessible mobility, transportation safety, public safety, and autonomous operation.",
    view: "urbanflow",
  },
];

// Scannable capability list. Guide 5.2.
const technicalCapabilities = [
  "Data pipeline design, integration, cleaning, and analytics",
  "Predictive modeling, forecasting, and optimization",
  "Computer vision, video analytics, and multimodal sensing",
  "LiDAR processing, localization, mapping, and navigation",
  "Explainable, fair, privacy-preserving, and robust AI",
  "Cybersecurity analytics and anomaly detection",
  "Simulation, digital twins, and scientific visualization",
  "Edge AI and real-time decision support",
  "Human-AI workflow evaluation",
  "Dataset development, benchmarking, and model validation",
];

// Impact metrics strip. Guide 4.3. Dated snapshot; confirm counts before launch.
const impactMetrics = [
  { value: "28", label: "Scholarly records involving the DEPA director in the CEAMLS Activities database" },
  { value: "5", label: "Patents or intellectual property disclosures involving the DEPA director" },
  { value: "9", label: "Recorded external presentations, panels, or technical demonstrations" },
  { value: "8", label: "Recorded student or faculty recognitions under DEPA direction" },
  { value: "Federal \u00b7 Industry \u00b7 Community", label: "Research and collaboration spanning agencies, industry, and community partners", wide: true },
];

// Recent Results cards. Guide 4.4.
const recentResults = [
  { category: "Patent", title: "Autonomous Mobility System", status: "U.S. Patent No. 12,622,826 \u00b7 May 2026", blurb: "A mobility system integrating sensing, localization, planning, and control for autonomous operation of a powered wheelchair platform.", view: "innovation-ip" },
  { category: "Patent", title: "Egress Obstruction Detection via Computer Vision", status: "All claims allowed; award pending", blurb: "A computer-vision system for detecting and reporting obstructions that may interfere with safe building egress.", view: "innovation-ip" },
  { category: "Publication", title: "Alarm-Budgeted Event-Level Evaluation of ICS Anomaly Detection: Lessons from SWaT and WADI", status: "IEEE Access \u00b7 Published 2026", blurb: "Event-level evaluation of industrial control system anomaly detection under explicit false-alarm constraints.", view: "trustworthy-ai" },
  { category: "Project", title: "UrbanFlow: Hybrid Vision-LiDAR Autonomous Wheelchair Navigation", status: "Active flagship project", blurb: "A retrofit autonomous mobility platform supporting safe navigation across complex indoor and outdoor environments.", view: "urbanflow" },
  { category: "Demonstration", title: "UrbanFlow at the World Bank Transforming Transportation event", status: "2025", blurb: "Public demonstration of accessible autonomous mobility research to an international transportation audience.", view: "news" },
  { category: "Publication", title: "AI-Driven Climate Resilience Education: A Framework for Predictive Thinking in Engineering Classrooms", status: "ASEE 2026 \u00b7 Draft approved", blurb: "A framework for embedding predictive thinking and climate resilience into engineering education.", view: "publications" },
];

// Searchable Publications page records. Guide 7.1-7.2.
// status: Published | Accepted | Submitted | Draft Approved | Preprint | Rejected | Verify
const publicationsData = [
  { title: "UrbanFlow: A Hybrid Vision-LiDAR Retrofit Architecture for Autonomous Wheelchair Navigation in Complex Indoor Environments", authors: "DEPA Lab Research Team", type: "Conference", venue: "ICCMA", year: 2025, status: "Accepted", area: "Computer Vision and Autonomous Systems", link: "" },
  { title: "Alarm-Budgeted Event-Level Evaluation of ICS Anomaly Detection: Lessons from SWaT and WADI", authors: "DEPA Lab Research Team", type: "Journal", venue: "IEEE Access", year: 2026, status: "Published", area: "Trustworthy AI and Cybersecurity", link: "" },
  { title: "Automated Traffic Video Analysis with a Modular Computer Vision Pipeline and SQL-Based Analytics", authors: "Tasmeer Alam, Kofi Nyarko", type: "Conference", venue: "IEEE CISS", year: 2025, status: "Published", area: "Computer Vision and Autonomous Systems", link: "https://ieeexplore.ieee.org/document/10944672" },
  { title: "SmartPattern: A Machine Learning Framework for Detecting Reentrancy Vulnerabilities in Blockchain Smart Contracts", authors: "DEPA Lab Research Team", type: "Conference", venue: "IEEE", year: 2025, status: "Published", area: "Trustworthy AI and Cybersecurity", link: "https://ieeexplore.ieee.org/abstract/document/10944738" },
  { title: "Real-Time Flight Delay Prediction Using Integrated Machine Learning and Meteorological Intelligence for CNS/ATM Decision Support", authors: "DEPA Lab Research Team", type: "Conference", venue: "To be confirmed", year: 2025, status: "Accepted", area: "Predictive Analytics and Decision Support", link: "" },
  { title: "Hierarchical Caching for Agentic Workflows: A Multi-Level Architecture to Reduce Tool-Execution Overhead", authors: "DEPA Lab Research Team", type: "Conference", venue: "To be confirmed", year: 2025, status: "Accepted", area: "Data Engineering and Intelligent Workflows", link: "" },
  { title: "Cross-Domain Limits and Bounded-Perturbation Instability in Tabular CAN Intrusion Detection", authors: "DEPA Lab Research Team", type: "Conference", venue: "Under review", year: 2025, status: "Submitted", area: "Trustworthy AI and Cybersecurity", link: "" },
  { title: "A Synthetic Dataset for Anomaly Detection in Data-Center Power Infrastructure", authors: "DEPA Lab Research Team", type: "Dataset", venue: "To be confirmed", year: 2025, status: "Verify", area: "Trustworthy AI and Cybersecurity", link: "" },
  { title: "RIPPLE: Differential Testing of Exact-Value Restoration Boundaries in Privacy-Preserving LLM Pipelines", authors: "DEPA Lab Research Team", type: "Conference", venue: "Under review", year: 2025, status: "Submitted", area: "Trustworthy AI and Cybersecurity", link: "" },
  { title: "AI-Driven Climate Resilience Education: A Framework for Predictive Thinking in Engineering Classrooms", authors: "DEPA Lab Research Team", type: "Conference", venue: "ASEE", year: 2026, status: "Draft Approved", area: "Predictive Analytics and Decision Support", link: "" },
  { title: "AI/ML Systems Engineering Workbench Framework", authors: "Kofi Nyarko, Emmanuel Masa-Ibi", type: "Conference", venue: "IEEE CISS", year: 2023, status: "Published", area: "Data Engineering and Intelligent Workflows", link: "https://ieeexplore.ieee.org/document/10089781/" },
  { title: "Network Intrusion Visualization with NIVA", authors: "Kofi Nyarko, Tanya Capers, Craig Scott, Kemi Ladeji-Osias", type: "Conference", venue: "IEEE Haptics Symposium", year: 2002, status: "Published", area: "Trustworthy AI and Cybersecurity", link: "https://ieeexplore.ieee.org/abstract/document/998969" },
  { title: "GraphAE: Plant-Informed Graph Autoencoder for ICS Anomaly Detection with SHAP-Based Explanations", authors: "DEPA Lab Research Team", type: "Conference", venue: "To be confirmed", year: 2025, status: "Verify", area: "Trustworthy AI and Cybersecurity", link: "" },
];

// Innovation & IP records. Guide 7.3.
const ipIssued = [
  { title: "Autonomous Mobility System", inventors: "Kofi Nyarko and Mansoureh Jeihani", number: "U.S. Patent No. 12,622,826", date: "Issued: May 12, 2026", summary: "A mobility system that integrates sensing, localization, planning, and control to support autonomous operation of a powered wheelchair platform." },
];
const ipPending = [
  { title: "Egress Obstruction Detection via Computer Vision", inventors: "Kofi Nyarko and Ismail Idowu", status: "All claims allowed; patent award pending", summary: "A computer-vision system for detecting and reporting obstructions that may interfere with safe building egress." },
];
const ipDisclosures = [
  "Method for Machine Learning for Detecting Reentrancy Vulnerabilities in Blockchain Contracts",
  "TrustWatch: Crowd-Sourced AI Trust & Safety Registry",
];

// Student achievements. Guide 8.2.
const studentAchievements = [
  { date: "August 2024", students: "David Nyarko", recognition: "First Place, Emory University AI Bias Datathon" },
  { date: "August 2024", students: "Cynthia Nosiri", recognition: "Second Place, Emory University AI Bias Datathon" },
  { date: "2025", students: "Awotwi Baffoe and Kelechi Nwachukwu", recognition: "Best Poster, Materials Science in Extreme Environments event" },
  { date: "2025", students: "Opeyemi Adeniran", recognition: "Second Place, Wealth Summit Live Pitch Competition" },
  { date: "2025", students: "David Nyarko", recognition: "Best Presentation, 13th International Conference on Control, Mechatronics and Automation" },
  { date: "December 2025", students: "Kelechi Nwachukwu, Hashmath Fathima, Awotwi Baffoe, and Binisa Giri", recognition: "First Place, Humane Intelligence Bias Bounty \u00b7 Accessibility in Design" },
  { date: "December 2025", students: "Cynthia Nosiri", recognition: "First Place, Humane Intelligence Bias Bounty \u00b7 Accessibility in Data" },
];

// Selected funded research (awarded only). Guide 9.1.
const fundedResearch = [
  { title: "NIST Equipment Grant", sponsor: "NIST", period: "2023\u20132025" },
  { title: "EQUATE: Enhancing Quality and Uplifting AI Talent at HBCUs through Engagement", sponsor: "NIST", period: "2024\u20132025" },
  { title: "Research and Education in Equitable AI and Machine Learning: Cybersecurity Implications for National Defense", sponsor: "Office of Naval Research", period: "Center-level award" },
  { title: "Explainable Artificial Intelligence for Reasoning in Support of Complex Decision Making", sponsor: "Army Research Laboratory", period: "2024\u20132027" },
  { title: "Evaluating AI-Assisted Cybersecurity Operations: Comparative Analysis of Human Performance with and without AI Tools", sponsor: "Frontier Model Forum", period: "Awarded 2025" },
];

// Partner categories. Guide 9.2. Logos added only with documented permission.
const partnerCategories = [
  "Federal and state agencies",
  "Industry and technology partners",
  "Academic collaborators",
  "Transportation and infrastructure partners",
  "Community and accessibility organizations",
];

// News & engagement timeline (reverse chronological). Guide 9.3.
const newsTimeline = [
  { date: "July 21, 2026", category: "Presentation", text: "Distinguished presentation on AI hallucination, data reliability, and scientific rigor at the RCMI Consortium National Conference." },
  { date: "May 12, 2026", category: "Patent", text: "Autonomous Mobility System receives U.S. Patent No. 12,622,826." },
  { date: "2025", category: "Demonstration", text: "UrbanFlow demonstrated at the World Bank Transforming Transportation event." },
  { date: "2025", category: "Demonstration", text: "UrbanFlow demonstrated during the BWI Girl STEM Tour." },
  { date: "2025", category: "Presentation", text: "DEPA researchers present explainable smart-contract vulnerability detection at the Johns Hopkins ADAM NRT Symposium." },
  { date: "2024", category: "Demonstration", text: "UrbanFlow demonstration for The Arc Maryland." },
];

// Expanded People profiles. Guide 8.1. Bios/links pending member approval.
const peopleProfiles = [
  { name: "Dr. Kofi Nyarko", program: "Director, DEPA Lab", image: "nyarko.jpg", interests: "Data-intensive AI, computer vision, trustworthy AI, autonomous mobility, decision support", project: "UrbanFlow; Trustworthy AI for Cybersecurity", links: [{ label: "Email", href: "mailto:kofi.nyarko@morgan.edu" }] },
  { name: "Cynthia Nosiri", program: "AI Researcher", image: "Cynthia.jpeg", interests: "Trustworthy AI, bias and fairness, healthcare data science", project: "Bias evaluation and accessibility in data", award: "First Place, Humane Intelligence Bias Bounty \u00b7 Accessibility in Data (2025)" },
  { name: "Derrick Cook", program: "AI Researcher", image: "Derrick_Cook.PNG", interests: "Machine learning, applied analytics", project: "DEPA research portfolio" },
  { name: "Rezoan Sultan", program: "Human-AI Interaction Research Engineer", image: "Rezoan_Sultan.jpeg", interests: "Human-AI interaction, AI-assisted workflow evaluation", project: "Evaluating AI-assisted cybersecurity operations" },
  { name: "Benjamin Hall", program: "Researcher", image: "Benjamin Hall.jpg", interests: "Data engineering and analytics", project: "DEPA research portfolio" },
  { name: "Emmanuel Masa-ibi", program: "Researcher", image: "Emmanuel Masa-ibi.jpeg", interests: "AI/ML systems engineering", project: "AI/ML systems engineering workbench" },
  { name: "Awotwi Baffoe", program: "AI Researcher", image: "Awotwi_Baffoe.jpg", interests: "Computer vision, non-destructive evaluation", project: "XPCI crack detection", award: "Best Poster, Materials Science in Extreme Environments (2025)" },
  { name: "Opeyemi Adeniran", program: "AI Research Engineer", image: "Opeyemi.PNG", interests: "Applied AI, entrepreneurship", project: "DEPA research portfolio", award: "Second Place, Wealth Summit Live Pitch Competition (2025)" },
  { name: "Anjolie Anthony", program: "Researcher", image: "Anjolie.JPG", interests: "AI research", project: "DEPA research portfolio" },
  { name: "Binisa Giri", program: "AI Researcher", image: "Binisa_Giri.jpeg", interests: "Accessibility in AI design, bias evaluation", project: "Accessibility in design", award: "First Place, Humane Intelligence Bias Bounty \u00b7 Accessibility in Design (2025)" },
  { name: "Nicholas Cook", program: "AI Researcher", image: "NicholasCook.jpg", interests: "Machine learning", project: "DEPA research portfolio" },
  { name: "Temitope Ajibola", program: "AI Researcher", image: "Temi.JPG", interests: "Autonomous systems, AI research", project: "DEPA research portfolio" },
  { name: "David Nyarko", program: "Researcher", image: "david-nyarko.JPG", interests: "Autonomous systems, computer vision, entrepreneurship", project: "Autonomous mobility research", award: "Best Presentation, ICCMA (2025)" },
];

const peopleAlumni = [
  { name: "Ekata Dhital", program: "Research Assistant (Alumni)", image: "Ekata Dhital.JPG", interests: "Data analysis" },
  { name: "Tasmeer Alam", program: "AI Researcher (Alumni)", image: "Tasmeer_Alam.jpeg", interests: "Computer vision, traffic video analytics", project: "Automated traffic video analysis" },
];

// ---------------------------------------------------------------------------
// Research visuals (Guide 5.1: one diagram per program). Custom inline SVGs in
// the existing blue/orange palette - no new colors or fonts, no stock imagery.
// ---------------------------------------------------------------------------
const ProgramVisual = ({ index }) => {
  const svg = { className: 'w-full h-auto block', preserveAspectRatio: 'xMidYMid meet', role: 'img' };

  // 0 - Data Engineering & Intelligent Workflows: many sources -> pipeline -> decision-ready store
  if (index === 0) {
    return (
      <svg viewBox="0 0 440 150" {...svg} aria-label="Many data sources flowing through a pipeline into a decision-ready data store">
        <rect width="440" height="150" rx="16" fill="#eff6ff" />
        {[28, 62, 96].map((y, i) => (
          <g key={i}>
            <rect x="20" y={y} width="78" height="26" rx="6" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
            <rect x="28" y={y + 7} width="46" height="4" rx="2" fill="#bfdbfe" />
            <rect x="28" y={y + 15} width="30" height="4" rx="2" fill="#dbeafe" />
          </g>
        ))}
        {[41, 75, 109].map((y, i) => (
          <path key={i} d={`M100 ${y} C132 ${y}, 142 75, 170 75`} fill="none" stroke="#fb923c" strokeWidth="2.5" />
        ))}
        <rect x="170" y="57" width="104" height="36" rx="18" fill="#2563eb" />
        <circle cx="194" cy="75" r="4" fill="#ffffff" />
        <circle cx="222" cy="75" r="4" fill="#ffffff" />
        <circle cx="250" cy="75" r="4" fill="#ffffff" />
        <path d="M274 75 H314" stroke="#1e40af" strokeWidth="2.5" />
        <path d="M314 75 l-9 -5 v10 z" fill="#1e40af" />
        <g transform="translate(332,48)">
          <path d="M6 10 a34 10 0 0 1 68 0 v34 a34 10 0 0 1 -68 0 z" fill="#fdba74" />
          <ellipse cx="40" cy="10" rx="34" ry="10" fill="#f97316" />
          <path d="M27 40 l9 9 l17 -20" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    );
  }

  // 1 - Predictive Analytics & Decision Support: history + forecast with a confidence band
  if (index === 1) {
    return (
      <svg viewBox="0 0 440 150" {...svg} aria-label="A trend line continuing into a forecast with a confidence band">
        <rect width="440" height="150" rx="16" fill="#eff6ff" />
        {[42, 72, 102].map((y, i) => (
          <line key={i} x1="30" y1={y} x2="410" y2={y} stroke="#dbeafe" strokeWidth="1" />
        ))}
        <line x1="30" y1="26" x2="30" y2="122" stroke="#93c5fd" strokeWidth="1.5" />
        <line x1="30" y1="122" x2="410" y2="122" stroke="#93c5fd" strokeWidth="1.5" />
        <path d="M250 62 L410 24 L410 58 L250 80 Z" fill="#fed7aa" opacity="0.55" />
        <polyline points="30,106 80,94 130,98 180,74 224,82 250,71" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="250,71 330,54 410,41" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="7 6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="250" cy="71" r="5.5" fill="#ffffff" stroke="#2563eb" strokeWidth="3" />
        <circle cx="410" cy="41" r="5.5" fill="#f97316" />
      </svg>
    );
  }

  // 2 - Trustworthy AI & Cybersecurity: a verified shield linked to its guarantees
  if (index === 2) {
    const chips = [
      { x: 24, y: 26, w: 86, label: 'Robust' },
      { x: 330, y: 26, w: 86, label: 'Fair' },
      { x: 24, y: 100, w: 92, label: 'Private' },
      { x: 300, y: 100, w: 116, label: 'Explainable' },
    ];
    return (
      <svg viewBox="0 0 440 150" {...svg} aria-label="A verified trust shield connected to robustness, fairness, privacy, and explainability">
        <rect width="440" height="150" rx="16" fill="#eff6ff" />
        {chips.map((c, i) => (
          <line key={i} x1={c.x + c.w / 2} y1={c.y + 12} x2="220" y2="75" stroke="#fb923c" strokeWidth="1.5" opacity="0.7" />
        ))}
        <g transform="translate(190,30)">
          <path d="M30 2 L58 14 V44 C58 66 45 82 30 92 C15 82 2 66 2 44 V14 Z" fill="#2563eb" />
          <path d="M17 46 l10 10 l17 -21" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        {chips.map((c, i) => (
          <g key={i}>
            <rect x={c.x} y={c.y} width={c.w} height="24" rx="12" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
            <text x={c.x + c.w / 2} y={c.y + 16} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">{c.label}</text>
          </g>
        ))}
      </svg>
    );
  }

  // 3 - Computer Vision & Autonomous Systems: a platform sensing and detecting objects
  return (
    <svg viewBox="0 0 440 150" {...svg} aria-label="An autonomous platform sensing its surroundings and detecting a pedestrian">
      <rect width="440" height="150" rx="16" fill="#eff6ff" />
      <line x1="20" y1="122" x2="420" y2="122" stroke="#bfdbfe" strokeWidth="2" />
      {[30, 50, 70].map((r, i) => (
        <path key={i} d={`M120 ${92 - r} A ${r} ${r} 0 0 1 ${120 + r} 92`} fill="none" stroke="#fb923c" strokeWidth="2.5" opacity={0.85 - i * 0.22} />
      ))}
      <g transform="translate(44,84)">
        <rect x="0" y="10" width="72" height="26" rx="7" fill="#1e40af" />
        <rect x="14" y="-4" width="40" height="18" rx="5" fill="#2563eb" />
        <circle cx="18" cy="38" r="8" fill="#111827" />
        <circle cx="54" cy="38" r="8" fill="#111827" />
      </g>
      <g transform="translate(300,52)">
        <rect x="0" y="0" width="70" height="70" rx="4" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="2 3" />
        {[[0, 0], [70, 0], [0, 70], [70, 70]].map(([cx, cy], i) => (
          <path key={i} d={`M${cx} ${cy}`} />
        ))}
        <path d="M0 0 h16 M0 0 v16 M70 0 h-16 M70 0 v16 M0 70 h16 M0 70 v-16 M70 70 h-16 M70 70 v-16" stroke="#f97316" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="35" cy="24" r="10" fill="#1e40af" />
        <path d="M35 34 v22 M35 40 l-12 8 M35 40 l12 8 M35 56 l-10 12 M35 56 l10 12" stroke="#1e40af" strokeWidth="4" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
};

// UrbanFlow system architecture (Guide 6.1). Left-to-right processing pipeline.
const UrbanFlowArchitecture = () => {
  const stages = [
    { x: 15, lines: ['Sensing'] },
    { x: 195, lines: ['Localization', '& Mapping'] },
    { x: 375, lines: ['Perception'] },
    { x: 555, lines: ['Planning', '& Control'] },
    { x: 735, lines: ['Safety', 'Monitoring'] },
  ];
  const sensors = ['LiDAR', 'RGB-D', 'IMU', 'Odometry'];
  return (
    <svg viewBox="0 0 900 250" className="w-full h-auto block" preserveAspectRatio="xMidYMid meet" role="img" aria-label="UrbanFlow architecture: sensing feeds localization and mapping, perception, planning and control, and safety monitoring">
      <rect width="900" height="250" rx="18" fill="#ffffff" stroke="#bfdbfe" strokeWidth="2" />
      {stages.slice(0, 4).map((s, i) => (
        <g key={i}>
          <path d={`M${s.x + 150} 96 H${stages[i + 1].x}`} stroke="#f97316" strokeWidth="3" />
          <path d={`M${stages[i + 1].x} 96 l-11 -6 v12 z`} fill="#f97316" />
        </g>
      ))}
      {stages.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="66" width="150" height="60" rx="12" fill="#2563eb" />
          {s.lines.map((ln, j) => (
            <text key={j} x={s.x + 75} y={s.lines.length === 1 ? 102 : 92 + j * 20} textAnchor="middle" fontSize="17" fontWeight="700" fill="#ffffff">{ln}</text>
          ))}
        </g>
      ))}
      {sensors.map((label, i) => (
        <g key={i}>
          <path d="M90 126 V150" stroke="#93c5fd" strokeWidth="1.5" />
          <path d={`M90 150 H${40 + i * 130 + 55}`} stroke="#93c5fd" strokeWidth="1.5" />
          <path d={`M${40 + i * 130 + 55} 150 V170`} stroke="#93c5fd" strokeWidth="1.5" />
          <rect x={40 + i * 130} y="170" width="110" height="34" rx="17" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
          <text x={40 + i * 130 + 55} y="191" textAnchor="middle" fontSize="15" fontWeight="600" fill="#1e40af">{label}</text>
        </g>
      ))}
      <text x="450" y="232" textAnchor="middle" fontSize="13" fill="#6b7280">Multimodal sensor fusion runs across every stage.</text>
    </svg>
  );
};

// Trustworthy-AI trust loop (Guide 6.2): data, model, explanation, operator, decision, feedback.
const TrustLoop = () => {
  const nodes = [
    { x: 15, label: 'Data' },
    { x: 195, label: 'Model' },
    { x: 375, label: 'Explanation' },
    { x: 555, label: 'Operator' },
    { x: 735, label: 'Decision' },
  ];
  return (
    <svg viewBox="0 0 900 230" className="w-full h-auto block" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Trust loop: data to model to explanation to operator to decision, with feedback returning to data">
      <rect width="900" height="230" rx="18" fill="#ffffff" stroke="#bfdbfe" strokeWidth="2" />
      {nodes.slice(0, 4).map((n, i) => (
        <g key={i}>
          <path d={`M${n.x + 150} 150 H${nodes[i + 1].x}`} stroke="#2563eb" strokeWidth="3" />
          <path d={`M${nodes[i + 1].x} 150 l-11 -6 v12 z`} fill="#2563eb" />
        </g>
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x} y="120" width="150" height="60" rx="12" fill={i === 4 ? '#1e40af' : '#2563eb'} />
          <text x={n.x + 75} y="156" textAnchor="middle" fontSize="17" fontWeight="700" fill="#ffffff">{n.label}</text>
        </g>
      ))}
      {/* feedback arc from Decision back to Data */}
      <path d="M810 120 C810 40, 690 40, 450 40 C210 40, 90 40, 90 118" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="8 6" />
      <path d="M90 118 l-6 -11 h12 z" fill="#f97316" />
      <rect x="372" y="26" width="156" height="28" rx="14" fill="#ffedd5" stroke="#fb923c" strokeWidth="1.5" />
      <text x="450" y="45" textAnchor="middle" fontSize="14" fontWeight="700" fill="#c2410c">Feedback to data</text>
    </svg>
  );
};

// Searchable Publications page (Guide 7.1). Module-scope component so React
// Hook usage satisfies the rules-of-hooks lint (uppercase component name).
const PublicationsPage = () => {
  const records = publicationsData;
  const [q, setQ] = useState('');
  const [year, setYear] = useState('All');
  const [ptype, setPtype] = useState('All');
  const [area, setArea] = useState('All');
  const [status, setStatus] = useState('All');

  const years = ['All', ...Array.from(new Set(records.map((r) => r.year))).sort((a, b) => b - a)];
  const types = ['All', ...Array.from(new Set(records.map((r) => r.type)))];
  const areas = ['All', ...Array.from(new Set(records.map((r) => r.area)))];
  const statuses = ['All', 'Published', 'Accepted', 'Submitted', 'Draft Approved', 'Preprint', 'Rejected', 'Verify'];

  const statusStyle = (s) => {
    switch (s) {
      case 'Published': return 'bg-green-100 text-green-700 border-green-300';
      case 'Accepted': return 'bg-blue-100 text-[#0f4276] border-blue-300';
      case 'Submitted': return 'bg-amber-100 text-amber-700 border-amber-300';
      case 'Draft Approved': return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'Preprint': return 'bg-cyan-100 text-cyan-700 border-cyan-300';
      case 'Rejected': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const filtered = records
    .filter((r) =>
      (year === 'All' || r.year === year) &&
      (ptype === 'All' || r.type === ptype) &&
      (area === 'All' || r.area === area) &&
      (status === 'All' || r.status === status) &&
      (q.trim() === '' || (r.title + ' ' + r.authors + ' ' + r.venue).toLowerCase().includes(q.toLowerCase()))
    )
    .sort((a, b) => b.year - a.year);

  const selectCls = 'w-full px-3 py-2 rounded-lg border border-blue-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400';

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 text-center">
            Publications and <span className="text-[#124d89]">Scholarly Outputs</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-900 text-center mb-4 max-w-4xl mx-auto">
            DEPA researchers publish peer-reviewed scholarship, conference papers, datasets, technical frameworks, and work-in-progress studies across data engineering, predictive analytics, trustworthy AI, cybersecurity, computer vision, and autonomous systems.
          </p>
          <p className="text-sm text-gray-600 text-center mb-8">{METRICS_AS_OF} &middot; statuses verified against the CEAMLS Activities sheet</p>

          <div className="bg-blue-50 rounded-2xl p-4 sm:p-6 border border-blue-200 shadow-md mb-8">
            <label className="block mb-4">
              <span className="sr-only">Search publications</span>
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by title, author, or venue..."
                className="w-full px-4 py-3 rounded-lg border border-blue-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <label className="block">
                <span className="block text-xs font-bold text-[#0f4276] mb-1">Year</span>
                <select value={year} onChange={(e) => setYear(e.target.value === 'All' ? 'All' : Number(e.target.value))} className={selectCls}>
                  {years.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="block text-xs font-bold text-[#0f4276] mb-1">Type</span>
                <select value={ptype} onChange={(e) => setPtype(e.target.value)} className={selectCls}>
                  {types.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="block text-xs font-bold text-[#0f4276] mb-1">Research area</span>
                <select value={area} onChange={(e) => setArea(e.target.value)} className={selectCls}>
                  {areas.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="block text-xs font-bold text-[#0f4276] mb-1">Status</span>
                <select value={status} onChange={(e) => setStatus(e.target.value)} className={selectCls}>
                  {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </label>
            </div>
            <p className="text-sm text-gray-700 mt-4">{filtered.length} of {records.length} records</p>
          </div>

          <div className="space-y-4">
            {filtered.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl p-5 sm:p-6 border border-blue-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex-grow">{r.title}</h2>
                  <span className={`self-start px-3 py-1 rounded-full text-xs font-bold border whitespace-nowrap ${statusStyle(r.status)}`}>
                    {r.status === 'Verify' ? 'Status: verify' : r.status}
                  </span>
                </div>
                <p className="text-gray-800 text-sm mt-2">{r.authors}</p>
                <div className="flex flex-wrap gap-2 mt-3 text-xs">
                  <span className="px-2 py-1 bg-blue-100 text-[#0f4276] rounded border border-blue-300 font-medium">{r.type}</span>
                  <span className="px-2 py-1 bg-blue-50 text-[#0f4276] rounded border border-blue-200">{r.venue}</span>
                  <span className="px-2 py-1 bg-blue-50 text-[#0f4276] rounded border border-blue-200">{r.year}</span>
                  <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded border border-orange-200">{r.area}</span>
                </div>
                {r.link ? (
                  <a href={r.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg text-sm font-semibold transition-all duration-300">
                    View Publication
                  </a>
                ) : null}
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="text-center text-gray-600 py-12">No publications match the selected filters.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DepaLabHomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  // Ref to the animated background overlay. We update its style directly on
  // mousemove instead of calling setState - this avoids re-rendering the entire
  // ~2,500-line component tree on every pixel of mouse movement, which was the
  // cause of the browser hanging/crashing.
  const overlayRef = useRef(null);

  useEffect(() => {
    let rafId = null;
    let pendingX = 0;
    let pendingY = 0;

    const applyUpdate = () => {
      rafId = null;
      const el = overlayRef.current;
      if (el) {
        el.style.background =
          `radial-gradient(400px circle at ${pendingX}px ${pendingY}px, ` +
          `rgba(37, 99, 235, 0.15), transparent 40%)`;
      }
    };

    const handleMouseMove = (e) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      // Coalesce multiple mousemove events into one DOM write per frame.
      if (rafId === null) {
        rafId = requestAnimationFrame(applyUpdate);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Show a "scroll to top" button after the user scrolls past the first viewport.
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // When switching between research detail views (or back to home from one),
  // jump to the top of the new page so users don't land mid-scroll.
  // Skipped on the very first render and only fires on actual view changes.
  const prevViewRef = useRef(currentView);
  useEffect(() => {
    if (prevViewRef.current !== currentView) {
      prevViewRef.current = currentView;
      // Only auto-jump when ENTERING a research detail. Going back to home
      // is handled by `navigate()` which scrolls to a specific section.
      if (currentView !== 'home') {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }
  }, [currentView]);

  // Smart navigation. If we're on a research detail view, return to home first
  // and then scroll to the requested section once the home tree has mounted.
  // Otherwise, scroll directly. Used by every nav button (header, footer, CTAs).
  const navigate = useCallback((sectionId) => {
    setMobileMenuOpen(false);
    const scroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    setCurrentView((prev) => {
      if (prev !== 'home') {
        // Wait two frames so the home view's sections are in the DOM.
        requestAnimationFrame(() => requestAnimationFrame(scroll));
        return 'home';
      }
      scroll();
      return prev;
    });
  }, []);

  // Open a standalone detail view (Publications, Innovation & IP, People, etc.).
  const openView = useCallback((viewKey) => {
    setMobileMenuOpen(false);
    setCurrentView(viewKey);
  }, []);

  // Unified nav dispatch: scroll to a homepage section or open a detail view.
  const goTo = useCallback((item) => {
    if (item.kind === 'view') openView(item.target);
    else navigate(item.target);
  }, [openView, navigate]);



  // Research Components - memoized so the inner component functions are not
  // re-allocated on every render. All data referenced is module-scope and
  // setCurrentView is a stable useState reference, so [] is correct.
  const ResearchComponents = useMemo(() => ({
    'xpci-crack-detection': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
<div className="max-w-6xl mx-auto bg-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 px-2">XPCI Crack Detection and Categorization</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-[#124d89] mb-4 text-center">Research Demonstration Video</h4>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-blue-200 bg-blue-50 flex items-center justify-center">
                  <div className="text-center">
<h4 className="text-xl font-bold text-gray-900 mb-2">XPCI Research Demo</h4>
                    <p className="text-gray-800">Video demonstration available</p>
                    <a 
                      href="https://www.youtube.com/watch?v=a2RgwtP6pHg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all duration-300"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#124d89] mb-4">Research Overview</h3>
              <p className="text-gray-900 leading-relaxed text-lg">
                This project focuses on automated crack detection in low-density and structurally complex materials subjected to mechanical stress, such as crystal quartz, Westerly granite, and boron carbide. It integrates X-ray Phase Contrast Imaging (XPCI), known for its sensitivity to subtle structural variations, with the YOLOv11 deep learning architecture for high-resolution crack localization and classification.
              </p>
              <p className="text-gray-900 leading-relaxed text-lg">
                Unlike conventional absorption-based X-ray imaging, XPCI exploits phase shift phenomena to reveal fine internal features, including microcracks and crack tips, with greater clarity. The approach relies on a carefully curated and manually annotated dataset to train and validate the model across a range of material types and stress conditions.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-[#124d89] mb-4">Key Features</h4>
                <ul className="text-gray-900 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>YOLOv11 model optimized for crack pattern detection and categorization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>High precision detection in noisy or low-contrast XPCI environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Advanced non-destructive evaluation for early-stage damage detection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'msu-ai-advisor': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
<div className="max-w-6xl mx-auto bg-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 px-2">MSU AI Academic Advisor</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-[#124d89] mb-4 text-center">System Demo</h4>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-blue-200 bg-blue-50 flex items-center justify-center">
                  <div className="text-center">
<h4 className="text-xl font-bold text-gray-900 mb-2">MSU AI Advisor Demo</h4>
                    <p className="text-gray-800">System demonstration available</p>
                    <a 
                      href="https://www.youtube.com/watch?v=5msFb_V-XaE" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all duration-300"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#124d89] mb-4">Project Overview</h3>
              <p className="text-gray-900 leading-relaxed text-lg">
                The AI Academic Advisor project leverages a multi-step agent pipeline built on transformer-based LLMs fine-tuned with human feedback to generate personalized academic guidance. User profile data, including course history, interests, and scheduling constraints, is collected through a conversational REST API that normalizes and encodes inputs for downstream processing.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-[#124d89] mb-4">Key Features</h4>
                <ul className="text-gray-900 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>24/7 accessibility on any device</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Adaptive learning based on student interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Personalized course planning and internship suggestions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'cyber-shield': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
<div className="max-w-6xl mx-auto bg-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 px-2">Cyber Shield</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <img 
                  src="/depa-lab/images/CyberShield.pptx.png"
                  loading="lazy"
                  alt="Cyber Shield System Architecture"
                  className="w-full h-96 rounded-xl shadow-2xl border border-blue-200 object-cover"
                />
                <p className="text-center text-gray-800 text-sm mt-4 italic">
                  Cyber Shield abusive language detection system architecture
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#124d89] mb-4">System Overview</h3>
              <p className="text-gray-900 leading-relaxed text-lg">
                Cyber Shield is an abusive language detection system designed to analyze user-generated text and identify harmful or inappropriate content. Built to integrate with the Query-able Machine Learning Pipeline (QMLP), the system ingests input in JSON format, applies advanced preprocessing, and uses word embeddings to understand context.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-[#124d89] mb-4">Key Technologies</h4>
                <ul className="text-gray-900 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>DistilBERT model for sentiment assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Advanced text preprocessing and word embeddings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Dual-level analysis for comprehensive content moderation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'llm-benchmarking': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
<div className="max-w-6xl mx-auto bg-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 px-2">Benchmarking LLMs for AAVE & SAE</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <img 
                  src="/depa-lab/images/ppt_cynthia.png"
                  loading="lazy"
                  alt="AAVE & SAE Benchmarking Research"
                  className="w-full h-96 rounded-xl shadow-2xl border border-blue-200 object-cover"
                />
                <p className="text-center text-gray-800 text-sm mt-4 italic">
                  Research presentation showcasing AAVE and SAE benchmarking methodology and results
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#124d89] mb-4">Research Overview</h3>
              <p className="text-gray-900 leading-relaxed text-lg">
                This research investigates how large language models (LLMs) handle different English dialects, with a focus on African American Vernacular English (AAVE) versus Standard American English (SAE). Models such as GPT-4, Claude 3.5, Gemini 1.5 Pro, Qwen2, and LLaMA 3 were evaluated across sentiment, refusal rates, and response quality.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-[#124d89] mb-4">Key Research Contributions</h4>
                <ul className="text-gray-900 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Framework supports both debiasing rewrites and human-in-the-loop flagging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Advanced AI safety measures for equitable treatment of linguistic communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Real-time bias detection and mitigation for high-risk domains</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'quantized-llm-navigation': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
<div className="max-w-6xl mx-auto bg-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 px-2">Quantized LLM for Airport Navigation</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <img 
                  src="/depa-lab/images/DEPA POSTER.pptx (1)-1.png"
                  loading="lazy"
                  alt="Quantized LLM Airport Navigation System"
                  className="w-full h-96 rounded-xl shadow-2xl border border-blue-200 object-cover"
                />
                <p className="text-center text-gray-800 text-sm mt-4 italic">
                  DEPA Lab poster presentation on quantized LLM airport navigation system
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#124d89] mb-4">Project Description</h3>
              <p className="text-gray-900 leading-relaxed text-lg">
                For this project, we developed a lightweight language model system using quantized LLMs to enable efficient performance on limited hardware. We experimented with 4-bit and 8-bit quantized models to reduce memory and computational demands while preserving accuracy.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-[#124d89] mb-4">Key Achievements</h4>
                <ul className="text-gray-900 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Task-specific filtering to improve response relevance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Efficient deployment on minimal hardware requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Real-world application demonstrating quantized LLM capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'drone-tracking-system': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
<div className="max-w-6xl mx-auto bg-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 px-2">Vision-based Autonomous Drone Object Tracking System</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-[#124d89] mb-4 text-center">System Demonstration</h4>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-blue-200 bg-blue-50 flex items-center justify-center">
                  <div className="text-center">
<h4 className="text-xl font-bold text-gray-900 mb-2">Drone Tracking Demo</h4>
                    <p className="text-gray-800">System demonstration available</p>
                    <a 
                      href="https://www.youtube.com/watch?v=b9aJA9C0Q6w" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all duration-300"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#124d89] mb-4">Project Overview</h3>
              <p className="text-gray-900 leading-relaxed text-lg">
                This project focuses on advancing autonomous wheelchair system designed to enhance mobility and independence. This includes multiple integrated components such as a Follower Drone for Luggage: A vision-based autonomous drone system capable of tracking and following the wheelchair user to carry luggage, using person re-identification and real-time object tracking techniques.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-[#124d89] mb-4">System Components</h4>
                <ul className="text-gray-900 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Person re-identification and real-time object tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Mobile app for remote wheelchair control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Integrated LiDAR, Raspberry Pi, cameras, and sensors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'ml-bench-guard': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
<div className="max-w-6xl mx-auto bg-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 px-2">AI/ML Bench Guard</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-[#124d89] mb-4 text-center">Benchmarking Framework Demo</h4>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-blue-200 bg-blue-50 flex items-center justify-center">
                  <div className="text-center">
<h4 className="text-xl font-bold text-gray-900 mb-2">AI/ML Bench Guard Demo</h4>
                    <p className="text-gray-800">Framework demonstration available</p>
                    <a 
                      href="https://www.youtube.com/watch?v=kIk6zBRpjr4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all duration-300"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#124d89] mb-4">Framework Overview</h3>
              <p className="text-gray-900 leading-relaxed text-lg">
                AI/ML Bench Guard is a comprehensive benchmarking framework for evaluating cloud-based, LLM, and open-source machine learning services. The system conducts automated performance assessments across multiple providers, including AWS, Azure, GCP, and open-source alternatives.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-[#124d89] mb-4">Key Features</h4>
                <ul className="text-gray-900 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Automated performance assessments across multiple cloud providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Standardized testing protocols and continuous monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Objective comparison of performance, reliability, and cost-effectiveness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'forensic-video-analysis': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
<div className="max-w-6xl mx-auto bg-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 px-2">Multimodal LLMs for Forensic Video Analysis</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <img 
                  src="/depa-lab/images/MD-2.png"
                  loading="lazy"
                  alt="Forensic Video Analysis Framework"
                  className="w-full h-96 rounded-xl shadow-2xl border border-blue-200 object-cover"
                />
                <p className="text-center text-gray-800 text-sm mt-4 italic">
                  Research framework for forensic video analysis using multimodal LLMs
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#124d89] mb-4">Research Overview</h3>
              <p className="text-gray-900 leading-relaxed text-lg">
                This research investigates how different prompting strategies can optimize multimodal large language models for forensic video analysis applications. The study systematically evaluates eight distinct prompting techniques including zero-shot, sequential, least-to-most, ReAct, chain-of-thought, meta-prompting, self-consistency, and iterative approaches.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-[#124d89] mb-4">Research Significance</h4>
                <ul className="text-gray-900 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>First systematic comparison of prompting strategies for forensic video analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Standardized evaluation framework for human expert-level analytical rigor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Important implications for criminal justice systems integrating AI assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'smart-contract-detection': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
<div className="max-w-6xl mx-auto bg-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 px-2">Smart Contract Reentrancy Detection</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-200">
                <img 
                  src="/depa-lab/images/Automated Detection-Poster-Template.pptx.png"
                  loading="lazy"
                  alt="Smart Contract Reentrancy Detection System"
                  className="w-full h-96 rounded-xl shadow-2xl border border-blue-200 object-cover"
                />
                <p className="text-center text-gray-800 text-sm mt-4 italic">
                  Automated detection system for reentrancy vulnerabilities in smart contracts
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#124d89] mb-4">Research Overview</h3>
              <p className="text-gray-900 leading-relaxed text-lg">
                This research develops an automated system for detecting reentrancy vulnerabilities in smart contracts, which represent one of the most dangerous security flaws in blockchain applications. The study introduces a hybrid feature engineering approach that combines pattern-based detection with graph-based analysis.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-blue-200 mt-6">
                <h4 className="text-xl font-bold text-[#124d89] mb-4">Key Innovations</h4>
                <ul className="text-gray-900 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Hybrid methodology combining pattern and graph-based analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Scalable solution for protecting valuable digital assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Critical advancement in blockchain security for DeFi applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

'publications': PublicationsPage,

    'urbanflow': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold border border-orange-300 mb-3">Flagship Project</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">UrbanFlow: Accessible Autonomous Mobility</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            {/* Hero image (replace with an approved UrbanFlow wheelchair demonstration photo) */}
            <div className="mb-10 bg-blue-50 rounded-3xl p-4 sm:p-6 border border-blue-200 shadow-lg">
              <img
                src="/depa-lab/images/depa2.jpeg"
                loading="lazy"
                alt="UrbanFlow accessible autonomous mobility research at the DEPA Lab"
                className="w-full h-64 sm:h-96 rounded-2xl object-cover border border-blue-200"
              />
              <p className="text-center text-gray-700 text-sm mt-3 italic">Representative laboratory image. Replace with an approved UrbanFlow demonstration photo.</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#124d89] mb-3">Overview</h2>
              <p className="text-gray-900 leading-relaxed text-lg">
                UrbanFlow is a retrofit autonomous mobility platform designed to support safe navigation across complex indoor and outdoor environments. The system combines LiDAR, computer vision, localization, mapping, motion planning, and intelligent control to extend the capabilities of a powered wheelchair without requiring a purpose-built mobility base.
              </p>
            </section>

            <section className="mb-8 bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h2 className="text-2xl font-bold text-[#124d89] mb-3">The Challenge</h2>
              <p className="text-gray-900 leading-relaxed text-lg">
                Airports, hospitals, campuses, and transportation facilities contain dynamic spaces that are difficult for many mobility users to navigate independently. UrbanFlow investigates how affordable sensing and AI can support accessible, context-aware mobility while keeping safety, usability, and human control central to system design.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#124d89] mb-3">Technical Approach</h2>
              <p className="text-gray-900 leading-relaxed text-lg mb-4">
                The platform integrates 2D LiDAR, RGB-D vision, inertial sensing, odometry, and optional high-precision positioning. Research areas include hybrid indoor/outdoor localization, SLAM, obstacle detection, path planning, person following, docking, and multimodal sensor fusion.
              </p>
              <div className="bg-blue-50 rounded-2xl p-4 sm:p-6 border border-blue-200">
                <p className="text-[#0f4276] font-bold text-center mb-4">System Architecture</p>
                <UrbanFlowArchitecture />
              </div>
            </section>

            <section className="mb-8 bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h2 className="text-2xl font-bold text-[#124d89] mb-4">Selected Capabilities</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Vision-LiDAR perception and mapping', 'Indoor and outdoor navigation', 'Dynamic obstacle detection and avoidance', 'Person-following assistance', 'Docking and transportation integration', 'Explainable system monitoring and safety evaluation'].map((c) => (
                  <li key={c} className="flex items-start gap-2 text-gray-900">
                    <span className="text-orange-500 mt-1">&#8226;</span><span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#124d89] mb-3">Technology Translation</h2>
              <p className="text-gray-900 leading-relaxed text-lg">
                UrbanFlow research contributed to the Autonomous Mobility System, U.S. Patent No. 12,622,826.
              </p>
            </section>

            <section className="mb-10 bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h2 className="text-2xl font-bold text-[#124d89] mb-3">Selected Demonstrations</h2>
              <p className="text-gray-900 leading-relaxed text-lg">
                The platform has been demonstrated for The Arc Maryland, at the World Bank&rsquo;s Transforming Transportation event, and during a Girl STEM Tour at Baltimore/Washington International Thurgood Marshall Airport.
              </p>
            </section>

            <div className="text-center">
              <a href="mailto:kofi.nyarko@morgan.edu" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Contact the UrbanFlow Team
              </a>
            </div>
          </div>
        </div>
      </div>
    ),

    'trustworthy-ai': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Trustworthy AI for Cybersecurity and Cyber-Physical Systems</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <p className="text-lg sm:text-xl text-gray-900 leading-relaxed max-w-4xl mx-auto text-center mb-10">
              DEPA develops and evaluates AI methods for detecting threats, explaining model decisions, measuring robustness, and supporting human oversight in cybersecurity and cyber-physical systems. The program addresses both model performance and the operational conditions under which an AI system should be trusted.
            </p>

            <div className="bg-blue-50 rounded-2xl p-4 sm:p-6 border border-blue-200 mb-10">
              <p className="text-[#0f4276] font-bold text-center mb-4">How trust is evaluated</p>
              <TrustLoop />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h2 className="text-2xl font-bold text-[#124d89] mb-4">Current Research Themes</h2>
                <ul className="space-y-3">
                  {['Adversarial robustness in intrusion and ransomware detection', 'Industrial control system anomaly detection under explicit false-alarm constraints', 'Cybersecurity of connected and automated vehicles', 'Explainable smart-contract vulnerability detection', 'Privacy-preserving evaluation of large language model pipelines', 'Human performance with and without AI-assisted cybersecurity tools'].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-gray-900"><span className="text-orange-500 mt-1">&#8226;</span><span>{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h2 className="text-2xl font-bold text-[#124d89] mb-4">Selected Outputs</h2>
                <ul className="space-y-3">
                  {['Alarm-Budgeted Event-Level Evaluation of ICS Anomaly Detection: Lessons from SWaT and WADI', 'GraphAE: Plant-Informed Graph Autoencoder for ICS Anomaly Detection with SHAP-Based Explanations', 'SmartPattern: A Machine Learning Framework for Detecting Reentrancy Vulnerabilities in Blockchain Smart Contracts', 'RIPPLE: Differential Testing of Exact-Value Restoration Boundaries in Privacy-Preserving LLM Pipelines'].map((o) => (
                    <li key={o} className="flex items-start gap-2 text-gray-900"><span className="text-orange-500 mt-1">&#8226;</span><span>{o}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-10">
              <button onClick={() => setCurrentView('publications')} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Related Publications
              </button>
            </div>
          </div>
        </div>
      </div>
    ),

    'innovation-ip': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Innovation and Intellectual Property</h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl text-gray-900 leading-relaxed max-w-4xl mx-auto text-center mb-10">
              DEPA translates research into protectable technologies, prototypes, datasets, and software systems. This page highlights publicly reportable patents and intellectual property disclosures associated with DEPA leadership and collaborators.
            </p>

            <h2 className="text-2xl font-bold text-[#124d89] mb-4">Issued Patents</h2>
            <div className="space-y-6 mb-10">
              {ipIssued.map((p) => (
                <div key={p.title} className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow-md">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-300">Issued</span>
                    <span className="px-3 py-1 bg-blue-100 text-[#0f4276] rounded-full text-xs font-semibold border border-blue-300">{p.number}</span>
                    <span className="text-sm text-gray-700">{p.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-[#0f4276] text-sm font-semibold mb-2">Inventors: {p.inventors}</p>
                  <p className="text-gray-900">{p.summary}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#124d89] mb-4">Pending Patents</h2>
            <div className="space-y-6 mb-10">
              {ipPending.map((p) => (
                <div key={p.title} className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow-md">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold border border-amber-300 mb-3">{p.status}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-[#0f4276] text-sm font-semibold mb-2">Inventors: {p.inventors}</p>
                  <p className="text-gray-900">{p.summary}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#124d89] mb-4">Selected Intellectual Property Disclosures</h2>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow-md">
              <ul className="space-y-3">
                {ipDisclosures.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-gray-900"><span className="text-orange-500 mt-1">&#8226;</span><span>{d}</span></li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mt-4 italic">Confidential disclosure details are not published. Each description is approved by the Office of Technology Transfer or project lead.</p>
            </div>
          </div>
        </div>
      </div>
    ),

    'people': () => {
      const ProfileCard = ({ p }) => (
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg flex-shrink-0">
              <img
                src={`/depa-lab/images/${p.image}`}
                alt={p.name}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; const fb = e.target.nextSibling; if (fb && fb.style) fb.style.display = 'flex'; }}
              />
              <div className="w-full h-full absolute inset-0 items-center justify-center text-xl text-white font-bold" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)', display: 'none' }}>
                {p.name.split(' ').map((n) => n[0]).join('').substring(0, 2)}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
              <p className="text-[#0f4276] text-sm font-semibold">{p.program}</p>
            </div>
          </div>
          <p className="text-gray-900 text-sm mb-2"><span className="font-semibold text-[#0f4276]">Research interests:</span> {p.interests}</p>
          {p.project ? <p className="text-gray-900 text-sm mb-2"><span className="font-semibold text-[#0f4276]">Current project:</span> {p.project}</p> : null}
          {p.award ? <p className="text-gray-900 text-sm mb-2"><span className="font-semibold text-[#0f4276]">Selected recognition:</span> {p.award}</p> : null}
          {p.links && p.links.length ? (
            <div className="flex flex-wrap gap-2 mt-3">
              {p.links.map((l) => (
                <a key={l.label} href={l.href} className="px-3 py-1 bg-white text-[#0f4276] rounded-lg text-xs font-medium border border-blue-300 hover:bg-blue-100 transition-colors">{l.label}</a>
              ))}
            </div>
          ) : null}
        </div>
      );

      return (
        <div className="min-h-screen bg-white">
          <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Our <span className="text-[#124d89]">People</span></h1>
                <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
              </div>
              <p className="text-lg sm:text-xl text-gray-900 text-center mb-10 max-w-4xl mx-auto">
                DEPA brings together faculty, staff, and student researchers advancing data engineering, predictive analytics, trustworthy AI, computer vision, and autonomous systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {peopleProfiles.map((p) => <ProfileCard key={p.name} p={p} />)}
              </div>

              <h2 className="text-2xl font-bold text-[#124d89] mt-14 mb-6 text-center">Alumni</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {peopleAlumni.map((p) => <ProfileCard key={p.name} p={p} />)}
              </div>
              <p className="text-sm text-gray-600 text-center mt-8 italic">Public bios, portraits, and profile links are shown with each member&rsquo;s approval.</p>
            </div>
          </div>
        </div>
      );
    },

    'impact': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Research <span className="text-[#124d89]">Impact</span></h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
              <p className="text-sm text-gray-600 mt-4">{METRICS_AS_OF}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
              {impactMetrics.filter((m) => !m.wide).map((m) => (
                <div key={m.label} className="bg-blue-50 rounded-2xl p-5 border border-blue-200 shadow-sm text-center">
                  <div className="text-3xl font-black text-[#124d89] mb-2">{m.value}</div>
                  <p className="text-gray-800 text-sm">{m.label}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Student Achievement</h2>
            <p className="text-gray-900 mb-6 max-w-4xl">
              DEPA students apply research skills in scholarly publication, technical competitions, demonstrations, and entrepreneurship. Their accomplishments reflect the lab&rsquo;s emphasis on hands-on research, mentorship, and translation of AI into practical systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {studentAchievements.map((a, i) => (
                <div key={i} className="bg-blue-50 rounded-2xl p-5 border border-blue-200 shadow-sm">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold border border-orange-300 mb-2">{a.date}</span>
                  <h3 className="text-lg font-bold text-gray-900">{a.students}</h3>
                  <p className="text-gray-900 text-sm mt-1">{a.recognition}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Selected Funded Research</h2>
            <p className="text-gray-900 mb-6 max-w-4xl">
              DEPA researchers contribute to externally supported work in trustworthy AI, cybersecurity, autonomous systems, data infrastructure, and decision support. Selected awarded efforts include:
            </p>
            <div className="space-y-4 mb-4">
              {fundedResearch.map((g) => (
                <div key={g.title} className="bg-blue-50 rounded-2xl p-5 border border-blue-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-lg font-bold text-gray-900 flex-grow">{g.title}</h3>
                    <span className="self-start px-3 py-1 bg-blue-100 text-[#0f4276] rounded-full text-xs font-semibold border border-blue-300 whitespace-nowrap">{g.period}</span>
                  </div>
                  <p className="text-[#0f4276] text-sm font-semibold mt-1">{g.sponsor}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-14 italic">Center-level awards state DEPA&rsquo;s role rather than implying the full award belongs to the lab.</p>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Collaboration and Partnerships</h2>
            <p className="text-gray-900 mb-6 max-w-4xl">
              DEPA works with university researchers, government agencies, industry, nonprofit organizations, and community partners to move AI research from theory to practical use. Collaboration may include sponsored research, shared test environments, student mentorship, technical demonstrations, data development, and technology evaluation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {partnerCategories.map((c) => (
                <div key={c} className="bg-white rounded-xl p-5 border border-blue-200 shadow-sm text-gray-900 font-medium flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-orange-500"></span>{c}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6 italic">Logos are used only with documented permission; sponsors are not described as partners unless an active relationship exists.</p>
          </div>
        </div>
      </div>
    ),

    'news': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">News &amp; <span className="text-[#124d89]">Engagement</span></h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            <div className="relative border-l-2 border-blue-200 ml-3">
              {newsTimeline.map((n, i) => (
                <div key={i} className="relative pl-8 pb-8">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-500 border-2 border-white shadow"></span>
                  <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200 shadow-sm">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-[#0f4276] rounded-full text-xs font-bold border border-blue-300">{n.category}</span>
                      <span className="text-sm font-semibold text-gray-700">{n.date}</span>
                    </div>
                    <p className="text-gray-900">{n.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 text-center mt-4 italic">Each entry links to an event page, date, image credit, and description as records are confirmed.</p>
          </div>
        </div>
      </div>
    ),

    'join-us': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Join or Collaborate with <span className="text-[#124d89]">DEPA</span></h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-md">
                <h2 className="text-2xl font-bold text-[#124d89] mb-4">For Students</h2>
                <p className="text-gray-900 leading-relaxed mb-4">
                  DEPA welcomes motivated undergraduate and graduate students interested in data engineering, predictive analytics, computer vision, trustworthy AI, cybersecurity, and autonomous systems. Students may contribute through research assistantships, course projects, independent study, theses, dissertations, and summer research programs.
                </p>
                <h3 className="font-bold text-[#0f4276] mb-2">When contacting the lab, include:</h3>
                <ul className="space-y-2">
                  {['Your degree program and expected graduation date', 'Research interests and relevant coursework', 'Technical skills and links to code or prior projects', 'The DEPA project or research program that interests you', 'A r\u00e9sum\u00e9 or curriculum vitae'].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-gray-900"><span className="text-orange-500 mt-1">&#8226;</span><span>{t}</span></li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-md">
                <h2 className="text-2xl font-bold text-[#124d89] mb-4">For Collaborators</h2>
                <p className="text-gray-900 leading-relaxed mb-4">
                  DEPA works with academic, government, industry, and community partners on sponsored research, data and testbed development, system evaluation, student mentorship, and technology demonstrations.
                </p>
                <p className="text-gray-900 leading-relaxed">
                  Prospective partners should provide a concise description of the problem, available data or environment, intended users, timeline, and potential resources.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <a href="mailto:kofi.nyarko@morgan.edu" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Contact the DEPA Lab
              </a>
              <p className="text-sm text-gray-600 mt-4 italic">The lab does not promise funding or placement.</p>
            </div>
          </div>
        </div>
      </div>
    ),

    'projects': () => (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Project <span className="text-[#124d89]">Portfolio</span></h1>
              <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl text-gray-900 text-center mb-12 max-w-4xl mx-auto">
              DEPA&rsquo;s active and completed projects span data engineering, predictive analytics, trustworthy AI, cybersecurity, computer vision, and autonomous systems. Select a project to see its goals, methods, and outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group transform hover:scale-105 transition-all duration-500">
                  <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 shadow-lg h-full hover:shadow-xl transition-all duration-300 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-900 leading-relaxed mb-6 flex-grow">{project.description}</p>
                    <button
                      onClick={() => setCurrentView(project.link)}
                      className="self-start inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  }), []);

  // ---- Reusable layout fragments ------------------------------------------
  // The same header and footer render on the home view AND on every research
  // detail view, so the nav menu is always visible.

  const NAV_ITEMS = [
    { label: 'Home', kind: 'scroll', target: 'hero' },
    { label: 'Research', kind: 'scroll', target: 'research' },
    { label: 'Projects', kind: 'view', target: 'projects' },
    { label: 'Publications', kind: 'view', target: 'publications' },
    { label: 'Innovation', kind: 'view', target: 'innovation-ip' },
    { label: 'People', kind: 'view', target: 'people' },
    { label: 'Impact', kind: 'view', target: 'impact' },
    { label: 'News', kind: 'view', target: 'news' },
    { label: 'Join Us', kind: 'view', target: 'join-us' },
  ];

  const headerJSX = (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-blue-100 shadow-lg">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo (clicking it returns to home/top) */}
          <button
            onClick={() => navigate('hero')}
            className="flex items-center group focus:outline-none"
            aria-label="DEPA Lab home"
          >
            <div className="bg-blue-50 rounded-lg p-1.5 sm:p-2 shadow-sm">
              <img
                src="/depa-lab/images/DEPA-logo.png"
                alt="DEPA Lab Logo"
                className="h-8 sm:h-10 md:h-12 w-auto transform group-hover:scale-110 transition-all duration-500"
              />
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center bg-blue-50/80 backdrop-blur-xl rounded-full px-2 py-2 shadow-lg border border-blue-100">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => goTo(item)}
                  className="relative px-3 xl:px-4 py-2 mx-0.5 text-sm font-medium text-gray-900 hover:text-white rounded-full transition-all duration-300 group focus:outline-none"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#124d89] to-[#1a5c9e] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                </button>
              ))}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => openView('join-us')}
              className="relative inline-flex items-center px-5 py-2.5 xl:px-6 xl:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden focus:outline-none"
            >
              <span>Get In Touch</span>
              </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="relative group p-2.5 sm:p-3 bg-blue-50 rounded-2xl shadow-lg border border-blue-100 focus:outline-none"
            >
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <span className={`bg-[#124d89] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-[#124d89] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-[#124d89] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white m-3 sm:m-4 rounded-3xl shadow-2xl border border-blue-100 p-5 sm:p-6 max-w-md mx-auto max-h-[calc(100vh-6rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2.5 sm:space-y-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => goTo(item)}
                  className="group flex items-center justify-between w-full p-3 sm:p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all duration-300 border border-blue-100 focus:outline-none"
                >
                  <span className="text-gray-900 font-semibold group-hover:text-[#124d89] transition-colors duration-300 text-base">{item.label}</span>
                </button>
              ))}
              <div className="pt-3 border-t border-blue-200">
                <button
                  onClick={() => openView('join-us')}
                  className="flex items-center justify-center w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none"
                >
                  <span>Get In Touch</span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );

  const footerJSX = (
    <footer className="bg-gradient-to-br from-[#0f4276] via-[#0c3560] to-[#0a2c50] text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={() => navigate('hero')}
              className="flex items-center justify-center md:justify-start mb-4 group focus:outline-none"
            >
              <div className="w-10 h-10 bg-white text-[#0f4276] rounded-full flex items-center justify-center font-black mr-3 group-hover:scale-110 transition-transform">
                D
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight">DEPA Research Lab</span>
            </button>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
              Data Engineering and Predictive Analytics Lab at Morgan State University, building a more equitable future through AI research.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-4 uppercase tracking-wider text-orange-300">Explore</h4>
            <ul className="space-y-2 text-blue-100 text-sm sm:text-base">
              {[
                { label: 'Research', kind: 'scroll', target: 'research' },
                { label: 'Projects', kind: 'view', target: 'projects' },
                { label: 'Publications', kind: 'view', target: 'publications' },
                { label: 'People', kind: 'view', target: 'people' },
                { label: 'Impact', kind: 'view', target: 'impact' },
                { label: 'Join Us', kind: 'view', target: 'join-us' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => goTo(item)}
                    className="hover:text-white transition-colors focus:outline-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-4 uppercase tracking-wider text-orange-300">Contact</h4>
            <p className="text-blue-100 text-sm sm:text-base mb-2">
              <a
                href="mailto:kofi.nyarko@morgan.edu"
                className="hover:text-white transition-colors break-all"
              >
                kofi.nyarko@morgan.edu
              </a>
            </p>
            <address className="not-italic text-blue-100 text-sm leading-relaxed">
              Rooms 112 &amp; 113, Schaefer Engineering Building<br />
              Morgan State University<br />
              1700 E Cold Spring Ln<br />
              Baltimore, MD 21251
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-blue-100 text-xs sm:text-sm">
          <span>&copy; {new Date().getFullYear()} DEPA Research Lab. All rights reserved.</span>
          <span>Last updated: June 2026 &middot; Morgan State University, Baltimore, MD</span>
        </div>
      </div>
    </footer>
  );

  const scrollToTopJSX = (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#124d89] to-[#0f4276] text-white shadow-2xl flex items-center justify-center transition-all duration-300 ${
        showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      } hover:scale-110 focus:outline-none`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
      </button>
  );

  if (currentView !== 'home' && ResearchComponents[currentView]) {
    const Component = ResearchComponents[currentView];
    return (
      <div className="min-h-screen flex flex-col bg-white relative overflow-x-hidden">
        {headerJSX}
        <main className="flex-grow pt-16 sm:pt-20">
          <Component />
        </main>
        {footerJSX}
        {scrollToTopJSX}
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen overflow-x-hidden flex flex-col relative bg-white"
    >
      {/* Animated background overlay - updated via ref/rAF on mousemove,
          no React re-renders. See the useEffect at the top of the component. */}
      <div
        ref={overlayRef}
        className="fixed inset-0 opacity-5 pointer-events-none"
      />

      {headerJSX}
      
      {/* Main Content */}
      <main className="flex-grow pt-16 sm:pt-20">
        
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-grid-ink opacity-40 pointer-events-none" aria-hidden="true"></div>
          <div className="absolute top-0 right-0 h-full w-2/3 bg-gradient-to-l from-blue-50 via-blue-50/40 to-transparent pointer-events-none" aria-hidden="true"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center py-8 sm:py-10 lg:py-14">

              {/* Text column */}
              <div className="lg:col-span-6 text-left">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-orange-500"></span>
                  <span className="eyebrow text-orange-500">Morgan State University &middot; CEAMLS</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0c2b4d] leading-[0.98] mb-4">
                  DEPA <span className="text-orange-500">Research Lab</span>
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-[#124d89] mb-5 max-w-2xl">
                  Data Engineering &amp; Predictive Analytics for Intelligent, Trustworthy Systems
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                  The DEPA Lab at Morgan State University builds data-intensive AI systems that turn complex engineering data into predictive insight, reliable decisions, and deployable technologies, across data engineering, computer vision, trustworthy AI, cybersecurity, intelligent transportation, autonomous mobility, and decision support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a
                    href="#research"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-base transition-all duration-300 shadow-lg shadow-orange-500/20"
                  >
                    Explore Our Research
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </a>
                  <button
                    onClick={() => openView('join-us')}
                    className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-[#124d89] text-[#124d89] hover:bg-[#124d89] hover:text-white rounded-full font-semibold text-base transition-all duration-300"
                  >
                    Collaborate With DEPA
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-gray-200 text-sm text-gray-500">
                  <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>Patented autonomous mobility</span>
                  <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>Peer-reviewed AI &amp; cybersecurity</span>
                  <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>Federal &amp; industry partners</span>
                </div>
              </div>

              {/* Honeycomb image cluster (slanted left-to-right) */}
              <div className="lg:col-span-6 relative flex justify-center">
                <svg viewBox="0 0 490 560" className="w-full max-w-[440px] sm:max-w-[520px] lg:max-w-[560px] h-auto" role="img" aria-label="DEPA Lab research imagery arranged as a slanted honeycomb">
                  <defs>
                    <clipPath id="hxA"><path d="M130,40 L216.6,90 L216.6,190 L130,240 L43.4,190 L43.4,90 Z" /></clipPath>
                    <clipPath id="hxB"><path d="M216.6,190 L303.2,240 L303.2,340 L216.6,390 L130,340 L130,240 Z" /></clipPath>
                    <clipPath id="hxC"><path d="M303.2,340 L389.8,390 L389.8,490 L303.2,540 L216.6,490 L216.6,390 Z" /></clipPath>
                  </defs>
                  <image href="/depa-lab/images/depa2.jpeg" x="43.4" y="40" width="173.2" height="200" preserveAspectRatio="xMinYMid slice" clipPath="url(#hxA)" />
                  <image href="/depa-lab/images/depa2.jpeg" x="130" y="190" width="173.2" height="200" preserveAspectRatio="xMidYMid slice" clipPath="url(#hxB)" />
                  <image href="/depa-lab/images/depa2.jpeg" x="216.6" y="340" width="173.2" height="200" preserveAspectRatio="xMaxYMid slice" clipPath="url(#hxC)" />
                  <path d="M130,40 L216.6,90 L216.6,190 L130,240 L43.4,190 L43.4,90 Z" fill="none" stroke="#ffffff" strokeWidth="4" />
                  <path d="M216.6,190 L303.2,240 L303.2,340 L216.6,390 L130,340 L130,240 Z" fill="none" stroke="#ffffff" strokeWidth="4" />
                  <path d="M303.2,340 L389.8,390 L389.8,490 L303.2,540 L216.6,490 L216.6,390 Z" fill="none" stroke="#ffffff" strokeWidth="4" />
                  {/* Orange accent hex (top-right) with data nodes */}
                  <path d="M303.2,40 L389.8,90 L389.8,190 L303.2,240 L216.6,190 L216.6,90 Z" fill="#f97316" />
                  <circle cx="283" cy="140" r="7" fill="#ffffff" />
                  <circle cx="318" cy="123" r="7" fill="#ffffff" />
                  <circle cx="318" cy="157" r="7" fill="#ffffff" />
                  <path d="M283,140 L318,123 M283,140 L318,157" stroke="#ffffff" strokeWidth="2.5" opacity="0.85" />
                  {/* Navy accent hex (mid-right) */}
                  <path d="M389.8,190 L476.4,240 L476.4,340 L389.8,390 L303.2,340 L303.2,240 Z" fill="#124d89" />
                  <circle cx="389.8" cy="290" r="8" fill="#f97316" />
                  <circle cx="366" cy="268" r="4" fill="#ffffff" opacity="0.7" />
                  <circle cx="413" cy="312" r="4" fill="#ffffff" opacity="0.7" />
                </svg>
              </div>

            </div>
          </div>
        </section>

        {/* Institutional Context: DEPA / CEAMLS / RAIN (Guide 4.2) */}
        <section id="context" className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-px w-8 bg-orange-400"></span>
                <span className="eyebrow text-orange-500">Who we are</span>
                <span className="h-px w-8 bg-orange-400"></span>
              </div>
              <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed font-light">
                DEPA is a research laboratory within Morgan State University&rsquo;s{' '}
                <a href="https://www.morgan.edu/ceamls" target="_blank" rel="noopener noreferrer" className="font-medium text-[#0f4276] underline decoration-orange-400 decoration-2 underline-offset-4 hover:text-[#0c3560]">Center for Equitable Artificial Intelligence and Machine Learning Systems (CEAMLS)</a>. DEPA leads work in data engineering, predictive modeling, optimization, decision support, and data-intensive AI systems. Projects involving robotics, intelligent sensing, and autonomous platforms may be conducted jointly with the Robotics, Autonomy &amp; Intelligent Networks (RAIN) Lab.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Metrics Strip (Guide 4.3) */}
        <section id="metrics" className="py-16 bg-gradient-to-br from-[#124d89] via-[#0f4276] to-[#0c3560]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 text-center">Research Impact at a Glance</h2>
            <p className="text-blue-100 text-center mb-10">{METRICS_AS_OF}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {impactMetrics.filter((m) => !m.wide).map((m) => (
                <div key={m.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2">{m.value}</div>
                  <p className="text-blue-100 text-sm leading-snug">{m.label}</p>
                </div>
              ))}
            </div>
            {impactMetrics.filter((m) => m.wide).map((m) => (
              <div key={m.label} className="max-w-4xl mx-auto mt-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 text-center">
                <p className="text-white font-semibold">{m.label}</p>
              </div>
            ))}
            <div className="text-center mt-8">
              <button onClick={() => openView('impact')} className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300">
                See Full Impact
              </button>
            </div>
          </div>
        </section>

        {/* Research Areas Section */}
        <section id="research" className="mb-24 py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-orange-400"></span>
              <span className="eyebrow text-orange-500">Research</span>
              <span className="h-px w-8 bg-orange-400"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
              Research <span className="text-[#124d89]">Programs</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center mb-14 max-w-4xl mx-auto">
              Our work is organized into four programs spanning foundational methods and deployable systems.
            </p>

            {/* Four Research Programs (Guide 5.1) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 max-w-6xl mx-auto">
              {researchPrograms.map((program, index) => (
                <div key={program.title} className="flex flex-col">
                  <div className="rounded-2xl overflow-hidden ring-1 ring-blue-100 mb-5">
                    <ProgramVisual index={index} />
                  </div>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center mt-1">{index + 1}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed flex-grow">{program.description}</p>
                  {program.view ? (
                    <button
                      onClick={() => openView(program.view)}
                      className="self-start inline-flex items-center gap-1 mt-4 text-[#124d89] font-semibold text-sm hover:text-orange-600 transition-colors"
                    >
                      Explore Program &rarr;
                    </button>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Technical Capabilities (Guide 5.2) */}
            <div className="max-w-6xl mx-auto mt-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-400"></span>
                <span className="eyebrow text-orange-500">What we can do</span>
                <span className="h-px w-8 bg-orange-400"></span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Technical Capabilities</h3>
              <div className="relative max-w-4xl mx-auto mt-10">
                {/* Center spine */}
                <div className="absolute top-1 bottom-1 left-2.5 md:left-1/2 w-0.5 bg-[#124d89]/25 md:-translate-x-1/2" aria-hidden="true"></div>
                <ul className="space-y-6 sm:space-y-7">
                  {technicalCapabilities.map((cap, i) => {
                    const left = i % 2 === 0;
                    return (
                      <li key={cap} className="relative">
                        <span className="absolute left-2.5 md:left-1/2 top-1 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-white -translate-x-1/2" aria-hidden="true"></span>
                        <div className={`pl-9 md:pl-0 md:w-1/2 ${left ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'}`}>
                          <span className="text-gray-800 text-base sm:text-lg leading-snug">{cap}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Results Section (Guide 4.4) */}
        <section id="recent-results" className="mb-24 py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-orange-400"></span>
              <span className="eyebrow text-orange-500">Latest</span>
              <span className="h-px w-8 bg-orange-400"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
              Recent <span className="text-[#124d89]">Results</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-900 text-center mb-12 max-w-4xl mx-auto">
              DEPA research moves from foundational methods to tested systems, scholarly publications, intellectual property, and public demonstrations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {recentResults.map((r) => (
                <div key={r.title} className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow-md h-full flex flex-col">
                  <span className="self-start px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold border border-orange-300 mb-3">{r.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
                  <p className="text-[#0f4276] text-sm font-semibold mb-3">{r.status}</p>
                  <p className="text-gray-800 text-sm leading-relaxed flex-grow mb-4">{r.blurb}</p>
                  <button
                    onClick={() => openView(r.view)}
                    className="self-start inline-flex items-center text-[#124d89] font-semibold text-sm hover:text-orange-600 transition-colors"
                  >
                    Learn more &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Preview (Guide 9.3) */}
        <section id="news-preview" className="mb-24 py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-orange-400"></span>
              <span className="eyebrow text-orange-500">Updates</span>
              <span className="h-px w-8 bg-orange-400"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
              News &amp; <span className="text-[#124d89]">Engagement</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-900 text-center mb-12 max-w-3xl mx-auto">
              Recent demonstrations, talks, publications, patents, and milestones.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {newsTimeline.slice(0, 3).map((n, i) => (
                <div key={i} className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow-md">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-[#0f4276] rounded-full text-xs font-bold border border-blue-300">{n.category}</span>
                    <span className="text-sm font-semibold text-gray-700">{n.date}</span>
                  </div>
                  <p className="text-gray-900">{n.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button
                onClick={() => openView('news')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View All News
              </button>
            </div>
          </div>
        </section>

        {/* Join Us CTA (Guide 10.1) */}
        <section id="join-cta" className="mb-24 py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-400"></span>
                <span className="eyebrow text-orange-500">Get involved</span>
                <span className="h-px w-8 bg-orange-400"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Join or Collaborate with DEPA
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We welcome motivated students and academic, government, industry, and community partners interested in data engineering, predictive analytics, computer vision, trustworthy AI, cybersecurity, and autonomous systems.
              </p>
              <button
                onClick={() => openView('join-us')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-orange-500/25"
              >
                Explore Opportunities &rarr;
              </button>
            </div>
          </div>
        </section>
      </main>

      {footerJSX}
      {scrollToTopJSX}

      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default DepaLabHomepage;
