import React, {Component} from 'react';
import './index.css';
import Footer from '../../components/footer';
import LoginForm from '../../components/loginForm';
import DontHaveAnAccount from '../../components/dontHaveAnAccount';
import GetTheApp from '../../components/getTheApp';

class Login_Page extends Component {

  constructor(props) {
    super();
  }

  handle_Login = async(e) => {
    e.preventDefault();
    console.log('inside handle login');

    let auth_name = e.target.elements.email.value;
    let pass = e.target.elements.pass.value;
  }

  render() {
    console.log('this is a test');
    return (
      <div className="login_page">
          <div className="login_form-container">
            <LoginForm  handle_Login={this.handle_Login}/>
          </div>
          <div className="below_login_form-container-one">
            <DontHaveAnAccount />
          </div>
          <div className="below_login_form-container-two">
            <GetTheApp />
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-10 offset-sm-1 col-12">
              <Footer />
            </div>
          </div>
        </div>

    );
  }
}

export default Login_Page;
