import React from 'react';
import ModalWrapper from '../../hoc/ModalWrapper/ModalWrapper';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/Button/Button';
import ModalLink from '../../components/ModalLink/ModalLink';

const SignIn = ({ login }) => {
  const asd = 321;

  return (
    <ModalWrapper title='Sign In'>
      <form>
        <Input type="email" label="Email address" placeholder="Email address"/>
        <Input type="password" label="Password" placeholder="Password"/>
        <Button name='loginAcc' value='Login' func={login}/>
        <ModalLink linkUrl={'/sign-up/'} value='Don`t have an account?' linkName='Sign Up' />
      </form>
    </ModalWrapper>
  )
}

export default SignIn;