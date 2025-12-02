import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProjectPreview from '../components/ProjectPreview';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('desktop'); // default desktop

  return (
    <>
      <Sidebar
        selectedProject={selectedProject}
        onProjectSelect={setSelectedProject}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <ProjectPreview
        project={selectedProject}
        viewMode={viewMode}
      />
    </>
  );
};

export default Projects;