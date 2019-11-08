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
      user: null
    }
    console.log(localStorage);
  }

  componentDidMount() {
    console.log('inside componentDidMount')
    this.logged_in();
  }

  logged_in() {
    console.log('inside logged in');
    //grabs token from local storage
    const token = this.getToken()
    console.log(token);
    //checks if there is a valid token
    const arb = this.isTokenExpired(token);
    console.log('arb: ')
    //if arb is true it means the token is not expired and still valid;
    console.log(arb)
    if (arb) {
      console.log('the token is still valid so profile should stay in local storage');
      this.setState({ logged_in: true});
      this.addToState();
    } else if (arb == undefined) {
      console.log('arb is undefined')
      this.pushToLoginPage();
      return;
    } else {
      console.log('storage is cleared!!');
      this.clearLocalStorage();
      this.setState({ logged_in: false });
      this.pushToLoginPage();
    }

  }

  isTokenExpired(token) {
    console.log('inside is token expired?')
    const exp = this.getExpTime();
    console.log('this is the expired time: ' + exp) ;
    console.log('this is the time now: ' + Date.now() / 1000)
    //add a try accept in here
    if (exp > Date.now() / 1000) {
      console.log('the token exp time is greater than the time now so this means the time has not been reached yet, local storage should stay the same.')
      return true;
    } else {
      if (exp == null) {
        return undefined;
      }
      console.log('the current time has reachedthe exp time, the local storage should be cleared')
      return false;
    }

  }

  getExpTime() {
    return localStorage.getItem('exp');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  pushToFeedPage() {
    //pushes the user to the 'play' page
    this.props.history.push('/feed');
  }

  pushToLoginPage() {
    this.props.history.push('/login');
  }

  clearLocalStorage() {
    localStorage.clear();
  }
  handleLogin = async(e) => {

    console.log('inside handle login');
    e.preventDefault();

    //grab username and password
    let auth_name = e.target.elements.email.value;
    let pass = e.target.elements.pass.value;

    //api URL
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

      //pushes the user to the feed page
      this.pushToFeedPage();

      //set local storage for info about the user
      //consolodate this l8r

      localStorage.setItem('email', data_01.email);
      localStorage.setItem('username', data_01.username);
      localStorage.setItem('fullname', data_01.fullname);
      localStorage.setItem('url', data_01.url);
      localStorage.setItem('exp', data_01.exp);
      console.log(localStorage);
      //set state from local storage
      this.addToState();

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

  handleLogout = async() => {
    console.log('inside handle logout');
  }


  getData = async() => {
    //this grabs data for the profile and sets it into the state if the token is valid
    console.log("inside get data");

    let token_01 = localStorage.getItem('token');

    const URL_02 = 'http://localhost:5000/api/data';

    let response_03 = await fetch(URL_02, {
      headers: {
        'Content-Type': 'application/json',
        'token': token_01,
      }
    });

    let data_03 = await response_03.json();

    console.log(data_03)
  }

  addToState() {
    console.log('inside add to state.')
    //add from local storage to state;
    let fullname = localStorage.getItem('fullname');
    let username = localStorage.getItem('username');
    let email = localStorage.getItem('email');
    let url = localStorage.getItem('url');
    console.log('test2')
    console.log(fullname, username, email, url)
    //add to state:
    this.setState({ user: {'email': email, 'fullname': fullname, 'username': username, 'url': url}});
    console.log('test3')
    console.log(this.state);
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
