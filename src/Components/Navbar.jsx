import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme, useToggleTheme } from '../Components/utils/FeaturedContext'; 

const Navbar = () => {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

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
       <button onClick={handleToggleTheme}>Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}</button>
    </nav>
  );
};

export default Navbar;
