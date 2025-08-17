// src/components/research/ResearchComponents.js
import React from 'react';
import ResearchTemplate from './ResearchTemplate';
import PublicationsDetailed from './PublicationsDetailed';
import SymposiumDetailed from './SymposiumDetailed';
import AwardsDetailed from './AwardsDetailed';

const researchData = {
  'ai-comprehension': {
    title: 'AI Assistive Comprehension Assessor',
    icon: '📚',
    overview: [
      'The AI Assistive Comprehension Assessor (AACA) is an AI-powered tool designed to help educators evaluate students\' comprehension of academic material. By analyzing student-written essays, AACA generates custom quizzes in Canvas QTI/XML format, ensuring that students grasp key concepts rather than relying on AI-generated responses.',
      'The system automates quiz creation and processes multiple-choice questions with correct answer validation, streamlining assessment workflows for educators. AACA enhances personalized learning by providing targeted evaluations, improving both student engagement and academic outcomes.'
    ]
  },
  'llm-benchmarking': {
    title: 'Benchmarking Large Language Models for AAVE and SAE Text Generation',
    icon: '🗣️',
    overview: [
      'Our research explores the performance of state-of-the-art AI language models in generating text in African American Vernacular English (AAVE) and Standard American English (SAE). We are benchmarking six leading models—GPT-4, Claude 3.5 Sonnet, Gemini 1.5 Pro, LLaMA 3.1, Qwen, and GPT-o1—to assess their ability to maintain semantic consistency, lexical similarity, and sentiment alignment when generating dialect-specific text.',
      'Using a structured evaluation framework, we analyzed model-generated continuations of AAVE and SAE prompts through BLEU and ROUGE scores for text overlap, cosine similarity for semantic consistency, and sentiment distribution analysis to measure alignment with original text sentiment.'
    ]
  },
  'wheelchair-mobility': {
    title: 'Real-Time Segmentation of the Ground Plane for Enhanced Wheelchair Mobility',
    icon: '♿',
    overview: [
      'This research project addresses the critical need for enhancing mobility for wheelchair users by focusing on real-time segmentation of the ground plane while excluding obstacles. The significance lies in overcoming challenges faced by wheelchair users in navigating diverse environments.',
      'The objective is to develop a segmentation model within the SAM framework capable of accurately delineating the ground surface to facilitate uninterrupted movement for wheelchair users, utilizing adaptive learning algorithms and machine learning techniques.'
    ]
  },
  'ml-bench-guard': {
    title: 'AI/ML Bench Guard Framework',
    icon: '📊',
    overview: [
      'AI/ML Bench Guard is a comprehensive benchmarking framework for evaluating cloud-based, LLM, and open-source machine learning services. The system conducts automated performance assessments across multiple providers, including AWS, Azure, GCP, and open-source alternatives.',
      'By implementing standardized testing protocols and continuous monitoring, the framework enables objective comparison of service performance, reliability, and cost-effectiveness while analyzing potential biases in model outputs.'
    ]
  },
  'ai-action-recognition': {
    title: 'AI Models in Action Recognition Video Analysis',
    icon: '🎬',
    overview: [
      'The CLAIRE (Cross-Referencing Labels, Actions, and Interactions for Robust Explanations) project aims to integrate YOLO detections and LLM vision to analyze video frames, cross-reference object/person–person/person interactions, and generate detailed reports of the video frame\'s scene.',
      'This research explores both the benefits and restraints of utilizing AI models in action recognition video analysis, extending to CCTV footage and everyday video recordings.'
    ]
  },
  'queryable-cv': {
    title: 'Queryable Computer Vision Pipeline',
    icon: '🔍',
    overview: [
      'This research aims to make video data analysis more accessible by creating a scalable architecture that allows data analysts to execute insightful SQL queries without needing advanced computer vision skills.',
      'The project leverages cutting-edge algorithms for object detection, tracking, and instance segmentation to develop a framework that extracts pertinent information from video content.'
    ]
  },
  'crack-detection': {
    title: 'Crack Detection and Classification in Structural Materials',
    icon: '🔧',
    overview: [
      'This project utilizes advanced machine learning techniques to detect cracks and structural anomalies in materials under stress. By identifying early-stage cracks, monitoring their propagation, and analyzing their orientation, we aim to improve the durability and reliability of materials commonly used in construction and engineering.',
      'Early detection of these defects enables proactive maintenance, reducing the risk of structural failures and ensuring long-term safety and performance.'
    ]
  },
  'multi-object-tracking': {
    title: 'Innovative Techniques for Multi-Object Tracking in Video Analysis',
    icon: '🎯',
    overview: [
      'This research explores cutting-edge approaches to enhance the ability to track individuals across video frames accurately and consistently. This work focuses on creating systems that can reliably identify and follow multiple subjects, even in complex scenarios where challenges such as overlaps, occlusions, and varying movements arise.',
      'By leveraging innovative methodologies for detection, feature extraction, and tracking, this research aims to push the boundaries of video analysis.'
    ]
  },
  'robotic-design': {
    title: 'Advancing Real-Time Decision-Making and Robotic Design',
    icon: '🤖',
    overview: [
      'Research Interests: Edge Computing, Robotics, CAD Modeling, Real-Time Decision-Making, Autonomous Systems',
      'This research leverages edge computing technologies, such as the Nvidia Jetson Nano and Raspberry Pi with Google Coral TPU, to enable real-time, on-device decision-making without relying on cloud-based systems. By integrating software and hardware expertise, the research aims to optimize navigation algorithms for efficiency, accuracy, and adaptability in complex, dynamic settings.'
    ]
  }
};

const ResearchComponents = ({ currentView, setCurrentView }) => {
  switch (currentView) {
    case 'publications':
      return <PublicationsDetailed setCurrentView={setCurrentView} />;
    case 'symposium':
      return <SymposiumDetailed setCurrentView={setCurrentView} />;
    case 'awards':
      return <AwardsDetailed setCurrentView={setCurrentView} />;
    default:
      const research = researchData[currentView];
      if (research) {
        return (
          <ResearchTemplate
            title={research.title}
            icon={research.icon}
            overview={research.overview}
            setCurrentView={setCurrentView}
          />
        );
      }
      return null;
  }
};

export default ResearchComponents;
