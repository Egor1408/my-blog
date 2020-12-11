import React from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './EmailInput.module.scss';

const EmailInput = ({ email = null, func = null }) => {
  const htmlFor = `email-${Math.random()}`;
  const { register, errors } = useFormContext();

  return (
    <div className = {classes.inputWrap}>
      <label className={classes.label} htmlFor={htmlFor}>Email address</label>
      <input
        className={classes.input}
        type={'text'}
        name='email'
        defaultValue={email}
        id={htmlFor}
        placeholder={'Email address'}
        onChange={() => func('email')}
        ref={register({
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      {errors.email?.type === 'required' && <p className={classes.validError}>Обязательное поле</p>}
      {errors.email?.type === 'pattern' && <p className={classes.validError}>Введите корректный Email</p>}
    </div>
  );
}

export default EmailInput;