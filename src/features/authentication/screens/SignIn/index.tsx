import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    return(
        <header>
            <p>This is SignIn page</p>
            <Link to="/">
                <p>Aperte aqui</p>
            </Link>
        </header>
    )
}

export default SignIn;