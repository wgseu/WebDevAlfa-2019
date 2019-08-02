import React, { Component } from 'react';
import { Nav,Navbar, NavbarBrand, NavItem, NavLink, Container } from 'reactstrap';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Tasks from '../pages/Tasks';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound'
import PrivateRoute from '../components/PrivateRoute'
import Login from '../pages/Login';
import Tasksadd from '../pages/Tasksadd';
    



class MainLayout extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Navbar color="light" expand='xs'>
                    <NavbarBrand>
                        <Link to='/'>webdev</Link>
                    </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink><Link to='/tasks'>tasks</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to='/about'>login</Link></NavLink>
                            </NavItem>
                        </Nav>
                </Navbar>
                <Container>
                    <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/tasks' component={Tasks}/>
                    <Route path='/about' component={About}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/tasksadd' component={Tasksadd}/>
                    <Route component={NotFound}/>
                    </Switch>
                </Container>
                </BrowserRouter>
            </div>
        )
    }

}

export default MainLayout