// src/sections/EducationSection/EducationSection.tsx
import React from 'react';
import styles from './EducationSection.module.css';
import { educationData } from '../../data/education';

const EducationSection: React.FC = () => {
  return (
    <section className={styles.educationSection}>
      <h2>Education & Learning</h2>
      {educationData.map((edu) => (
        <div key={edu.id} className={styles.educationItem}>
          <h3>{edu.degree}</h3>
          <p className={styles.degreeInstitution}>{edu.institution}</p>
          <p className={styles.degreeDates}>{edu.dates}</p>
          {/* Conditionally render details if they exist */}
          {edu.details && (
            <ul className={styles.detailsList}>
              {edu.details.map((detail, index) => (
                <li key={index} className={styles.degreeDetails}>
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default EducationSection;