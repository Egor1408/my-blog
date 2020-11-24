import React from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './UsernameInput.module.scss';

const UsernameInput = () => {
  const htmlFor = `username-${Math.random()}`;
  const { register, errors } = useFormContext();
  return (
    <div className = {classes.inputWrap}>
      <label className={classes.label} htmlFor={htmlFor}>Username</label>
      <input
        className={classes.input}
        type={'text'}
        name='username'
        id={htmlFor}
        placeholder={'Username'}
        ref={register({
          required: true,
          minLength: 3,
          maxLength: 20,
        })}
      />
      {errors.username?.type === 'required' && <p className={classes.validError}>Обязательное поле</p>}
      {(errors.username?.type === 'minLength' && 'maxLength') && <p className={classes.validError}>от 3 до 20 символов</p>}

    </div>
  );
}

export default UsernameInput;