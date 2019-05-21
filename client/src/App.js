import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import NotFound from './components/NotFound';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
