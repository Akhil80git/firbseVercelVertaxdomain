import { useState } from 'react';
import './ProjectPreview.css';

const ProjectPreview = ({ project, viewMode = 'desktop' }) => {
  const [loading, setLoading] = useState(true);

  // 🔹 FIRST TIME WELCOME SCREEN
  if (!project) {
    return (
      <div className={`preview-container ${viewMode}`}>
        <div className="preview-placeholder">
          <h1>👋 Welcome Akhilesh</h1>
          <p>Welcome to my project preview panel</p>

          <ul>
            <li>⬅ Left side se project select karein</li>
            <li>🖥 Desktop / 📱 Mobile view switch karein</li>
            <li>🌐 Live project preview dekhein</li>
          </ul>

          <span>👉 Start karne ke liye kisi project par click karein</span>
        </div>
      </div>
    );
  }

  // 🔹 PROJECT PREVIEW
  return (
    <div className={`preview-container ${viewMode}`}>
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
        onLoad={() => setLoading(false)}
        allow="geolocation; microphone; camera"
        sandbox="
          allow-same-origin
          allow-scripts
          allow-popups
          allow-forms
          allow-modals
          allow-geolocation
        "
      />
    </div>
  );
};

export default ProjectPreview;
