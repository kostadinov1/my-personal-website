import { Routes, Route } from 'react-router-dom';
// Import HomePage from the pages barrel file
import { ContactPage, HomePage, ProjectsPage } from './pages'; // Correct import
import { MainLayout } from './layouts';
// Assuming MainLayout is correctly exported from src/layouts/index.ts

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} /> 
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </MainLayout>
  );
}

export default App;