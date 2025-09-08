// src/pages/ProjectsPage/ProjectsPage.tsx
import React from 'react';
import { projectsData } from '../../data/projects';
import { ProjectCard } from '../../components'; // Using the barrel file
import { AnimatedSection } from '../../components'; // Using the barrel file
import styles from './ProjectsPage.module.css';

// Import FontAwesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const ProjectsPage: React.FC = () => {
  return (
    // We can wrap the whole page content in an animation
    <AnimatedSection>
      <div className={styles.projectsPage}>
        <h1 className={styles.pageTitle}>
          <FontAwesomeIcon icon={faProjectDiagram} className={styles.headingIcon} />
          My Projects
        </h1>
        <p className={styles.pageSubtitle}>
          Here's a selection of projects I've worked on. They showcase a range of technologies and my approach to problem-solving.
        </p>

        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsPage;