import React from 'react';
import ModalWrapper from '../../hoc/ModalWrapper/ModalWrapper';
import Input from '../../components/Input/Input';

const SignUp = () => {
  const asd = 321;

  return (
    <ModalWrapper title='Create new account'>
      <form>
        <Input label="Username" placeholder="Username"/>
        <Input type="email" label="Email address" placeholder="Email address"/>
        <Input type="password" label="Password" placeholder="Password"/>
        <Input type="password" label="Repeat Password" placeholder="Password"/>
      </form>
    </ModalWrapper>
  )
}

export default SignUp;