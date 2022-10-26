import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../UI/Icons.js';
import AuthContext from '../auth/AuthContext.js';
import './Header.scss';

export default function Header() {
  // Initialisation ------------------------------
  const { loggedinUser } = useContext(AuthContext);

  // State ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <header className="Header">
      <Link to='/'><Icon.Group /></Link>
      <Link to={'/'}><h1>joinMe</h1></Link>
      {
        loggedinUser &&
        <div className="welcome"><p>{`Welcome ${loggedinUser.UserFirstname} (${loggedinUser.UserUsertypeName})`}</p></div>
      }
    </header>
  );
}
