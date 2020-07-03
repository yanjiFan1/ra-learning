import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import E403 from './view/exception/E403';
import E404 from './view/exception/E404';
import E405 from './view/exception/E405';
import E500 from './view/exception/E500';
import Login from './view/login/Login';
import EmptyException from './view/exception/EmptyException'
import App from './App';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" push />} /> 
        <Route path="/admin" component={App} />
        <Route path="/404" name ='404' component={E404} />
        <Route path="/405" name ='405' component={E405} />
        <Route path="/403" name ='403' component={E403} />
        <Route path="/500" name ='500' component={E500} />
        <Route path="/login" name ='login' component={Login} />
        <Route path="/emptyException" name ='emptyException' component={EmptyException} />
        <Route component={E404} />
      </Switch>
    </Router>
  )
}
       