import React, {Component} from 'react';
import './index.css';

class Login_Page extends Component {
  render() {
    return (
      <div className="login_page">
        <div className="row">
          <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2 col-8 offset-2">
            <form>
              <h1>Instagram</h1>
              <input className="form-control" type="text" name="email" placeholder="Email..." />
              <input className="form-control" type="password" name="pass" placeholder="Password..." />
              <input type="submit" className="btn btn-primary" value="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login_Page;
