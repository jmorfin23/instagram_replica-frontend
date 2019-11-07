import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Register_Page from './views/register_Page';
import Login_Page from './views/login_Page';
import Feed_Page from './views/feed_Page';
import {withRouter} from 'react-router-dom';
import SECRET_KEY from './config.js';
let jwt = require('jsonwebtoken');



class App extends Component {

  constructor() {
    super();

    this.state = {
      logged_in: false,
    }
  }


  handleLogin = async(e) => {

    console.log('inside handle login');
    e.preventDefault();

    //grab username and password
    let auth_name = e.target.elements.email.value;
    let pass = e.target.elements.pass.value;
    console.log(auth_name);
    console.log(pass);
    const URL = 'http://localhost:5000/api/login';

    //create a token to send to backend api;
    let token = jwt.sign(
      { 'email': auth_name, 'password': pass },
      SECRET_KEY,
      { expiresIn: '1h' } // expires in 1 hour
    );
    //send to backend
    let response_01 = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    });
    let data_01 = await response_01.json();
    console.log(data_01);

    //if we get back a successful user alert with login;
    if (data_01.message === 'success') {
      this.setState({ logged_in: true });

      // set the token we receive into local storage
      localStorage.setItem('token', data_01.token);

      alert('User logged in');

      //pushes the user to the 'play' page
      this.props.history.push('/feed');

    } else {
      alert(data_01.message)
    }
  }

  handleRegister = async(e) => {
    console.log('inside handle register');

    e.preventDefault();

    //grab info
    let email = e.target.elements.email.value;
    let name = e.target.elements.name.value;
    let username = e.target.elements.username.value;
    let password = e.target.elements.pass.value;
    console.log(email, name, username, password);

    //URL for API call;
    const URL_1 = 'http://localhost:5000/api/register';

    //define tokens
    let token = jwt.sign(
      { 'email': email, 'name': name, 'username': username, 'password': password },
      SECRET_KEY,
      { expiresIn: '1h' } // expires in 1 hour
    );

    //send token to register the user;
    let response = await fetch(URL_1, {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    });

    //data is what is received back from backend;
    let data = await response.json();

    if (data.message == 'success') {
      alert(data.User)
    } else {
      alert(data.message)
    }
  }

  render() {
  return (
      <div className="App">
      <Switch>
        <Route exact path={['/', '/register']} render={() => <Register_Page handleRegister={this.handleRegister}/> }/>
        <Route exact path="/login" render={() => <Login_Page handleLogin={this.handleLogin}/> }/>
        <Route exact path="/feed" render={() => <Feed_Page />} />
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
