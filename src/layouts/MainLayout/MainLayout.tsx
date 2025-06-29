import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

// Define the props the layout component will accept
interface MainLayoutProps {
  children: ReactNode; // 'children' is a special prop that holds the content rendered inside the layout
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <header className="main-header">
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/about">About</Link>
          {/* Add more navigation links here */}
        </nav>
      </header>
      <main className="main-content">
        {children} {/* This is where the page content (HomePage, AboutPage, etc.) will be rendered */}
      </main>
      <footer className="main-footer">
        <p>© {new Date().getFullYear()} Evgeni's Website</p>
      </footer>
    </div>
  );
};

export default MainLayout;