import React from 'react';
import { NavLink } from 'react-router-dom';

const Toolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Plovo
        </NavLink>
        <ul className="navbar-nav d-flex flex-row gap-4 flex-nowrap">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/new-dish">
              New Dish
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/orders">
              Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;
