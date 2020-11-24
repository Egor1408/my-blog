/* eslint-disable arrow-parens */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './RepeatPassInput.module.scss';

const RepeatPassInput = ({ curPass }) => {
  const htmlFor = `repeat-password-${Math.random()}`;
  const { register, errors } = useFormContext();
  return (
    <div className = {classes.inputWrap}>
      <label className={classes.label} htmlFor={htmlFor}>Repeat password</label>
      <input
        className={classes.input}
        type={'password'}
        name={'repeat-password'}
        id={htmlFor}
        placeholder={'Repeat password'}
        ref={register({
          required: true,
          validate: value => value === curPass,
        })}
      />
      {errors['repeat-password']?.type === 'required' && <p className={classes.validError}>Обязательное поле</p>}
      {errors['repeat-password'] && <p className={classes.validError}>Не совпадает с паролем</p>}
    </div>
  );
}

export default RepeatPassInput;