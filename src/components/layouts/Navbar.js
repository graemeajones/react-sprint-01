import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../auth/AuthContext.js';
import './Navbar.scss';

export default function Navbar() {
  // Initialisation ------------------------------
  const { loggedinUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // State ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  const getLinkStyle = ({ isActive }) => (isActive ? 'navSelected' : null);
  
  const handleLogout = () => {
    logout();
    navigate('/');
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
                <NavLink onClick={handleLogout} className={getLinkStyle}>Logout</NavLink>
              </div>
            </>
          : 
            <div className="navItem">
              <NavLink to='/login' className={getLinkStyle}>Login</NavLink>
            </div>
      }
    </nav>
  );
}
