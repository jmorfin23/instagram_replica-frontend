import React, {Component} from 'react';
import './index.css';
import Instagram_logo from '../../images/instagram_logo.png';

function RegisterForm() {
  return (
    <div className="registerform">
      <img src={Instagram_logo} alt="instagram-logo"></img>
      <div className="row">
        <div className='col-md-12'>
          <div className="row">
            <div className="col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
            <form className="register_form">
              <h6>Sign up to see photos and videos from your friends.</h6>
              <button type="button" className="btn btn-primary"><span className="fa fa-facebook-square add_margin-right"></span>Log in with Facebook</button>
              <div className="flex-container">
                <div className='flex_item-one'>–––––––––––––––––</div>
                <div className="or-statement">OR</div>
                <div className='flex_item-three'>–––––––––––––––––</div>
              </div>
              <input className="form-control inputs" type="text" name="email" placeholder="Mobile Number or Email" />
              <input className="form-control inputs" type="text" name="Name" placeholder="Full Name" />
              <input className="form-control inputs" type="text" name="username" placeholder="Username" />
              <input className="form-control inputs" type="password" name="pass" placeholder="Password" />
              <input type="submit" className="btn btn-primary inputs-submit" value="Sign up" />
              <p className="sign_up-agree-statement">By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Data Policy</a> and <a href="#">Cookies Policy</a>.</p>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}


export default RegisterForm;
