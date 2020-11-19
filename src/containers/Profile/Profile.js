import React from 'react';
import { Redirect } from 'react-router-dom';
import ModalWrapper from '../../hoc/ModalWrapper/ModalWrapper';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ModalLink from '../../components/ModalLink/ModalLink';

const Profile = ({ loginUser }) => {
  const asd = 321;

  if (loginUser) {
    return (
      <ModalWrapper title='Edit Profile'>
        <form>
          <Input label="Username" placeholder="Eguar42"/>
          <Input type="email" label="Email address" placeholder="egor1111@mail.ru"/>
          <Input type='password' label='New password' placeholder='New password'/>
          <Input label='Avatar image (url)' placeholder='Avatar' />
          <Button name='editProfile' value='Save'/>
          <ModalLink linkUrl={'/sign-up/'} value='Don`t have an account?' linkName='Sign Up' />
        </form>
      </ModalWrapper>
    )
  }
  return (
    <Redirect to='/articles'/>
  )
}

export default Profile;