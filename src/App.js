import React, { Component, useContext } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { UserContext } from './components/userContext.js';
import Register_Page from './views/register_Page';
import Login_Page from './views/login_Page';
import Feed_Page from './views/feed_Page';
import Profile_Page from './views/profile_Page';
import {withRouter} from 'react-router-dom';
import SECRET_KEY from './config.js';
let jwt = require('jsonwebtoken');




class App extends Component {

  static contextType = UserContext

  constructor() {
    super();

    this.state = {}
  }


  componentDidMount() {
    console.log('inside componentDidMount');
      // window.addEventListener('beforeunload', () =>{
      // });
      this.isLogged_in();

  }
  // componentWillUpdate() {
  //   console.log('component did update');
  //   this.logged_in();
  // }

  componentDidCatch(error, info) {
    console.log('component did catch');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update'); 
  }

  isLogged_in() {
    console.log('inside logged in');
    //grabs token from local storage
    const token = this.getToken();
    console.log(token);
    //checks if there is a valid token
    const arb = this.isTokenExpired(token);
    console.log('arb: ');
    //if arb is true it means the token is not expired and still valid;
    console.log(arb);
    if (arb) {
      console.log('the token is still valid so profile should stay in local storage');
      this.addToContext();
      // this.addToState();
    } else if (arb == undefined || null) {
      console.log('arb is undefined or null')
      // this.setState({ logged_in: false })
      this.pushToLoginPage();
      return;
    } else {
      console.log('storage is cleared!!');
      this.clearLocalStorage();
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

  pushToLoginPage() {
    this.props.history.push('/login');
  }

  clearLocalStorage() {
    localStorage.clear();
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
  addToContext = (d) => {
    //takes user info from local storage and updates context
    const [user, setUser] = this.context;

    setUser({email: localStorage.getItem('email'), fullname: localStorage.getItem('fullname'), username: localStorage.getItem('username'), url: localStorage.getItem('url') });
  }



  render() {
    console.log('inside app render');
  return (
      <div className="App">
      <Switch>
        <Route exact path={['/', '/register']} render={() => <Register_Page /> }/>
        <Route exact path="/login" render={() => <Login_Page /> }/>
        <Route exact path="/feed" render={() => <Feed_Page />} />
        <Route exact path="/profile" render={() => <Profile_Page/>} />
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
