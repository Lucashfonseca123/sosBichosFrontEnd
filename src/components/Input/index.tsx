import React, { InputHTMLAttributes, useState, useCallback, useRef, useEffect} from "react";

import { Container } from "./styles";

interface IInput  extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = ({...rest}: IInput) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputFocus, setInputFocus] = useState<boolean>();
    const [inputBlur, setInputBlur] = useState<boolean>();

    const handleInputFocus = useCallback(() => {
        setInputFocus(true);
        setInputBlur(false);
    }, []);

    const handleInputBlur = useCallback(() => {
        setInputBlur(!inputRef.current?.value);
        setInputFocus(!!inputRef.current?.value);
    }, [])

    return(
        <Container focus={inputFocus} blur={inputBlur} >
            <input ref={inputRef} {...rest} onFocus={handleInputFocus} onBlur={handleInputBlur} />
        </Container>
    )
}

export default React.forwardRef(Input);