// src/sections/SkillsSection/SkillsSection.tsx
import React from 'react';
import styles from './SkillsSection.module.css';
import { skillsData } from '../../data/skills';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

const SkillsSection: React.FC = () => (
  <section className={styles.skillsSection}>
    <h2>
      <FontAwesomeIcon icon={faCogs} className={styles.headingIcon} /> Skills
    </h2>
    <div className={styles.skillsGrid}>
      {skillsData.map((category) => (
        <div key={category.id} className={styles.skillCategory}>
          <h3>{category.title}</h3>
          <div className={styles.skillTags}>
            {category.skills.map((skill) => (
              <span key={skill.id} className={styles.skillTag}>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;