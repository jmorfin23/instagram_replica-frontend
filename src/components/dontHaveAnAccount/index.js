import React, {Component} from 'react';
import './index.css';


function DontHaveAnAccount() {
  return (
    <div className="donthaveAnAccount">
      <p>Don't have an account?<a href="/login"> Sign up</a></p>
    </div>

  );
}


export default DontHaveAnAccount;