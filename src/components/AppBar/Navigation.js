import React from 'react';
import { NavLink } from 'react-router-dom';

import * as Routes from '../../routes';

import style from './AppBar.module.css';

const Navigation = () => {
  return (
    <nav className={style.NavForm}>
      <NavLink
        exact
        to={Routes.paths.MAIN}
        className={style.NavLink}
        activeClassName={style.NavLink_active}
      >
        Home
      </NavLink>
      <NavLink
        to={Routes.paths.CONTACTS}
        className={style.NavLink}
        activeClassName={style.NavLink_active}
      >
        Phonebook
      </NavLink>
    </nav>
  );
};

export default Navigation;