import React from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './Checkbox.module.scss';

const Checkbox = ({
  name,
  checkboxState,
  label,
  handleCheckbox,
}) => {
  const htmlFor = `${name}-${Math.random()}`;
  const { register, errors } = useFormContext();

  return (
    <div className={classes['checkbox-wrap']}>
      <input className={classes['check-box']}
        ref={register({ required: true })}
        name='checkbox'
        id={htmlFor}
        type='checkbox'
        checked={checkboxState}
        onChange={() => { handleCheckbox() }}
      />
      <label htmlFor={htmlFor}><span>{label}</span></label>
      {errors.checkbox?.type === 'required' && <p className={classes.validError}>Обязательное поле</p>}
    </div>
  )
}
export default Checkbox;