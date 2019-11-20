import React from 'react';
import './index.css';
import Instagram_logo2 from '../../images/instagram_logo2.png'
import Instalogo from '../../images/instagram.logo.png';

function FeedNav() {
  return (
    <div className="feedNav">
      <div className="n1">
        <a href="/feed">
          <div className="navbox1">
            <div className="navbox1_1">
              <img src={Instalogo} alt="instagram logo"></img>
            </div>
            <div className="navbox1_2"></div>
            <div className="navbox1_3">
              <img src={Instagram_logo2} alt="Instagram_logo"></img>
            </div>
          </div>
        </a>
      </div>


      <div className="navbox2">
      <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
      </div>

      <div className="navbox3">
      <div className="navbox3_1">
        <a href="#"><i className="far fa-compass fa-lg"></i></a>
      </div>
      <div className="navbox3_2">
        <a href="#"><i className="far fa-heart fa-lg"></i></a>
      </div>
      <div className="navbox3_3">
        <a href="/profile"><i className="far fa-user fa-lg"></i></a>
      </div>
      </div>

    </div>

  );
}

export default FeedNav;
