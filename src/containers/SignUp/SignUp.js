import React from 'react';
import ModalWrapper from '../../hoc/ModalWrapper/ModalWrapper';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/Button/Button';
import ModalLink from '../../components/ModalLink/ModalLink';

const SignUp = () => {
  const asd = 321;

  return (
    <ModalWrapper title='Create new account'>
      <form>
        <Input label="Username" placeholder="Username"/>
        <Input type="email" label="Email address" placeholder="Email address"/>
        <Input type="password" label="Password" placeholder="Password"/>
        <Input type="password" label="Repeat Password" placeholder="Password"/>
        <Checkbox
          name='personInfo'
          checked={false}
          label='I agree to the processing of my personal
  information'
        />
        <Button name='createAcc' value='Create' />
        <ModalLink linkUrl={'/sign-in/'} value='Already have an account?' linkName='Sign In' />
      </form>
    </ModalWrapper>
  )
}

export default SignUp;