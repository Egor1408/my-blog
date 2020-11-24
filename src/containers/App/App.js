import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Profile from '../Profile/Profile';
import ArticlesList from '../ArticlesList/ArticlesList';
import Article from '../Article/Article';
import classes from './App.module.scss';
import { useUser } from '../../Context/UserContext';

const App = () => {
  const { updateUser } = useUser();

  useEffect(() => {
    if (sessionStorage.getItem('session')) {
      const { user } = JSON.parse(sessionStorage.getItem('session'));
      updateUser(user);
    }
  }, []);

  return (
    <Router>
      <div className={classes.wrapper}>
        <Header />
        <Route path='/' exact component={ArticlesList}/>
        <Route path='/articles' exact component={ArticlesList}/>
        <Route path='/my-blog' exact component={ArticlesList}/>
        <Route path='/articles/:slug' component={Article}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/sign-in' component ={SignIn}/>
        <Route path='/profile' component={Profile}/>
      </div>
    </Router>
  )
}
export default App;