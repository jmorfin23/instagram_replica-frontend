import React from 'react';
import './index.css';

const AccountPopup = (props) => {
return (
  <div className="account-popup">
    <div className='popup'>
      <div className='popup\_inner'>
        <button>Change Password</button>
        <button>Nametag</button>
        <button>Apps and Websites</button>
        <button>Notifications</button>
        <button>Pirvacy and Security</button>
        <button>Login Activity</button>
        <button>Emails from Instagram</button>
        <button>Report a Problem</button>
        <button>Log Out</button>
        <button onClick={props.closePopup}>Cancel</button>
      </div>
    </div>
  </div>
    );
}

export default AccountPopup;
