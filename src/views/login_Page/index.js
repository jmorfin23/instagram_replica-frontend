import React, {Component} from 'react';
import './index.css';
import Footer from '../../components/footer';
import CopyWrite_Note from '../../components/copywrite_note';
import Instagram_logo from '../../images/instagram_logo.png';

class Login_Page extends Component {
  render() {
    return (
      <div className="login_page">
        <div className="row add-background-color">
          <div className="col-md-3 offset-md-6 col-sm-8 offset-sm-2 col-8 offset-2 outer_container">
            <img src={Instagram_logo} alt="instagram-logo"></img>
            <div className="row">
              <div className='col-md-12'>
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                  <form className="login_form">
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
                    <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                  </form>
              <form className="login_form">
                <p>Have an account? <a href="#">Log in</a></p>
              </form>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Login_Page;
