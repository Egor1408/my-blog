import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Profile from '../Profile/Profile';
import ArticlesList from '../ArticlesList/ArticlesList';
import Article from '../Article/Article';
import classes from './App.module.scss';

const App = () => {
  const [loginUser, setLoginUser] = useState(false);

  const login = () => {
    setLoginUser(true);
  }

  const logOut = () => {
    setLoginUser(false);
  }
  console.log(loginUser);

  return (
    <Router>
      <div className={classes.wrapper}>
        <Header isLogin={loginUser} logOut={logOut}/>
        <Route path='/' exact component={ArticlesList}/>
        <Route path='/articles' exact component={ArticlesList}/>
        <Route path='/my-blog' exact component={ArticlesList}/>
        <Route path='/articles/:slug' component={Article}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/sign-in' render={() => <SignIn login={login}/>}/>
        <Route path='/profile' render={() => <Profile loginUser={loginUser}/>}/>
      </div>
    </Router>
  )
}
export default App;