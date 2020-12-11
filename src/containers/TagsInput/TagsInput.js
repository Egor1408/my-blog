/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import cn from 'classnames'
import { useFormContext } from 'react-hook-form';
import Button from '../../components/Button/Button';
import classes from './TagsInput.module.scss';

const TagsInput = ({ handleTagList, tagList = null }) => {
  const { register } = useFormContext();
  const [tagsList, setTagsList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [tagError, setTagError] = useState(false);
  const [checkTag, setCheckTag] = useState(null);
  const [placeholder, setPlaceholder] = useState('add tag')
  useEffect(() => {
    if (tagList) {
      setTagsList(tagList)
    }
  }, [tagList])
  const inputHandler = (e) => {
    setInputValue(e.target.value);
    setPlaceholder('add tag')
    setTagError(false)
  }
  const addTagHandler = () => {
    if (!inputValue.trim()) {
      setTagError(true)
      setInputValue('')
      setPlaceholder('тег не может быть пустой строкой')
    } else if (checkTagList(inputValue)) {
      setCheckTag(inputValue);
      setInputValue('')
      const timeout = window.setTimeout(() => {
        setCheckTag(null);
        window.clearTimeout(timeout);
      }, 2000);
    } else {
      addTag();
    }
  }
  const checkTagList = (tag) => tagsList.some((item) => item === tag);

  const addTag = () => {
    handleTagList(inputValue)
    setTagsList((prev) => (
      [...prev, inputValue]
    ))
    setInputValue('')
  }
  const delTag = (id) => {
    setTagsList((prev) => (prev.filter((tag) => tag !== id)))
  }

  const tag = tagsList.map((item) => (
    <li key={item}
      className={cn(classes.tagItem, { [classes.checkTag]: item === checkTag })}
      onClick={() => delTag(item)}
    >
      <span>{item}</span>
    </li>

  ))

  return (
    <div className = {classes.inputWrap}>
      <h3>Tags</h3>
      <ul className={classes.tagsList}>
        {tag}
      </ul>
      <input
        className={cn(classes.input, { [classes.tagError]: tagError })}
        type={'text'}
        name={'tagList'}
        value={inputValue}
        placeholder={placeholder}
        ref={ register() }
        onChange={(e) => inputHandler(e)}
      />
      <Button value='Add tag' name='addTag' func={addTagHandler}/>
    </div>
  );
}

export default TagsInput;