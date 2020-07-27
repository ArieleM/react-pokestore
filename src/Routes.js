import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/fire' exact component={Store}/>
        <Route path='/water' exact component={Store}/>
      </Switch>
    </BrowserRouter>
  )
}

