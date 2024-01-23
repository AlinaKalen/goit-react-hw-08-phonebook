import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import css from './LoggedNav.module.css';

const LoggedNav = () => {
  return (
    <ul className={css.LogUl}>
      <li>
        <Link className={css.Navlink} to="/login">LogIn</Link>
      </li>
      <li>
        <Link className={css.Navlink} to="/register">Register</Link>
      </li>
    </ul>
  );
};

export default LoggedNav;
