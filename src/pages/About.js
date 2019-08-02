import React, { Component } from 'react';
import Axios from 'axios'

class About extends Component {
  onLogin = event => {
    event.preventDefault();

    const user = {
        email: event.target.email.value, 
        senha: event.target.senha.value
    }
    Axios.post('https://trabalho-node.herokuapp.com/usuarios/login', user,  {headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
    }})
      .then(res => {
        this.props.history.push({pathname:"/tasks", state:{token: res.data.token }})
        console.log(res);
        console.log(res.data);
      }).catch(error => {
          console.log(error)
      })
  }
  render() {
    return (
        <div>
          <h2>
            login
          </h2>
          <form onSubmit={this.onLogin}>
              email: <input type="text" name="email"></input>
              <br/>
              <br/>
              Senha: <input type="password" name="senha"></input>
              <br/>
              <br/>
              <button type="submit">logar</button>
          </form>
        </div>   
    )
  }
}

export default About;