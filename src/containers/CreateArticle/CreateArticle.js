import React from 'react';
import { Redirect } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { useUser } from '../../Context/UserContext';
import TextInput from '../../components/TextInput/TextInput';
import TextArea from '../../components/TextArea/TextArea';
import TagsInput from '../TagsInput/TagsInput';
import InputSubmit from '../../components/InputSubmit/InputSubmit';
import ApiService from '../../ApiServices/ApiService';
import classes from './CreateArticle.module.scss';

const CreateArticle = (props) => {
  const apiService = new ApiService();
  const { history } = props;
  const methods = useForm();
  const { user } = useUser();

  const onSubmit = (data, e) => {
    const resData = { article: data };
    apiService.createNewArticle(resData, user.token)
    history.push('/')
    e.target.reset();
  };

  if (user) {
    return (
      <FormProvider {...methods}>
        <div className={classes.wrap}>
          <h2>Create new article</h2>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={classes.title}>
              <TextInput name='title' label='Title' placeholder='title' />
            </div>
            <div className={classes.desc}>
              <TextInput name='description' label='Short description' placeholder='title' />
            </div>
            <div className={classes.body}>
              <TextArea name='body' label='Text' placeholder='text' />
            </div>
            <div className={classes.tags}>
              <TagsInput placeholder='tags'/>
            </div>
            <InputSubmit value='Send'/>
          </form>
        </div>
      </FormProvider>
    )
  }
  return (
    <Redirect to='/sign-in'/>
  )
}

export default CreateArticle;