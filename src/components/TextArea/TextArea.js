import React from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './TextArea.module.scss';

const TextInput = ({
  name, label, placeholder, value,
}) => {
  const htmlFor = `${name}-${Math.random()}`;
  const { register, errors } = useFormContext();

  return (
    <div className = {classes.inputWrap}>
      <label className={classes.label} htmlFor={htmlFor}>{label}</label>
      <textarea
        className={classes.input}
        type={'text'}
        name={name}
        id={htmlFor}
        placeholder={placeholder}
        defaultValue={value}
        ref={register({
          required: true,
        })}
      ></textarea>
      {errors.username?.type === 'required' && <p className={classes.validError}>Обязательное поле</p>}
    </div>
  );
}

export default TextInput;