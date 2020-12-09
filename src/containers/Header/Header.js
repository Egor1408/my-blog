import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import classes from './Header.module.scss';
import { useUser } from '../../Context/UserContext';

const Header = () => {
  const { user, updateUser } = useUser();
  let avatarURL = 'https://static.productionready.io/images/smiley-cyrus.jpg';
  if (user && user.image) {
    avatarURL = user.image
  }

  const clearUser = () => {
    updateUser(null);
    sessionStorage.clear()
  }

  const loginTrue = <div className={classes.buttons}>
                      <Link to='/new-article' className={classes['create-article']}>Create article</Link>
                      <Link to='/profile/' className={classes.profile}>
                        <span>{user && user.username}</span>
                        <img className={classes.avatar} src={avatarURL} />

                      </Link>
                      <Button name='loginOut' value='Log Out' func={clearUser}/>
                    </div>

  const loginFalse = <div className={classes.buttons}>
                      <Link to='/sign-in/' className={classes['sign-in']}>Sign In</Link>
                      <Link to='/sign-up/' className={classes['sign-up']}>Sign Up</Link>
                    </div>

  const buttonsGroup = user ? loginTrue : loginFalse;
  return (
    <div className={classes.header}>
      <Link to='/Articles/' className={classes.logo}>Realworld Blog</Link>
      {buttonsGroup}
    </div>
  )
}

export default Header;
