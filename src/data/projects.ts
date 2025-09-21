// src/data/projects.ts
import '../assets/dogramavarna-screenshots/screenshot-1.png'
import type { IProject } from '../types';

export const projectsData: IProject[] = [
  {
    id: 1,
    title: 'www.dogramavarna.net',
    description:
      'Glazing company website. Built from a designer template',
    technologies: ['React','JavaScript','Django', 'Python',  'nx8', 'REST APIs', ''],
    screenshots: [
      '/src/assets/dogramavarna-screenshots/screenshot-1.png',
      '/src/assets/dogramavarna-screenshots/screenshot-2.png',
      '/src/assets/dogramavarna-screenshots/screenshot-3.png',
      '/src/assets/dogramavarna-screenshots/screenshot-4.png',
      '/src/assets/dogramavarna-screenshots/screenshot-5.png',
      '/src/assets/dogramavarna-screenshots/screenshot-6.png',
      '/src/assets/dogramavarna-screenshots/screenshot-7.png',
      '/src/assets/dogramavarna-screenshots/screenshot-8.png',
      '/src/assets/dogramavarna-screenshots/screenshot-9.png',
      '/src/assets/dogramavarna-screenshots/screenshot-10.png',
      '/src/assets/dogramavarna-screenshots/screenshot-11.png',
      '/src/assets/dogramavarna-screenshots/screenshot-12.png',
    ],
    links: {
      github: 'https://github.com/kostadinov1/Vanilla_Glazing', 
      demo: 'www.dogramavarna.net'
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
    title: 'Fitness Application(not hosted)',
    description:
      'My personal portfolio, built from scratch using a modern frontend stack. This site serves as a live demonstration of my React, TypeScript, and design skills. It is fully data-driven, deployed via a CI/CD pipeline on Netlify, and features a responsive, clean design. (More features like a backend + user auth coming soon!)',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'CSS Modules', 'Netlify'],
    screenshots: [
      'https://via.placeholder.com/800x600/f4f7f6/333?text=Responsive+Mobile',
    ],
    links: {
      github: 'https://github.com/kostadinov1/fitness-app', 
    },
  },
      {
    id: 4,
    title: 'Data transformation tool',
    description:
      'Data transforming tool using AI apis',
    technologies: ['React', 'JavaScript', '', 'CSS Modules', 'Netlify'],
    screenshots: [
      // 'https://via.placeholder.com/800x600/f4f7f6/333?text=Responsive+Mobile',
    ],
    links: {
      github: 'not possible', 
    },
  },
];