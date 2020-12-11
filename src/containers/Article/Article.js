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
  const [del, setDel] = useState(true);
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
    } else {
      apiService.getArticle(`articles/${slug}/`)
        .then((data) => setArticle(data.article))
    }
  }, [user])
  useEffect(() => {
    if (user && article.author) {
      setIsMyArticle(user.username === article.author.username)
    } else {
      setIsMyArticle(false)
    }
  }, [user, article.author])

  const delArticle = (articleSlug, userToken) => {
    setDel(false)
    apiService.deleteArticle(articleSlug, userToken)
      .then(() => {
        history.push('/my-blog/articles/')
      })
  }

  if (article && article.author && del) {
    return (
        <div className={classes.article}>
          <ArticleItemList data = {article} clsForTags={true} />
          {isMyArticle && <div className={classes.buttons}>
                            <PopUp func = {() => { delArticle(slug, user.token) }}/>
                            <Link to={`/my-blog/articles/${slug}/edit`} className={classes['edit-article']}>Edit</Link>
                          </div>}
          <div className={classes.articleBody}>
            <ReactMarkDown>{article.body}</ReactMarkDown>
          </div>
        </div>
    )
  }

  return <div className={classes.spinWrap}>
          <Spinner tip='Loading...'/>
        </div>
}

export default Article;