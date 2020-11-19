import React from 'react';
import classes from './Input.module.scss';

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = ({
  type, label, placeholder, value, onChange,
}) => {
  const inputType = type || 'text';
  const htmlFor = `${inputType}-${Math.random()}`;
  const cls = [classes.inputWrap];

  // if (isInvalid(props)) {
  //   cls.push('invalid');
  // }

  return (
    <div className = {cls.join(' ')}>
      <label className={classes.label} htmlFor={htmlFor}>{label}</label>
      <input
        className={classes.input}
        type={inputType}
        id={htmlFor}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* {
        isInvalid(props) ? <span>{props.errorMessage || 'введите верное значение'}</span> : null
      } */}

    </div>
  );
}

export default Input;