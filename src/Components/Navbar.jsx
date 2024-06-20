import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Components/themeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={theme}>
      <Link to="/Home" className="nav-link">
        Home
      </Link>
      <Link to="/Contact" className="nav-link">
        Contacto
      </Link>
      <Link to="/Favs" className="nav-link">
        Favoritos
      </Link>
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </nav>
  );
};

export default Navbar;
