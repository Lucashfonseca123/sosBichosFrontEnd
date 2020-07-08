import React from 'react';
import { Switch, Route } from "react-router-dom";
import {Login, SignIn} from "../features/authentication/screens";

// import Route from "./Route";

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signIn" component={SignIn} />
        </Switch>
    )
}

export default Routes;