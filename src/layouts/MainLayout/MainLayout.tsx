import React, { type ReactNode } from 'react';
import styles from './MainLayout.module.css';
import { Header } from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <Header />
      {/* Add a wrapper for content that needs max-width and centering */}
      <div className={styles.contentWrapper}>
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
<footer className={styles.mainFooter}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Evgeni Kostadinov</p>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/kostadinov1" // <-- IMPORTANT: REPLACE WITH YOUR GITHUB URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/evgeni-k-a5a734218" // <-- IMPORTANT: REPLACE WITH YOUR LINKEDIN URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;