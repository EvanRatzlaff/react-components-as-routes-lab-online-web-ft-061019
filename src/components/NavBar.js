import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink to='/' exact>Home</NavLink>
        <NavLink to='/movies' exact>Movies</NavLink>
        <NavLink to='/directors' exact>Directors</NavLink>
        <NavLink to='/actors' exact>Actors</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
