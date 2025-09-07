import React from 'react';
import styles from './ExperienceSection.module.css';

const ExperienceSection: React.FC = () => (
  <section className={styles.experienceSection}>
    <h2>Current Role</h2>
    <div className={styles.experienceItem}>
      <h3>Frontend Developer</h3>
      <p className={styles.jobCompanyLocation}>Ipsos Bulgaria</p>
      <p className={styles.jobDates}>2023 - Present</p>
      <ul>
        <li><span className={styles.placeholderText}>Building and maintaining internal web applications</span></li>
        <li><span className={styles.placeholderText}>Implementing AI APIs</span></li>
        <li><span className={styles.placeholderText}>Creating online marketing surveys</span></li>
      </ul>
    </div>
  </section>
);

export default ExperienceSection;