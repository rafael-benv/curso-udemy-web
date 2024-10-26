import React from "react";

import Card from "../components/card";
import FormGroup from "../components/form-group";

import { withRouter } from 'react-router-dom'

import 'bootswatch/dist/flatly/bootstrap.css'

class Login extends React.Component {
  state = {
    nome: '',
    senha: ''
  }

  entrar = () => {
    console.log('Nome: ', this.state.nome)
    console.log('Senha: ', this.state.senha)
  }

  cadastrar = () => {
    this.props.history.push('/cadastro-usuario')
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6" style={ {position: 'relative', left: '300px'} }>
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup label="Nome: *" htmlFor="exampleInputNome">
                        <input type="nome"
                          value={this.state.nome}
                          onChange={e => this.setState({nome: e.target.value})}
                          className="form-control"
                          id="exampleInputNome"
                          aria-describedby="nomeHelp"
                          placeholder="Digite o Nome">
                        </input>
                      </FormGroup>
                      <FormGroup label="Senha: *" htmlFor="exampleInputPassword">
                        <input type="password"
                          value={this.state.senha}
                          onChange={e => this.setState({senha: e.target.value})}
                          className="form-control"
                          id="exampleInputPassword"
                          aria-describedby="passwordHelp"
                          placeholder="Digite a Senha">
                        </input>
                      </FormGroup>
                      <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                      <button onClick={this.cadastrar} className="btn btn-danger">Não tem uma conta?</button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)

