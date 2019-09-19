/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './App.css';
import '../css/style.css';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import SnipsPage from './SnipsPage';
import ErrorPage from './ErrorPage';
import Account from './Account'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Navbar />
        <br/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/snippets" component={SnipsPage}/>
        <Route path="/account" component={Account}/>
        <Route component={ErrorPage}/>
        </Switch>
        
        </Router>
    );
  }
}

export default App;
