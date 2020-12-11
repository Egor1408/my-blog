/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import ModalWrapper from '../../hoc/ModalWrapper/ModalWrapper';
import UsernameInput from '../../components/UsernameInput/UsernameInput';
import EmailInput from '../../components/EmailInput/EmailInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import AvatarInput from '../../components/AvatarInput/AvatarInput';
import InputSubmit from '../../components/InputSubmit/InputSubmit';
import ApiService from '../../ApiServices/ApiService';
import { useUser } from '../../Context/UserContext';
import classes from './Profile.module.scss';

const Profile = () => {
  const apiService = new ApiService();
  const methods = useForm();
  const { user, updateUser } = useUser();
  const [userNameErr, setUserNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [success, setSuccess] = useState(false)

  const filterUserData = (data) => {
    const obj = data.user
    const newObj = { user: {} };
    for (const i in obj) {
      if (obj[i].trim() !== '') {
        newObj.user[i] = obj[i];
      }
    }
    return newObj;
  }
  const updateSession = (dataUser) => {
    const session = {
      user: dataUser,
    };
    sessionStorage.setItem('session', JSON.stringify(session));
  };

  const onSubmit = (data, e) => {
    const resData = { user: data };
    apiService.updateUser(filterUserData(resData), user.token)
      .then((request) => {
        if (request.errors) {
          const typeRequest = Object.keys(request.errors);
          typeRequest.map((err) => {
            if (err === 'email') {
              setEmailErr(true)
            }
            if (err === 'username') {
              setUserNameErr(true)
            }
          })
        } else {
          setSuccess(true)
          updateUser(request.user);
          updateSession(request.user);
        }
      })
    e.target.reset();
  }

  const inputHandler = (inputName) => {
    setSuccess(false);
    if (inputName === 'username') {
      setUserNameErr(false)
    }
    if (inputName === 'email') {
      setEmailErr(false)
    }
  }

  if (user) {
    return (
      <FormProvider {...methods}>
        <ModalWrapper title='Edit Profile'>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {userNameErr && <p className={classes.error}>Этот username уже занят</p>}
            <UsernameInput userName={user.username} func={inputHandler}/>
            {emailErr && <p className={classes.error}>Такой email уже зарегестрирован</p>}
            <EmailInput email={user.email} func={inputHandler}/>
            <PasswordInput modal={'profile'} func={inputHandler}/>
            <AvatarInput url={user.image} func={inputHandler}/>
            <InputSubmit value='Save' loading={success} loadingValue='Профиль успешно изменен'/>
          </form>
        </ModalWrapper>
      </FormProvider>
    )
  }
  return (
    <Redirect to='/my-blog/sign-in'/>
  )
}

export default Profile;