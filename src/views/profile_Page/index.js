import React, {useContext} from 'react';
import './index.css';
import Footer from '../../components/footer';
import FeedNav from '../../components/feedNav';
import { UserContext } from '../../components/userContext.js';
const CLOUDINARY_URL = 	'https://api.cloudinary.com/v1_1/dozvqlete/upload';
const CLOUDINARY_UPLOAD_PRESET = 'zzmnc51n';
  //cloudinary api - client side upload typically done through server side (security loophole)
const URL = 'http://127.0.0.1:5000/api/update-profile-picture';

let img_preview = document.getElementById('img_preview');


const Profile_Page = () => {
  const [user, setUser] = useContext(UserContext);




  const onChange = (e) => {

    let file = e.target.files[0];
    console.log(file);

    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const axios = require('axios').default;

    //request
    axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    }).then(function(response) {
      console.log(response.data.secure_url);
    }).catch(function(error) {
      console.log(error);
    })
  }
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
                <label for="file-input">
                <img id='img_preview' src={user.url} alt="profile pic"></img>
                </label>
                <input onChange={onChange} id="file-input" type="file"></input>
              </div>
            <div className="pw_2">
              <div className="pw_2_1">
                <div><h4>{user.username}</h4></div>
                <a href="#">
                  <button className="" type="button">Edit Profile</button>
                </a>
                <div>
                  <button><i className="fas fa-cog fa-lg"></i></button>
                </div>
              </div>
              <ul>
                <li><span><span>0</span>  posts</span></li>
                <li><span><span>0</span>  followers</span></li>
                <li><span><span>0</span>  following</span></li>
              </ul>
              <div><h6>{user.fullname}</h6></div>
            </div>
          </div>
          <div className="bp">
            <a className="bp1 bp1_2 " href="#">
              <span>
                <i class="fa fa-border-all icon"></i>
                <span>POSTS</span>
              </span>
            </a>
            <a className="bp1 bp1_2" href="#">
              <span>
                <i class="fas fa-tv icon"></i>
                <span>IGTV</span>
              </span>
            </a>
            <a className="bp1 bp1_2" href="#">
              <span>
                <i class="far fa-bookmark icon"></i>
                <span>SAVED</span>
              </span>
            </a>
            <a className="bp1"href="#">
              <span>
                <i class="far fa-id-badge icon"></i>
                <span>TAGGED</span>
              </span>
            </a>
          </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />

      </div>
    );
}

export default Profile_Page;
