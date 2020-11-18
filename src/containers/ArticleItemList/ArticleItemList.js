import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import classes from './ArticleItemList.module.scss';

const ArticleItemList = ({ data, clsForTags }) => {
  const {
    title, favoritesCount, tagList, slug, description, createdAt,
  } = data;
  const { username, image } = data.author;
  const cls = [classes.tags];
  if (clsForTags) {
    cls.push(classes.article);
  }
  const createdDate = format(new Date(createdAt), 'MMMM d, Y')
  const tags = tagList.length ? <div className={cls.join(' ')}><ul>{tagList.map((item, i) => <li key={i}><span>{item}</span></li>)}</ul></div> : null;
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.title}>
            <Link to={`/articles/${slug}`}><h5>{title}</h5></Link>
          </div>
          <div className={classes.favorites}>
            <div className={classes.heart}/>
            <span>{favoritesCount}</span>
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