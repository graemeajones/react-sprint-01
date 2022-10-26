import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth.js';
import './Navbar.scss';

export default function Navbar() {
  // Initialisation ------------------------------
  const { loggedinUser, logout } = useAuth();
  const navigate = useNavigate();

  // State ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  const getLinkStyle = ({ isActive }) => (isActive ? 'navSelected' : null);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // View ----------------------------------------
  return (
    <nav className="Navbar">
      {
        loggedinUser
          ? <>
              <div className="navItem">
                <NavLink to='/' className={getLinkStyle}>My Modules</NavLink>
              </div>
              <div className="navItem">
                <NavLink to='/secrets' className={getLinkStyle}>My Secrets</NavLink>
              </div>
              <div className="navItem" onClick={handleLogout}>
                <NavLink to='/' className={getLinkStyle}>Logout</NavLink>
              </div>
            </>
          : <>
              <div className="navItem">
                <NavLink to='/' className={getLinkStyle}>Login</NavLink>
              </div>
            </>
      }
    </nav>
  );
}
