import React from "react";

import Login from '../views/login'
import CadastroUsuario from '../views/cadastro-usuario'

import { HashRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}>
                </Route>
                <Route path="/cadastro-usuario" component={CadastroUsuario}>
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas