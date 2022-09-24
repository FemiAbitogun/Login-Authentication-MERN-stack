import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/authorizationPages/Login';
import Register from './components/authorizationPages/Register';
import Home from './components/Home';
import ContextGlobal from './context/ContextGlobal';
import Navbar from './components/authorizationPages/Navbar';

function Router() {
    return (

        <div className='AppContainer'>
            <BrowserRouter>
                <ContextGlobal>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/register' component={Register} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </ContextGlobal>
            </BrowserRouter>
        </div>


    )
}

export default Router
