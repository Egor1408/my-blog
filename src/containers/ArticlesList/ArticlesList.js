import React, { useState, useEffect } from 'react';
import ArticleItemList from '../ArticleItemList/ArticleItemList';
import Header from '../Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Spinner from '../../components/Spinner/Spinner';
import { useUser } from '../../Context/UserContext';
import ApiService from '../../ApiServices/ApiService';
import classes from './ArticlesList.module.scss';

const ArticlesList = (props) => {
  const apiService = new ApiService();
  const { match } = props;
  const { user } = useUser();
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const offsetArticles = 20 * (currentPage - 1);
  const useLoading = (obj = null) => {
    let url = 'articles?';
    if (match.url === '/my-blog/my-articles/') {
      url = `articles?author=${user.username}&`;
    }
    setLoading(true);
    apiService.getArticleList(`${url}offset=${offsetArticles}/`, obj)
      .then((data) => {
        setTotalArticles(data.articlesCount);
        setArticles(data.articles);
      })
      .then(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    const obj = {};
    if (user) {
      obj.headers = {
        'Content-Type': 'application/json',
        Authorization: `Token ${user.token}`,
      }
      useLoading(obj);
    } else {
      useLoading();
    }
  }, [currentPage, user, match])

  const nextPage = (newPage) => {
    setCurrentPage(newPage);
  }
  if (!loading) {
    return (
        <div className={classes.wrap}>
          <ul className={classes.articleList}>
            {articles.map((item, i) => (
              <li key={i}><ArticleItemList data = {item}/></li>
            ))}
          </ul>
          <div className={classes.pagination}>
            <Navigation
              totalArticles={totalArticles}
              currentPage={currentPage}
              nextPage={nextPage}
            />
          </div>
        </div>
    )
  }
  return (
    <div className={classes.spinWrap}>
      <Spinner tip='Loading...'/>
    </div>
  )
}

export default ArticlesList;