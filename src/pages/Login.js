import React, { Component } from 'react';
import fakeAuth from '../helpers/fake-auth'

// import { Container } from './styles';

class Login extends Component {
    onEntrarClick = () => {
        fakeAuth.setAuthenticated(true)
        this.props.history.push("/")
    }
  render() {
    return (
        <div>
        </div>
    )
  }
}

export default Login;