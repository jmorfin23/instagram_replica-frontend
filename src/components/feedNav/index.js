import React, {Component} from 'react';
import './index.css';
import Instagram_logo2 from '../../images/instagram_logo2.png'
import Instalogo from '../../images/instagram.logo.png';

function FeedNav() {
  return (
    <div className="feedNav">
      <div className="navbox1">
        <div className="navbox1_1">
          <img src={Instalogo} alt="instagram logo"></img>
        </div>

        <div className="navbox1_2"></div>

        <div className="navbox1_3">
          <img src={Instagram_logo2} alt="Instagram_logo"></img>
        </div>

      </div>
      <div className="navbox2">
      <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
      </div>
      <div className="navbox3">
      </div>
    </div>

  );
}


export default FeedNav;
