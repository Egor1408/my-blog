import React from 'react';
import classes from './Button.module.scss';

const Button = ({
  value, name, func,
}) => (
  <div className={classes.buttonWrap}>
    <button name={name}
      className={classes[name]}
      onClick={(e) => {
        e.preventDefault();
        func()
      }}
    >{value}</button>
  </div>
)

export default Button;