import React, { useContext } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/authorizationPages/Login';
import Register from './components/authorizationPages/Register';
import Home from './components/Home';
import ContextGlobal, { globalContext } from './context/ContextGlobal';
import Navbar from './components/authorizationPages/Navbar';
import Dashboard from './components/Dashboard';
import NewPost from './components/forms/NewPost';

function Router() {
    return (
        <div className='AppContainer'>
            <BrowserRouter>
                <ContextGlobal>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/newPost' component={NewPost} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/register' component={Register} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </ContextGlobal>
            </BrowserRouter>
        </div>
    )
}

export default Router
