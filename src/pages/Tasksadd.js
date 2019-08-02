import React, { Component } from 'react';
import Axios from 'axios'


class Tasksadd extends Component {
  constructor(props) {
      super(props)
  }

  onAdd = (event) => {
    event.preventDefault();

    const tarefa = {
      titulo: event.target.titulo.value, 
      descricao: event.target.descricao.value
    }
    Axios.post('https://trabalho-node.herokuapp.com/tarefas/', tarefa,  {headers: {
      authorization: this.props.location.state.token
    }})
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.history.push({pathname:"/tasks", state:{token: this.props.location.state.token }})
      }).catch(error => {
          console.log(error)
      })
  }
  
  render() {
    return (
        <div>
        <form onSubmit={this.onAdd}>
            Titulo: <input type="text" name="titulo"></input>
            <br/>
            <br/>
            Descrição: <input type="text" name="descricao"></input>
            <br/>
            <br/>
            <button type="submit">Cadastrar</button>
        </form>

        </div>
    )
  }
}

export default Tasksadd;