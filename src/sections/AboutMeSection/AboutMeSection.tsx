// src/sections/AboutMeSection/AboutMeSection.tsx
import React from 'react';
import styles from './AboutMeSection.module.css';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AboutMeSection: React.FC = () => (
  <section className={styles.aboutMeSection}>
    <h2>
      <FontAwesomeIcon icon={faUser} className={styles.headingIcon} /> About Me
    </h2>
    <p>
      As a Frontend Developer, I bring a unique blend of skills honed through diverse experiences. My foundation in Python and JavaScript complements my proficiency in ReactJS, HTML, and CSS. I also have experience with backend technologies like Django. My current role at Ipsos, a marketing research company, has seen me evolve from a script writer to a Frontend Developer specializing in building internal applications, including those that harness AI APIs. I've successfully tackled complex projects, demonstrating my ability to learn quickly and deliver robust solutions.
    </p>
    <p>
      My commitment to continuous learning extends to DevOps, where I am currently studying Linux administration, containerization (Docker, Ansible, Vagrant, Terraform), and preparing to explore Kubernetes, Azure, and CI/CD. This broad technical interest allows me to understand the full lifecycle of software. I am a dedicated and detail-oriented learner with a strong growth mindset, always ready to take on new challenges. While I am naturally introverted, I am a positive and collaborative team member who enjoys working with others once comfortable.
    </p>
  </section>
);

export default AboutMeSection;