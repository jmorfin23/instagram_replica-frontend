import React, {Component, useContext} from 'react';
import './index.css';
import Instagram_logo from '../../images/instagram_logo.png';
import { UserProvider, UserContext } from '../userContext.js';
import { LoginContext } from '../loginContext';
import {withRouter} from 'react-router-dom';
import SECRET_KEY from '../../config.js';
let jwt = require('jsonwebtoken');


const LoginForm = (props) => {
  const [user, setUser] = useContext(UserContext);
  const [login, setLogin] = useContext(LoginContext);


  const handleLogin = async(e) => {
    e.preventDefault();

    let auth_name = e.target.elements.email.value;
    let pass = e.target.elements.pass.value;

    const URL = 'http://localhost:5000/api/login';

    //create a token to send to backend api;
    let token = jwt.sign(
      { 'email': auth_name, 'password': pass },
      SECRET_KEY,
      { expiresIn: '1h' } // expires in 1 hour
    );
    let response_01 = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    });
    let d = await response_01.json();
    console.log(d);

    if (d.message === 'success') {

      localStorage.setItem('token', d.token);


      //set data into context
      addToContext(d);

      //set logged in to true;
      changeLogin();
      console.log("*** this checks if loggedin state was changed. ***");
      console.log(login.logged_in)
      alert('User logged in');

      //pushes the user to the feed page
      pushToFeedPage();

      //should i set data into local storage?
      localStorage.setItem('exp', d.exp);
      localStorage.setItem('iat', d.iat);
      localStorage.setItem('email', d.email);
      localStorage.setItem('username', d.username);
      localStorage.setItem('fullname', d.fullname);
      localStorage.setItem('url', d.url);
      //set state from local storage

    } else {
      alert(d.message)
    }
  }

  const pushToFeedPage = () => {
    //pushes the user to the 'play' page
    props.history.push('/feed');
  }

  const addToContext = (d) => {
    console.log('******** add to context *****')
    setUser({email: d.email, fullname: d.fullname, username: d.username, url: d.url})
  }
  const changeLogin = () => {
    console.log('**** change login ****');
    setLogin({ logged_in: true })
  }


    return (
      <div className="loginform">
        <img src={Instagram_logo} alt="instagram-logo"></img>
        <div className="row">
          <div className='col-md-12'>
            <div className="row">
              <div className="col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <form onSubmit={handleLogin} className="login_form">
                <input className="form-control inputs" type="text" name="email" placeholder="Phone number, username, or email" />
                <input className="form-control inputs" type="password" name="pass" placeholder="Password" />
                <input type="submit" className="btn btn-primary inputs-submit" value="Log In" />

                <div className="flex-container">
                  <div className='flex_item-one'>–––––––––––––––––</div>
                  <div className="or-statement">OR</div>
                  <div className='flex_item-three'>–––––––––––––––––</div>
                </div>
                <button type="button" className="btn fb-login"><span className="fa fa-facebook-square add_margin-right"></span>Log in with Facebook</button>
                <a className="forgot-pass" href="/feed">Forgot password?</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default withRouter(LoginForm);
