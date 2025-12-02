import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Akhliesh</h2>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;