import { useContext } from 'react';
import {Link} from 'react-router-dom';
import Context from '../context/Context';

// import icons
import {FiSun, FiMoon} from 'react-icons/fi';

const Navbar = () => {
  const {setDark, dark, setToken} = useContext(Context);

  const logOut = () => {
    setToken("");
    localStorage.setItem('token', '');
  }
  
  return (
    <header>
      <nav className="container">
        <Link to="/" className="main-link">
          Dashboard
        </Link>
        <div className="nav-right-box">
          <div className="nav-dark-btn" onClick={()=>setDark(!dark)}>
                {
                    dark ? 
                    <FiSun/>:
                    <FiMoon/>
                }
          </div>
          <Link to='/' className="nav-log-out" onClick={logOut}>
            Log Out
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar