import React from "react"

import Card from "../components/card"
import FormGroup from "../components/form-group"

import { withRouter } from 'react-router-dom'

import 'bootswatch/dist/flatly/bootstrap.css'

class CadastroUsuario extends React.Component {
    state = {
        nome: '',
        senha: '',
        senha2: ''
    }

    cadastrar = () => {
        console.log(this.state)
    }

    cancelar = () => {
        this.props.history.push('/login')
    }
    
    render() {
        return (
            <Card title="Cadastro de usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <fieldset>
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="nome"
                                    value={this.state.nome}
                                    onChange={e => this.setState({nome: e.target.value})}
                                    className="form-control"
                                    id="inputNome">
                                </input>
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputPassword">
                                <input type="password"
                                    value={this.state.senha}
                                    onChange={e => this.setState({senha: e.target.value})}
                                    className="form-control"
                                    id="inputPassword">
                                </input>
                            </FormGroup>
                            <FormGroup label="Repita a senha: *" htmlFor="inputPassword2">
                                <input type="password"
                                    value={this.state.senha2}
                                    onChange={e => this.setState({senha2: e.target.value})}
                                    className="form-control"
                                    id="inputPassword2">
                                </input>
                            </FormGroup>
                            <button onClick={this.cadastrar} className="btn btn-success">Cadastrar novo usuário</button>
                            <button onClick={this.cancelar} className="btn btn-danger">Cancelar</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroUsuario)

