import React, { type ReactNode } from 'react';
import styles from './MainLayout.module.css';
import { Header } from '../../components/Header';

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
        <p>© {new Date().getFullYear()} Evgeni's Website</p>
      </footer>
    </div>
  );
};

export default MainLayout;