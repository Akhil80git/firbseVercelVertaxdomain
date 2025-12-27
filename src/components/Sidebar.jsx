import { projects } from '../data/projects';
import './Sidebar.css';

const Sidebar = ({ selectedProject, onProjectSelect, viewMode, setViewMode }) => {
  return (
    <div className="sidebar">
      <h3>Projects</h3>

      <div className="sidebar-scrollable">
        <div className="sidebar-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`sidebar-row ${selectedProject?.id === project.id ? 'active' : ''}`}
            >
              {/* LEFT: Project Select */}
              <button
                className="sidebar-item"
                onClick={() => onProjectSelect(project)}
              >
                <span className="item-number">
                  {project.id.toString().padStart(2, '0')}
                </span>
                <span className="item-title">{project.short}</span>
              </button>

              {/* RIGHT: Run in Browser */}
              <button
                className="run-btn"
                title="Open in Browser"
                onClick={(e) => {
                  e.stopPropagation(); // important
                  window.open(project.url, '_blank');
                }}
              >
                🌐
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Toggle */}
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
