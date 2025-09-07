import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Import the CSS Module

const Header: React.FC = () => {
  return (
    <header className={styles.mainHeader}> {/* Use the CSS Module class */}
      <nav>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/projects" className={styles.navLink}>Projects</Link> {/* Add Projects */}
        <Link to="/contact" className={styles.navLink}>Contact</Link> {/* Add Contact */}
      </nav>
    </header>
  );
};

export default Header;