import React from 'react';
import { Link } from 'react-router-dom';
import css from './LoggedNav.module.css';

const LoggedNav = () => {
  return (
    <ul className={css.LogUl}>
      <li className={css.Navlink}>
        <Link to="/login" >LogIn</Link>
      </li>
      <li className={css.Navlink}>
        <Link to="/register" >Register</Link>
      </li>
    </ul>
  );
};

export default LoggedNav; 