import React, {Component} from 'react';
import './index.css';
import Footer from '../../components/footer';
import CopyWrite_Note from '../../components/copywrite_note';
import Instagram_logo from '../../images/instagram_logo.png';
import App_Store from '../../images/insta_image-1.png';
import Google_Play from '../../images/insta_image-2.png';
import Iphones from '../../images/insta_phones-image.png';

class Login_Page extends Component {
  render() {
    return (
      <div className="login_page">
        <div className="row add-background-color">
          <div className="image-container">
          </div>
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
                    <p className="sign_up-agree-statement">By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Data Policy</a> and <a href="#">Cookies Policy</a>.</p>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* below form container 1 */}
          <div className="col-md-3 offset-md-6 col-sm-8 offset-sm-2 col-8 offset-2 below_outer_container-one">
            <p>Have an account?<a href="#"> Log in</a></p>
          </div>
            {/* below the form container 2 */}
          <div className="col-md-3 offset-md-6 col-sm-8 offset-sm-2 col-8 offset-2 below_outer_container-two">
            <p>Get the app.</p>
              {/* div for liks to the apple store and google play */}
            <div className="links-container">
              <a href="#"><img src={App_Store} alt="App Store Link"></img></a>
              <a href="#"><img src={Google_Play} alt="Google Play Like"></img></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
              <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Login_Page;
