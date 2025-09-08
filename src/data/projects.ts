// src/data/projects.ts
import type { IProject } from '../types';

export const projectsData: IProject[] = [
  {
    id: 1,
    title: 'Internal AI Analytics Dashboard',
    description:
      'A case study of an internal application built at Ipsos. The tool integrates with internal AI APIs to process and visualize complex survey data in real-time. I was responsible for building the complete frontend, from data fetching and state management to creating dynamic, interactive charts to display the results.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'REST APIs', 'Data Visualization'],
    screenshots: [
      'https://via.placeholder.com/800x600/282c34/61dafb?text=Dashboard+View',
      'https://via.placeholder.com/800x600/282c34/61dafb?text=Data+Filters',
      'https://via.placeholder.com/800x600/282c34/61dafb?text=Chart+Example',
    ],
    links: {
      // Internal project, so no public links. This is normal.
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
      github: 'https://github.com/your-username/my-personal-website', 
    },
  },
];