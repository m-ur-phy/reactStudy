import React, { useState } from 'react';
import {BrowserRouter , Route, Switch, Link, NavLink, useParams} from 'react-router-dom';
import Home from './components/Home';    //추가
import Topics from './components/Topics';   //추가
import Contact from './components/Contact';   //추가
import './App.css';


function App(){
  return(
      <div>
        <h1>Hello React Router DOM</h1>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/Topics">Topics</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/Topics"><Topics></Topics></Route>
          <Route path="/Contact"><Contact></Contact></Route>
          <Route path="/">Not found</Route>
        </Switch>
      </div>
  )
};

export default App;