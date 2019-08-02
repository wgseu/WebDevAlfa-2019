import React, { Component } from 'react';
import Axios from 'axios'

// import { Container } from './styles';

class Home extends Component {

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            nome: event.target.nome.value, 
            nascimento: event.target.nascimento.value, 
            email: event.target.email.value, 
            senha: event.target.senha.value
        }
        Axios.post('https://trabalho-node.herokuapp.com/usuarios/', user,  {headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
        }})
          .then(res => {
            console.log(res);
            console.log(res.data);
          }).catch(error => {
              console.log(error)
          })
      }

    render() {
        return (
            <div>
                <h2>Cadastro de usúarios</h2>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    Nome: <input type="text" name="nome"></input>
                    <br/>
                    <br/>
                    Nascimento: <input type="text" name="nascimento"></input>
                    <br/>
                    <br/>
                    Email: <input type="text" name="email"></input>
                    <br/>
                    <br/>
                    Senha: <input type="password" name="senha"></input>
                    <br/>
                    <br/>
                    <button type="submit">Cadastrar</button>
                </form>

            </div>   
        )
      }
}

export default Home;