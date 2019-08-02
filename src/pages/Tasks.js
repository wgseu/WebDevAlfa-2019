import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import Axios from 'axios'


class Tasks extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        tasks: []
    }
    onDeletar = (id) => {
        let token = this.props.location.state.token
        Axios.delete(`https://trabalho-node.herokuapp.com/tarefas/${id}`, {headers: {
            authorization: token
        }}).then(response => {
            let arr = this.state.tasks
            let index = this.state.tasks.findIndex(task => {
                return id === task.id
            })
            arr.splice(index, 1)
            this.setState({ task: arr })
        }).catch(err => {
            console.log(err)
        })
    }
    onConcluir = (id) => {
        let token = this.props.location.state.token
        console.log(token)
        console.log(id)
        Axios.put(`https://trabalho-node.herokuapp.com/tarefas/${id}/concluido`, null, {headers: {
            authorization: token
        }}).then(response => {
            let arr = this.state.tasks
            let index = this.state.tasks.findIndex(task => {
                return id === task.id
            })
            arr[index].concluido = true
            this.setState({ task: arr })
        }).catch(err => {
            console.log(err)
        })
    }
    componentDidMount() {
        Axios.get('https://trabalho-node.herokuapp.com/tarefas', {headers: {
            authorization: this.props.location.state.token
        }})
            .then(response => {
                const { data } = response
                this.setState({
                    tasks: data
                })
            })
            .catch(err => {
            console.warn(err)
            alert(err.message)
            })
    }
        
    renderTasks = () => {
        const { tasks } = this.state
        console.log(tasks)
        return (
            tasks.map( task => {
                return (
                <tr>
                    <td>{task.id}</td>
                    <td>{task.titulo}</td>
                    <td>{task.descricao}</td>
                    <td>{task.concluido ? 'Sim' : 'Não'}
                        <Button onClick={() => this.onConcluir(task.id)}>Concluir</Button>
                        <Button onClick={() => this.onDeletar(task.id)}>Deletar</Button>
                    </td>
                </tr>
                )
            })
        )   
    }
    renderTasksDescription = (routeProps) => {
        const tasks = this.state
        const taskId = parseInt(routeProps.match.params.taskId);
        const task = tasks.find((task) => {
            return task.id === taskId
        })
        return (
            <p>
                {task.title}
            </p>
        )
    }
    calltasks = () => {
        this.props.history.push({pathname:"/tasksadd", state:{token: this.props.location.state.token }})
    }
    render() {
        return (
            <div>
                <Button onClick={this.calltasks}>Nova tarefa</Button>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Descricão</th>
                            <th>Concluido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTasks()}
                    </tbody>
                </Table>
                <br/>
                <div>
                    <Route path="/tasks/:taskId" render={this.renderTasksDescription}/>
                </div>
            </div>   
        )
      }
}

export default Tasks;