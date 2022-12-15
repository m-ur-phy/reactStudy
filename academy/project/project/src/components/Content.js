import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from '../config/Page-route.js';

function Content() {
    return (
        <Switch>
              {routes.map((route, index) => (
                  <Route 
                    key={index} 
                    path={route.path} 
                    exact={route.exact} 
                    component={route.component} 
                  />
              ))}
        </Switch>      
    );
  }

  export default Content;