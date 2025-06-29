import React from 'react';
// Import EducationSection from the sections barrel file
import { EducationSection } from '../../sections';

const HomePage: React.FC = () => {
  return (
    <>
      <h1>My Personal Website</h1> {/* A simple title for the page */}
      <EducationSection />
      {/* Add other sections here later */}
    </>
  );
};

export default HomePage;