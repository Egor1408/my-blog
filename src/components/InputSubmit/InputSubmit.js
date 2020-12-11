import React from 'react';
import classes from './InputSubmit.module.scss';

const InputSubmit = ({ value, loading, loadingValue }) => {
  const submit = <input type="submit" value={value}/>
  const loader = <div className={classes.spinWrap}><span>{loadingValue}</span></div>
  return (
    <div className={classes.buttonWrap}>
      {loading ? loader : submit }
    </div>
  )
}

export default InputSubmit;