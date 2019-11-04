import React, {Component} from 'react';
import './index.css';


function Right_Panel() {
  return (
    <div className="right_panel">
      {/* profile section */}
      <div className="right_panel-profile-container">
        <div>
          <i className="fas fa-user-circle fa-2x"></i>
        </div>
        <div className="rp">
          <div className="right_panel_1"><h6>Jonmorfin</h6></div>
          <div className="right_panel_2"><p>Jonathan Morfin</p></div>
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
    </div>

  );
}


export default Right_Panel;
