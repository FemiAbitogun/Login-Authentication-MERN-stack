import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/authorizationPages/Login';
import Register from './components/authorizationPages/Register';
import Home from './components/Home';

import Navbar from './components/authorizationPages/Navbar';
import Dashboard from './components/Dashboard';
import NewPost from './components/forms/NewPost';
import ReportDetails from './components/breakDownReport/ReportDetails';
import DisplayListGlobal from './components/DisplayListGlobal';
import ContextGlobal from './context/ContextGlobal';
import EditBreakDownReport from './components/EditBreakDownReport/EditBreakDownReport';

function Router() {
 
    return (
        <div className='AppContainer'>
            <BrowserRouter>
                <ContextGlobal>
                 <DisplayListGlobal/>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/newPost' component={NewPost} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/register' component={Register} />
                        <Route path='/login' component={Login} />

                        <Route path="/breakDownSolutionByIDAsync/:id">
                            <ReportDetails />
                        </Route>
                        <Route path="/EditBreakDownReportIDAsync/:id">
                            <EditBreakDownReport />
                        </Route>
                    </Switch>




                </ContextGlobal>
            </BrowserRouter>
        </div>
    )
}

export default Router
