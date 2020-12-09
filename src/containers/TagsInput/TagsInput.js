/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '../../components/Button/Button';
import classes from './TagsInput.module.scss';

const TagsInput = ({ placeholder, tagList = null }) => {
  const { register } = useFormContext();
  const [tagsId, setTagsId] = useState([0]);
  useEffect(() => {
    if (tagList) {
      const newIdList = tagList.map((item, i) => i);
      setTagsId(newIdList)
    }
  }, [tagList])
  const addTag = () => {
    setTagsId((prev) => {
      const nextId = prev[prev.length - 1] + 1;
      return [...prev, nextId]
    });
  }

  const delTag = (id) => {
    const filteredTags = tagsId.filter((item) => id !== item);
    setTagsId(filteredTags);
  }

  const tag = tagsId.map((id) => {
    const tagValue = tagList ? tagList[id] : null;
    return (
    <li key={id}>
      <input
        id={id}
        className={classes.input}
        type={'text'}
        name={`tagList[${id}]`}
        defaultValue={tagValue}
        placeholder={placeholder}
        ref={ register() }
      />
      <Button value='Delete' name='delTag' func={() => delTag(id)}/>
    </li>
    )
  })

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