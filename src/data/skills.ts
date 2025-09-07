// src/data/skills.ts
import { type ISkillCategory } from '../types';

export const skillsData: ISkillCategory[] = [
  {
    id: 1,
    title: 'Languages',
    skills: [
      { id: 101, name: 'Python' },
      { id: 102, name: 'JavaScript' },
      { id: 103, name: 'TypeScript' },
      { id: 104, name: 'VBScript' },
      { id: 105, name: 'HTML' },
      { id: 106, name: 'CSS' },
    ],
  },
  {
    id: 2,
    title: 'Frameworks & Libraries',
    skills: [
      { id: 201, name: 'ReactJS' },
      { id: 202, name: 'Node.js' },
      { id: 203, name: 'Styled Components' },
      { id: 204, name: 'Django' },
    ],
  },
  {
    id: 3,
    title: 'Tools & Technologies',
    skills: [
      { id: 301, name: 'Git' },
      { id: 302, name: 'Docker' },
      { id: 303, name: 'VS Code' },
      { id: 304, name: 'REST APIs' },
      { id: 305, name: 'SQL' },
    ],
  },
];