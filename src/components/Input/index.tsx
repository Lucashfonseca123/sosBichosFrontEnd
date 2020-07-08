import React, { InputHTMLAttributes, useState, useCallback} from "react";

import { Container } from "./styles";

interface IInput  extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = ({...rest}: IInput) => {
    const [inputFocus, setInputFocus] = useState<boolean>();
    const [inputBlur, setInputBlur] = useState<boolean>();

    const handleInputFocus = useCallback(() => {
        setInputFocus(true);
        setInputBlur(false);
    }, []);

    const handleInputBlur = useCallback(() => {
        setInputBlur(true);
        setInputFocus(false);
    }, [])

    return(
        <Container focus={inputFocus} blur={inputBlur} >
            <input {...rest} onFocus={handleInputFocus} onBlur={handleInputBlur} />
        </Container>
    )
}

export default Input;