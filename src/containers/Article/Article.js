import React, { useState, useEffect } from 'react';
import ReactMarkDown from 'react-markdown';
import Spinner from '../../components/Spinner/Spinner';
import ArticleItemList from '../ArticleItemList/ArticleItemList';
import ApiService from '../../ApiServices/ApiService';
import classes from './Article.module.scss';

const Article = (props) => {
  const { slug } = props.match.params;
  const apiService = new ApiService();
  const [article, setArticle] = useState({});

  useEffect(() => {
    apiService.getArticle(`articles/${slug}/`)
      .then((data) => setArticle(data.article))
  }, [])
  useEffect(() => {
    console.log(article)
  }, [article])

  if (article && article.author) {
    return (
        <div className={classes.article}>
          <ArticleItemList data = {article} clsForTags={true}/>

          <div className={classes.articleBody}>
            <ReactMarkDown>{article.body}</ReactMarkDown>
          </div>
        </div>
    )
  }
  return (
    <Spinner/>
  )
}

export default Article;