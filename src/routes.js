import './assets/stylesheets/base.scss';
import { Router, Route, browserHistory} from 'react-router'
import React, {Component}               from 'react';
import Home                             from './components/Home/Home';
import Auth                             from './components/Auth/Auth';
import Users                            from './components/Auth/Users';
import Create                           from './components/Auth/Create';
import NotFound                         from './components/Auth/NotFound';
import AuthConfirmation                 from './components/User/AuthConfirmation';

const routes = (
          <Router history={browserHistory}>
              <Route path='/' component={Home} />
              <Route path='/auth' component={Auth} />
              <Route path='/create' component={Create} />
              <Route path='/users' component={Users} />
              <Route path='/home' component={AuthConfirmation} />
              <Route path='*' component={NotFound} />
          </Router>
        )
export default routes;