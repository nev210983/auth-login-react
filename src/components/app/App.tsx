import React from 'react';
import '../styles/App.scss';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Header} from '../app/header/Header'
import Registration from '../form/registration/Registration';
import LogIn from '../form/login/LogIn'
import {HomePage} from '../home-page/HomePage'

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/registration" component={()=><Registration/>}/>
        <Route exact path="/login" component={()=><LogIn/>}/>
        <Route component={()=><HomePage/>}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
