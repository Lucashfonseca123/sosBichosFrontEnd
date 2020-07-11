import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../../../components';
import {
  ContentMiddle,
  ContainerGlobal,
  ContainerRight,
  ContainerLeft,
  Title,
  DivTitle,
} from './styles';
import Logo from '../../../../assets/logo.png';
import Dogs from '../../../../assets/dogs.png';
import Paw from '../../../../assets/paw.png';

const Login = () => {
  return (
    <ContainerGlobal>
      <ContainerLeft>
        <Title>Bem-vindo</Title>
        <DivTitle>
          <img src={Paw} alt="Pata" />
        </DivTitle>
        <ContentMiddle>
          <Input placeholder="Usuário" />
          <Input placeholder="Senha" />
          <Link to="/dashboard">
            <Button name="Enviar" />
          </Link>
        </ContentMiddle>
      </ContainerLeft>
      <ContainerRight>
        <img src={Logo} alt="Logo" />
        <strong>
          <i>Felizes são aqueles que não esperam favor</i>
        </strong>
        <strong>
          <i>ao praticarem atos de solidariedade...</i>
        </strong>
        <img src={Dogs} alt="Dogs" />
      </ContainerRight>
    </ContainerGlobal>
  );
};

export default Login;
