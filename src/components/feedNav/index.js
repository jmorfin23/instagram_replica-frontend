import React from 'react';
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
      <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
      </div>

      <div className="navbox3">
      <div className="navbox3_1">
        <i class="far fa-compass fa-lg"></i>
      </div>
      <div className="navbox3_2">
        <i class="far fa-heart fa-lg"></i>
      </div>
      <div className="navbox3_3">
        <i class="far fa-user fa-lg"></i>
      </div>
      </div>

    </div>

  );
}

export default FeedNav;
