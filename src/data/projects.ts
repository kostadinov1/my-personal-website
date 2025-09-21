// src/data/projects.ts
import type { IProject } from '../types';

// --- IMPORT YOUR LOCAL IMAGES ---
// By importing them, Vite will process these images and provide the correct public URL.
import dogramaScreenshot1 from '../assets/dogramavarna-screenshots/screenshot-1.png';
import dogramaScreenshot2 from '../assets/dogramavarna-screenshots/screenshot-2.png';
import dogramaScreenshot3 from '../assets/dogramavarna-screenshots/screenshot-3.png';
import dogramaScreenshot4 from '../assets/dogramavarna-screenshots/screenshot-4.png';
import dogramaScreenshot5 from '../assets/dogramavarna-screenshots/screenshot-5.png';
import dogramaScreenshot6 from '../assets/dogramavarna-screenshots/screenshot-6.png';
import dogramaScreenshot7 from '../assets/dogramavarna-screenshots/screenshot-7.png';
import dogramaScreenshot8 from '../assets/dogramavarna-screenshots/screenshot-8.png';
import dogramaScreenshot9 from '../assets/dogramavarna-screenshots/screenshot-9.png';
import dogramaScreenshot10 from '../assets/dogramavarna-screenshots/screenshot-10.png';
import dogramaScreenshot11 from '../assets/dogramavarna-screenshots/screenshot-11.png';
import dogramaScreenshot12 from '../assets/dogramavarna-screenshots/screenshot-12.png';

export const projectsData: IProject[] = [
  {
    id: 1,
    title: 'www.dogramavarna.net',
    description: 'Glazing company website. Built from a designer template',
    technologies: ['React', 'JavaScript', 'Django', 'Python', 'nx8', 'REST APIs'],
    screenshots: [
      // --- USE THE IMPORTED VARIABLES HERE ---
      dogramaScreenshot1,
      dogramaScreenshot2,
      dogramaScreenshot3,
      dogramaScreenshot4,
      dogramaScreenshot5,
      dogramaScreenshot6,
      dogramaScreenshot7,
      dogramaScreenshot8,
      dogramaScreenshot9,
      dogramaScreenshot10,
      dogramaScreenshot11,
      dogramaScreenshot12,
    ],
    links: {
      github: 'https://github.com/kostadinov1/Vanilla_Glazing',
      demo: 'https://www.dogramavarna.net',
    },
  },
  {
    id: 2,
    title: 'Personal CV Website (This Project!)',
    description:
      'My personal portfolio, built from scratch using a modern frontend stack. This site serves as a live demonstration of my React, TypeScript, and design skills. It is fully data-driven, deployed via a CI/CD pipeline on Netlify, and features a responsive, clean design. (More features like a backend + user auth coming soon!)',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'CSS Modules', 'Netlify'],
    screenshots: [
      'https://via.placeholder.com/800x600/f4f7f6/333?text=Homepage+Desktop',
      'https://via.placeholder.com/800x600/f4f7f6/333?text=Skills+Section',
      'https://via.placeholder.com/800x600/f4f7f6/333?text=Responsive+Mobile',
    ],
    links: {
      github: 'https://github.com/kostadinov1/my-personal-website',
    },
  },
  {
    id: 3,
    title: 'Fitness Application (not hosted)',
    description:
      'A concept for a fitness tracking application, focusing on a clean user interface and intuitive workout logging. Built to practice state management and component composition in a real-world scenario.',
    technologies: ['React', 'TypeScript', 'Vite'],
    screenshots: [
      'https://via.placeholder.com/800x600/282c34/61dafb?text=Workout+Logger',
    ],
    links: {
      github: 'https://github.com/kostadinov1/fitness-app',
    },
  },
  {
    id: 4,
    title: 'Data Transformation Tool',
    description:
      'An internal enterprise tool designed to streamline data processing workflows. This application interfaces with proprietary AI APIs to automate the transformation and validation of large datasets, significantly reducing manual effort and potential for error.',
    technologies: ['React', 'JavaScript', 'Internal APIs', 'Data Processing'],
    screenshots: [
      'https://via.placeholder.com/800x600/333/eee?text=Internal+Tool+UI',
    ],
    links: {
      // No public links available for this internal project
    },
  },
];