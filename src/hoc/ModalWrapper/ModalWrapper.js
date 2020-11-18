import React from 'react';
import classes from './ModalWrapper.module.scss';

const ModalWrapper = (props) => {
  const hi = 'hi';
  console.log(props);
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <span>{props.title}</span>
      </div>
      <div className={classes.form}>
        {props.children}
      </div>
    </div>
  )
}

export default ModalWrapper;