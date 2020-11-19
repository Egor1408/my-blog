import React from 'react';
import classes from './Checkbox.module.scss';

const Checkbox = ({
  name,
  checked,
  label,
  // checkboxClick,
}) => {
  const htmlFor = `${name}-${Math.random()}`;
  return (
    <div className={classes['checkbox-wrap']}>
      <input className={classes['check-box']}
        id={htmlFor}
        type='checkbox'
        checked={checked}
        onChange={() => {}}
      />
      <label htmlFor={htmlFor}><span>{label}</span></label>
    </div>
  )
}
export default Checkbox;