import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" exact>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
