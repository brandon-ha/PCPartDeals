import React from 'react';
import snoowrap from 'snoowrap';

console.log(process.env.REDDIT_USER_AGENT);

const reddit = new snoowrap({
    userAgent: process.env.REACT_APP_REDDIT_USER_AGENT,
    clientId: process.env.REACT_APP_REDDIT_CLIENT_ID,
    clientSecret: process.env.REACT_APP_REDDIT_CLIENT_SECRET,
    username: process.env.REACT_APP_REDDIT_USERNAME,
    password: process.env.REACT_APP_REDDIT_PASSWORD
});

reddit.getSubreddit('buildapcsales').search({query: 'cpu NOT cooler NOT Thermal', sort: 'hot'}).map((post) => post.title).then(console.log);

const Selector = () => (
  <div className="selector">
    <div className="container selector__content">
      <button>All</button>
      <button>CPU</button>
      <button>Video Card</button>
      <button>Memory</button>
      <button>Motherboard</button>
      <button>Power Supply</button>
      <button>Hard Drive</button>
      <button>SSD</button>
      <button>Case</button>
      <button>Cooler</button>
      <button>Fan</button>
    </div>
  </div>
);

export default Selector;