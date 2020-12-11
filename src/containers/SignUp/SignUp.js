/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import ModalWrapper from '../../hoc/ModalWrapper/ModalWrapper';
import UsernameInput from '../../components/UsernameInput/UsernameInput';
import EmailInput from '../../components/EmailInput/EmailInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import RepeatPassInput from '../../components/RepeatPassInput/RepeatPassInput';
import Checkbox from '../../components/Checkbox/Checkbox';
import InputSubmit from '../../components/InputSubmit/InputSubmit';
import ModalLink from '../../components/ModalLink/ModalLink';
import ApiService from '../../ApiServices/ApiService';
import { useUser } from '../../Context/UserContext';
import classes from './SignUp.module.scss';

const SignUp = (props) => {
  const apiService = new ApiService();
  const { history } = props;
  const [curPass, setCurPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [userNameErr, setUserNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [checkboxState, useCheckboxState] = useState(false);
  const { updateUser } = useUser();

  const methods = useForm();

  const initSession = (dataUser) => {
    const session = {
      user: dataUser,
    };
    sessionStorage.setItem('session', JSON.stringify(session));
  };

  const onSubmit = (data) => {
    const resData = { user: data };
    setLoading(true);
    apiService.createNewAcc(resData)
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
          updateUser(request.user);
          initSession(request.user);
          history.push('/my-blog/articles/')
        }
      })
      .then(() => {
        setLoading(false);
      })
  }
  const watchPass = (pass) => {
    if (pass.password) {
      setCurPass(pass.password);
    }
  }
  const handleCheckbox = () => {
    useCheckboxState((prev) => !prev);
  }

  const inputHandler = (inputName) => {
    // console.log('!')
  }
  return (
    <FormProvider {...methods}>
      <ModalWrapper title='Create new account'>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {userNameErr && <p className={classes.error}>Этот username уже занят</p>}
          <UsernameInput func = {inputHandler}/>
          {emailErr && <p className={classes.error}>Такой email уже зарегестрирован</p>}
          <EmailInput func = {inputHandler}/>
          <PasswordInput modal={'sign-up'} watchPass={watchPass} func = {inputHandler}/>
          <RepeatPassInput curPass={curPass}/>
          <Checkbox
            handleCheckbox={handleCheckbox}
            checkboxState={checkboxState}

            name='personInfo'
            label='I agree to the processing of my personal
    information'
          />

          <InputSubmit value='Create' loading={loading} loadingValue='Loading...' />
          <ModalLink linkUrl={'/my-blog/sign-in/'} value='Already have an account?' linkName='Sign In' />
        </form>
      </ModalWrapper>
    </FormProvider>
  )
}

export default SignUp;