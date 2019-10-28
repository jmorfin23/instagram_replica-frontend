import React, {Component} from 'react';
import './index.css';
import Footer from '../../components/footer';
import FeedNav from '../../components/feedNav'


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
              <div className="col-md-8">
                <h1>haskdfj;laskdjf;laksdjfaasdfasdf</h1>
              </div>
              <div className="col-md-4">
                <h2>a;ksdjfljasldfja</h2>
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
