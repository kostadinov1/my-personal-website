import React from 'react';
import styles from './SkillsSection.module.css';

const SkillsSection: React.FC = () => (
  <section className={styles.skillsSection}>
    <h2>Skills</h2>
    <div className={styles.skillsGrid}>
      <div className={styles.skillCategory}>
        <h3>Languages</h3>
        <div className={styles.skillTags}>
          <span className={styles.skillTag}>Python</span>
          <span className={styles.skillTag}>JavaScript</span>
          <span className={styles.skillTag}>VBScript</span>
          <span className={styles.skillTag}>TypeScript</span>
          <span className={styles.skillTag}>HTML</span>
          <span className={styles.skillTag}>CSS</span>
        </div>
      </div>
      <div className={styles.skillCategory}>
        <h3>Frameworks & Libraries</h3>
        <div className={styles.skillTags}>
          <span className={styles.skillTag}>ReactJS</span>
          <span className={styles.skillTag}>Node.js</span>
          <span className={styles.skillTag}>Styled Components</span>
          <span className={styles.skillTag}>Django</span>
        </div>
      </div>
      <div className={styles.skillCategory}>
        <h3>Tools & Technologies</h3>
        <div className={styles.skillTags}>
          <span className={styles.skillTag}>Git</span>
          <span className={styles.skillTag}>Docker</span>
          <span className={styles.skillTag}>VS Code</span>
          <span className={styles.skillTag}>REST APIs</span>
          <span className={styles.skillTag}>SQL</span>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;