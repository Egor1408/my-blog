import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import classes from './Header.module.scss';

const Header = ({ isLogin, logOut }) => {
  console.log(`login ${isLogin}`);
  const loginTrue = <div className={classes.buttons}>
                      <Link to='/create-article/' className={classes['create-article']}>Create article</Link>
                      <Link to='/profile/' className={classes.profile}>
                        Profile
                      </Link>
                      <Button name='loginOut' value='Log Out' func={logOut} />
                    </div>

  const loginFalse = <div className={classes.buttons}>
                      <Link to='/sign-in/' className={classes['sign-in']}>Sign In</Link>
                      <Link to='/sign-up/' className={classes['sign-up']}>Sign Up</Link>
                    </div>
  const buttons = isLogin ? loginTrue : loginFalse;
  return (
    <div className={classes.header}>
      <Link to='/Articles/' className={classes.logo}>Realworld Blog</Link>
      {buttons}
    </div>
  )
}

export default Header;