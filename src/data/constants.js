// src/data/constants.js

export const teamMembers = [
  { name: "Dr. Kofi Nyarko", role: "Lab Director", image: "/api/placeholder/150/150" },
  { name: "Research Scientist", role: "AI/ML Specialist", image: "/api/placeholder/150/150" },
  { name: "Graduate Student", role: "Computer Vision", image: "/api/placeholder/150/150" },
  { name: "Research Assistant", role: "Data Analytics", image: "/api/placeholder/150/150" },
];

export const projects = [
  {
    title: "AI Assistive Comprehension Assessor",
    description: "Developing an AI-powered tool to evaluate student comprehension by analyzing essays and generating quizzes in Canvas QTI/XML format.",
    link: "ai-comprehension",
    icon: "📚"
  },
  {
    title: "Benchmarking LLMs for AAVE & SAE",
    description: "Assessing leading LLMs for their ability to generate dialect-specific text while maintaining semantic consistency.",
    link: "llm-benchmarking",
    icon: "🗣️"
  },
  {
    title: "Ground Plane Segmentation for Wheelchair Mobility",
    description: "Utilizing real-time segmentation techniques within the SAM framework to improve navigation for wheelchair users.",
    link: "wheelchair-mobility",
    icon: "♿"
  },
  {
    title: "AI/ML Bench Guard",
    description: "A benchmarking framework for evaluating cloud-based and open-source ML services across various tasks.",
    link: "ml-bench-guard",
    icon: "📊"
  },
  {
    title: "AI Models in Action Recognition",
    description: "Integrating YOLO detections and LLM vision to analyze video frames and generate detailed scene reports.",
    link: "ai-action-recognition",
    icon: "🎬"
  },
  {
    title: "Queryable Computer Vision Pipeline",
    description: "Developing a scalable system that allows data analysts to execute SQL-like queries on video content.",
    link: "queryable-cv",
    icon: "🔍"
  },
  {
    title: "Crack Detection in Structural Materials",
    description: "Advanced machine learning techniques to detect cracks and structural anomalies in construction materials.",
    link: "crack-detection",
    icon: "🔧"
  },
  {
    title: "Multi-Object Tracking in Video Analysis",
    description: "Innovative approaches to enhance tracking of multiple subjects across video frames in complex scenarios.",
    link: "multi-object-tracking",
    icon: "🎯"
  },
  {
    title: "Real-Time Decision-Making and Robotic Design",
    description: "Leveraging edge computing for autonomous systems with CAD optimization and real-time navigation.",
    link: "robotic-design",
    icon: "🤖"
  }
];

export const publications = [
  {
    title: "AI/ML Systems Engineering Workbench Framework",
    authors: "Dr. Kofi Nyarko, Emmanual Masa-Ibi",
    conference: "Conference on Information Sciences and Systems (CISS)",
    badge: "IEEE CISS",
    badgeColor: "green",
    icon: "fas fa-file-alt",
    status: "published",
    link: "https://ieeexplore.ieee.org/document/10089781/"
  },
  {
    title: "Automated Traffic Video Analysis with a Modular Computer Vision Pipeline",
    authors: "Tasmeer Alam, Dr. Kofi Nyarko",
    conference: "Conference on Information Sciences and Systems (CISS)",
    badge: "Paper Accepted",
    badgeColor: "orange",
    icon: "fas fa-video",
    status: "pending",
    link: null
  },
  {
    title: "Network Intrusion Visualization with NIVA",
    authors: "Kofi Nyarko, Tanya Capers, Craig Scott, Kemi Ladeji-Osias",
    conference: "10th Symposium on Haptic Interfaces for Virtual Environment",
    badge: "IEEE Haptic Symposium",
    badgeColor: "purple",
    icon: "fas fa-shield-alt",
    status: "published",
    link: "https://ieeexplore.ieee.org/abstract/document/998969"
  },
  {
    title: "Cloud Based Passive Building Occupancy Characterization",
    authors: "Kofi Nyarko, Cecelia Wright-Brown",
    conference: "IEEE International Conference on Technologies for Homeland Security",
    badge: "IEEE HST",
    badgeColor: "yellow",
    icon: "fas fa-building",
    status: "published",
    link: "https://ieeexplore.ieee.org/abstract/document/6699097"
  }
];

export const researchAreas = [
  {
    title: "IoT Data Analytics",
    description: "Analyze and visualize complex IoT networks for actionable insights.",
    icon: "🌐"
  },
  {
    title: "Cybersecurity",
    description: "Secure networks through advanced analytics and visualization techniques.",
    icon: "🔒"
  },
  {
    title: "Machine Learning",
    description: "Optimize algorithms for real-world decision support and autonomous systems.",
    icon: "🤖"
  },
  {
    title: "Computer Vision",
    description: "Automating traffic data analysis, pose estimation, and scene perception for diverse applications.",
    icon: "👁️"
  },
  {
    title: "Ethical AI Framework",
    description: "Advancing trustworthy and unbiased AI systems while addressing algorithmic bias.",
    icon: "⚖️"
  },
  {
    title: "Human-Computer Interaction",
    description: "Creating interactive visualization tools for enhanced situational awareness.",
    icon: "🖥️"
  },
  {
    title: "Autonomous Systems",
    description: "Developing robust algorithms for real-time navigation in challenging environments.",
    icon: "🚗"
  }
];
