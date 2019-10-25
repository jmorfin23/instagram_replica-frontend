import React, {Component} from 'react';
import './index.css';
import Footer from '../../components/footer';
import CopyWrite_Note from '../../components/copywrite_note';
import Instagram_logo from '../../images/instagram_logo.png';
import Iphones from '../../images/insta_phones-image.png';
import Screenshot1 from '../../images/screenshot_1.jpg'
import Screenshot2 from '../../images/screenshot_2.jpg'
import Screenshot3 from '../../images/screenshot_3.jpg'
import Screenshot4 from '../../images/screenshot_4.jpg'
import Screenshot5 from '../../images/screenshot_5.jpg'
import RegisterForm from '../../components/registerForm';
import HaveAnAccount from '../../components/haveAnAccount';
import GetTheApp from '../../components/getTheApp';

class Register_Page extends Component {
  render() {
    return (
      <div className="register_page">
        <div className="row add-background-color">
          <div className="image-container">
            <div className="rotating_image-container">
              <img className="first_image" src={Screenshot1} alt="screenshot1"></img>
              <img className="second_image" src={Screenshot2} alt="screenshot2"></img>
            </div>
          </div>

          <div className="col-md-3 offset-md-6 col-sm-6 offset-sm-4 col-8 offset-2 outer_container">
            <RegisterForm />
          </div>

            {/* below form container 1 */}
          <div className="col-md-3 offset-md-6 col-sm-8 offset-sm-2 col-8 offset-2 below_outer_container-one">
            <HaveAnAccount />
          </div>
            {/* below the form container 2 */}
          <div className="col-md-3 offset-md-6 col-sm-8 offset-sm-2 col-8 offset-2 below_outer_container-two">
            <GetTheApp />
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

export default Register_Page;
