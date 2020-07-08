import React from "react";

import { Container } from "./styles";

interface IButton {
    name: string;
    onPress?: Function;
}

const Button = (props: IButton) => {
    return(
        <Container>
            <button>
                <h5>
                {props.name ? props.name.toLocaleUpperCase() : 'ALGO'}
                </h5>
                </button>
        </Container>
    )
}

export default Button;