import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Edit from './components/Edit/Edit.jsx';

const App = () => (
    <div>
        <Router>
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/edit/:uid' component={Edit} />
            </div>
        </Router>
    </div>
);

export default App;


