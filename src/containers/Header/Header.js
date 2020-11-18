import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

const Header = () => (
    <div className={classes.header}>
      <Link to='/Articles/' className={classes.logo}>Realworld Blog</Link>
      <div className={classes.buttons}>
        <Link to='/sign-in/' className={classes['sign-in']}>Sign In</Link>
        <Link to='/sign-up/' className={classes['sign-up']}>Sign Up</Link>
      </div>
    </div>
)

export default Header;