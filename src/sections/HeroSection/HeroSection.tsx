import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';
import myPhoto from '../../assets/my-photo.jpg'; 

const HeroSection: React.FC = () => (
  <section className={styles.heroSection}>
    <div className={styles.heroImageContainer}>
      <img src={myPhoto} alt="Your Name" className={styles.heroPhoto} />
    </div>
    <div className={styles.heroTextContent}>
      <h1>Evgeni Kostadinov</h1> 
      <h2>Web Developer</h2>
      <p>
        <Link to="/projects" className={styles.ctaButton}>View My Work</Link>
        <Link to="/contact" className={`${styles.ctaButton} ${styles.secondary}`}>Contact Me</Link>
      </p>
    </div>
  </section>
);

export default HeroSection;