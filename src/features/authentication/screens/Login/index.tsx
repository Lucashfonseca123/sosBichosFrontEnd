import React from "react";
import { Input, Button } from "../../../../components";
import {  ContentMiddle,
          ContainerGlobal,
          ContainerRight,
          ContainerLeft,
          Title } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/logo.png";
import Dogs from "../../../../assets/dogs.png";

const Login = () => {
    return(
        <ContainerGlobal>
            <ContainerLeft>
              <Title>Bem-vindo</Title>
              <ContentMiddle>
                  <Input placeholder="Usuário" />
                  <Input placeholder="Senha" />
                    <Link to="/signIn">
                      <Button name="Enviar" />
                    </Link>
                </ContentMiddle>
            </ContainerLeft>
            <ContainerRight>
                <img src={Logo} alt="Logo"/>
                <strong><i>Felizes são aqueles que não esperam favor</i></strong>
                <strong><i>ao praticarem atos de solidariedade...</i></strong>
                <img src={Dogs} />
            </ContainerRight>
        </ContainerGlobal>
    )
}

export default Login;
