// src/sections/EducationSection/EducationSection.tsx
import React from 'react';
import styles from './EducationSection.module.css';
import { educationData } from '../../data/education';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const EducationSection: React.FC = () => {
  return (
    <section className={styles.educationSection}>
      <h2>
        <FontAwesomeIcon icon={faGraduationCap} className={styles.headingIcon} /> Education & Learning
      </h2>
      {educationData.map((edu) => (
        <div key={edu.id} className={styles.educationItem}>
          <h3>{edu.degree}</h3>
          <p className={styles.degreeInstitution}>{edu.institution}</p>
          <p className={styles.degreeDates}>{edu.dates}</p>
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