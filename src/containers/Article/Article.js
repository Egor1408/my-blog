/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import ReactMarkDown from 'react-markdown';
import { useUser } from '../../Context/UserContext';
import Spinner from '../../components/Spinner/Spinner';
import ArticleItemList from '../ArticleItemList/ArticleItemList';
import PopUp from '../../components/PopUp/PopUp';
import ApiService from '../../ApiServices/ApiService';
import classes from './Article.module.scss';

const Article = (props) => {
  const { slug } = props.match.params;
  const { history } = props;
  const { user } = useUser();
  const apiService = new ApiService();
  const [article, setArticle] = useState({});
  const [isMyArticle, setIsMyArticle] = useState(false);

  useEffect(() => {
    const obj = {};
    if (user) {
      obj.headers = {
        'Content-Type': 'application/json',
        Authorization: `Token ${user.token}`,
      }
      apiService.getArticle(`articles/${slug}/`, obj)
        .then((data) => setArticle(data.article))
    }
  }, [user])
  useEffect(() => {
    if (user && article.author) {
      setIsMyArticle(user.username === article.author.username)
    }
  }, [user, article.author])

  const delArticle = (articleSlug, userToken) => {
    apiService.deleteArticle(articleSlug, userToken)
    history.push('/')
  }

  if (article && article.author) {
    return (
        <div className={classes.article}>
          <ArticleItemList data = {article} clsForTags={true} />
          {isMyArticle && <div className={classes.buttons}>
            <PopUp func = {() => { delArticle(slug, user.token) }}/>
            <Link to={`/articles/${slug}/edit`} className={classes['edit-article']}>Edit</Link>
          </div>}
          <div className={classes.articleBody}>
            <ReactMarkDown>{article.body}</ReactMarkDown>
          </div>
        </div>
    )
  }

  return <Spinner/>
}

export default Article;