import React from 'react';
import './index.css';

const AccountPopup = (props) => {
return (
  <div className="account-popup">
    <div className='popup'>
      <div className='popup\_inner'>
        <ul>
          <li>Change Password</li>
          <li>Nametag</li>
          <li>Apps and Websites</li>
          <li>Notifications</li>
          <li>Pirvacy and Security</li>
          <li>Login Activity</li>
          <li>Emails from Instagram</li>
          <li>Report a Problem</li>
          <li>Log Out</li>
          <li>Cancel</li>
        </ul>
          <button className="btn btn-danger" onClick={props.closePopup}>Close</button>
      </div>
    </div>
  </div>
    );
}

export default AccountPopup;
