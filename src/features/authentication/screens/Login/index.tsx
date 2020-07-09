import React from "react";
import {Container, Title } from "./styles";

import { Input, Button } from "../../../../components";
import { ButtonContainer, Background, ContentMiddle, ContainerGlobal, ContainerRight } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/logo.png";
import Dogs from "../../../../assets/dogs.png";

const Login = () => {
    return(
        <ContainerGlobal>
            <Background>
                <Container>
                    <Title>Bem-vindo</Title>
                    <ContentMiddle>
                        <Input placeholder="Usuário" />
                        <Input placeholder="Senha" />
                        <ButtonContainer>                
                            <Link to="/signIn">
                                <Button name="Enviar" />
                            </Link>
                        </ButtonContainer>
                    </ContentMiddle>
                </Container>
            </Background>
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