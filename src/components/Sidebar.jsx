import { projects } from '../data/projects';
import './Sidebar.css';

const Sidebar = ({ selectedProject, onProjectSelect, viewMode, setViewMode }) => {
  return (
    <div className="sidebar">
      {/* Title */}
      <h3>Projects</h3>

      {/* Scrollable Project List */}
      <div className="sidebar-scrollable">
        <div className="sidebar-list">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`sidebar-item ${selectedProject?.id === project.id ? 'active' : ''}`}
              onClick={() => onProjectSelect(project)}
            >
              <span className="item-number">
                {project.id.toString().padStart(2, '0')}
              </span>
              <span className="item-title">{project.short}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Toggle — Ye hamesha neeche rahega */}
      <div className="device-toggle-fixed">
        <button
          className={`device-btn ${viewMode === 'desktop' ? 'active' : ''}`}
          onClick={() => setViewMode('desktop')}
        >
          Desktop
        </button>
        <button
          className={`device-btn ${viewMode === 'mobile' ? 'active' : ''}`}
          onClick={() => setViewMode('mobile')}
        >
          Mobile
        </button>
      </div>
    </div>
  );
};

export default Sidebar;