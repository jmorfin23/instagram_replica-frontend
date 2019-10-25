import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Register_Page from './views/register_Page';
import Login_Page from './views/login_Page';

class App extends Component {

  constructor() {
    super();

    this.state = {
      logged_in: false,
    }
  }

  render() {
  return (
      <div className="App">
      <Switch>
        <Route exact path={['/', '/register']} render={() => <Register_Page /> }/>
        <Route exact path="/login" render={() => <Login_Page /> }/>
      </Switch>
      </div>
    );
  }
}

export default App;
