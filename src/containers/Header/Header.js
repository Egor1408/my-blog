import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import classes from './Header.module.scss';
import { useUser } from '../../Context/UserContext';

const Header = (props) => {
  const { history } = props;
  const { user, updateUser } = useUser();
  let avatarURL = 'https://static.productionready.io/images/smiley-cyrus.jpg';
  if (user && user.image) {
    avatarURL = user.image
  }

  const clearUser = () => {
    updateUser(null);
    sessionStorage.clear();
  }

  const loginTrue = <div className={classes.buttons}>
                      <Link to='/my-blog/new-article' className={classes['create-article']}>Create article</Link>
                      <Link to='/my-blog/my-articles/' className={classes['my-articles']}>My articles</Link>
                      <Link to='/my-blog/profile/' className={classes.profile}>
                        <span>{user && user.username}</span>
                        <img className={classes.avatar} src={avatarURL} />

                      </Link>
                      <Button name='loginOut' value='Log Out' func={clearUser}/>
                    </div>

  const loginFalse = <div className={classes.buttons}>
                      <Link to='/my-blog/sign-in/' className={classes['sign-in']}>Sign In</Link>
                      <Link to='/my-blog/sign-up/' className={classes['sign-up']}>Sign Up</Link>
                    </div>

  const buttonsGroup = user ? loginTrue : loginFalse;
  return (
    <div className={classes.header}>
      <Link to='/my-blog/articles/' className={classes.logo}>Realworld Blog</Link>
      {buttonsGroup}
    </div>
  )
}

export default Header;
