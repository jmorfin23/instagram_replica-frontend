import React, {Component, useContext} from 'react';
import './index.css';
import { UserContext } from '../userContext.js'



function Left_Panel() {
  
  const [user, setUser] = useContext(UserContext);

  console.log('inside left panel')
  return (
    <div className="left_panel">
      <h1>{user.email}</h1>
    </div>

  );
}


export default Left_Panel;
