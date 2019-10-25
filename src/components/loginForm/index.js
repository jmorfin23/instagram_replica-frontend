import React, {Component} from 'react';
import './index.css';
import Instagram_logo from '../../images/instagram_logo.png';

class LoginForm extends Component {
  constructor(props) {
    super();
    console.log('inside constructor')

  }
  render() {
    return (
      <div className="loginform">
        <img src={Instagram_logo} alt="instagram-logo"></img>
        <div className="row">
          <div className='col-md-12'>
            <div className="row">
              <div className="col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
              <form onSubmit={this.props.handle_Login} className="login_form">
                <input className="form-control inputs" type="text" name="email" placeholder="Phone number, username, or email" />
                <input className="form-control inputs" type="password" name="pass" placeholder="Password" />
                <input type="submit" className="btn btn-primary inputs-submit" value="Log In" />

                <div className="flex-container">
                  <div className='flex_item-one'>–––––––––––––––––</div>
                  <div className="or-statement">OR</div>
                  <div className='flex_item-three'>–––––––––––––––––</div>
                </div>
                <button type="button" className="btn fb-login"><span className="fa fa-facebook-square add_margin-right"></span>Log in with Facebook</button>
                <a className="forgot-pass" href="#">Forgot password?</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}


export default LoginForm;
