import React from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './AvatarInput.module.scss';

const AvatarInput = () => {
  const htmlFor = `username-${Math.random()}`;
  const { register } = useFormContext();

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
    </div>
  );
}

export default AvatarInput;