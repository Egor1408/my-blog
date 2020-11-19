import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ModalLink.module.scss';

const ModalLink = ({ linkUrl, value, linkName }) => {
  const g = 1;

  return (
    <div className={classes.linkWrap}>
      <span className={classes.value}>{value}</span>
      <Link className={classes.linkName} to={linkUrl}> {linkName}</Link>
    </div>
  )
}

export default ModalLink;