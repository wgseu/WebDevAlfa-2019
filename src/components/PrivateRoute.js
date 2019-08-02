import React, { Component } from 'react';

import { Route, Redirect } from 'react-router-dom'
import fakeAuth from '../helpers/fake-auth';


// import { Container } from './styles';
const PrivateRoute = (props) => {
    const {component: Component, ...others} = props;
    return (
        <Route { ...others }
            render={(routeProps) => {
                return fakeAuth.getAuthenticated()
                ? <Component {...routeProps}/>
                : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: routeProps.location }
                }}
                />
            }}
        />
    )

}
export default PrivateRoute
