import React from 'react';
import styles from './EducationSection.module.css'; // Import styles

const EducationSection: React.FC = () => {
  return (
    <section className={styles.educationSection}>
      <h2>Education</h2>
      <div className={styles.educationItem}>
        <h3>[Your Degree Name]</h3>
        <p className={styles.degreeInstitution}>[Your University/Institution Name]</p>
        <p className={styles.degreeDates}>[Start Year] - [End Year or Expected End Year]</p>
        <p className={styles.degreeDetails}>[Major/Minor, GPA if strong, Honors]</p>
      </div>
      <div className={styles.educationItem}>
        <h3>Currently Studying</h3>
        <p>
          <span className={styles.placeholderText}>[Currently focusing on advanced React patterns and backend integration / pursuing a certification in X]</span>
        </p>
      </div>
    </section>
  );
};

export default EducationSection;