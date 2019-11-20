import React, {Component, useContext} from 'react';
import './index.css';
import Footer from '../footer';
import { UserContext } from '../userContext.js'


function Right_Panel(props) {
  const [user, setUser] = useContext(UserContext);
  console.log('inside right panel')
  return (
    <div className="right_panel">
      {/* profile section */}
      <div className="right_panel-profile-container">
        <div>
          <img src={user.url} alt="profie picture"></img>
        </div>
        <div className="rp">
          <div className="right_panel_1"><h6>{user.username}</h6></div>
          <div className="right_panel_2"><p>{user.fullname}</p></div>
        </div>
      </div>
      {/* stories section */}
      <div className="stories_section">
        <div className="ss_1">
          <div className="ss_1_01">Stories</div>
          <div className="ss_1_02">Watch all</div>
        </div>

        <div className="stories_section_02">
          {/* this is where stores will go  */}
          Stories from people you follow will show up here.
        </div>
      </div>

      {/* suggestion for you section */}
      <div className="suggestions_section">
        <div className="sug_s_1">
          <div className="sug_s_01">Suggestions For You</div>
          <div className="sug_s_02">See all</div>
        </div>

        <div className="suggestions_section_02">
          Suggestions from people you follow will show up here.
        </div>
      </div>
        {/* footer section */}

        <div className="footer_section">
              <ul>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">SUPPORT</a></li>
                <li><a href="#">PRESS</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">JOBS</a></li>
                <li><a href="#">PRIVACY</a></li>
                <li><a href="#">TERMS</a></li>
                <li><a href="#">DIRECTORY</a></li>
                <li><a href="#">PROFILES</a></li>
                <li><a href="#">HASHTAGS</a></li>
                <li><a href="#">LANGUAGE</a></li>
              </ul>
          <span>© 2019 INSTAGRAM FROM FACEBOOK</span>
        </div>
      <div>

      </div>

    </div>

  );
}


export default Right_Panel;
