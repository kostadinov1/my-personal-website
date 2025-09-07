import React from 'react';
import styles from './AboutMeSection.module.css';

const AboutMeSection: React.FC = () => (
  <section className={styles.aboutMeSection}>
    <h2>About Me</h2>
    <p>
      <span className={styles.placeholderText}>As a Frontend Developer, I bring a unique blend of skills honed through diverse experiences. My foundation in Python and JavaScript complements my proficiency in ReactJS, HTML, and CSS. I also have experience with backend technologies like Django. My current role at Ipsos, a marketing research company, has seen me evolve from a script writer to a Frontend Developer specializing in building internal applications, including those that harness AI APIs. I've successfully tackled complex projects, demonstrating my ability to learn quickly and deliver robust solutions.

My commitment to continuous learning extends to DevOps, where I am currently studying Linux administration, containerization (Docker, Ansible, Vagrant, Terraform), and preparing to explore Kubernetes, Azure, and CI/CD. This broad technical interest allows me to understand the full lifecycle of software. I am a dedicated and detail-oriented learner with a strong growth mindset, always ready to take on new challenges. While I am naturally introverted, I am a positive and collaborative team member who enjoys working with others once comfortable.</span>
      {/* <span className={styles.placeholderText}>    "Frontend Developer with a strong command of ReactJS, JavaScript, Python, HTML, and CSS, and experience with Django. Currently at Ipsos, I've transitioned from script writing to developing complex internal applications, including those integrating AI APIs. My technical curiosity also drives my pursuit of DevOps knowledge, covering Linux, Docker, Ansible, Terraform, and upcoming studies in Kubernetes and Azure. I possess a growth mindset and a 'don't give up' attitude, ensuring I tackle challenges with dedication and strive for deep understanding. I am an introverted but adaptable team player, committed to continuous learning and delivering high-quality results."</span> */}
    </p>
  </section>
);

export default AboutMeSection;