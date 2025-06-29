import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Import HomePage from the pages barrel file
import { HomePage } from './pages'; // Correct import
import { MainLayout } from './layouts';
// Assuming MainLayout is correctly exported from src/layouts/index.ts

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes later */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </MainLayout>
  );
}

export default App;