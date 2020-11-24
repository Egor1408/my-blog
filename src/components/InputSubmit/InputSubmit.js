import React from 'react';
import classes from './InputSubmit.module.scss';

const InputSubmit = ({
  value,
}) => (
  <div className={classes.buttonWrap}>
    <input type="submit" value={value}/>
  </div>
)

export default InputSubmit;