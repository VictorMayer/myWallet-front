import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/reset.css';

import Home from './components/Home.js';
import Login from './components/Login.js';
import Registration from './components/Registration.js';
import CashFlow from './components/CashFlow';


export default function App() {
    return (
        <>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route path="/sign-up" exact>
                    <Registration/>
                </Route>
                <Route path="/new-cashflow/:type" exact>
                    <CashFlow/>
                </Route>
            </Switch>
        </Router>
        </>
    );
} 

