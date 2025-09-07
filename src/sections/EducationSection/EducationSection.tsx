import React from 'react';
import styles from './EducationSection.module.css'; // Import styles

const EducationSection: React.FC = () => {
  return (
    <section className={styles.educationSection}>
      <h2>Education</h2>
      <div className={styles.educationItem}>
        <h3>Web Developer</h3>
        <p className={styles.degreeInstitution}>SoftUni Bulgaria</p>
        <p className={styles.degreeDates}>2022 - Present</p>
        <p className={styles.degreeDetails}>Python and Javascript web development</p>
      </div>
      <div className={styles.educationItem}>
        <h3>Currently Studying</h3>
        <p>
          <h4 className={styles.placeholderText}>DevOps Upskill Program</h4>
          <div className={styles.placeholderText}>Linux System Administration</div>
          <div className={styles.placeholderText}>Conteinerization</div>
          <div className={styles.placeholderText}>Azure</div>
          <div className={styles.placeholderText}>Kubernetes</div>
          <div className={styles.placeholderText}>CI/CD monitoring</div>
        </p>
      </div>
    </section>
  );
};

export default EducationSection;