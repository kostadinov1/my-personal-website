// src/pages/HomePage/HomePage.tsx
import React from 'react';
import {
  HeroSection,
  AboutMeSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
} from '../../sections';
import styles from './HomePage.module.css';
import { AnimatedSection } from '../../components';

const HomePage: React.FC = () => {
  return (
    <>
      <div className={styles.heroAboutRow}>
        <HeroSection />
        <AboutMeSection />
      </div>

      <AnimatedSection>
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection>
        <ExperienceSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <EducationSection />
      </AnimatedSection>
    </>
  );
};

export default HomePage;