import React, {Component} from 'react';
import './index.css';
import Instagram_logo from '../../images/instagram_logo.png';
import App_Store from '../../images/insta_image-1.png';
import Google_Play from '../../images/insta_image-2.png';

function GetTheApp() {
  return (
    <div className="getTheApp">
    <p>Get the app.</p>
      {/* div for liks to the apple store and google play */}
    <div className="links-container">
      <a href="#"><img src={App_Store} alt="App Store Link"></img></a>
      <a href="#"><img src={Google_Play} alt="Google Play Like"></img></a>
    </div>
  </div>

  );
}


export default GetTheApp;
