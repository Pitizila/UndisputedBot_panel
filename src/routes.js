import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Leftbar from './components/leftbar';
import Dashboard from './components/dashboard';
import Commands from './components/commands';
import Profile from './components/profile';
import Giveaway from './components/giveaway';
import Connection from './components/connection';
import Login from './components/login';



class routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="row">
                        <Route path='/' component={Leftbar} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/commands' component={Commands} />
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/giveaway' component={Giveaway} />
                        <Route exact path='/connections' component={Connection} />
                        <Route exact path='/login' component={Login} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default routes;