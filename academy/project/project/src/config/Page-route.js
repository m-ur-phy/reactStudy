import React from 'react';
import {Redirect} from 'react-router';

import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Contact from '../pages/Contact.js';

const routes = [
    {
        path: '/react/' ,
        exact:true,
        component: () => <Redirect to="/react/home" />
    }, 
   {
       path: '/react/home' ,
       component: () => <Home />
   },
   {
    path: '/react/about' ,
    component: () => <About />
    },
    {
        path: '/react/contact' ,
        component: () => <Contact />
    }
];

export default routes;