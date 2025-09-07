// src/sections/ExperienceSection/ExperienceSection.tsx
import React from 'react';
import styles from './ExperienceSection.module.css';
import { experienceData } from '../../data/experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const ExperienceSection: React.FC = () => (
  <section className={styles.experienceSection}>
    <h2>
      <FontAwesomeIcon icon={faBriefcase} className={styles.headingIcon} /> Work Experience
    </h2>
    {experienceData.map((job) => (
      <div key={job.id} className={styles.experienceItem}>
        <h3>{job.title}</h3>
        <p className={styles.jobCompanyLocation}>{job.company}</p>
        <p className={styles.jobDates}>{job.dates}</p>
        <ul>
          {job.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default ExperienceSection;