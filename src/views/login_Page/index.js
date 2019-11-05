import React, {Component} from 'react';
import './index.css';
import Footer from '../../components/footer';
import LoginForm from '../../components/loginForm';
import DontHaveAnAccount from '../../components/dontHaveAnAccount';
import GetTheApp from '../../components/getTheApp';
//requests



class Login_Page extends Component {

  constructor(props) {
    super();
  }

  render() {
    console.log('this is a test');
    console.log(this.props.handleLogin)
    return (
      <div className="login_page">
          <div className="login_form-container">
            <LoginForm  handleLogin={this.props.handleLogin}/>
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
