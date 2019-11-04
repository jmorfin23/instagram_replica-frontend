import React, {Component} from 'react';
import './index.css';
import Footer from '../../components/footer';
import FeedNav from '../../components/feedNav';
import Right_Panel from '../../components/rightPanel';
import Left_Panel from '../../components/leftPanel';

class Feed_Page extends Component {
  render() {
    return (
      <div className="feed_page">
        <nav>
          <FeedNav />
        </nav>
        <section>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="row">
              <div className="col-md-8 no-padding">
                <Left_Panel />
              </div>
              <div className="col-md-4 no-padding">
                <Right_Panel />
              </div>
            </div>
          </div>
        </div>
        </section>
        </div>

    );
  }
}

export default Feed_Page;
