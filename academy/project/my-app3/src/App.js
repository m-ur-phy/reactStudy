
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router , 
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import Users from './pages/Users';  //추가
import './App.css';

function App(){
  return(
    <Router>  
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
              <h1>Home page 입니다</h1>
          </Route>
          <Route path="/movies">
              <h1>Movies page 입니다</h1>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;