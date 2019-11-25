import React, { useContext } from 'react';
import './index.css';
import { UserContext } from '../userContext.js'


const Left_Panel = () => {

  const [user, setUser] = useContext(UserContext);

  console.log('inside left panel')
  return (
    <div className="left_panel">
      <h1>posts</h1>
    </div>

  );
}


export default Left_Panel;
