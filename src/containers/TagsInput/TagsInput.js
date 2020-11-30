/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import nextId from 'react-id-generator';
import Button from '../../components/Button/Button';
import classes from './TagsInput.module.scss';

const TagsInput = ({ placeholder }) => {
  const { register } = useFormContext();
  const initialTags = nextId();
  const [tags, setTags] = useState([initialTags]);

  const addTag = () => {
    setTags([...tags, nextId()]);
  }

  const delTag = (id) => {
    const filteredTags = tags.filter((item) => id !== item);
    setTags(filteredTags);
  }

  const tag = tags.map((item, i) => (
      <li key={item}>
        <input
          id={item}
          className={classes.input}
          type={'text'}
          name={`tagList[${i}]`}
          placeholder={placeholder}
          ref={ register() }
        />
        <Button value='Delete' name='delTag' func={() => delTag(item)}/>
      </li>
  ))
  return (
    <div className = {classes.inputWrap}>
      <h3>Tags</h3>
      <ul>
        {tag}
        <Button value='Add tag' name='addTag' func={addTag}/>
      </ul>

    </div>
  );
}

export default TagsInput;