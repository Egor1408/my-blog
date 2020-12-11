import React from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './TextInput.module.scss';

const TextInput = ({
  name, label, placeholder, value,
}) => {
  const htmlFor = `${name}-${Math.random()}`;
  const { register, errors } = useFormContext();
  return (
    <div className = {classes.inputWrap}>
      <label className={classes.label} htmlFor={htmlFor}>{label}</label>
      <input
        className={classes.input}
        type={'text'}
        name={name}
        id={htmlFor}
        defaultValue={value}
        placeholder={placeholder}
        ref={register({
          required: true,
        })}
      />
      {errors[name]?.type === 'required' && <p className={classes.validError}>Обязательное поле</p>}
    </div>
  );
}

export default TextInput;