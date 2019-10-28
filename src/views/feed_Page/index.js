import React, {Component} from 'react';
import './index.css';
import Footer from '../../components/footer';
import FeedNav from '../../components/feedNav'


class Feed_Page extends Component {
  render() {
    return (
      <div className="feed_page">
          <FeedNav />
        </div>

    );
  }
}

export default Feed_Page;
