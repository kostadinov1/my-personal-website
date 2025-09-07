import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ISkill {
  id: number;
  name: string;
  icon?: IconDefinition;
}

export interface ISkillCategory {
  id: number;
  title: string;
  skills: ISkill[];
}

export interface IExperience {
  id: number;
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
}

export interface IEducation {
  id: number;
  degree: string;
  institution: string;
  dates: string;
  details?: string[];
}