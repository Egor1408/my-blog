import React, { useState, useEffect } from 'react';
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
  const { history, match } = props;
  const methods = useForm();
  const [article, setArticle] = useState({});
  const { user } = useUser();

  const submitFunc = (articleData, userToken, articleSlug = null) => {
    if (articleSlug) {
      apiService.updateArticle(articleData, userToken, articleSlug)
    } else {
      apiService.createNewArticle(articleData, userToken)
    }
  }

  useEffect(() => {
    if (match.params.slug) {
      apiService.getArticle(`articles/${match.params.slug}/`)
        .then((data) => {
          setArticle(data.article)
        })
    }
  }, [])
  const onSubmit = (data, e) => {
    const resData = { article: data };
    submitFunc(resData, user.token, article.slug)
    e.target.reset();
    history.push('/')
  };

  if (user) {
    return (
      <FormProvider {...methods}>
        <div className={classes.wrap}>
          <h2>Create new article</h2>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={classes.title}>
              <TextInput name='title' label='Title' placeholder='title' value={article.title} />
            </div>
            <div className={classes.desc}>
              <TextInput name='description' label='Short description' placeholder='title' value={article.description} />
            </div>
            <div className={classes.body}>
              <TextArea name='body' label='Text' placeholder='text' value={article.body} />
            </div>
            <div className={classes.tags}>
              <TagsInput placeholder='tags' tagList={article.tagList}/>
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