import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import ContainerRegister from 'components/ContainerRegister/ContainerRegister';
import { BgRegister } from './RegisterPage.styled';

export default function RegisterPage() {
  return (
    <ContainerRegister>
      <section>
        <BgRegister></BgRegister>
      </section>
      <section>
        <RegisterForm />
      </section>
    </ContainerRegister>
  );
}
