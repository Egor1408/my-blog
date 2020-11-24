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
  const [error, setError] = useState(false);

  const initSession = (dataUser) => {
    const session = {
      user: dataUser,
    };
    sessionStorage.setItem('session', JSON.stringify(session));
  };

  const onSubmit = (data) => {
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
      });
    // e.target.reset({
    //   errors: true,
    // });
  }

  if (user) {
    return (
      <Redirect to='/Articles'/>
    )
  }
  return (
    <FormProvider {...methods}>
      <ModalWrapper title='Sign In'>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <EmailInput />
          <PasswordInput />
          {error && <p className={classes.error}>Email и пароль не совпадают</p>}
          <InputSubmit value='Login'/>
          <ModalLink linkUrl={'/sign-up/'} value='Don`t have an account?' linkName='Sign Up' />
        </form>
      </ModalWrapper>
    </FormProvider>
  )
}

export default SignIn;