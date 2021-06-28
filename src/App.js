import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar.component';
import HomePage from './Components/Homepage/Homepage.component';
import NotAvailable from './Components/Not Available/NotAvailable';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/infigon_web' component={HomePage} />
        <Route exact path='/home' component={NotAvailable} />
        <Route exact path='/programs' component={NotAvailable} />
        <Route exact path='/faqs' component={NotAvailable} />
        <Route exact path='/contact' component={NotAvailable} />
      </Switch>
    </div>
  );
}

export default App;
