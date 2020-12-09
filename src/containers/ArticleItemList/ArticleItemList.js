import React, { useState, useEffect } from 'react';
import cn from 'classnames'
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useUser } from '../../Context/UserContext';
import ApiService from '../../ApiServices/ApiService';
import classes from './ArticleItemList.module.scss';

const ArticleItemList = ({ data, clsForTags }) => {
  const {
    title, favoritesCount, tagList, slug, description, createdAt, favorited,
  } = data;
  const apiService = new ApiService();
  const { user } = useUser();
  const { username, image } = data.author;
  const [like, setLike] = useState({});
  useEffect(() => {
    setLike({
      favorited,
      favoritesCount,
    })
  }, [favorited])

  const favoriteHandler = () => {
    if (like.favorited) {
      apiService.unfavoriteArticle(slug, user.token)
      setLike((prev) => ({
        favorited: !prev.favorited,
        favoritesCount: prev.favoritesCount - 1,
      }))
    } else {
      apiService.favoriteArticle(slug, user.token)
      setLike((prev) => ({
        favorited: !prev.favorited,
        favoritesCount: prev.favoritesCount + 1,
      }))
    }
  }

  const createdDate = format(new Date(createdAt), 'MMMM d, Y');

  const tags = tagList.length && <div className={cn(classes.tags, { [classes.article]: clsForTags })}>
                                  <ul>{tagList.map((item, i) => (
                                    <li key={i}>
                                      <span>{item}</span>
                                    </li>))}
                                  </ul>
                                </div>;

  return (
    <div className={cn(classes.wrap)}>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.title}>
            <Link to={`/articles/${slug}`}><h5>{title}</h5></Link>
          </div>
          <div className={classes.favorites}>
            <button className={cn(classes.heart, { [classes.active]: like.favorited }, { [classes.disabled]: !user })}
              disabled={!user}
              onClick={() => { favoriteHandler() }}
            />
            <span>{like.favoritesCount}</span>
          </div>
        </div>
        {tags}
        <div className={classes.description}>{description}</div>
      </div>
      <div className={classes.author}>
        <div className={classes['author-info']}>
          <div className={classes['author-name']}>{username}</div>
          <div className={classes['created-date']}>{createdDate}</div>
        </div>
        <div className={classes['author-avatar']}><img src={`${image}`} alt={username}/></div>
      </div>
    </div>
  )
}

export default ArticleItemList;