// src/data/education.ts
import { type IEducation } from '../types';

export const educationData: IEducation[] = [
  {
    id: 1,
    degree: 'Web Developer Program',
    institution: 'SoftUni Bulgaria',
    dates: '2022 - Present',
    details: ['Focus on Python and JavaScript web development.'],
  },
  {
    id: 2,
    degree: 'DevOps Upskill Program',
    institution: 'Currently Studying',
    dates: 'Ongoing',
    details: [
      'Linux System Administration',
      'Containerization (Docker, Ansible)',
      'Azure Fundamentals',
      'Kubernetes',
      'CI/CD Monitoring',
    ],
  },
];