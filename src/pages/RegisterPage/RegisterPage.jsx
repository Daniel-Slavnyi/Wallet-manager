import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import ContainerRegister from 'components/ContainerRegister/ContainerRegister';
import {
  BgRegister,
  WrapRegister,
  WrapRegisterForm,
} from './RegisterPage.styled';

export default function RegisterPage() {
  return (
    <>
      <section>
        <ContainerRegister>
          <WrapRegister>
            <div>
              <BgRegister></BgRegister>
            </div>
            <WrapRegisterForm>
              <RegisterForm />
            </WrapRegisterForm>
          </WrapRegister>
        </ContainerRegister>
      </section>
    </>
  );
}
