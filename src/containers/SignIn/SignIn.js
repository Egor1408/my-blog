import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import ModalWrapper from '../../hoc/ModalWrapper/ModalWrapper';
import InputSubmit from '../../components/InputSubmit/InputSubmit';
import EmailInput from '../../components/EmailInput/EmailInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import ModalLink from '../../components/ModalLink/ModalLink';
import ApiService from '../../ApiServices/ApiService';
import { useUser } from '../../Context/UserContext';
import classes from './SignIn.module.scss';

const SignIn = () => {
  const apiService = new ApiService();
  const methods = useForm();
  const { user, updateUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const initSession = (dataUser) => {
    const session = {
      user: dataUser,
    };
    sessionStorage.setItem('session', JSON.stringify(session));
  };

  const onSubmit = (data) => {
    setLoading(true);
    const resData = { user: data };
    apiService.loginUser(resData)
      .then((request) => {
        const typeRequest = Object.keys(request);
        if (`${typeRequest}` === 'user') {
          updateUser(request.user);
          initSession(request.user);
        } else {
          setError(true)
        }
      })
      .then(() => {
        setLoading(false);
      });
  }

  const inputHandler = () => {
    setError(false)
  }
  if (user) {
    return (
      <Redirect to='/my-blog/articles/'/>
    )
  }
  return (
    <FormProvider {...methods}>
      <ModalWrapper title='Sign In'>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <EmailInput func = {inputHandler}/>
          <PasswordInput func = {inputHandler}/>
          {error && <p className={classes.error}>Email и пароль не совпадают</p>}
          <InputSubmit value='Login' loading={loading} loadingValue='Loading...'/>
          <ModalLink linkUrl={'/sign-up/'} value='Don`t have an account?' linkName='Sign Up' />
        </form>
      </ModalWrapper>
    </FormProvider>
  )
}

export default SignIn;