import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login.js';
import Register from './components/register/register.js';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'> <Homepage /></Route>
          <Route path='/login'> <Login /></Route>
          <Route path='/register'> <Register /></Route>
        </Switch>
      </Router>
      {/* <Homepage />
      <Login />
      <Register /> */}
    </div>
  );
}

export default App;
