import React, { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import classes from './PasswordInput.module.scss';

const PasswordInput = ({ modal, watchPass }) => {
  const htmlFor = `password-${Math.random()}`;
  const { register, errors } = useFormContext();

  const validRules = { required: true };
  if (modal === 'sign-up') {
    validRules.minLength = 8;
    validRules.manLength = 40;

    const curPass = useWatch('password');
    useEffect(() => {
      watchPass(curPass);
    }, [curPass])
  }
  if (modal === 'profile') {
    validRules.required = false
  }

  return (
    <div className = {classes.inputWrap}>
      <label className={classes.label} htmlFor={htmlFor}>Password</label>
      <input
        className={classes.input}
        type={'password'}
        name='password'
        id={htmlFor}
        placeholder={'Password'}
        ref={register(validRules)}
      />
      {errors.password?.type === 'required' && <p className={classes.validError}>Обязательное поле</p>}
      {(errors.password?.type === 'minLength' && 'maxLength') && <p className={classes.validError}>от 8 до 40 символов</p>}

    </div>
  );
}

export default PasswordInput;