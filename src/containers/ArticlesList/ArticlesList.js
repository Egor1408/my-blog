import React, { useState, useEffect } from 'react';
import ArticleItemList from '../ArticleItemList/ArticleItemList';
import Navigation from '../../components/Navigation/Navigation';
import Spinner from '../../components/Spinner/Spinner';
import ApiService from '../../ApiServices/ApiService';
import classes from './ArticlesList.module.scss';

const ArticlesList = () => {
  const apiService = new ApiService();
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const useLoading = (currPage) => {
    setLoading(true);
    const offsetArticles = 20 * (currPage - 1);
    apiService.getArticleList(`articles?offset=${offsetArticles}/`)
      .then((data) => {
        setTotalArticles(data.articlesCount);
        setArticles(data.articles);
      })
      .then(() => {
        setLoading(false);
      })
  }
  useEffect(() => {
    useLoading(currentPage);
  }, [])

  useEffect(() => {
    useLoading(currentPage);
  }, [currentPage])
  const nextPage = (newPage) => {
    setCurrentPage(newPage);
  }
  if (!loading) {
    return (
      <div className={classes.wrapper}>
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
    <Spinner />
  )
}

export default ArticlesList;