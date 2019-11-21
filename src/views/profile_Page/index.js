import React, {useContext} from 'react';
import './index.css';
import Footer from '../../components/footer';
import FeedNav from '../../components/feedNav';
import { UserContext } from '../../components/userContext.js';


const Profile_Page = () => {
  const [user, setUser] = useContext(UserContext);
    return (
      <div className="profile_page">
        <div>
          <nav>
            <FeedNav />
          </nav>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="profile-wrapper">
              <div className="pw_1">
                <img src={user.url} alt="profile pic"></img>
              </div>

            <div className="pw_2">
              <div>
                <div><h1>{user.username}</h1></div>
                <ul></ul>
              </div>

              <div><h6>{user.fullname}</h6></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
}

export default Profile_Page;
