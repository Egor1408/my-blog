import React from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './AvatarInput.module.scss';

const AvatarInput = () => {
  const htmlFor = `username-${Math.random()}`;
  const { register, errors } = useFormContext();

  return (
    <div className = {classes.inputWrap}>
      <label className={classes.label} htmlFor={htmlFor}>Avatar image (url)</label>
      <input
        className={classes.input}
        type={'text'}
        name='image'
        id={htmlFor}
        placeholder={'Avatar image'}
        ref={register()}
      />
      {/* {errors.username?.type === 'required' && <p className={classes.validError}>Обязательное поле</p>} */}
    </div>
  );
}

export default AvatarInput;