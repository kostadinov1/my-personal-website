import React from 'react';
import {
  HeroSection,
  AboutMeSection,
  SkillsSection,
  ExperienceSection,
  EducationSection
} from '../../sections';
import styles from './HomePage.module.css'; // Import HomePage specific styles

const HomePage: React.FC = () => {
  return (
    <>
      {/* Wrap Hero and AboutMe in a row container */}
      <div className={styles.heroAboutRow}> {/* Use a custom class for this row */}
        <HeroSection />
        <AboutMeSection />
      </div>

      <SkillsSection />
      <ExperienceSection />
      {/* Add EducationSection here if you want it on the homepage */}
      <EducationSection />
    </>
  );
};

export default HomePage;