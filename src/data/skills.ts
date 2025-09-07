// src/data/skills.ts
import type { ISkillCategory } from '../types';

// Import all the icons we need
import {
  faPython,
  faJs,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faBolt } from '@fortawesome/free-solid-svg-icons';

export const skillsData: ISkillCategory[] = [
  {
    id: 1,
    title: 'Languages',
    skills: [
      { id: 101, name: 'Python', icon: faPython },
      { id: 102, name: 'JavaScript', icon: faJs },
      { id: 103, name: 'TypeScript', icon: faCode },
      { id: 104, name: 'VBScript' },
      { id: 105, name: 'HTML', icon: faHtml5 },
      { id: 106, name: 'CSS', icon: faCss3Alt },
    ],
  },
  {
    id: 2,
    title: 'Frameworks & Libraries',
    skills: [
      { id: 201, name: 'ReactJS', icon: faReact },
      { id: 202, name: 'Node.js', icon: faNodeJs },
      { id: 203, name: 'Styled Components' }, 
      { id: 204, name: 'Django', icon: faPython },
      { id: 205, name: 'FastAPI', icon: faBolt }, 
    ],
  },
  {
    id: 3,
    title: 'Tools & Technologies',
    skills: [
      { id: 301, name: 'Git', icon: faGitAlt },
      { id: 302, name: 'Docker', icon: faDocker },
      { id: 303, name: 'VS Code', icon: faCode },
      { id: 304, name: 'REST APIs' },
      { id: 305, name: 'SQL', icon: faDatabase },
    ],
  },
];