import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Container, DivMiddle, ImageFooter  } from "./styles";
import Logo from "../../../../assets/logo.png";
import Dogs from "../../../../assets/dogs.png";
import { Button, Input } from "../../../../components";

const SignIn = () => {
    const refInputUser = useRef();
    const refInputPassword = useRef();

    return(
            <Container>
                    <img src={Logo} alt="Logo"/>
                    <DivMiddle>
                        <strong>Nova senha</strong>
                        <Input placeholder="Digite sua senha antiga"  />
                        <strong>Repita nova senha</strong>
                        <Input ref={refInputPassword} placeholder="Digite sua nova senha" />
                    </DivMiddle>

                    <Button name="Cadastrar" />
                    <ImageFooter>
                        <img src={Dogs} alt="Logo"/>
                    </ImageFooter>
            </Container>
    )
}

export default SignIn;