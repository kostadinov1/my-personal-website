// src/components/ProjectCard/ProjectCard.tsx
import React from 'react';
import type { IProject } from '../../types';
import styles from './ProjectCard.module.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles (This is crucial!)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className={styles.projectCard}>
      <div className={styles.carouselContainer}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Add the modules here
          spaceBetween={10}
          slidesPerView={1}
          navigation={true} // Enable navigation arrows
          pagination={{ clickable: true }} // Enable pagination dots
          autoplay={{ delay: 3500, disableOnInteraction: false }} // Autoplay
          loop={true} // Enable endless looping
          className={styles.swiperInstance}
        >
          {project.screenshots.map((screenshot, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <img src={screenshot} alt={`${project.title} screenshot ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.projectContent}>
        <h3>{project.title}</h3>

        <div className={styles.projectLinks}>
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <FontAwesomeIcon icon={faGithub} /> Code
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
            </a>
          )}
        </div>

        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.techTags}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;