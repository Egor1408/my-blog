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
  const [loading, setLoading] = useState(false);
  const [tagList, setTagList] = useState([]);
  const [title, setTitle] = useState('Create new article');
  const [submitButtonTitle, setSubmitButtonTitle] = useState('Send')
  const { user } = useUser();

  const submitFunc = (articleData, userToken, articleSlug = null) => {
    if (articleSlug) {
      apiService.updateArticle(articleData, userToken, articleSlug)
        .then(() => {
          history.push('/my-blog/articles/')
        })
    } else {
      apiService.createNewArticle(articleData, userToken)
        .then(() => {
          history.push('/my-blog/articles/')
        })
    }
  }

  useEffect(() => {
    if (match.params.slug) {
      setTitle('Edit article')
      setSubmitButtonTitle('Edit')
      apiService.getArticle(`articles/${match.params.slug}/`)
        .then((data) => {
          setArticle(data.article)
          setTagList(data.article.tagList)
        })
    }
  }, [])
  const onSubmit = (data) => {
    data.tagList = tagList;
    const resData = { article: data };
    setLoading(true);
    submitFunc(resData, user.token, article.slug);
  };
  const handleTagList = (newTagList) => {
    setTagList(newTagList)
  }
  if (user) {
    return (
      <FormProvider {...methods}>
        <div className={classes.wrap}>
          <h2>{title}</h2>
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
              <TagsInput articleTagsList={article.tagList} handleTagList={handleTagList}/>
            </div>
            <InputSubmit value={submitButtonTitle} loading={loading} loadingValue='Loading...'/>
          </form>
        </div>
      </FormProvider>
    )
  }
  return (
    <Redirect to='/my-blog/sign-in'/>
  )
}

export default CreateArticle;