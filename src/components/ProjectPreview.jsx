import { useState } from 'react';
import './ProjectPreview.css';

const ProjectPreview = ({ project, viewMode = 'desktop' }) => {
  const [loading, setLoading] = useState(true);

  if (!project) {
    return <div className="preview-placeholder">Select a project to preview</div>;
  }

  return (
    <div className={`preview-container ${viewMode}`}>
      {/* Beautiful Loading Animation */}
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Loading {project.short}...</p>
        </div>
      )}

      <iframe
        src={project.url}
        title={project.short}
        className="preview-iframe"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
        onLoad={(e) => {
          setLoading(false);
          // Scrollbar hide karne ka magic
          try {
            const doc = e.target.contentDocument;
            if (doc) {
              const style = doc.createElement('style');
              style.textContent = `
                html,body{margin:0;padding:0;overflow-x:hidden;overflow-y:auto}
                ::-webkit-scrollbar{display:none;width:0;height:0}
                *{scrollbar-width:none;-ms-overflow-style:none}
              `;
              doc.head.appendChild(style);
            }
          } catch (e) {}
        }}
      />
    </div>
  );
};

export default ProjectPreview;