import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import SignUp from '../SignUp/SignUp';
import ArticlesList from '../ArticlesList/ArticlesList';
import Article from '../Article/Article';
import classes from './App.module.scss';

const App = () => (
  <Router>
    <div className={classes.wrapper}>
      <Header />
      <Route path='/articles' exact component={ArticlesList}/>
      <Route path='/' exact component={ArticlesList}/>
      <Route path='/articles/:slug' component={Article}/>
      <Route path='/sign-up/' component={SignUp}/>
    </div>
  </Router>
)

export default App;